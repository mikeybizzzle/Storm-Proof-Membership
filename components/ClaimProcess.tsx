import React, { useState } from 'react';
import { FileText, CheckCircle, Clock, AlertTriangle, Camera, Phone, ArrowRight, Download } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  membershipLevel: 'free' | 'premium';
};

interface ClaimProcessProps {
  user: User;
}

export function ClaimProcess({ user }: ClaimProcessProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const claimSteps = [
    {
      id: 'immediate-safety',
      title: 'Immediate Safety & Emergency Response',
      description: 'Ensure safety and prevent further damage',
      icon: <AlertTriangle className="h-6 w-6" />,
      timeframe: 'Immediately',
      priority: 'Critical',
      actions: [
        'Ensure all family members are safe',
        'If necessary, evacuate the property',
        'Contact emergency services if needed',
        'Turn off utilities if damage is severe',
        'Take temporary measures to prevent further damage'
      ]
    },
    {
      id: 'document-damage',
      title: 'Document the Damage',
      description: 'Capture comprehensive evidence of all damage',
      icon: <Camera className="h-6 w-6" />,
      timeframe: 'Within 24 hours',
      priority: 'High',
      actions: [
        'Take photos and videos of all damage',
        'Document your temporary repairs',
        'Make a written inventory of damaged items',
        'Save receipts for emergency repairs',
        'Note the date, time, and cause of damage'
      ]
    },
    {
      id: 'contact-insurer',
      title: 'Contact Your Insurance Company',
      description: 'Report the claim as soon as possible',
      icon: <Phone className="h-6 w-6" />,
      timeframe: 'Within 48 hours',
      priority: 'High',
      actions: [
        'Call your insurance company\'s claims hotline',
        'Provide your policy number and details',
        'Describe the damage and its cause',
        'Request a claim number for reference',
        'Ask about next steps and timeline'
      ]
    },
    {
      id: 'work-with-adjuster',
      title: 'Work with the Insurance Adjuster',
      description: 'Cooperate with the investigation process',
      icon: <FileText className="h-6 w-6" />,
      timeframe: '3-7 days',
      priority: 'Medium',
      actions: [
        'Schedule the adjuster visit',
        'Be present during the inspection',
        'Provide all documentation',
        'Point out all damage areas',
        'Ask questions about the process'
      ]
    },
    {
      id: 'receive-settlement',
      title: 'Review Settlement & Complete Repairs',
      description: 'Finalize your claim and restore your property',
      icon: <CheckCircle className="h-6 w-6" />,
      timeframe: '2-4 weeks',
      priority: 'Medium',
      actions: [
        'Review the settlement offer carefully',
        'Get multiple repair estimates',
        'Negotiate if settlement seems low',
        'Complete approved repairs',
        'Submit final documentation'
      ]
    }
  ];

  const commonMistakes = [
    'Delaying the claim report',
    'Not documenting damage thoroughly',
    'Making permanent repairs before adjuster visit',
    'Not keeping receipts for temporary repairs',
    'Accepting the first settlement offer without review'
  ];

  const importantContacts = [
    { name: 'Your Insurance Company', number: 'Check your policy documents', available: '24/7' },
    { name: 'Florida Insurance Commissioner', number: '1-877-693-5236', available: 'Business hours' },
    { name: 'Storm Proof Claims Support', number: '1-800-STORM-99', available: '24/7', premium: true }
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FB] p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-[#6B7280] mb-2">
            <span>Free Content</span>
            <ArrowRight className="h-4 w-4" />
            <span>Claim Process</span>
          </div>
          <h1 className="text-3xl font-bold text-[#0A0E27] mb-4">
            Insurance Claim Process Walkthrough
          </h1>
          <p className="text-[#6B7280] text-lg mb-6">
            Step-by-step guidance for filing and managing your insurance claim effectively.
          </p>
          
          <div className="flex items-center space-x-4">
            <Badge className="bg-[#5B5BFF] text-white">
              5 Essential Steps
            </Badge>
            <Badge variant="outline" className="text-[#00D46A] border-[#00D46A]">
              Beginner Friendly
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Progress Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 mb-6">
              <h3 className="font-bold text-[#0A0E27] mb-4">Claim Steps</h3>
              <div className="space-y-3">
                {claimSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      index === currentStep 
                        ? 'bg-[#5B5BFF] text-white' 
                        : index < currentStep 
                        ? 'bg-[#00D46A] text-white'
                        : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'
                    }`}
                    onClick={() => setCurrentStep(index)}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex-shrink-0">
                        {React.cloneElement(step.icon, { 
                          className: `h-4 w-4 ${
                            index <= currentStep ? 'text-white' : 'text-[#6B7280]'
                          }` 
                        })}
                      </div>
                      <span className="font-medium text-sm">{step.title}</span>
                    </div>
                    <div className="text-xs opacity-80">
                      {step.timeframe}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-[#0A0E27] mb-4">Important Contacts</h3>
              <div className="space-y-3">
                {importantContacts.map((contact, index) => (
                  <div key={index} className="text-sm">
                    <div className="flex items-center space-x-1 mb-1">
                      <span className="font-medium text-[#0A0E27]">{contact.name}</span>
                      {contact.premium && (
                        <Badge className="text-xs bg-gradient-to-r from-[#5B5BFF] to-[#9810FA] text-white">
                          Premium
                        </Badge>
                      )}
                    </div>
                    <div className="text-[#6B7280]">{contact.number}</div>
                    <div className="text-xs text-[#6B7280]">{contact.available}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="p-8 mb-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-4 rounded-full ${
                  currentStep < claimSteps.length ? 'bg-[#5B5BFF]' : 'bg-[#00D46A]'
                } text-white`}>
                  {claimSteps[currentStep]?.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h2 className="text-2xl font-bold text-[#0A0E27]">
                      Step {currentStep + 1}: {claimSteps[currentStep]?.title}
                    </h2>
                    <Badge 
                      className={`text-xs ${
                        claimSteps[currentStep]?.priority === 'Critical' 
                          ? 'bg-red-100 text-red-800' 
                          : claimSteps[currentStep]?.priority === 'High'
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {claimSteps[currentStep]?.priority} Priority
                    </Badge>
                  </div>
                  <p className="text-[#6B7280]">{claimSteps[currentStep]?.description}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <Clock className="h-4 w-4 text-[#6B7280]" />
                    <span className="text-sm text-[#6B7280]">
                      Timeframe: {claimSteps[currentStep]?.timeframe}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-[#0A0E27] mb-4">Action Items:</h3>
                <div className="space-y-3">
                  {claimSteps[currentStep]?.actions.map((action, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 rounded-full bg-[#5B5BFF] text-white flex items-center justify-center text-sm font-medium mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-[#0A0E27]">{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <Button 
                  variant="outline"
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                >
                  Previous Step
                </Button>
                <Button 
                  onClick={() => setCurrentStep(Math.min(claimSteps.length - 1, currentStep + 1))}
                  disabled={currentStep === claimSteps.length - 1}
                  className="bg-[#5B5BFF] hover:bg-[#4C6EF7] text-white"
                >
                  Next Step
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </Card>

            {/* Common Mistakes */}
            <Card className="p-6 mb-6 bg-red-50 border-red-200">
              <h3 className="font-bold text-red-800 mb-4 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Common Mistakes to Avoid
              </h3>
              <div className="space-y-2">
                {commonMistakes.map((mistake, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-red-700">{mistake}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Resources */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-bold text-[#0A0E27] mb-4">Free Resources</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="h-4 w-4 mr-2" />
                    Claim Checklist PDF
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="h-4 w-4 mr-2" />
                    Damage Documentation Template
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Camera className="h-4 w-4 mr-2" />
                    Photo Guidelines
                  </Button>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-[#5B5BFF] to-[#9810FA] text-white">
                <h3 className="font-bold mb-2">Premium Claim Support</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get personalized guidance from claim experts, professional damage assessment, 
                  and dedicated support throughout your claim process.
                </p>
                <Button variant="secondary" className="bg-white text-[#5B5BFF] hover:bg-gray-100">
                  Upgrade for Full Support
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}