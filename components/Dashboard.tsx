import React, { useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  membershipLevel: 'free' | 'premium';
};

type Page = 'dashboard' | 'pre-storm-guide' | 'maintenance-checklist' | 'insurance-education' | 'policy-updates' | 'claim-process' | 'storm-alerts' | 'help';

interface DashboardProps {
  user: User;
  onNavigate: (page: Page) => void;
}

export function Dashboard({ user, onNavigate }: DashboardProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const quickActions = [
    {
      icon: '📸',
      title: 'Document Your Home',
      description: 'Photo checklist guide',
      page: 'pre-storm-guide' as Page
    },
    {
      icon: '🔧',
      title: 'Prevent Damage',
      description: 'Maintenance checklist',
      page: 'maintenance-checklist' as Page
    },
    {
      icon: '🌪️',
      title: 'Check Storm History',
      description: 'Instant property scan',
      page: 'storm-alerts' as Page
    }
  ];

  const resources = [
    {
      icon: '📸',
      title: 'Pre-Storm Photo Documentation',
      articles: '10 articles',
      description: 'Complete guide to capturing insurance-grade photos that prove your property\'s condition before storms hit.',
      page: 'pre-storm-guide' as Page
    },
    {
      icon: '🔧',
      title: 'Seasonal Maintenance Guide',
      articles: '12 articles',
      description: 'Expert-backed checklist for roof and exterior maintenance to prevent damage and avoid claim denials.',
      page: 'maintenance-checklist' as Page
    },
    {
      icon: '📋',
      title: 'Policy Changes & Updates',
      articles: '8 articles',
      description: 'Stay informed about premium increases, endorsements, and coverage limitations affecting Florida homeowners.',
      page: 'policy-updates' as Page
    },
    {
      icon: '⚖️',
      title: 'Legislative Reforms',
      articles: '6 articles',
      description: 'Understanding new laws and how they impact your ability to file and win insurance claims.',
      page: 'policy-updates' as Page
    },
    {
      icon: '📝',
      title: 'Insurance Claims Process',
      articles: '5 articles',
      description: 'Step-by-step guide to filing claims successfully, from prevention to final settlement.',
      page: 'claim-process' as Page
    },
    {
      icon: '🎓',
      title: 'Insurance Education Hub',
      articles: '15 articles',
      description: 'Master your homeowner\'s insurance with comprehensive educational content.',
      page: 'insurance-education' as Page
    }
  ];

  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchQuery) {
      alert('Search functionality coming soon for: ' + searchQuery);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0a0a14 0%, #1a1a2e 100%)',
        color: 'white',
        padding: '60px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          content: '',
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(91, 108, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%'
        }}></div>
        
        <div className="storm-container" style={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <h1 style={{
            fontSize: '36px',
            marginBottom: '20px',
            fontWeight: '300',
            color: 'white'
          }}>
            Storm Proof Preparation Kit
          </h1>
          
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#999'
            }}>
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search for guides, documentation, or resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              style={{
                width: '100%',
                padding: '15px 20px 15px 50px',
                border: 'none',
                borderRadius: '50px',
                fontSize: '16px',
                background: 'white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                color: '#333'
              }}
            />
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section style={{
        background: 'white',
        padding: '40px 0',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <div className="storm-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px'
          }}>
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => onNavigate(action.page)}
                className="storm-card"
                style={{
                  textAlign: 'center',
                  padding: '30px 20px',
                  background: '#f9f9f9',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: '#333',
                  display: 'block',
                  border: 'none',
                  borderRadius: '8px',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#f0f0f0';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = '#f9f9f9';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: '#0a0a14',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  margin: '0 auto 15px'
                }}>
                  {action.icon}
                </div>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '500',
                  marginBottom: '5px',
                  color: '#333'
                }}>
                  {action.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666'
                }}>
                  {action.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '60px 0' }}>
        <div className="storm-container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '500',
              color: '#333'
            }}>
              Get more information
            </h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => setViewMode('grid')}
                style={{
                  padding: '8px 12px',
                  background: viewMode === 'grid' ? '#5b6cff' : '#f0f0f0',
                  color: viewMode === 'grid' ? 'white' : '#333',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  borderRadius: '4px'
                }}
              >
                ⊞
              </button>
              <button
                onClick={() => setViewMode('list')}
                style={{
                  padding: '8px 12px',
                  background: viewMode === 'list' ? '#5b6cff' : '#f0f0f0',
                  color: viewMode === 'list' ? 'white' : '#333',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  borderRadius: '4px'
                }}
              >
                ☰
              </button>
            </div>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            {resources.map((resource, index) => (
              <button
                key={index}
                onClick={() => onNavigate(resource.page)}
                className="storm-card"
                style={{
                  background: 'white',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: '#333',
                  display: 'block',
                  border: 'none',
                  padding: '0',
                  textAlign: 'left'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{
                  width: '100%',
                  height: '200px',
                  background: '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '48px',
                  color: '#5b6cff',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {resource.icon}
                  <div style={{
                    content: '',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(91, 108, 255, 0.1) 0%, transparent 100%)'
                  }}></div>
                </div>
                <div style={{ padding: '25px' }}>
                  <h3 style={{
                    fontSize: '20px',
                    marginBottom: '10px',
                    fontWeight: '500',
                    color: '#333'
                  }}>
                    {resource.title}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: '#666',
                    marginBottom: '15px'
                  }}>
                    {resource.articles}
                  </p>
                  <p style={{
                    fontSize: '14px',
                    color: '#666',
                    lineHeight: '1.6'
                  }}>
                    {resource.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section style={{
        background: '#f9f9f9',
        padding: '60px 0'
      }}>
        <div className="storm-container">
          <h2 style={{
            textAlign: 'center',
            marginBottom: '40px',
            fontSize: '24px',
            fontWeight: '500',
            color: '#333'
          }}>
            Get support
          </h2>
          <div className="storm-card" style={{
            background: 'white',
            borderRadius: '8px',
            padding: '30px',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <h3 style={{
              fontSize: '20px',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: '#333'
            }}>
              📧 Contact us
            </h3>
            <div style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#666'
            }}>
              <p><strong>Storm Proof Support Team</strong></p>
              <p>Monday - Friday 8:00am to 6:00pm EST</p>
              <p>Saturday 9:00am to 3:00pm EST</p>
              <br />
              <p>Email: support@stormproof.com</p>
              <p>Phone: 1-800-STORM-77</p>
            </div>
            <button
              onClick={() => onNavigate('help')}
              className="storm-button-primary"
              style={{
                background: '#5b6cff',
                color: 'white',
                padding: '12px 30px',
                border: 'none',
                borderRadius: '6px',
                fontSize: '16px',
                cursor: 'pointer',
                marginTop: '20px',
                transition: 'all 0.3s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#4a5ae8';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = '#5b6cff';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Send us a message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}