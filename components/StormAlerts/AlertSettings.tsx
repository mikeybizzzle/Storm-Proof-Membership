import React from 'react';
import { Settings, Bell } from 'lucide-react';
import { Card } from '../ui/card';
import { Switch } from '../ui/switch';

interface AlertSettingsProps {
  settings: {
    majorStorms: boolean;
    localWeather: boolean;
    maintenanceReminders: boolean;
    policyUpdates: boolean;
  };
  onSettingsChange: (settings: any) => void;
  isPremium: boolean;
}

export function AlertSettings({ settings, onSettingsChange, isPremium }: AlertSettingsProps) {
  const updateSetting = (key: string, value: boolean) => {
    onSettingsChange({ ...settings, [key]: value });
  };

  return (
    <Card className="p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Settings className="h-5 w-5 text-[#5B5BFF]" />
        <h3 className="font-bold text-[#0A0E27]">Alert Preferences</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Major Storms</p>
            <p className="text-sm text-[#6B7280]">Hurricane, tornado, severe weather warnings</p>
          </div>
          <Switch 
            checked={settings.majorStorms}
            onCheckedChange={(checked) => updateSetting('majorStorms', checked)}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Local Weather Alerts</p>
            <p className="text-sm text-[#6B7280]">All weather advisories in your area</p>
          </div>
          <Switch 
            checked={settings.localWeather}
            onCheckedChange={(checked) => updateSetting('localWeather', checked)}
            disabled={!isPremium}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Maintenance Reminders</p>
            <p className="text-sm text-[#6B7280]">Seasonal preparation alerts</p>
          </div>
          <Switch 
            checked={settings.maintenanceReminders}
            onCheckedChange={(checked) => updateSetting('maintenanceReminders', checked)}
          />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Policy Updates</p>
            <p className="text-sm text-[#6B7280]">Insurance and legislative changes</p>
          </div>
          <Switch 
            checked={settings.policyUpdates}
            onCheckedChange={(checked) => updateSetting('policyUpdates', checked)}
          />
        </div>
      </div>
    </Card>
  );
}