import React from 'react';
import { useApp } from './context/AppContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import LearningProgress from './pages/LearningProgress';
import StudyMaterial from './pages/StudyMaterial';
import IncentiveTest from './pages/IncentiveTest';
import TestArena from './pages/TestArena';

export function App() {
  const { currentPage } = useApp();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'courses':
        return <Courses />;
      case 'course-detail':
        return <CourseDetails />;
      case 'progress':
        return <LearningProgress />;
      case 'materials':
        return <StudyMaterial />;
      case 'incentives':
        return <IncentiveTest />;
      case 'test-arena':
        return <TestArena />;
      default:
        return <Home />;
    }
  };

  return (
    <Layout>
      {renderCurrentPage()}
    </Layout>
  );
}

export default App;

