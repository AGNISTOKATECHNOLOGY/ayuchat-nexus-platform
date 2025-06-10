
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CreditCard, Download, Receipt, Zap, CheckCircle, AlertCircle, Crown } from 'lucide-react';

const Billing = () => {
  const currentPlan = {
    name: 'Pro',
    price: 49,
    period: 'month',
    features: [
      'Up to 10,000 messages/month',
      '3 Phone numbers',
      'Advanced analytics',
      'Automation & chatbots',
      'Priority support',
      'API access'
    ],
    usage: {
      messages: { used: 7500, limit: 10000 },
      phoneNumbers: { used: 2, limit: 3 },
      templates: { used: 18, limit: 50 }
    }
  };

  const plans = [
    {
      name: 'Starter',
      price: 19,
      period: 'month',
      features: [
        'Up to 1,000 messages/month',
        '1 Phone number',
        'Basic analytics',
        'Email support'
      ],
      recommended: false
    },
    {
      name: 'Pro',
      price: 49,
      period: 'month',
      features: [
        'Up to 10,000 messages/month',
        '3 Phone numbers',
        'Advanced analytics',
        'Automation & chatbots',
        'Priority support',
        'API access'
      ],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: 149,
      period: 'month',
      features: [
        'Up to 100,000 messages/month',
        'Unlimited phone numbers',
        'Custom analytics',
        'Advanced automation',
        'Dedicated support',
        'Custom integrations',
        'White-label options'
      ],
      recommended: false
    }
  ];

  const invoices = [
    {
      id: 'INV-2024-001',
      date: '2024-06-01',
      amount: 49.00,
      status: 'Paid',
      plan: 'Pro Plan',
      period: 'June 2024'
    },
    {
      id: 'INV-2024-002',
      date: '2024-05-01',
      amount: 49.00,
      status: 'Paid',
      plan: 'Pro Plan',
      period: 'May 2024'
    },
    {
      id: 'INV-2024-003',
      date: '2024-04-01',
      amount: 49.00,
      status: 'Paid',
      plan: 'Pro Plan',
      period: 'April 2024'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Billing & Subscription</h1>
          <p className="text-muted-foreground">Manage your subscription and billing information</p>
        </div>
        <Button className="gradient-primary">
          <CreditCard className="w-4 h-4 mr-2" />
          Update Payment Method
        </Button>
      </div>

      {/* Current Plan */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="flex items-center gap-2">
                Current Plan: {currentPlan.name}
                <Badge className="gradient-primary">Active</Badge>
              </CardTitle>
              <CardDescription>
                ${currentPlan.price}/{currentPlan.period} • Next billing: July 1, 2024
              </CardDescription>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">${currentPlan.price}</p>
              <p className="text-sm text-muted-foreground">per {currentPlan.period}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Messages</span>
                <span className="text-sm text-muted-foreground">
                  {currentPlan.usage.messages.used.toLocaleString()} / {currentPlan.usage.messages.limit.toLocaleString()}
                </span>
              </div>
              <Progress 
                value={(currentPlan.usage.messages.used / currentPlan.usage.messages.limit) * 100} 
                className="h-2"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Phone Numbers</span>
                <span className="text-sm text-muted-foreground">
                  {currentPlan.usage.phoneNumbers.used} / {currentPlan.usage.phoneNumbers.limit}
                </span>
              </div>
              <Progress 
                value={(currentPlan.usage.phoneNumbers.used / currentPlan.usage.phoneNumbers.limit) * 100} 
                className="h-2"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Templates</span>
                <span className="text-sm text-muted-foreground">
                  {currentPlan.usage.templates.used} / {currentPlan.usage.templates.limit}
                </span>
              </div>
              <Progress 
                value={(currentPlan.usage.templates.used / currentPlan.usage.templates.limit) * 100} 
                className="h-2"
              />
            </div>
          </div>
          
          <div className="mt-6 flex gap-2">
            <Button variant="outline">
              Change Plan
            </Button>
            <Button variant="outline">
              View Usage Details
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Available Plans */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Available Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card key={plan.name} className={plan.recommended ? 'border-primary shadow-lg' : ''}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {plan.name}
                      {plan.recommended && (
                        <Badge className="gradient-primary">
                          <Crown className="w-3 h-3 mr-1" />
                          Recommended
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription>
                      ${plan.price}/{plan.period}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">${plan.price}</p>
                    <p className="text-sm text-muted-foreground">per {plan.period}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={plan.name === currentPlan.name ? 'w-full' : 'w-full gradient-primary'}
                  variant={plan.name === currentPlan.name ? 'outline' : 'default'}
                  disabled={plan.name === currentPlan.name}
                >
                  {plan.name === currentPlan.name ? 'Current Plan' : 'Upgrade'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Billing History */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Billing History</CardTitle>
              <CardDescription>View and download your previous invoices</CardDescription>
            </div>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Period</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.plan}</TableCell>
                  <TableCell>{invoice.period}</TableCell>
                  <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Receipt className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Payment Method */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>Manage your payment information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-4 border rounded-lg">
              <CreditCard className="w-8 h-8 text-muted-foreground" />
              <div className="flex-1">
                <p className="font-medium">•••• •••• •••• 4242</p>
                <p className="text-sm text-muted-foreground">Expires 12/26</p>
              </div>
              <Badge variant="outline">Primary</Badge>
            </div>
            <Button variant="outline" className="w-full">
              Update Payment Method
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Billing Address</CardTitle>
            <CardDescription>Your billing information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="font-medium">John Doe</p>
            <p className="text-sm text-muted-foreground">123 Business Street</p>
            <p className="text-sm text-muted-foreground">Suite 100</p>
            <p className="text-sm text-muted-foreground">San Francisco, CA 94105</p>
            <p className="text-sm text-muted-foreground">United States</p>
            <Button variant="outline" className="w-full mt-4">
              Update Address
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Billing;
