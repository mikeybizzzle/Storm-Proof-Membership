import React, { useState } from 'react';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { PreStormGuide } from './components/PreStormGuide';
import { MaintenanceChecklist } from './components/MaintenanceChecklist';
import { InsuranceEducation } from './components/InsuranceEducation';
import { PolicyUpdates } from './components/PolicyUpdates';
import { ClaimProcess } from './components/ClaimProcess';
import { StormAlerts } from './components/StormAlerts';
import { Help } from './components/Help';
import { Header } from './components/Header';

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  membershipLevel: 'free' | 'premium';
};

type Page = 'dashboard' | 'pre-storm-guide' | 'maintenance-checklist' | 'insurance-education' | 'policy-updates' | 'claim-process' | 'storm-alerts' | 'help';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const handleLogin = (userData: User) => {
    setUser(userData);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('dashboard');
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard user={user} onNavigate={handleNavigate} />;
      case 'pre-storm-guide':
        return <PreStormGuide user={user} />;
      case 'maintenance-checklist':
        return <MaintenanceChecklist user={user} />;
      case 'insurance-education':
        return <InsuranceEducation user={user} />;
      case 'policy-updates':
        return <PolicyUpdates user={user} />;
      case 'claim-process':
        return <ClaimProcess user={user} />;
      case 'storm-alerts':
        return <StormAlerts user={user} />;
      case 'help':
        return <Help user={user} />;
      default:
        return <Dashboard user={user} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#f5f5f5',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'
    }}>
      <Header 
        user={user} 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        onLogout={handleLogout} 
      />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}