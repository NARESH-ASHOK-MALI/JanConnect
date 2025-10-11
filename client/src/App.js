import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider } from './contexts/ThemeContext';
import PrivateRoute from './components/PrivateRoute';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProjectsListPage from './pages/ProjectsListPage';
import SingleProjectPage from './pages/SingleProjectPage';
import NewProjectPage from './pages/NewProjectPage';
import EditProjectPage from './pages/EditProjectPage';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />

          {/* Private Routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/projects"
            element={
              <PrivateRoute>
                <ProjectsListPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/projects/new"
            element={
              <PrivateRoute roles={['State-Admin', 'MoSJE-Admin']}>
                <NewProjectPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/projects/:id/edit"
            element={
              <PrivateRoute roles={['State-Admin', 'MoSJE-Admin']}>
                <EditProjectPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/projects/:id"
            element={
              <PrivateRoute>
                <SingleProjectPage />
              </PrivateRoute>
            }
          />

          {/* Placeholder routes for future implementation */}
          <Route
            path="/agencies"
            element={
              <PrivateRoute roles={['State-Admin', 'MoSJE-Admin']}>
                <div className="min-h-screen flex items-center justify-center">
                  <h1 className="text-2xl font-bold">Agencies Page - Coming Soon</h1>
                </div>
              </PrivateRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <PrivateRoute roles={['State-Admin', 'MoSJE-Admin']}>
                <div className="min-h-screen flex items-center justify-center">
                  <h1 className="text-2xl font-bold">Reports Page - Coming Soon</h1>
                </div>
              </PrivateRoute>
            }
          />
          <Route
            path="/analytics"
            element={
              <PrivateRoute roles={['State-Admin', 'MoSJE-Admin']}>
                <div className="min-h-screen flex items-center justify-center">
                  <h1 className="text-2xl font-bold">Analytics Page - Coming Soon</h1>
                </div>
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute roles={['MoSJE-Admin']}>
                <div className="min-h-screen flex items-center justify-center">
                  <h1 className="text-2xl font-bold">Settings Page - Coming Soon</h1>
                </div>
              </PrivateRoute>
            }
          />

          {/* Redirect root to dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* 404 Route */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <h1 className="text-6xl font-bold text-gray-900">404</h1>
                  <p className="text-xl text-gray-600 mt-4">Page not found</p>
                  <a href="/dashboard" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
                    Go to Dashboard
                  </a>
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
