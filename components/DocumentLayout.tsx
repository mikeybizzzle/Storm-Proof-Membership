import React, { ReactNode } from 'react';
import { ArrowLeft, Clock, FileText, Users, Calendar } from 'lucide-react';

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  membershipLevel: 'free' | 'premium';
};

interface DocumentLayoutProps {
  user: User;
  title: string;
  subtitle?: string;
  emoji?: string;
  lastUpdated?: string;
  readTime?: string;
  contentType?: 'document' | 'checklist' | 'video' | 'guide';
  children: ReactNode;
  onBack?: () => void;
}

export function DocumentLayout({ 
  user, 
  title, 
  subtitle, 
  emoji = '📄', 
  lastUpdated, 
  readTime,
  contentType = 'document',
  children,
  onBack 
}: DocumentLayoutProps) {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#ffffff',
      paddingTop: '0'
    }}>
      {/* Document Header */}
      <div style={{
        background: '#ffffff',
        borderBottom: '1px solid #e5e5e5',
        padding: '24px 0'
      }}>
        <div className="storm-container">
          {onBack && (
            <button
              onClick={onBack}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'none',
                border: 'none',
                color: '#666',
                cursor: 'pointer',
                marginBottom: '16px',
                fontSize: '14px',
                padding: '8px 0'
              }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </button>
          )}
          
          {/* Document Title */}
          <div style={{ marginBottom: '16px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '8px'
            }}>
              <span style={{ fontSize: '48px', lineHeight: '1' }}>{emoji}</span>
              <div>
                <h1 style={{
                  fontSize: '42px',
                  fontWeight: '600',
                  lineHeight: '1.2',
                  color: '#1a1a1a',
                  margin: '0'
                }}>
                  {title}
                </h1>
                {subtitle && (
                  <p style={{
                    fontSize: '18px',
                    color: '#666',
                    margin: '8px 0 0 0',
                    fontWeight: '400'
                  }}>
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Document Meta */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '24px',
            alignItems: 'center',
            fontSize: '14px',
            color: '#666'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <FileText className="w-4 h-4" />
              <span style={{ textTransform: 'capitalize' }}>{contentType}</span>
            </div>
            
            {readTime && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Clock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            )}

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Users className="w-4 h-4" />
              <span>{user.membershipLevel === 'premium' ? 'Premium Member' : 'Free Member'}</span>
            </div>

            {lastUpdated && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Calendar className="w-4 h-4" />
                <span>Updated {lastUpdated}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Document Content */}
      <div style={{
        padding: '40px 0 80px 0'
      }}>
        <div className="storm-container">
          <div style={{
            maxWidth: '768px',
            margin: '0 auto'
          }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}