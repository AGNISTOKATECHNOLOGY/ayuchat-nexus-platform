
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  Users, 
  Send, 
  BarChart3, 
  Settings, 
  Phone,
  FileText,
  Zap,
  CreditCard,
  User,
  Bell,
  LogOut,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3, badge: null },
    { id: 'inbox', label: 'Inbox', icon: MessageSquare, badge: '12' },
    { id: 'contacts', label: 'Contacts', icon: Users, badge: null },
    { id: 'campaigns', label: 'Campaigns', icon: Send, badge: null },
    { id: 'templates', label: 'Templates', icon: FileText, badge: '3' },
    { id: 'phone', label: 'Phone Numbers', icon: Phone, badge: null },
    { id: 'automation', label: 'Automation', icon: Zap, badge: 'NEW' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, badge: null },
    { id: 'billing', label: 'Billing', icon: CreditCard, badge: null },
    { id: 'settings', label: 'Settings', icon: Settings, badge: null }
  ];

  const MenuItem = ({ item }: { item: any }) => (
    <button
      onClick={() => {
        onSectionChange(item.id);
        setMobileOpen(false);
      }}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 ${
        activeSection === item.id
          ? 'bg-primary text-primary-foreground shadow-sm'
          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
      }`}
    >
      <item.icon className="w-5 h-5 flex-shrink-0" />
      {!collapsed && (
        <>
          <span className="font-medium">{item.label}</span>
          {item.badge && (
            <Badge 
              variant={item.badge === 'NEW' ? 'default' : 'secondary'} 
              className="ml-auto text-xs px-1.5 py-0.5"
            >
              {item.badge}
            </Badge>
          )}
        </>
      )}
    </button>
  );

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:relative top-0 left-0 z-40 h-full bg-sidebar border-r border-sidebar-border
        transition-all duration-300 ease-in-out
        ${collapsed ? 'w-16' : 'w-64'}
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo/Header */}
          <div className="p-4 border-b border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold">
                A
              </div>
              {!collapsed && (
                <div>
                  <h1 className="font-bold text-lg text-gradient">AyuChat</h1>
                  <p className="text-xs text-muted-foreground">WhatsApp API Platform</p>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-sidebar-border">
            {!collapsed && (
              <div className="mb-3 p-3 bg-sidebar-accent rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                    JD
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">John Doe</p>
                    <p className="text-xs text-muted-foreground truncate">john@company.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Plan: Pro</span>
                  <Badge variant="secondary" className="text-xs">Active</Badge>
                </div>
              </div>
            )}
            
            <div className="space-y-1">
              <Button variant="ghost" size="sm" className="w-full justify-start gap-3">
                <Bell className="w-4 h-4" />
                {!collapsed && 'Notifications'}
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start gap-3">
                <User className="w-4 h-4" />
                {!collapsed && 'Profile'}
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start gap-3 text-destructive">
                <LogOut className="w-4 h-4" />
                {!collapsed && 'Sign Out'}
              </Button>
            </div>
          </div>

          {/* Collapse toggle */}
          <div className="hidden lg:block p-2 border-t border-sidebar-border">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCollapsed(!collapsed)}
              className="w-full"
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
