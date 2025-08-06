import React, { useState } from 'react';
import { Check, Square, Play, AlertTriangle, Info, CheckCircle, XCircle, Book, Download, ExternalLink, Lock } from 'lucide-react';

// Text Block Component
export function TextBlock({ children, size = 'normal' }: { children: React.ReactNode; size?: 'small' | 'normal' | 'large' }) {
  const fontSize = size === 'small' ? '14px' : size === 'large' ? '18px' : '16px';
  
  return (
    <div style={{
      fontSize,
      lineHeight: '1.7',
      color: '#333',
      marginBottom: '24px'
    }}>
      {children}
    </div>
  );
}

// Heading Block Component
export function HeadingBlock({ level = 2, children, isFirst = false }: { level?: 1 | 2 | 3 | 4; children: React.ReactNode; isFirst?: boolean }) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const styles = {
    1: { fontSize: '36px', fontWeight: '600', marginBottom: '32px', marginTop: isFirst ? '0' : '48px' },
    2: { fontSize: '28px', fontWeight: '600', marginBottom: '24px', marginTop: isFirst ? '0' : '40px' },
    3: { fontSize: '22px', fontWeight: '600', marginBottom: '20px', marginTop: isFirst ? '0' : '32px' },
    4: { fontSize: '18px', fontWeight: '600', marginBottom: '16px', marginTop: isFirst ? '0' : '24px' }
  };

  return (
    <Tag style={{
      ...styles[level],
      color: '#1a1a1a',
      lineHeight: '1.3'
    }}>
      {children}
    </Tag>
  );
}

