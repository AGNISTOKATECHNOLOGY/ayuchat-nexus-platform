
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Send, Edit, Trash2, Users, MessageSquare, TrendingUp, Calendar } from 'lucide-react';

const Campaigns = () => {
  const mockCampaigns = [
    {
      id: 1,
      name: 'Summer Sale 2024',
      status: 'Active',
      type: 'Broadcast',
      recipients: 2500,
      sent: 2500,
      delivered: 2450,
      opened: 1890,
      clicked: 567,
      createdAt: '2024-06-01',
      scheduledAt: null
    },
    {
      id: 2,
      name: 'Product Launch Announcement',
      status: 'Scheduled',
      type: 'Sequence',
      recipients: 1200,
      sent: 0,
      delivered: 0,
      opened: 0,
      clicked: 0,
      createdAt: '2024-06-05',
      scheduledAt: '2024-06-15'
    },
    {
      id: 3,
      name: 'Customer Feedback Survey',
      status: 'Completed',
      type: 'Broadcast',
      recipients: 800,
      sent: 800,
      delivered: 785,
      opened: 623,
      clicked: 298,
      createdAt: '2024-05-15',
      scheduledAt: null
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Campaigns</h1>
          <p className="text-muted-foreground">Create and manage your WhatsApp marketing campaigns</p>
        </div>
        <Button className="gradient-primary">
          <Plus className="w-4 h-4 mr-2" />
          Create Campaign
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">47</p>
                <p className="text-sm text-muted-foreground">Total Campaigns</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">125.6K</p>
                <p className="text-sm text-muted-foreground">Messages Sent</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">73.2%</p>
                <p className="text-sm text-muted-foreground">Delivery Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <MessageSquare className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">18.9%</p>
                <p className="text-sm text-muted-foreground">Open Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Campaign List</CardTitle>
          <CardDescription>
            View and manage all your WhatsApp campaigns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Campaign</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Recipients</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockCampaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{campaign.name}</p>
                      {campaign.scheduledAt && (
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          Scheduled: {campaign.scheduledAt}
                        </p>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{campaign.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        campaign.status === 'Active' ? 'default' :
                        campaign.status === 'Scheduled' ? 'secondary' :
                        'outline'
                      }
                    >
                      {campaign.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{campaign.recipients.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Delivered:</span>
                        <span>{campaign.delivered}/{campaign.sent}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Opened:</span>
                        <span>{campaign.opened}</span>
                      </div>
                      {campaign.clicked > 0 && (
                        <div className="flex justify-between text-sm">
                          <span>Clicked:</span>
                          <span>{campaign.clicked}</span>
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {campaign.createdAt}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
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
    </div>
  );
};

export default Campaigns;
