import React from 'react';
import { MapPin, Clock, Lock, ArrowRight } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { getAlertIcon, getAlertColor, getSeverityBadge } from './utils';

interface AlertData {
  id: string;
  type: string;
  severity: string;
  title: string;
  description: string;
  location: string;
  timeToImpact: string;
  affectedAreas: string[];
  confidence: number;
  free: boolean;
}

interface AlertCardProps {
  alert: AlertData;
  isPremium: boolean;
}

export function AlertCard({ alert, isPremium }: AlertCardProps) {
  const canAccess = alert.free || isPremium;

  return (
    <Card className={`p-6 ${getAlertColor(alert.severity)} ${!canAccess ? 'opacity-60 relative' : ''}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg ${
            alert.severity === 'high' ? 'bg-red-500 text-white' :
            alert.severity === 'moderate' ? 'bg-yellow-500 text-white' :
            'bg-blue-500 text-white'
          }`}>
            {getAlertIcon(alert.type)}
          </div>
          <div>
            <h3 className="font-bold text-lg">{alert.title}</h3>
            <div className="flex items-center space-x-2 mt-1">
              {getSeverityBadge(alert.severity)}
              {!alert.free && (
                <Badge className="bg-gradient-to-r from-[#5B5BFF] to-[#9810FA] text-white text-xs">
                  Premium
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm mb-4">{alert.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{alert.location}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4" />
          <span className="text-sm">{alert.timeToImpact}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-sm font-medium mb-2">Confidence Level: {alert.confidence}%</div>
        <Progress value={alert.confidence} className="h-2" />
      </div>

      <div className="mb-4">
        <div className="text-sm font-medium mb-2">Affected Areas:</div>
        <div className="flex flex-wrap gap-1">
          {alert.affectedAreas.map((area, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {area}
            </Badge>
          ))}
        </div>
      </div>

      {!canAccess && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-lg">
          <div className="text-center bg-white p-4 rounded-lg shadow-lg">
            <Lock className="h-8 w-8 mx-auto mb-2 text-[#5B5BFF]" />
            <p className="font-medium text-[#0A0E27] mb-2">Premium Alert</p>
            <Button size="sm" className="bg-gradient-to-r from-[#5B5BFF] to-[#9810FA] text-white">
              Upgrade to View
              <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
}