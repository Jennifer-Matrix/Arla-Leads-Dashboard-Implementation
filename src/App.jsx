import React, { useState } from 'react';
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { MyLeads } from "./components/MyLeads";
import { 
  Phone, 
  Bell, 
  BarChart3, 
  Users, 
  Target, 
  DollarSign,
  Star,
  CheckCircle,
  Circle,
  Filter,
  Home,
  UserCheck,
  MessageSquare,
  Settings,
  Zap,
  HelpCircle,
  Award,
  ShoppingCart,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const chartData = [
    { day: 'Mon', value: 40 },
    { day: 'Tue', value: 60 },
    { day: 'Wed', value: 80 },
    { day: 'Thu', value: 100 },
    { day: 'Fri', value: 70 },
    { day: 'Sat', value: 90 },
    { day: 'Sun', value: 50 }
  ];

  const leaderboardData = [
    { rank: 1, name: 'Liam Smith', change: '+55%', premium: '1,474.48', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
    { rank: 2, name: 'Olivia Johnson', change: '+43%', premium: '1,386.32', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b662?w=100&h=100&fit=crop&crop=face' },
    { rank: 3, name: 'Noah Williams', change: '-21%', premium: '1,264.12', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' },
    { rank: 4, name: 'Emma Brown', change: '-10%', premium: '551.28', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
    { rank: 5, name: 'Elijah Jones', change: '+13%', premium: '365.88', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
    { rank: 6, name: 'John Lawrence', change: '+11%', premium: '344.97', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face' }
  ];

  const campaignData = [
    { state: 'FL', status: 'Available', type: 'New MTC' },
    { state: 'AZ', status: 'Available', type: 'Retro MTC' },
    { state: 'MI', status: 'Available', type: 'FEX Gold' },
    { state: 'TX', status: 'Available', type: 'New MTC' },
    { state: 'FL', status: 'Available', type: 'New MTC' },
    { state: 'AZ', status: 'Available', type: 'Retro MTC' },
    { state: 'MI', status: 'Available', type: 'FEX Gold' },
    { state: 'CO', status: 'Available', type: 'New MTC' }
  ];

  const transactionData = [
    { id: '#55874', type: 'FEX Gold', date: '05-09-2025', quantity: 100, amount: 1000 },
    { id: '#55874', type: 'FEX Gold', date: '05-09-2025', quantity: 100, amount: 1000 },
    { id: '#55874', type: 'FEX Gold', date: '05-09-2025', quantity: 100, amount: 1000 },
    { id: '#53874', type: 'FEX Gold', date: '05-09-2025', quantity: 100, amount: 1000 },
    { id: '#55874', type: 'FEX Gold', date: '05-09-2025', quantity: 100, amount: 1000 }
  ];

  const renderDashboardContent = () => (
    <>
      {/* Hero Section */}
      <div className="relative px-6 py-8 mb-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="w-full h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white">Leads Made Easy</h2>
          </div>
        </div>
      </div>

      <div className="px-6 space-y-8 max-w-screen-2xl mx-auto">
        {/* Dashboard Metrics Section */}
        <div className="bg-gradient-to-br from-chart-5 via-chart-4 to-chart-3 rounded-2xl p-8 mb-8">
          {/* Stats Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {/* Total Leads Purchased */}
            <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-white/20 p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Total Leads Purchased</p>
                  <div className="w-8 h-8 bg-chart-1/10 rounded-full flex items-center justify-center">
                    <BarChart3 className="h-4 w-4 text-chart-1" />
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-4xl">125</span>
                  <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">+1.3%</Badge>
                </div>
              </div>
            </div>

            {/* Total Leads Suppressed */}
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Total Leads Suppressed</p>
                  <div className="w-8 h-8 bg-chart-1/10 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-chart-1" />
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-4xl">80</span>
                  <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">+3.69%</Badge>
                </div>
              </div>
            </div>

            {/* Favorite Lead by Purchase Quantity */}
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Favorite Lead by Purchase Quantity</p>
                  <div className="w-8 h-8 bg-chart-1/10 rounded-full flex items-center justify-center">
                    <Target className="h-4 w-4 text-chart-1" />
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-4xl">FEX</span>
                  <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">+3.0%</Badge>
                </div>
              </div>
            </div>

            {/* Issued Premium */}
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">Issued Premium</p>
                  <div className="w-8 h-8 bg-chart-1/10 rounded-full flex items-center justify-center">
                    <DollarSign className="h-4 w-4 text-chart-1" />
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-4xl">$15,000</span>
                  <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">+3.04%</Badge>
                </div>
              </div>
            </div>

            {/* Popular Lead Types */}
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">Popular Lead Types</p>
                <div className="flex items-center justify-center">
                  <div className="relative w-24 h-24">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgb(70, 95, 255)"
                        strokeWidth="3"
                        strokeDasharray="45, 100"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="rgb(156, 185, 255)"
                        strokeWidth="3"
                        strokeDasharray="30, 100"
                        strokeDashoffset="-45"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs text-chart-1">leads</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-2">Most Purchased Lead Types as of<br/>May 22, 2025</p>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-chart-1 rounded-full"></div>
                        <span className="text-muted-foreground">Mortgage Protection</span>
                      </div>
                      <span>45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-chart-2 rounded-full"></div>
                        <span className="text-muted-foreground">FEX</span>
                      </div>
                      <span>30%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-chart-3 rounded-full"></div>
                        <span className="text-muted-foreground">Digital Leads</span>
                      </div>
                      <span>25%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Leads Suppressed by Day */}
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg">Leads Suppressed by Day</h3>
                  <Button variant="ghost" size="sm" className="text-chart-1 text-xs">This week</Button>
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl">12,500</span>
                  <span className="text-sm text-muted-foreground">(Suppressed leads)</span>
                </div>
                <div className="h-48 flex items-end justify-between space-x-2">
                  {chartData.map((item, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center space-y-1">
                      <div 
                        className="w-full bg-chart-1 rounded-t transition-all duration-300 hover:opacity-80"
                        style={{height: `${item.value}%`}}
                      ></div>
                      <span className="text-xs text-muted-foreground">{item.day}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0k</span>
                  <span>1k</span>
                  <span>2k</span>
                  <span>3k</span>
                  <span>4k</span>
                </div>
              </div>
            </div>

            {/* Performance Compared to Other Agents */}
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg">Performance Compared to Other Agents</h3>
                  <Button variant="ghost" size="sm" className="text-chart-1 text-xs">Last 6 Months</Button>
                </div>
                <div className="flex items-center space-x-4 text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-chart-1 rounded-full"></div>
                    <span>You</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-chart-2 rounded-full"></div>
                    <span>Other Agents</span>
                  </div>
                </div>
                <div className="h-48 relative">
                  <svg className="w-full h-full">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgb(70, 95, 255)" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="rgb(70, 95, 255)" stopOpacity="0.05"/>
                      </linearGradient>
                    </defs>
                    <path 
                      d="M20,140 Q60,100 120,110 T240,90 T360,70 T480,80" 
                      stroke="rgb(70, 95, 255)" 
                      strokeWidth="2" 
                      fill="none"
                    />
                    <path 
                      d="M20,160 Q60,150 120,140 T240,130 T360,120 T480,110" 
                      stroke="rgb(156, 185, 255)" 
                      strokeWidth="2" 
                      fill="none"
                    />
                    <path 
                      d="M20,140 Q60,100 120,110 T240,90 T360,70 T480,80 L480,180 L20,180 Z" 
                      fill="url(#gradient)"
                    />
                  </svg>
                  <div className="absolute top-4 right-4 bg-chart-1 text-primary-foreground px-3 py-2 rounded text-sm">
                    <div className="text-xs">Jun 24, 2025</div>
                    <div>$2,408</div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News, Leaderboard, and Campaign sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* News */}
          <Card className="bg-background border border-border">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-foreground">News</CardTitle>
                <Button variant="ghost" size="sm" className="text-chart-1 hover:bg-chart-5 flex items-center gap-1">
                  This week
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
                <div className="text-white text-center">
                  <h3 className="text-lg font-bold">VortexVirtual</h3>
                  <p className="text-sm">Your partner in success</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3 text-sm">
                  <div className="w-5 h-5 bg-chart-1 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <span className="text-foreground">New Arla Leads Look is here to STAY</span>
                    <p className="text-xs text-muted-foreground mt-1">TRIAL_APRIL_2025</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 text-sm">
                  <div className="w-5 h-5 bg-chart-1 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <span className="text-foreground">Arla Leads Lock-In</span>
                    <p className="text-xs text-muted-foreground mt-1">TRIAL_APRIL_2025</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 text-sm">
                  <div className="w-5 h-5 bg-chart-1 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <div>
                    <span className="text-foreground">Increase Your Conversion Rate</span>
                    <p className="text-xs text-muted-foreground mt-1">TRIAL_APRIL_2025</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Live Leaderboard */}
          <Card>
            <CardHeader>
              <CardTitle>Live Leaderboard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Rank</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Change</TableHead>
                      <TableHead>Premium</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leaderboardData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="flex items-center">
                            {row.rank === 1 && <Star className="h-4 w-4 text-yellow-500 mr-1" />}
                            <span>#{row.rank}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={row.avatar} alt={row.name} />
                              <AvatarFallback>{row.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm">{row.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={row.change.startsWith('+') ? 
                            "bg-green-100 text-green-800 border-green-200" : 
                            "bg-red-100 text-red-800 border-red-200"}>
                            {row.change}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-sm">{row.premium}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Mailing Campaign */}
          <Card>
            <CardHeader>
              <CardTitle>Mailing Campaign Availability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>State</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Type</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {campaignData.map((campaign, index) => (
                      <TableRow key={index}>
                        <TableCell>{campaign.state}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm">{campaign.status}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm">{campaign.type}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transaction History and Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Transaction History</CardTitle>
                <Button variant="ghost" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter by
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Qty</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {transactionData.map((transaction, index) => (
                      <TableRow key={index}>
                        <TableCell className="text-sm">{transaction.id}</TableCell>
                        <TableCell className="text-sm">{transaction.type}</TableCell>
                        <TableCell className="text-sm">{transaction.date}</TableCell>
                        <TableCell className="text-sm">{transaction.quantity}</TableCell>
                        <TableCell className="text-sm">{transaction.amount}</TableCell>
                        <TableCell>
                          <Button size="sm" className="bg-chart-1 hover:bg-chart-1/90">View</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>My Tasks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">Add a to-do</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Circle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm">Talk to customer</p>
                    <p className="text-xs text-muted-foreground">Important info</p>
                    <p className="text-xs text-chart-1">9:30 AM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Circle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm">Talk to customer</p>
                    <p className="text-xs text-muted-foreground">Important info</p>
                    <p className="text-xs text-chart-1">TBD - in future</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Circle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm">Talk to customer</p>
                    <p className="text-xs text-muted-foreground">Important info</p>
                    <p className="text-xs text-chart-1">TBD - in future</p>
                  </div>
                </div>
              </div>
              <div className="w-full bg-muted h-2 rounded-full">
                <div className="w-1/3 h-2 bg-chart-1 rounded-full"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border px-6 py-4">
        <div className="flex items-center justify-between max-w-screen-2xl mx-auto">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <div className="h-10 w-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                <span className="text-white font-bold">Arla Leads</span>
              </div>
            </div>
            <div className="hidden md:block">
              <p className="text-foreground">Hello, <strong>Jheisson</strong>. Today is a good day to protect families.</p>
              <p className="text-foreground">Congratulations.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" alt="User" />
              <AvatarFallback>JH</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-background border-b border-border px-6 py-3">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center space-x-1 overflow-x-auto">
            <Button 
              variant={currentView === 'dashboard' ? 'default' : 'ghost'} 
              size="sm" 
              className={`whitespace-nowrap ${currentView === 'dashboard' ? 'bg-chart-1 hover:bg-chart-1/90' : ''}`}
              onClick={() => setCurrentView('dashboard')}
            >
              <Home className="h-4 w-4 mr-2" />
              Dashboard
            </Button>
            <Button 
              variant={currentView === 'leads' ? 'default' : 'ghost'} 
              size="sm" 
              className={`whitespace-nowrap ${currentView === 'leads' ? 'bg-chart-1 hover:bg-chart-1/90' : ''}`}
              onClick={() => setCurrentView('leads')}
            >
              <UserCheck className="h-4 w-4 mr-2" />
              My Leads
            </Button>
            <Button variant="ghost" size="sm" className="whitespace-nowrap">
              <MessageSquare className="h-4 w-4 mr-2" />
              Conversations
            </Button>
            <Button variant="ghost" size="sm" className="whitespace-nowrap">
              <Zap className="h-4 w-4 mr-2" />
              Automations
            </Button>
            <Button variant="ghost" size="sm" className="whitespace-nowrap">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button variant="ghost" size="sm" className="whitespace-nowrap">
              <HelpCircle className="h-4 w-4 mr-2" />
              Support
            </Button>
            <Button variant="ghost" size="sm" className="whitespace-nowrap">
              <Award className="h-4 w-4 mr-2" />
              Affiliate Program
            </Button>
            <Button variant="default" size="sm" className="ml-auto whitespace-nowrap">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Buy Leads
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      {currentView === 'dashboard' && renderDashboardContent()}
      
      {currentView === 'leads' && (
        <div className="px-6 py-8 max-w-screen-2xl mx-auto">
          <MyLeads />
        </div>
      )}

      {/* Footer */}
      <footer className="mt-12 px-6 py-6 border-t border-border text-center text-sm text-muted-foreground">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <span>Copyright © 2025</span>
            <span>Privacy Policy</span>
            <span>Terms and Conditions</span>
          </div>
        </div>
      </footer>
    </div>
  );
} 