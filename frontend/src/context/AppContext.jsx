import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  initialUserData,
  coursesData,
  studyMaterialsData,
  incentiveTestsData,
  rewardsStoreData,
  leaderboardData
} from '../data/mockData';
import {
  getBootstrapData,
  apiEnrollCourse,
  apiToggleLesson,
  apiToggleBookmark,
  apiSubmitTest,
  apiRedeemReward
} from '../services/api';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCourseId, setSelectedCourseId] = useState('course-1');
  const [selectedTestId, setSelectedTestId] = useState('test-react-core');
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const [user, setUser] = useState(initialUserData);
  const [courses, setCourses] = useState(coursesData);
  const [studyMaterials, setStudyMaterials] = useState(studyMaterialsData);
  const [tests, setTests] = useState(incentiveTestsData);
  const [rewards, setRewards] = useState(rewardsStoreData);
  const [leaderboard, setLeaderboard] = useState(leaderboardData);
  const [backendConnected, setBackendConnected] = useState(false);

  const [completedTests, setCompletedTests] = useState([
    {
      testId: 'test-algorithms-sprint',
      score: 4,
      total: 5,
      percentage: 80,
      earnedCoins: 90,
      earnedXP: 250,
      passed: true,
      date: '2 days ago'
    }
  ]);
  const [redeemedRewards, setRedeemedRewards] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Toast notification helper
  const addToast = (title, message, type = 'info') => {
    const id = Date.now() + Math.random().toString();
    setNotifications(prev => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 4500);
  };

  const removeToast = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Sync with live backend on startup
  useEffect(() => {
    let mounted = true;
    getBootstrapData()
      .then(data => {
        if (!mounted) return;
        if (data.user) setUser(data.user);
        if (data.courses) setCourses(data.courses);
        if (data.studyMaterials) setStudyMaterials(data.studyMaterials);
        if (data.tests) setTests(data.tests);
        if (data.rewards) setRewards(data.rewards);
        if (data.leaderboard) setLeaderboard(data.leaderboard);
        if (data.completedTests) setCompletedTests(data.completedTests);
        if (data.redeemedRewards) setRedeemedRewards(data.redeemedRewards);
        setBackendConnected(true);
        addToast('Connected to Backend API', 'Live data synchronized from http://localhost:5000', 'success');
      })
      .catch(err => {
        console.warn('Backend API not responding, using offline fallback:', err);
        setBackendConnected(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  // Navigation router
  const navigateTo = (page, param = null) => {
    if (page === 'course-detail' && param) {
      setSelectedCourseId(param);
    }
    if (page === 'test-arena' && param) {
      setSelectedTestId(param);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Enroll in a course
  const enrollCourse = async (courseId) => {
    try {
      const updatedCourse = await apiEnrollCourse(courseId);
      setCourses(prev => prev.map(c => c.id === courseId ? updatedCourse : c));
    } catch (err) {
      console.warn('API error during enrollCourse, applying fallback:', err);
      setCourses(prev => prev.map(c => {
        if (c.id === courseId) {
          return { ...c, enrolled: true, progress: c.progress || 5 };
        }
        return c;
      }));
    }
    addToast('Course Enrolled!', 'Welcome to the course. Happy learning!', 'success');
  };

  // Mark lesson completed
  const toggleLessonComplete = async (courseId, lessonId) => {
    try {
      const res = await apiToggleLesson(courseId, lessonId);
      setCourses(prevCourses => prevCourses.map(c => c.id === courseId ? res.course : c));
      setUser(res.user);
      addToast('Lesson Progress Updated', '+25 XP gained for lesson completion!', 'success');
    } catch (err) {
      console.warn('API error during toggleLesson, applying fallback:', err);
      setCourses(prevCourses => {
        return prevCourses.map(course => {
          if (course.id !== courseId) return course;

          let totalLessons = 0;
          let completedLessons = 0;

          const updatedModules = course.modules.map(module => {
            const updatedLessons = module.lessons.map(lesson => {
              totalLessons++;
              if (lesson.id === lessonId) {
                const newStatus = !lesson.completed;
                if (newStatus) completedLessons++;
                return { ...lesson, completed: newStatus };
              }
              if (lesson.completed) completedLessons++;
              return lesson;
            });
            return { ...module, lessons: updatedLessons };
          });

          const newProgress = Math.round((completedLessons / (totalLessons || 1)) * 100);

          setUser(prevUser => ({
            ...prevUser,
            xp: prevUser.xp + 25,
            hoursLearned: parseFloat((prevUser.hoursLearned + 0.4).toFixed(1))
          }));

          addToast('Lesson Progress Updated', '+25 XP gained for lesson completion!', 'success');

          return {
            ...course,
            progress: newProgress,
            modules: updatedModules
          };
        });
      });
    }
  };

  // Bookmark toggle
  const toggleBookmark = async (materialId) => {
    try {
      const updated = await apiToggleBookmark(materialId);
      setStudyMaterials(prev => prev.map(item => item.id === materialId ? updated : item));
      addToast(
        updated.isBookmarked ? 'Material Bookmarked' : 'Bookmark Removed',
        updated.isBookmarked ? `Saved "${updated.title}" to quick access.` : 'Removed from saved items.',
        'info'
      );
    } catch (err) {
      console.warn('API error during toggleBookmark, applying fallback:', err);
      setStudyMaterials(prev => prev.map(item => {
        if (item.id === materialId) {
          const nextState = !item.isBookmarked;
          addToast(
            nextState ? 'Material Bookmarked' : 'Bookmark Removed',
            nextState ? `Saved "${item.title}" to quick access.` : 'Removed from saved items.',
            'info'
          );
          return { ...item, isBookmarked: nextState };
        }
        return item;
      }));
    }
  };

  // Submit test results and grant rewards
  const submitTest = async (testId, answers, timeSpentSeconds) => {
    try {
      const { result, user: updatedUser } = await apiSubmitTest(testId, answers, timeSpentSeconds);
      setUser(updatedUser);
      setCompletedTests(prev => [result, ...prev]);

      if (result.passed) {
        addToast(
          'Incentive Test Passed! 🎉',
          `Spectacular job! You earned +${result.earnedCoins} LoopCoins and +${result.earnedXP} XP.`,
          'success'
        );
      } else {
        addToast(
          'Test Finished',
          `You scored ${result.percentage}%. Review the explanations and retry for full reward. (+${result.earnedCoins} consolation coins)`,
          'warning'
        );
      }
      return result;
    } catch (err) {
      console.warn('API error during submitTest, applying fallback:', err);
      const test = tests.find(t => t.id === testId);
      if (!test) return null;

      let correctCount = 0;
      test.questions.forEach((q, idx) => {
        if (answers[idx] === q.correctIndex) {
          correctCount++;
        }
      });

      const percentage = Math.round((correctCount / test.questions.length) * 100);
      const passed = percentage >= test.passingScorePercentage;
      const earnedCoins = passed ? test.rewardCoins : Math.round(test.rewardCoins * 0.2);
      const earnedXP = passed ? test.rewardXP : Math.round(test.rewardXP * 0.25);

      setUser(prev => ({
        ...prev,
        xp: prev.xp + earnedXP,
        loopCoins: prev.loopCoins + earnedCoins,
        completedTestsCount: (prev.completedTestsCount || 0) + 1
      }));

      const resultRecord = {
        testId,
        score: correctCount,
        total: test.questions.length,
        percentage,
        earnedCoins,
        earnedXP,
        passed,
        timeSpentSeconds,
        date: 'Just now'
      };

      setCompletedTests(prev => [resultRecord, ...prev]);

      if (passed) {
        addToast(
          'Incentive Test Passed! 🎉',
          `Spectacular job! You earned +${earnedCoins} LoopCoins and +${earnedXP} XP.`,
          'success'
        );
      } else {
        addToast(
          'Test Finished',
          `You scored ${percentage}%. Review the explanations and retry for full reward. (+${earnedCoins} consolation coins)`,
          'warning'
        );
      }
      return resultRecord;
    }
  };

  // Redeem Reward
  const redeemReward = async (rewardId) => {
    const item = rewards.find(r => r.id === rewardId);
    if (!item) return;

    if (user.loopCoins < item.costCoins) {
      addToast('Insufficient LoopCoins', `You need ${item.costCoins - user.loopCoins} more LoopCoins to redeem this reward.`, 'error');
      return;
    }

    try {
      const { redeemedReward: record, user: updatedUser } = await apiRedeemReward(rewardId);
      setUser(updatedUser);
      setRedeemedRewards(prev => [...prev, record]);
      addToast('Reward Unlocked! 🎁', `Successfully redeemed: ${record.title}`, 'success');
    } catch (err) {
      console.warn('API error during redeemReward, applying fallback:', err);
      setUser(prev => ({
        ...prev,
        loopCoins: prev.loopCoins - item.costCoins
      }));
      setRedeemedRewards(prev => [...prev, { ...item, redeemedAt: new Date().toLocaleDateString() }]);
      addToast('Reward Unlocked! 🎁', `Successfully redeemed: ${item.title}`, 'success');
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        navigateTo,
        selectedCourseId,
        setSelectedCourseId,
        selectedTestId,
        setSelectedTestId,
        selectedMaterial,
        setSelectedMaterial,
        user,
        courses,
        enrollCourse,
        toggleLessonComplete,
        studyMaterials,
        toggleBookmark,
        tests,
        completedTests,
        submitTest,
        rewards,
        redeemReward,
        redeemedRewards,
        leaderboard,
        notifications,
        removeToast,
        addToast,
        backendConnected
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
