const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Fetch health status of the backend API
 */
export async function getApiHealth() {
  try {
    const res = await fetch(`${API_BASE_URL}/health`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    return { status: 'offline', error: err.message };
  }
}

/**
 * Bootstrap full application state from backend
 */
export async function getBootstrapData() {
  const res = await fetch(`${API_BASE_URL}/bootstrap`);
  if (!res.ok) throw new Error(`Failed to bootstrap data: HTTP ${res.status}`);
  return await res.json();
}

/**
 * Enroll user into a course
 */
export async function apiEnrollCourse(courseId) {
  const res = await fetch(`${API_BASE_URL}/courses/${courseId}/enroll`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  if (!res.ok) throw new Error(`Enrollment failed: HTTP ${res.status}`);
  return await res.json();
}

/**
 * Toggle lesson completion state
 */
export async function apiToggleLesson(courseId, lessonId) {
  const res = await fetch(`${API_BASE_URL}/courses/${courseId}/lessons/${lessonId}/toggle`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  if (!res.ok) throw new Error(`Lesson update failed: HTTP ${res.status}`);
  return await res.json();
}

/**
 * Toggle study material bookmark
 */
export async function apiToggleBookmark(materialId) {
  const res = await fetch(`${API_BASE_URL}/study-materials/${materialId}/bookmark`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  if (!res.ok) throw new Error(`Bookmark toggle failed: HTTP ${res.status}`);
  return await res.json();
}

/**
 * Submit test answers to backend engine
 */
export async function apiSubmitTest(testId, answers, timeSpentSeconds) {
  const res = await fetch(`${API_BASE_URL}/tests/${testId}/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ answers, timeSpentSeconds })
  });
  if (!res.ok) throw new Error(`Test submission failed: HTTP ${res.status}`);
  return await res.json();
}

/**
 * Redeem reward item from store
 */
export async function apiRedeemReward(rewardId) {
  const res = await fetch(`${API_BASE_URL}/rewards/${rewardId}/redeem`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(errorBody.error || `Redemption failed: HTTP ${res.status}`);
  }
  return await res.json();
}

