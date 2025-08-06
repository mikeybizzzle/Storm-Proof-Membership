export const ALERT_TYPES = {
  WARNING: 'warning',
  WATCH: 'watch',
  ADVISORY: 'advisory'
} as const;

export const SEVERITY_LEVELS = {
  HIGH: 'high',
  MODERATE: 'moderate',
  LOW: 'low'
} as const;

export const CURRENT_ALERTS = [
  {
    id: 'tropical-depression-atlantic',
    type: ALERT_TYPES.WATCH,
    severity: SEVERITY_LEVELS.MODERATE,
    title: 'Tropical Depression Forming in Atlantic',
    description: 'Low pressure system showing signs of organization. Monitoring for potential development into named storm.',
    location: 'Atlantic Ocean - Eastern',
    timeToImpact: '5-7 days',
    affectedAreas: ['Florida East Coast', 'Georgia Coast', 'South Carolina'],
    confidence: 60,
    free: true
  },
  {
    id: 'severe-weather-florida',
    type: ALERT_TYPES.WARNING,
    severity: SEVERITY_LEVELS.HIGH,
    title: 'Severe Thunderstorms Expected',
    description: 'Damaging winds up to 70 mph, large hail, and heavy rainfall expected across central Florida.',
    location: 'Central Florida',
    timeToImpact: '6-12 hours',
    affectedAreas: ['Orlando', 'Tampa', 'Lakeland', 'Kissimmee'],
    confidence: 85,
    free: false
  },
  {
    id: 'wind-advisory',
    type: ALERT_TYPES.ADVISORY,
    severity: SEVERITY_LEVELS.LOW,
    title: 'Wind Advisory - Coastal Areas',
    description: 'Sustained winds 25-35 mph with gusts up to 45 mph expected along coastal areas.',
    location: 'South Florida Coast',
    timeToImpact: '2-4 hours',
    affectedAreas: ['Miami-Dade', 'Broward', 'Palm Beach'],
    confidence: 90,
    free: false
  }
];

export const WEATHER_HISTORY = [
  { date: '2024-01-20', event: 'Tropical Storm Alex', category: 'Named Storm', damage: 'Moderate' },
  { date: '2024-01-15', event: 'Severe Thunderstorms', category: 'Severe Weather', damage: 'Minor' },
  { date: '2024-01-10', event: 'High Wind Event', category: 'Wind Advisory', damage: 'Minimal' }
];

export const DEFAULT_ALERT_SETTINGS = {
  majorStorms: true,
  localWeather: false,
  maintenanceReminders: true,
  policyUpdates: true
};