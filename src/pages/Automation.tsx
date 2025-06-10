
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Zap, Play, Pause, Edit, Trash2, Bot, MessageSquare, Clock, Users } from 'lucide-react';

const Automation = () => {
  const mockAutomations = [
    {
      id: 1,
      name: 'Welcome Series',
      type: 'Chatbot',
      status: 'Active',
      trigger: 'New Contact',
      responses: 1250,
      conversions: 89,
      lastTriggered: '5 minutes ago',
      createdAt: '2024-05-15'
    },
    {
      id: 2,
      name: 'Abandoned Cart Recovery',
      type: 'Workflow',
      status: 'Active',
      trigger: 'Cart Abandonment',
      responses: 450,
      conversions: 67,
      lastTriggered: '2 hours ago',
      createdAt: '2024-04-20'
    },
    {
      id: 3,
      name: 'FAQ Assistant',
      type: 'Chatbot',
      status: 'Active',
      trigger: 'Keyword Match',
      responses: 2100,
      conversions: 45,
      lastTriggered: '1 minute ago',
      createdAt: '2024-03-10'
    },
    {
      id: 4,
      name: 'Birthday Wishes',
      type: 'Workflow',
      status: 'Paused',
      trigger: 'Date-based',
      responses: 180,
      conversions: 12,
      lastTriggered: '2 days ago',
      createdAt: '2024-02-01'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Automation & Chatbots</h1>
          <p className="text-muted-foreground">Create intelligent workflows and chatbots for WhatsApp</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Bot className="w-4 h-4 mr-2" />
            Create Chatbot
          </Button>
          <Button className="gradient-primary">
            <Plus className="w-4 h-4 mr-2" />
            Create Workflow
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Active Automations</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <MessageSquare className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">3.9K</p>
                <p className="text-sm text-muted-foreground">Responses This Month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">213</p>
                <p className="text-sm text-muted-foreground">Conversions</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">87%</p>
                <p className="text-sm text-muted-foreground">Response Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Automation List</CardTitle>
            <CardDescription>
              View and manage all your automated workflows and chatbots
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead>Last Triggered</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockAutomations.map((automation) => (
                  <TableRow key={automation.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{automation.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Trigger: {automation.trigger}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="flex items-center gap-1 w-fit">
                        {automation.type === 'Chatbot' ? (
                          <Bot className="w-3 h-3" />
                        ) : (
                          <Zap className="w-3 h-3" />
                        )}
                        {automation.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={automation.status === 'Active' ? 'default' : 'secondary'}>
                        {automation.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>Responses:</span>
                          <span>{automation.responses}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Conversions:</span>
                          <span>{automation.conversions}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {automation.lastTriggered}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          {automation.status === 'Active' ? (
                            <Pause className="w-4 h-4" />
                          ) : (
                            <Play className="w-4 h-4" />
                          )}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Start</CardTitle>
            <CardDescription>
              Get started with automation templates
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              <Bot className="w-4 h-4 mr-2" />
              Welcome Bot Template
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Zap className="w-4 h-4 mr-2" />
              Lead Qualification Flow
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <MessageSquare className="w-4 h-4 mr-2" />
              Customer Support Bot
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Clock className="w-4 h-4 mr-2" />
              Appointment Booking
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Chatbot Builder</CardTitle>
            <CardDescription>
              Create intelligent chatbots with visual flow builder
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border-2 border-dashed border-muted-foreground/25 rounded-lg text-center">
              <Bot className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
              <h4 className="font-medium mb-2">Drag & Drop Interface</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Build complex chatbot flows with our intuitive visual editor
              </p>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create New Chatbot
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Performance Analytics</CardTitle>
            <CardDescription>
              Track automation performance and optimize workflows
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Total Interactions</span>
              <span className="font-medium">15,432</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Successful Completions</span>
              <span className="font-medium">13,456</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Completion Rate</span>
              <span className="font-medium text-green-600">87.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Avg. Response Time</span>
              <span className="font-medium">0.8s</span>
            </div>
            <Button variant="outline" className="w-full">
              View Detailed Reports
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Automation;
