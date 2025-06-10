
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import ChatInbox from '@/components/ChatInbox';
import Contacts from './Contacts';
import Campaigns from './Campaigns';
import Templates from './Templates';
import PhoneNumbers from './PhoneNumbers';
import Automation from './Automation';
import Analytics from './Analytics';
import Billing from './Billing';
import Settings from './Settings';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'inbox':
        return <ChatInbox />;
      case 'contacts':
        return <Contacts />;
      case 'campaigns':
        return <Campaigns />;
      case 'templates':
        return <Templates />;
      case 'phone':
        return <PhoneNumbers />;
      case 'automation':
        return <Automation />;
      case 'analytics':
        return <Analytics />;
      case 'billing':
        return <Billing />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex w-full">
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
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
