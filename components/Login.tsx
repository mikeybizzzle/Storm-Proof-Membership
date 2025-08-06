import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  membershipLevel: 'free' | 'premium';
};

interface LoginProps {
  onLogin: (user: User) => void;
}

export function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Mock user data - in real app this would come from authentication service
      const mockUser: User = {
        id: '1',
        email: email,
        firstName: 'John',
        lastName: 'Doe',
        membershipLevel: 'free'
      };
      
      onLogin(mockUser);
      setIsLoading(false);
    }, 1000);
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate password reset
    setTimeout(() => {
      alert('Password reset instructions sent to your email!');
      setShowForgotPassword(false);
      setResetEmail('');
      setIsLoading(false);
    }, 1000);
  };

  // Spinner component with inline keyframes
  const Spinner = () => (
    <div 
      style={{
        width: '16px',
        height: '16px',
        border: '2px solid white',
        borderTop: '2px solid transparent',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}
    />
  );

  return (
    <>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0a14 0%, #1a1a2e 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'
      }}>
        <div style={{ width: '100%', maxWidth: '400px' }}>
          {/* Logo */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                background: '#5b6cff',
                borderRadius: '50%'
              }}></div>
              STORM PROOF
            </div>
            <h1 style={{
              fontSize: '28px',
              fontWeight: '300',
              color: 'white',
              marginBottom: '10px'
            }}>
              Welcome Back
            </h1>
            <p style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '16px'
            }}>
              Your Storm Proof Prep Kit
            </p>
          </div>

          <div className="storm-card" style={{
            padding: '40px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            border: 'none',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}>
            {!showForgotPassword ? (
              <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#333'
                  }}>
                    Email Address
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#999',
                      width: '16px',
                      height: '16px'
                    }} />
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 12px 12px 40px',
                        border: '1px solid #ddd',
                        borderRadius: '6px',
                        fontSize: '14px',
                        background: 'white',
                        boxSizing: 'border-box'
                      }}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#333'
                  }}>
                    Password
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Lock style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#999',
                      width: '16px',
                      height: '16px'
                    }} />
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 40px 12px 40px',
                        border: '1px solid #ddd',
                        borderRadius: '6px',
                        fontSize: '14px',
                        background: 'white',
                        boxSizing: 'border-box'
                      }}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#999'
                      }}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '14px'
                }}>
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer'
                  }}>
                    <input type="checkbox" style={{ margin: 0 }} />
                    Remember me
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#5b6cff',
                      cursor: 'pointer',
                      textDecoration: 'underline',
                      fontSize: '14px'
                    }}
                  >
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: isLoading ? '#ccc' : '#5b6cff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                  onMouseOver={(e) => !isLoading && (e.currentTarget.style.background = '#4a5ae8')}
                  onMouseOut={(e) => !isLoading && (e.currentTarget.style.background = '#5b6cff')}
                >
                  {isLoading ? (
                    <>
                      <Spinner />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <form onSubmit={handlePasswordReset} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <h2 style={{
                    fontSize: '20px',
                    fontWeight: '500',
                    color: '#333',
                    marginBottom: '8px'
                  }}>
                    Reset Password
                  </h2>
                  <p style={{
                    fontSize: '14px',
                    color: '#666'
                  }}>
                    Enter your email to receive reset instructions
                  </p>
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#333'
                  }}>
                    Email Address
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail style={{
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#999',
                      width: '16px',
                      height: '16px'
                    }} />
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 12px 12px 40px',
                        border: '1px solid #ddd',
                        borderRadius: '6px',
                        fontSize: '14px',
                        background: 'white',
                        boxSizing: 'border-box'
                      }}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: isLoading ? '#ccc' : '#5b6cff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '16px',
                    fontWeight: '500',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => !isLoading && (e.currentTarget.style.background = '#4a5ae8')}
                  onMouseOut={(e) => !isLoading && (e.currentTarget.style.background = '#5b6cff')}
                >
                  {isLoading ? 'Sending...' : 'Send Reset Instructions'}
                </button>

                <button
                  type="button"
                  onClick={() => setShowForgotPassword(false)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    color: '#666',
                    cursor: 'pointer',
                    fontSize: '14px',
                    textAlign: 'center'
                  }}
                >
                  Back to Sign In
                </button>
              </form>
            )}

            {/* Security Badges */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              marginTop: '30px',
              paddingTop: '20px',
              borderTop: '1px solid #f0f0f0'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '12px',
                color: '#666'
              }}>
                <span>🔒</span>
                <span>SSL Secured</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '12px',
                color: '#666'
              }}>
                <span>🏦</span>
                <span>Bank-level Security</span>
              </div>
            </div>
          </div>

          {/* Demo Credentials */}
          <div style={{
            marginTop: '20px',
            padding: '20px',
            background: 'rgba(91, 108, 255, 0.1)',
            borderRadius: '8px',
            border: '1px solid rgba(91, 108, 255, 0.2)'
          }}>
            <p style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: '500',
              marginBottom: '8px'
            }}>
              Demo Credentials:
            </p>
            <p style={{
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.8)',
              margin: '4px 0'
            }}>
              Email: demo@stormproof.com
            </p>
            <p style={{
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.8)',
              margin: '4px 0'
            }}>
              Password: demo123
            </p>
          </div>
        </div>
      </div>
    </>
  );
}