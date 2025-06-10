
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, MessageSquare, Users, Send, Eye, Download, Calendar } from 'lucide-react';

const Analytics = () => {
  const messageData = [
    { name: 'Mon', sent: 420, delivered: 410, read: 380 },
    { name: 'Tue', sent: 520, delivered: 510, read: 485 },
    { name: 'Wed', sent: 380, delivered: 370, read: 345 },
    { name: 'Thu', sent: 680, delivered: 665, read: 620 },
    { name: 'Fri', sent: 750, delivered: 735, read: 690 },
    { name: 'Sat', sent: 290, delivered: 285, read: 265 },
    { name: 'Sun', sent: 350, delivered: 340, read: 315 }
  ];

  const engagementData = [
    { name: 'Jan', responses: 1200, conversions: 89 },
    { name: 'Feb', responses: 1450, conversions: 102 },
    { name: 'Mar', responses: 1180, conversions: 78 },
    { name: 'Apr', responses: 1680, conversions: 125 },
    { name: 'May', responses: 1920, conversions: 145 },
    { name: 'Jun', responses: 2100, conversions: 167 }
  ];

  const channelData = [
    { name: 'Broadcast', value: 45, color: '#0A7C7B' },
    { name: 'Automation', value: 30, color: '#00C2C3' },
    { name: 'Manual', value: 15, color: '#4F46E5' },
    { name: 'API', value: 10, color: '#10B981' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Advanced Analytics</h1>
          <p className="text-muted-foreground">Comprehensive insights into your WhatsApp campaigns</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">45.2K</p>
                <p className="text-sm text-muted-foreground">Total Messages</p>
              </div>
              <div className="p-2 bg-primary/10 rounded-lg">
                <Send className="w-5 h-5 text-primary" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-600">+12.5%</span>
              <span className="text-sm text-muted-foreground">vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">42.8K</p>
                <p className="text-sm text-muted-foreground">Delivered</p>
              </div>
              <div className="p-2 bg-green-100 rounded-lg">
                <MessageSquare className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-600">94.7%</span>
              <span className="text-sm text-muted-foreground">delivery rate</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">38.1K</p>
                <p className="text-sm text-muted-foreground">Read</p>
              </div>
              <div className="p-2 bg-blue-100 rounded-lg">
                <Eye className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingDown className="w-4 h-4 text-red-600" />
              <span className="text-sm text-red-600">-2.1%</span>
              <span className="text-sm text-muted-foreground">read rate</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">8.9K</p>
                <p className="text-sm text-muted-foreground">Responses</p>
              </div>
              <div className="p-2 bg-orange-100 rounded-lg">
                <Users className="w-5 h-5 text-orange-600" />
              </div>
            </div>
            <div className="flex items-center gap-1 mt-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-600">+8.3%</span>
              <span className="text-sm text-muted-foreground">response rate</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Message Performance</CardTitle>
            <CardDescription>Daily message delivery and read rates</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={messageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sent" fill="#0A7C7B" name="Sent" />
                <Bar dataKey="delivered" fill="#00C2C3" name="Delivered" />
                <Bar dataKey="read" fill="#4F46E5" name="Read" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Engagement Trends</CardTitle>
            <CardDescription>Monthly responses and conversions</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="responses" stroke="#0A7C7B" strokeWidth={3} name="Responses" />
                <Line type="monotone" dataKey="conversions" stroke="#00C2C3" strokeWidth={3} name="Conversions" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Message Channels</CardTitle>
            <CardDescription>Distribution of message types</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={channelData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                >
                  {channelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {channelData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Campaigns</CardTitle>
            <CardDescription>Best campaigns by engagement rate</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Summer Sale 2024</p>
                <p className="text-sm text-muted-foreground">Broadcast Campaign</p>
              </div>
              <Badge className="bg-green-100 text-green-800">
                23.4%
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Welcome Series</p>
                <p className="text-sm text-muted-foreground">Automation</p>
              </div>
              <Badge className="bg-blue-100 text-blue-800">
                18.9%
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Product Launch</p>
                <p className="text-sm text-muted-foreground">Sequence</p>
              </div>
              <Badge className="bg-orange-100 text-orange-800">
                16.2%
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">Cart Recovery</p>
                <p className="text-sm text-muted-foreground">Automation</p>
              </div>
              <Badge className="bg-purple-100 text-purple-800">
                14.8%
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Insights</CardTitle>
            <CardDescription>Contact growth and engagement</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Total Contacts</span>
              <span className="font-medium">12,456</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Active Contacts</span>
              <span className="font-medium">8,923</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">New This Month</span>
              <span className="font-medium text-green-600">+456</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Engagement Rate</span>
              <span className="font-medium">71.6%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Avg. Response Time</span>
              <span className="font-medium">2.3 hours</span>
            </div>
            <Button variant="outline" className="w-full mt-4">
              View Contact Analytics
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
