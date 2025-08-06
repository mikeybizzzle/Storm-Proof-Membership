import React, { useState } from 'react';
import { FileText, Calendar, ArrowRight, AlertTriangle, TrendingUp, Building, Scale } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  membershipLevel: 'free' | 'premium';
};

interface PolicyUpdatesProps {
  user: User;
}

export function PolicyUpdates({ user }: PolicyUpdatesProps) {
  const [readArticles, setReadArticles] = useState<Set<string>>(new Set(['florida-reform-2024']));

  const recentUpdates = [
    {
      id: 'florida-reform-2024',
      title: 'Florida Insurance Reform Act 2024',
      category: 'Legislative',
      date: '2024-01-15',
      impact: 'high',
      summary: 'New requirements for roof inspections and coverage limitations for older roofs.',
      readTime: '5 min',
      free: true
    },
    {
      id: 'hurricane-deductible-changes',
      title: 'Hurricane Deductible Policy Changes',
      category: 'Coverage',
      date: '2024-01-10',
      impact: 'medium',
      summary: 'Updates to how hurricane deductibles are calculated and applied.',
      readTime: '3 min',
      free: true
    },
    {
      id: 'water-damage-exclusions',
      title: 'Water Damage Coverage Exclusions Update',
      category: 'Coverage',
      date: '2024-01-05',
      impact: 'high',
      summary: 'Important changes to what water damage is covered under standard policies.',
      readTime: '7 min',
      free: false
    }
  ];

  const legislativeUpdates = [
    {
      id: 'assignment-benefits-reform',
      title: 'Assignment of Benefits Reform',
      state: 'Florida',
      effectiveDate: '2024-03-01',
      impact: 'Contractors can no longer directly collect insurance payments',
      status: 'Active'
    },
    {
      id: 'roof-age-restrictions',
      title: 'Roof Age Coverage Restrictions',
      state: 'Florida',
      effectiveDate: '2024-07-01',
      impact: 'Roofs over 15 years old may have limited coverage',
      status: 'Pending'
    },
    {
      id: 'litigation-reforms',
      title: 'Insurance Litigation Reforms',
      state: 'Florida',
      effectiveDate: '2024-01-01',
      impact: 'Changes to attorney fee structures in insurance disputes',
      status: 'Active'
    }
  ];

  const marketTrends = [
    {
      title: 'Average Premium Increases',
      trend: '+18%',
      period: 'Last 12 months',
      icon: <TrendingUp className="h-5 w-5" />,
      color: 'text-red-600'
    },
    {
      title: 'Insurance Company Exits',
      trend: '12 companies',
      period: 'Left FL market',
      icon: <Building className="h-5 w-5" />,
      color: 'text-orange-600'
    },
    {
      title: 'Claims Processing Time',
      trend: '+25 days',
      period: 'Average delay',
      icon: <Calendar className="h-5 w-5" />,
      color: 'text-blue-600'
    }
  ];

  const markAsRead = (articleId: string) => {
    setReadArticles(prev => new Set([...prev, articleId]));
  };

  return (
    <div className="min-h-screen bg-[#F5F7FB] p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-[#6B7280] mb-2">
            <span>Free Content</span>
            <ArrowRight className="h-4 w-4" />
            <span>Policy Updates</span>
          </div>
          <h1 className="text-3xl font-bold text-[#0A0E27] mb-4">
            Policy Changes & Legislative Updates
          </h1>
          <p className="text-[#6B7280] text-lg mb-6">
            Stay informed about insurance policy changes and legislative reforms affecting homeowners in storm-prone areas.
          </p>
          
          <div className="flex items-center space-x-4">
            <Badge className="bg-[#FF6B6B] text-white">
              3 Critical Updates
            </Badge>
            <Badge variant="outline" className="text-[#5B5BFF] border-[#5B5BFF]">
              Florida Focus
            </Badge>
          </div>
        </div>

        {/* Alert Banner */}
        <Card className="p-6 mb-6 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
            <div className="flex-1">
              <h3 className="font-bold text-red-800 mb-1">Breaking: New Florida Roof Inspection Requirements</h3>
              <p className="text-red-700 mb-3">
                Effective March 1, 2024, all roof claims will require professional inspection documentation. 
                This affects how you should prepare for storms and document your property.
              </p>
              <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                Read Full Update
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Market Trends */}
            <Card className="p-6">
              <h3 className="font-bold text-[#0A0E27] mb-4">Market Trends</h3>
              <div className="space-y-4">
                {marketTrends.map((trend, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-gray-100 ${trend.color}`}>
                      {trend.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className={`font-bold ${trend.color}`}>{trend.trend}</span>
                      </div>
                      <p className="text-xs text-[#6B7280]">{trend.title}</p>
                      <p className="text-xs text-[#6B7280]">{trend.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-bold text-[#0A0E27] mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start text-sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Policy Review
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Set Reminders
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm">
                  <Scale className="h-4 w-4 mr-2" />
                  Compare Rates
                </Button>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="recent" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="recent">Recent Updates</TabsTrigger>
                <TabsTrigger value="legislative">Legislative</TabsTrigger>
                <TabsTrigger value="coverage">Coverage Changes</TabsTrigger>
              </TabsList>

              <TabsContent value="recent">
                <div className="space-y-4">
                  {recentUpdates.map((update) => (
                    <Card 
                      key={update.id}
                      className={`p-6 transition-all duration-200 ${
                        readArticles.has(update.id) ? 'opacity-75' : 'hover:shadow-md'
                      } ${!update.free && user.membershipLevel === 'free' ? 'border-dashed opacity-60' : ''}`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-bold text-[#0A0E27] text-lg">{update.title}</h3>
                            <Badge 
                              className={`text-xs ${
                                update.impact === 'high' 
                                  ? 'bg-red-100 text-red-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {update.impact} impact
                            </Badge>
                            {!update.free && (
                              <Badge className="bg-gradient-to-r from-[#5B5BFF] to-[#9810FA] text-white text-xs">
                                Premium
                              </Badge>
                            )}
                          </div>
                          <p className="text-[#6B7280] mb-3">{update.summary}</p>
                          <div className="flex items-center space-x-4 text-sm text-[#6B7280]">
                            <span>{update.category}</span>
                            <span>•</span>
                            <span>{new Date(update.date).toLocaleDateString()}</span>
                            <span>•</span>
                            <span>{update.readTime} read</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          {readArticles.has(update.id) && (
                            <Badge variant="outline" className="text-green-600 border-green-600">
                              ✓ Read
                            </Badge>
                          )}
                        </div>
                        <Button 
                          onClick={() => markAsRead(update.id)}
                          disabled={!update.free && user.membershipLevel === 'free'}
                          className={
                            !update.free && user.membershipLevel === 'free'
                              ? 'bg-gray-400 text-white cursor-not-allowed'
                              : readArticles.has(update.id)
                              ? 'bg-green-600 hover:bg-green-700 text-white'
                              : 'bg-[#5B5BFF] hover:bg-[#4C6EF7] text-white'
                          }
                        >
                          {!update.free && user.membershipLevel === 'free' ? (
                            'Upgrade Required'
                          ) : readArticles.has(update.id) ? (
                            'Read Again'
                          ) : (
                            'Read Article'
                          )}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="legislative">
                <div className="space-y-4">
                  {legislativeUpdates.map((update) => (
                    <Card key={update.id} className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-bold text-[#0A0E27] text-lg">{update.title}</h3>
                            <Badge 
                              className={`text-xs ${
                                update.status === 'Active' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {update.status}
                            </Badge>
                          </div>
                          <p className="text-[#6B7280] mb-3">{update.impact}</p>
                          <div className="flex items-center space-x-4 text-sm text-[#6B7280]">
                            <span>{update.state}</span>
                            <span>•</span>
                            <span>Effective: {new Date(update.effectiveDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button className="bg-[#5B5BFF] hover:bg-[#4C6EF7] text-white">
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="coverage">
                <Card className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#5B5BFF] to-[#9810FA] rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A0E27] mb-2">
                      Coverage Change Analysis
                    </h3>
                    <p className="text-[#6B7280] max-w-md mx-auto">
                      Get detailed analysis of how recent policy changes affect your specific coverage. 
                      Available with Premium membership.
                    </p>
                  </div>
                  
                  <Button className="bg-gradient-to-r from-[#5B5BFF] to-[#9810FA] text-white">
                    Upgrade for Coverage Analysis
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Newsletter Signup */}
            <Card className="p-6 mt-6 bg-gradient-to-r from-[#5B5BFF] to-[#9810FA] text-white">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <FileText className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold mb-1">Stay Updated</h3>
                  <p className="text-blue-100 text-sm">
                    Get weekly updates on policy changes and legislative reforms delivered to your inbox.
                    Premium members receive detailed impact analysis and personalized recommendations.
                  </p>
                </div>
                <Button variant="secondary" className="bg-white text-[#5B5BFF] hover:bg-gray-100">
                  Subscribe
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}