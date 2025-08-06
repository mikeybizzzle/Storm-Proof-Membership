import React, { useState } from 'react';
import { ArrowRight, MapPin, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { AlertCard } from './StormAlerts/AlertCard';
import { AlertSettings } from './StormAlerts/AlertSettings';
import { CURRENT_ALERTS, WEATHER_HISTORY, DEFAULT_ALERT_SETTINGS } from './StormAlerts/constants';

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  membershipLevel: 'free' | 'premium';
};

interface StormAlertsProps {
  user: User;
}

export function StormAlerts({ user }: StormAlertsProps) {
  const [alertSettings, setAlertSettings] = useState(DEFAULT_ALERT_SETTINGS);
  const isPremium = user.membershipLevel === 'premium';

  return (
    <div className="min-h-screen bg-[#F5F7FB] p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-[#6B7280] mb-2">
            <span>Storm Monitoring</span>
            <ArrowRight className="h-4 w-4" />
            <span>Live Alerts</span>
          </div>
          <h1 className="text-3xl font-bold text-[#0A0E27] mb-4">
            Storm Alert Center
          </h1>
          <p className="text-[#6B7280] text-lg mb-6">
            Stay informed about weather threats that could impact your property. 
            {user.membershipLevel === 'free' ? ' Free members see major storms only.' : ' Full coverage for all weather events.'}
          </p>
          
          <div className="flex items-center space-x-4">
            <Badge className={`${user.membershipLevel === 'free' ? 'bg-yellow-500' : 'bg-[#00D46A]'} text-white`}>
              {user.membershipLevel === 'free' ? 'Limited Coverage' : 'Full Coverage'}
            </Badge>
            <Badge variant="outline" className="text-[#5B5BFF] border-[#5B5BFF]">
              <MapPin className="h-3 w-3 mr-1" />
              Florida Focus
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <AlertSettings 
              settings={alertSettings}
              onSettingsChange={setAlertSettings}
              isPremium={isPremium}
            />

            {/* Recent Weather History */}
            <Card className="p-6">
              <h3 className="font-bold text-[#0A0E27] mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {WEATHER_HISTORY.map((event, index) => (
                  <div key={index} className="border-l-2 border-[#5B5BFF] pl-3">
                    <p className="font-medium text-sm text-[#0A0E27]">{event.event}</p>
                    <p className="text-xs text-[#6B7280]">{event.category}</p>
                    <p className="text-xs text-[#6B7280]">{new Date(event.date).toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-[#0A0E27]">Current Alerts</h2>
                  <Badge variant="outline" className="text-[#0096FF] border-[#0096FF]">
                    {CURRENT_ALERTS.length} Active Alerts
                  </Badge>
                </div>

                <div className="space-y-4">
                  {CURRENT_ALERTS.map((alert) => (
                    <AlertCard 
                      key={alert.id}
                      alert={alert}
                      isPremium={isPremium}
                    />
                  ))}
                </div>
              </Card>

              {/* Premium Upgrade */}
              {!isPremium && (
                <Card className="p-8 bg-gradient-to-r from-[#5B5BFF] to-[#9810FA] text-white">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Unlock Complete Storm Monitoring</h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                      Get real-time alerts for all weather events, detailed radar data, personalized 
                      storm tracks, and 24/7 access to weather experts with Premium membership.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center">
                        <div className="text-3xl mb-2">🌪️</div>
                        <h4 className="font-bold mb-1">All Storm Types</h4>
                        <p className="text-sm text-blue-100">Hurricanes, tornadoes, severe thunderstorms, and more</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl mb-2">📡</div>
                        <h4 className="font-bold mb-1">Real-time Radar</h4>
                        <p className="text-sm text-blue-100">Live weather radar and satellite imagery</p>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl mb-2">👨‍💼</div>
                        <h4 className="font-bold mb-1">Expert Support</h4>
                        <p className="text-sm text-blue-100">Direct access to certified meteorologists</p>
                      </div>
                    </div>

                    <Button variant="secondary" className="bg-white text-[#5B5BFF] hover:bg-gray-100 px-8 py-3">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Upgrade to Premium
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}