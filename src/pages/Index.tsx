
import { useState } from 'react';
import { useUserRole } from '@/hooks/useUserRole';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import SuperAdminDashboard from '@/components/SuperAdminDashboard';
import ChatInbox from '@/components/ChatInbox';
import Contacts from './Contacts';
import Campaigns from './Campaigns';
import Templates from './Templates';
import PhoneNumbers from './PhoneNumbers';
import Automation from './Automation';
import Analytics from './Analytics';
import Billing from './Billing';
import Settings from './Settings';
import RoleGuard from '@/components/RoleGuard';
import { Loader2 } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const { userRole, loading } = useUserRole();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  const renderContent = () => {
    // Super Admin gets a different dashboard
    if (userRole === 'super_admin' && activeSection === 'dashboard') {
      return <SuperAdminDashboard />;
    }

    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'inbox':
        return (
          <RoleGuard allowedRoles={['admin', 'super_admin']}>
            <ChatInbox />
          </RoleGuard>
        );
      case 'contacts':
        return (
          <RoleGuard allowedRoles={['admin', 'super_admin']}>
            <Contacts />
          </RoleGuard>
        );
      case 'campaigns':
        return (
          <RoleGuard allowedRoles={['admin', 'super_admin']}>
            <Campaigns />
          </RoleGuard>
        );
      case 'templates':
        return (
          <RoleGuard allowedRoles={['admin', 'super_admin']}>
            <Templates />
          </RoleGuard>
        );
      case 'phone':
        return (
          <RoleGuard allowedRoles={['admin', 'super_admin']}>
            <PhoneNumbers />
          </RoleGuard>
        );
      case 'automation':
        return (
          <RoleGuard allowedRoles={['admin', 'super_admin']}>
            <Automation />
          </RoleGuard>
        );
      case 'analytics':
        return (
          <RoleGuard allowedRoles={['admin', 'super_admin']}>
            <Analytics />
          </RoleGuard>
        );
      case 'billing':
        return (
          <RoleGuard allowedRoles={['super_admin']}>
            <Billing />
          </RoleGuard>
        );
      case 'settings':
        return <Settings />;
      default:
        return userRole === 'super_admin' ? <SuperAdminDashboard /> : <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex w-full">
        <Sidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection}
          userRole={userRole}
        />
        <main className="flex-1 lg:ml-0 overflow-auto">
          <div className="p-6 lg:pl-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