// Checklist Block Component
export function ChecklistBlock({ items, onToggle, allowToggle = true }: { 
  items: Array<{ id: string; text: string; completed: boolean; description?: string }>;
  onToggle?: (id: string) => void;
  allowToggle?: boolean;
}) {
  return (
    <div style={{ marginBottom: '32px' }}>
      {items.map((item) => (
        <div key={item.id} style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '16px',
          padding: '12px',
          borderRadius: '6px',
          background: item.completed ? '#f0f9f0' : '#fafafa',
          border: `1px solid ${item.completed ? '#d4e6d4' : '#e5e5e5'}`,
          transition: 'all 0.2s'
        }}>
          <button
            onClick={() => allowToggle && onToggle?.(item.id)}
            disabled={!allowToggle}
            style={{
              background: 'none',
              border: 'none',
              cursor: allowToggle ? 'pointer' : 'default',
              padding: '2px',
              marginTop: '2px'
            }}
          >
            {item.completed ? (
              <CheckCircle className="w-5 h-5" style={{ color: '#22c55e' }} />
            ) : (
              <Square className="w-5 h-5" style={{ color: '#666' }} />
            )}
          </button>
          
          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: '16px',
              color: item.completed ? '#16a34a' : '#333',
              textDecoration: item.completed ? 'line-through' : 'none',
              marginBottom: item.description ? '4px' : '0'
            }}>
              {item.text}
            </div>
            {item.description && (
              <div style={{
                fontSize: '14px',
                color: '#666',
                lineHeight: '1.5'
              }}>
                {item.description}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// Video Block Component
export function VideoBlock({ title, duration, description, thumbnail, locked = false }: {
  title: string;
  duration?: string;
  description?: string;
  thumbnail?: string;
  locked?: boolean;
}) {
  return (
    <div style={{
      marginBottom: '32px',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid #e5e5e5'
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        background: thumbnail ? `url(${thumbnail})` : 'linear-gradient(135deg, #f0f0f0 0%, #e5e5e5 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {locked ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(0, 0, 0, 0.8)',
            padding: '24px',
            borderRadius: '12px',
            color: 'white'
          }}>
            <Lock className="w-8 h-8" />
            <span style={{ fontSize: '16px', fontWeight: '500' }}>Premium Content</span>
            <span style={{ fontSize: '14px', textAlign: 'center' }}>Upgrade to access this video</span>
          </div>
        ) : (
          <button style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(0, 0, 0, 0.8)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}>
            <Play className="w-8 h-8" style={{ color: 'white', marginLeft: '4px' }} />
          </button>
        )}
        
        {duration && (
          <div style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            background: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px'
          }}>
            {duration}
          </div>
        )}
      </div>
      
      <div style={{ padding: '20px' }}>
        <h4 style={{
          fontSize: '18px',
          fontWeight: '600',
          marginBottom: '8px',
          color: '#1a1a1a'
        }}>
          {title}
        </h4>
        {description && (
          <p style={{
            fontSize: '14px',
            color: '#666',
            lineHeight: '1.5',
            margin: '0'
          }}>
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

// Callout Block Component
export function CalloutBlock({ type = 'info', title, children }: {
  type?: 'info' | 'warning' | 'success' | 'error';
  title?: string;
  children: React.ReactNode;
}) {
  const styles = {
    info: { background: '#eff6ff', border: '#3b82f6', icon: Info },
    warning: { background: '#fefce8', border: '#eab308', icon: AlertTriangle },
    success: { background: '#f0fdf4', border: '#22c55e', icon: CheckCircle },
    error: { background: '#fef2f2', border: '#ef4444', icon: XCircle }
  };

  const config = styles[type];
  const Icon = config.icon;

  return (
    <div style={{
      background: config.background,
      border: `1px solid ${config.border}20`,
      borderLeft: `4px solid ${config.border}`,
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '24px'
    }}>
      <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'flex-start'
      }}>
        <Icon className="w-5 h-5" style={{ color: config.border, marginTop: '2px', flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          {title && (
            <h4 style={{
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '8px',
              color: '#1a1a1a'
            }}>
              {title}
            </h4>
          )}
          <div style={{
            fontSize: '14px',
            lineHeight: '1.6',
            color: '#333'
          }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Resource Block Component
export function ResourceBlock({ title, description, type = 'document', downloadUrl, external = false, locked = false }: {
  title: string;
  description?: string;
  type?: 'document' | 'pdf' | 'video' | 'link';
  downloadUrl?: string;
  external?: boolean;
  locked?: boolean;
}) {
  const icons = {
    document: Book,
    pdf: Download,
    video: Play,
    link: ExternalLink
  };

  const Icon = icons[type];

  return (
    <div style={{
      border: '1px solid #e5e5e5',
      borderRadius: '8px',
      padding: '20px',
      marginBottom: '16px',
      transition: 'all 0.2s',
      cursor: locked ? 'default' : 'pointer',
      opacity: locked ? '0.6' : '1'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        {locked ? (
          <Lock className="w-5 h-5" style={{ color: '#666' }} />
        ) : (
          <Icon className="w-5 h-5" style={{ color: '#5b6cff' }} />
        )}
        
        <div style={{ flex: 1 }}>
          <h4 style={{
            fontSize: '16px',
            fontWeight: '500',
            marginBottom: description ? '4px' : '0',
            color: locked ? '#666' : '#1a1a1a'
          }}>
            {title}
            {locked && <span style={{ fontSize: '12px', color: '#666', marginLeft: '8px' }}>(Premium)</span>}
          </h4>
          {description && (
            <p style={{
              fontSize: '14px',
              color: '#666',
              margin: '0',
              lineHeight: '1.5'
            }}>
              {description}
            </p>
          )}
        </div>
        
        {external && !locked && (
          <ExternalLink className="w-4 h-4" style={{ color: '#666' }} />
        )}
      </div>
    </div>
  );
}

// Divider Block Component
export function DividerBlock() {
  return (
    <div style={{
      width: '100%',
      height: '1px',
      background: '#e5e5e5',
      margin: '40px 0'
    }} />
  );
}

// CTA Block Component
export function CTABlock({ title, description, buttonText, onAction, variant = 'primary' }: {
  title: string;
  description?: string;
  buttonText: string;
  onAction: () => void;
  variant?: 'primary' | 'secondary';
}) {
  return (
    <div style={{
      background: variant === 'primary' ? 'linear-gradient(135deg, #5b6cff 0%, #4a5ae8 100%)' : '#f8f9fa',
      color: variant === 'primary' ? 'white' : '#333',
      padding: '40px',
      borderRadius: '12px',
      textAlign: 'center',
      marginBottom: '32px',
      border: variant === 'secondary' ? '1px solid #e5e5e5' : 'none'
    }}>
      <h3 style={{
        fontSize: '24px',
        fontWeight: '600',
        marginBottom: '12px',
        color: variant === 'primary' ? 'white' : '#1a1a1a'
      }}>
        {title}
      </h3>
      {description && (
        <p style={{
          fontSize: '16px',
          marginBottom: '24px',
          opacity: variant === 'primary' ? '0.9' : '0.8',
          lineHeight: '1.6'
        }}>
          {description}
        </p>
      )}
      <button
        onClick={onAction}
        style={{
          background: variant === 'primary' ? 'rgba(255, 255, 255, 0.2)' : '#5b6cff',
          color: variant === 'primary' ? 'white' : 'white',
          border: variant === 'primary' ? '1px solid rgba(255, 255, 255, 0.3)' : 'none',
          padding: '12px 24px',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}