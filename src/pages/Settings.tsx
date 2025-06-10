
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { User, Shield, Bell, Globe, Key, Trash2, Download, Upload } from 'lucide-react';

const Settings = () => {
  const [notifications, setNotifications] = useState({
    newMessages: true,
    campaigns: true,
    systemUpdates: false,
    billing: true,
    security: true
  });

  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@company.com',
    company: 'AyuChat Solutions',
    phone: '+1 (555) 123-4567',
    timezone: 'America/New_York'
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Settings</h1>
          <p className="text-muted-foreground">Manage your account and application preferences</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <Card className="lg:col-span-1">
          <CardContent className="p-4">
            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Shield className="w-4 h-4 mr-2" />
                Security
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Globe className="w-4 h-4 mr-2" />
                Preferences
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Key className="w-4 h-4 mr-2" />
                API Keys
              </Button>
              <Separator className="my-2" />
              <Button variant="ghost" className="w-full justify-start text-destructive">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Account
              </Button>
            </nav>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Profile Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your account profile information and email address
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={profile.firstName}
                    onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={profile.lastName}
                    onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={profile.company}
                    onChange={(e) => setProfile({...profile, company: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  />
                </div>
              </div>
              <Button className="gradient-primary">Save Changes</Button>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>
                Manage your password and security preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h4 className="font-medium">Two-Factor Authentication</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Enable 2FA</p>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Switch />
                </div>
                <Button variant="outline">Configure 2FA</Button>
              </div>
              
              <Button>Update Password</Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>
                Choose what notifications you want to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">New Messages</p>
                    <p className="text-sm text-muted-foreground">
                      Get notified when you receive new WhatsApp messages
                    </p>
                  </div>
                  <Switch
                    checked={notifications.newMessages}
                    onCheckedChange={(checked) => 
                      setNotifications({...notifications, newMessages: checked})
                    }
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Campaign Updates</p>
                    <p className="text-sm text-muted-foreground">
                      Receive updates about your campaign performance
                    </p>
                  </div>
                  <Switch
                    checked={notifications.campaigns}
                    onCheckedChange={(checked) => 
                      setNotifications({...notifications, campaigns: checked})
                    }
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">System Updates</p>
                    <p className="text-sm text-muted-foreground">
                      Get notified about new features and system updates
                    </p>
                  </div>
                  <Switch
                    checked={notifications.systemUpdates}
                    onCheckedChange={(checked) => 
                      setNotifications({...notifications, systemUpdates: checked})
                    }
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Billing Notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Receive billing and subscription related notifications
                    </p>
                  </div>
                  <Switch
                    checked={notifications.billing}
                    onCheckedChange={(checked) => 
                      setNotifications({...notifications, billing: checked})
                    }
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Security Alerts</p>
                    <p className="text-sm text-muted-foreground">
                      Get notified about important security events
                    </p>
                  </div>
                  <Switch
                    checked={notifications.security}
                    onCheckedChange={(checked) => 
                      setNotifications({...notifications, security: checked})
                    }
                  />
                </div>
              </div>
              
              <Button>Save Notification Preferences</Button>
            </CardContent>
          </Card>

          {/* API Keys */}
          <Card>
            <CardHeader>
              <CardTitle>API Keys</CardTitle>
              <CardDescription>
                Manage your API keys for integrations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Production API Key</p>
                    <p className="text-sm text-muted-foreground font-mono">
                      ayu_prod_•••••••••••••••••••••••••••••••••••••
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Created: March 15, 2024 • Last used: 2 hours ago
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">Active</Badge>
                    <Button variant="ghost" size="sm">
                      Regenerate
                    </Button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Test API Key</p>
                    <p className="text-sm text-muted-foreground font-mono">
                      ayu_test_•••••••••••••••••••••••••••••••••••••
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Created: March 10, 2024 • Last used: Never
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Test</Badge>
                    <Button variant="ghost" size="sm">
                      Regenerate
                    </Button>
                  </div>
                </div>
              </div>
              
              <Button variant="outline">
                <Key className="w-4 h-4 mr-2" />
                Generate New API Key
              </Button>
            </CardContent>
          </Card>

          {/* Data Export */}
          <Card>
            <CardHeader>
              <CardTitle>Data Export</CardTitle>
              <CardDescription>
                Export your data or import settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export Contacts
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export Messages
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Export Templates
                </Button>
                <Button variant="outline">
                  <Upload className="w-4 h-4 mr-2" />
                  Import Data
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
