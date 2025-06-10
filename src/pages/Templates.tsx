
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Search, Edit, Trash2, Copy, Eye, FileText, MessageSquare } from 'lucide-react';

const Templates = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const mockTemplates = [
    {
      id: 1,
      name: 'Welcome Message',
      category: 'Onboarding',
      status: 'Approved',
      language: 'English',
      type: 'Text',
      lastUsed: '2 hours ago',
      usageCount: 245,
      preview: 'Welcome to AyuChat! We are excited to have you on board. Feel free to reach out if you have any questions.'
    },
    {
      id: 2,
      name: 'Order Confirmation',
      category: 'E-commerce',
      status: 'Approved',
      language: 'English',
      type: 'Media',
      lastUsed: '1 day ago',
      usageCount: 892,
      preview: 'Your order #{{order_number}} has been confirmed! Expected delivery: {{delivery_date}}'
    },
    {
      id: 3,
      name: 'Appointment Reminder',
      category: 'Healthcare',
      status: 'Pending',
      language: 'English',
      type: 'Text',
      lastUsed: 'Never',
      usageCount: 0,
      preview: 'Hi {{name}}, this is a reminder for your appointment on {{date}} at {{time}}.'
    },
    {
      id: 4,
      name: 'Payment Reminder',
      category: 'Finance',
      status: 'Rejected',
      language: 'English',
      type: 'Text',
      lastUsed: 'Never',
      usageCount: 0,
      preview: 'Your payment of ${{amount}} is due on {{due_date}}. Please make the payment to avoid late fees.'
    }
  ];

  const filteredTemplates = mockTemplates.filter(template =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    template.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved': return 'default';
      case 'Pending': return 'secondary';
      case 'Rejected': return 'destructive';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Templates</h1>
          <p className="text-muted-foreground">Manage your WhatsApp message templates</p>
        </div>
        <Button className="gradient-primary">
          <Plus className="w-4 h-4 mr-2" />
          Create Template
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">24</p>
                <p className="text-sm text-muted-foreground">Total Templates</p>
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
                <p className="text-2xl font-bold">18</p>
                <p className="text-sm text-muted-foreground">Approved</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <FileText className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">4</p>
                <p className="text-sm text-muted-foreground">Pending</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-100 rounded-lg">
                <FileText className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-muted-foreground">Rejected</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Template Library</CardTitle>
          <CardDescription>
            View and manage all your WhatsApp Business API message templates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Template</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>Last Used</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTemplates.map((template) => (
                <TableRow key={template.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{template.name}</p>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {template.preview}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{template.category}</Badge>
                  </TableCell>
                  <TableCell>{template.type}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(template.status)}>
                      {template.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{template.usageCount}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {template.lastUsed}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Copy className="w-4 h-4" />
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
    </div>
  );
};

export default Templates;
