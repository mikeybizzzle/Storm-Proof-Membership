import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  membershipLevel: 'free' | 'premium';
};

type Page = 'dashboard' | 'pre-storm-guide' | 'maintenance-checklist' | 'insurance-education' | 'policy-updates' | 'claim-process' | 'storm-alerts' | 'help';

interface HeaderProps {
  user: User;
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

export function Header({ user, currentPage, onNavigate, onLogout }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header style={{
      background: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* Header Top Bar */}
      <div style={{
        background: '#0a0a14',
        color: 'white',
        padding: '10px 0',
        fontSize: '14px'
      }}>
        <div className="storm-container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}>
            <span>Welcome, {user.email}</span>
          </div>
          <div>
            <button
              onClick={onLogout}
              style={{
                color: '#5b6cff',
                textDecoration: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'opacity 0.3s',
                fontSize: '14px'
              }}
              onMouseOver={(e) => e.target.style.opacity = '0.8'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div style={{ padding: '20px 0' }}>
        <div className="storm-container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <button
            onClick={() => onNavigate('dashboard')}
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#0a0a14',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <div style={{
              width: '10px',
              height: '10px',
              background: '#5b6cff',
              borderRadius: '50%'
            }}></div>
            STORM PROOF
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavButton 
              onClick={() => onNavigate('dashboard')} 
              active={currentPage === 'dashboard'}
            >
              Dashboard
            </NavButton>
            <NavButton 
              onClick={() => onNavigate('pre-storm-guide')} 
              active={currentPage === 'pre-storm-guide'}
            >
              Documentation
            </NavButton>
            <NavButton 
              onClick={() => onNavigate('maintenance-checklist')} 
              active={currentPage === 'maintenance-checklist'}
            >
              Maintenance
            </NavButton>
            <NavButton 
              onClick={() => onNavigate('insurance-education')} 
              active={currentPage === 'insurance-education'}
            >
              Education
            </NavButton>
            <NavButton 
              onClick={() => onNavigate('storm-alerts')} 
              active={currentPage === 'storm-alerts'}
            >
              Storm Alerts
            </NavButton>
            <NavButton 
              onClick={() => onNavigate('help')} 
              active={currentPage === 'help'}
            >
              Support
            </NavButton>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#666'
            }}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="storm-container">
              <div className="space-y-2">
                <MobileNavButton 
                  onClick={() => { onNavigate('dashboard'); setIsMobileMenuOpen(false); }}
                  active={currentPage === 'dashboard'}
                >
                  Dashboard
                </MobileNavButton>
                <MobileNavButton 
                  onClick={() => { onNavigate('pre-storm-guide'); setIsMobileMenuOpen(false); }}
                  active={currentPage === 'pre-storm-guide'}
                >
                  Documentation
                </MobileNavButton>
                <MobileNavButton 
                  onClick={() => { onNavigate('maintenance-checklist'); setIsMobileMenuOpen(false); }}
                  active={currentPage === 'maintenance-checklist'}
                >
                  Maintenance
                </MobileNavButton>
                <MobileNavButton 
                  onClick={() => { onNavigate('insurance-education'); setIsMobileMenuOpen(false); }}
                  active={currentPage === 'insurance-education'}
                >
                  Education
                </MobileNavButton>
                <MobileNavButton 
                  onClick={() => { onNavigate('storm-alerts'); setIsMobileMenuOpen(false); }}
                  active={currentPage === 'storm-alerts'}
                >
                  Storm Alerts
                </MobileNavButton>
                <MobileNavButton 
                  onClick={() => { onNavigate('help'); setIsMobileMenuOpen(false); }}
                  active={currentPage === 'help'}
                >
                  Support
                </MobileNavButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function NavButton({ children, onClick, active }: { children: React.ReactNode; onClick: () => void; active: boolean }) {
  return (
    <button
      onClick={onClick}
      style={{
        color: active ? '#5b6cff' : '#666',
        textDecoration: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500',
        transition: 'color 0.3s'
      }}
      onMouseOver={(e) => !active && (e.target.style.color = '#5b6cff')}
      onMouseOut={(e) => !active && (e.target.style.color = '#666')}
    >
      {children}
    </button>
  );
}

function MobileNavButton({ children, onClick, active }: { children: React.ReactNode; onClick: () => void; active: boolean }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'block',
        width: '100%',
        textAlign: 'left',
        padding: '12px 0',
        color: active ? '#5b6cff' : '#666',
        textDecoration: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500',
        borderBottom: '1px solid #f0f0f0'
      }}
    >
      {children}
    </button>
  );
}