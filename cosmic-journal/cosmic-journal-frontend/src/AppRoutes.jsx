import { Routes, Route } from 'react-router-dom';
import Journal from './components/journal/JournalEntry';
import DashboardPage from './pages/DashboardPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import StarMapPage from './pages/StarMapPage';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './components/auth/ProtectedRoute';

const AppRoutes = () => (
  <Routes>
    <Route path="/profile" element={<ProfilePage />} />
    <Route
      path="/"
      element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/journal"
      element={
        <ProtectedRoute>
          <Journal />
        </ProtectedRoute>
      }
    />
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      }
    />
    <Route
      path="/starmap-page"
      element={
        <ProtectedRoute>
          <StarMapPage />
        </ProtectedRoute>
      }
    />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default AppRoutes;