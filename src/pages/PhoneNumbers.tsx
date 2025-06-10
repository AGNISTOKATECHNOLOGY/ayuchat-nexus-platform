
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Phone, Settings, Trash2, Shield, Globe, Users } from 'lucide-react';

const PhoneNumbers = () => {
  const mockPhoneNumbers = [
    {
      id: 1,
      number: '+1 (555) 123-4567',
      displayName: 'Customer Support',
      country: 'United States',
      status: 'Active',
      verified: true,
      plan: 'Business',
      messagesThisMonth: 12500,
      webhookUrl: 'https://api.yourapp.com/webhook',
      addedDate: '2024-01-15'
    },
    {
      id: 2,
      number: '+44 20 7946 0958',
      displayName: 'UK Sales Team',
      country: 'United Kingdom',
      status: 'Active',
      verified: true,
      plan: 'Enterprise',
      messagesThisMonth: 8900,
      webhookUrl: 'https://api.yourapp.com/webhook/uk',
      addedDate: '2024-02-20'
    },
    {
      id: 3,
      number: '+91 98765 43210',
      displayName: 'India Operations',
      country: 'India',
      status: 'Pending',
      verified: false,
      plan: 'Business',
      messagesThisMonth: 0,
      webhookUrl: '',
      addedDate: '2024-06-01'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Phone Numbers</h1>
          <p className="text-muted-foreground">Manage your WhatsApp Business phone numbers</p>
        </div>
        <Button className="gradient-primary">
          <Plus className="w-4 h-4 mr-2" />
          Add Phone Number
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">Total Numbers</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-muted-foreground">Verified</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Globe className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Users className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">21.4K</p>
                <p className="text-sm text-muted-foreground">Messages This Month</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Phone Number Management</CardTitle>
          <CardDescription>
            Configure and manage your WhatsApp Business API phone numbers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Phone Number</TableHead>
                <TableHead>Display Name</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Messages</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPhoneNumbers.map((phone) => (
                <TableRow key={phone.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">{phone.number}</span>
                      {phone.verified && (
                        <Shield className="w-4 h-4 text-green-600" />
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{phone.displayName}</TableCell>
                  <TableCell>{phone.country}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={phone.status === 'Active' ? 'default' : 'secondary'}
                    >
                      {phone.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{phone.plan}</Badge>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{phone.messagesThisMonth.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">This month</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Settings className="w-4 h-4" />
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Webhook Configuration</CardTitle>
            <CardDescription>
              Configure webhook endpoints for receiving messages
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Webhook URL</h4>
              <p className="text-sm font-mono bg-background p-2 rounded border">
                https://api.yourapp.com/webhook
              </p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-medium mb-2">Verify Token</h4>
              <p className="text-sm font-mono bg-background p-2 rounded border">
                ••••••••••••••••••••
              </p>
            </div>
            <Button variant="outline" className="w-full">
              Update Webhook Settings
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Usage Analytics</CardTitle>
            <CardDescription>
              Monitor your phone number usage and performance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Messages Sent</span>
              <span className="font-medium">21,400</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Messages Delivered</span>
              <span className="font-medium">20,980</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Delivery Rate</span>
              <span className="font-medium text-green-600">98.0%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Response Rate</span>
              <span className="font-medium">24.5%</span>
            </div>
            <Button variant="outline" className="w-full">
              View Detailed Analytics
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PhoneNumbers;
