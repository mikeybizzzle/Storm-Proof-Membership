import React, { useState } from 'react';
import { HelpCircle, MessageCircle, FileText, Phone, Mail, ArrowRight, Search, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  membershipLevel: 'free' | 'premium';
};

interface HelpProps {
  user: User;
}

export function Help({ user }: HelpProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>('getting-started');

  const supportOptions = [
    {
      title: 'Live Chat Support',
      description: 'Get instant help from our support team',
      icon: <MessageCircle className="h-6 w-6" />,
      availability: '24/7',
      premium: false,
      color: 'bg-green-500'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with a support specialist',
      icon: <Phone className="h-6 w-6" />,
      availability: 'Business hours',
      premium: true,
      color: 'bg-blue-500'
    },
    {
      title: 'Email Support',
      description: 'Send detailed questions via email',
      icon: <Mail className="h-6 w-6" />,
      availability: '24 hour response',
      premium: false,
      color: 'bg-purple-500'
    },
    {
      title: 'Priority Support',
      description: 'Jump to the front of the support queue',
      icon: <ArrowRight className="h-6 w-6" />,
      availability: 'Immediate',
      premium: true,
      color: 'bg-orange-500'
    }
  ];

  const faqItems = [
    {
      id: 'getting-started',
      question: 'How do I get started with the Storm Proof Preparation Kit?',
      answer: 'Start with the Pre-Storm Guide to learn documentation basics, then work through the Seasonal Maintenance Checklist. Complete the Insurance Education modules to understand your coverage better.',
      category: 'Getting Started'
    },
    {
      id: 'documentation',
      question: 'What type of photos should I take for storm documentation?',
      answer: 'Take high-resolution photos from multiple angles of your home\'s exterior, interior rooms, valuable items, and any existing damage. Include close-ups of important details like roof condition, windows, and utility connections.',
      category: 'Documentation'
    },
    {
      id: 'maintenance',
      question: 'How often should I complete the maintenance checklist?',
      answer: 'Follow the seasonal schedule - some tasks are monthly (like HVAC filters), others are seasonal (like gutter cleaning), and some are annual (like roof inspections).',
      category: 'Maintenance'
    },
    {
      id: 'insurance-claims',
      question: 'When should I file an insurance claim after storm damage?',
      answer: 'File your claim as soon as possible, ideally within 24-48 hours. However, ensure your immediate safety first and take temporary measures to prevent further damage.',
      category: 'Insurance'
    },
    {
      id: 'premium-features',
      question: 'What additional features do I get with Premium membership?',
      answer: 'Premium includes professional documentation services, live storm monitoring for all weather events, unlimited cloud storage, claim support concierge, and priority customer support.',
      category: 'Premium'
    }
  ];

  const quickLinks = [
    { title: 'Download Mobile App', description: 'Access your kit on the go' },
    { title: 'Video Tutorials', description: 'Watch step-by-step guides' },
    { title: 'Community Forum', description: 'Connect with other homeowners' },
    { title: 'Resource Library', description: 'Additional guides and templates' }
  ];

  const filteredFAQs = faqItems.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F5F7FB] p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-[#6B7280] mb-2">
            <span>Support</span>
            <ArrowRight className="h-4 w-4" />
            <span>Help Center</span>
          </div>
          <h1 className="text-3xl font-bold text-[#0A0E27] mb-4">
            Help & Support Center
          </h1>
          <p className="text-[#6B7280] text-lg mb-6">
            Get the help you need to maximize your storm protection. Our support team is here to assist you.
          </p>
          
          <div className="flex items-center space-x-4">
            <Badge className={`${user.membershipLevel === 'premium' ? 'bg-[#00D46A]' : 'bg-[#5B5BFF]'} text-white`}>
              {user.membershipLevel === 'premium' ? 'Premium Support' : 'Standard Support'}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Information */}
            <Card className="p-6">
              <h3 className="font-bold text-[#0A0E27] mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <div className="font-medium text-[#0A0E27]">Email Support</div>
                  <div className="text-[#6B7280]">support@stormproof.com</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-[#0A0E27]">Phone Support</div>
                  <div className="text-[#6B7280]">1-800-STORM-99</div>
                  <div className="text-xs text-[#6B7280]">Mon-Fri 8AM-8PM EST</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-[#0A0E27]">Emergency Line</div>
                  <div className="text-[#6B7280]">1-800-STORM-911</div>
                  <div className="text-xs text-[#6B7280]">24/7 Storm Season</div>
                </div>
              </div>
            </Card>

            {/* Quick Links */}
            <Card className="p-6">
              <h3 className="font-bold text-[#0A0E27] mb-4">Quick Links</h3>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <div key={index} className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                    <div className="font-medium text-sm text-[#0A0E27]">{link.title}</div>
                    <div className="text-xs text-[#6B7280]">{link.description}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Support Options */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-[#0A0E27] mb-6">Get Support</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {supportOptions.map((option, index) => (
                  <Card key={index} className={`p-4 transition-all duration-200 ${
                    option.premium && user.membershipLevel === 'free' 
                      ? 'opacity-60 border-dashed' 
                      : 'hover:shadow-md cursor-pointer'
                  }`}>
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${option.color} text-white`}>
                        {option.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-bold text-[#0A0E27]">{option.title}</h3>
                          {option.premium && (
                            <Badge className="bg-gradient-to-r from-[#5B5BFF] to-[#9810FA] text-white text-xs">
                              Premium
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-[#6B7280] mb-2">{option.description}</p>
                        <div className="text-xs text-[#6B7280]">Available: {option.availability}</div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Button 
                        size="sm" 
                        className={`w-full ${
                          option.premium && user.membershipLevel === 'free'
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-[#5B5BFF] hover:bg-[#4C6EF7]'
                        } text-white`}
                        disabled={option.premium && user.membershipLevel === 'free'}
                      >
                        {option.premium && user.membershipLevel === 'free' ? 'Upgrade Required' : 'Contact Now'}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* FAQ Section */}
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <HelpCircle className="h-6 w-6 text-[#5B5BFF]" />
                <h2 className="text-2xl font-bold text-[#0A0E27]">Frequently Asked Questions</h2>
              </div>

              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6B7280] h-4 w-4" />
                <Input
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <div key={faq.id} className="border border-gray-200 rounded-lg">
                    <button
                      className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-medium text-[#0A0E27]">{faq.question}</h3>
                          <Badge variant="outline" className="text-xs">
                            {faq.category}
                          </Badge>
                        </div>
                      </div>
                      {expandedFAQ === faq.id ? (
                        <ChevronDown className="h-4 w-4 text-[#6B7280]" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-[#6B7280]" />
                      )}
                    </button>
                    
                    {expandedFAQ === faq.id && (
                      <div className="px-4 pb-4 text-[#6B7280]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Still Need Help */}
            <Card className="p-6 bg-gradient-to-r from-[#5B5BFF] to-[#9810FA] text-white">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Still Need Help?</h3>
                <p className="text-blue-100 mb-6">
                  Can't find what you're looking for? Our support team is standing by to help you 
                  with any questions about your Storm Proof membership.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" className="bg-white text-[#5B5BFF] hover:bg-gray-100">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Start Live Chat
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    <FileText className="h-4 w-4 mr-2" />
                    Submit Ticket
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}