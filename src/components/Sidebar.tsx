
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  Send, 
  FileText, 
  Phone, 
  Bot, 
  BarChart3, 
  CreditCard, 
  Settings, 
  Menu,
  X,
  Shield,
  Crown
} from 'lucide-react';
import LogoutButton from './LogoutButton';
import { UserRole } from '@/hooks/useUserRole';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  userRole?: UserRole | null;
}

const Sidebar = ({ activeSection, onSectionChange, userRole }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      roles: ['user', 'admin', 'super_admin']
    },
    {
      id: 'inbox',
      label: 'Chat Inbox',
      icon: MessageSquare,
      roles: ['admin', 'super_admin']
    },
    {
      id: 'contacts',
      label: 'Contacts',
      icon: Users,
      roles: ['admin', 'super_admin']
    },
    {
      id: 'campaigns',
      label: 'Campaigns',
      icon: Send,
      roles: ['admin', 'super_admin']
    },
    {
      id: 'templates',
      label: 'Templates',
      icon: FileText,
      roles: ['admin', 'super_admin']
    },
    {
      id: 'phone',
      label: 'Phone Numbers',
      icon: Phone,
      roles: ['admin', 'super_admin']
    },
    {
      id: 'automation',
      label: 'Automation',
      icon: Bot,
      roles: ['admin', 'super_admin']
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: BarChart3,
      roles: ['admin', 'super_admin']
    },
    {
      id: 'billing',
      label: 'Billing',
      icon: CreditCard,
      roles: ['super_admin']
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      roles: ['user', 'admin', 'super_admin']
    }
  ];

  const filteredMenuItems = menuItems.filter(item => 
    userRole && item.roles.includes(userRole)
  );

  const getRoleIcon = () => {
    switch (userRole) {
      case 'super_admin':
        return <Crown className="w-4 h-4" />;
      case 'admin':
        return <Shield className="w-4 h-4" />;
      default:
        return <Users className="w-4 h-4" />;
    }
  };

  const getRoleBadgeVariant = () => {
    switch (userRole) {
      case 'super_admin':
        return 'destructive';
      case 'admin':
        return 'default';
      default:
        return 'secondary';
    }
  };

  const SidebarContent = () => (
    <Card className="h-full border-r rounded-none">
      <CardContent className="p-0 h-full flex flex-col">
        <div className="p-6 border-b">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary rounded-lg">
              <MessageSquare className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="font-bold text-lg">WhatsApp Marketing</h2>
              <div className="flex items-center gap-2">
                {getRoleIcon()}
                <Badge variant={getRoleBadgeVariant()} className="text-xs">
                  {userRole?.replace('_', ' ').toUpperCase()}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {filteredMenuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => {
                  onSectionChange(item.id);
                  setIsOpen(false);
                }}
              >
                <Icon className="w-4 h-4 mr-3" />
                {item.label}
              </Button>
            );
          })}
        </nav>

        <div className="p-4 border-t">
          <Separator className="mb-4" />
          <LogoutButton />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="lg:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Desktop sidebar */}
      <div className="hidden lg:block w-64 h-screen sticky top-0">
        <SidebarContent />
      </div>

      {/* Mobile sidebar */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-64 bg-background">
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
