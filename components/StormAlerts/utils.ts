import { AlertTriangle, Cloud, CloudRain, Wind } from 'lucide-react';
import { Badge } from '../ui/badge';
import { ALERT_TYPES, SEVERITY_LEVELS } from './constants';

export const getAlertIcon = (type: string) => {
  switch (type) {
    case ALERT_TYPES.WARNING: return <AlertTriangle className="h-5 w-5" />;
    case ALERT_TYPES.WATCH: return <Cloud className="h-5 w-5" />;
    case ALERT_TYPES.ADVISORY: return <Wind className="h-5 w-5" />;
    default: return <CloudRain className="h-5 w-5" />;
  }
};

export const getAlertColor = (severity: string) => {
  switch (severity) {
    case SEVERITY_LEVELS.HIGH: return 'bg-red-100 border-red-300 text-red-800';
    case SEVERITY_LEVELS.MODERATE: return 'bg-yellow-100 border-yellow-300 text-yellow-800';
    case SEVERITY_LEVELS.LOW: return 'bg-blue-100 border-blue-300 text-blue-800';
    default: return 'bg-gray-100 border-gray-300 text-gray-800';
  }
};

export const getSeverityBadge = (severity: string) => {
  switch (severity) {
    case SEVERITY_LEVELS.HIGH: return <Badge className="bg-red-500 text-white">High Risk</Badge>;
    case SEVERITY_LEVELS.MODERATE: return <Badge className="bg-yellow-500 text-white">Moderate Risk</Badge>;
    case SEVERITY_LEVELS.LOW: return <Badge className="bg-blue-500 text-white">Low Risk</Badge>;
    default: return <Badge variant="secondary">Unknown</Badge>;
  }
};