
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import ChatInbox from '@/components/ChatInbox';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'inbox':
        return <ChatInbox />;
      case 'contacts':
        return <div className="p-6">Contacts Management Coming Soon</div>;
      case 'campaigns':
        return <div className="p-6">Campaign Management Coming Soon</div>;
      case 'templates':
        return <div className="p-6">Template Management Coming Soon</div>;
      case 'phone':
        return <div className="p-6">Phone Number Management Coming Soon</div>;
      case 'automation':
        return <div className="p-6">Automation & Chatbot Builder Coming Soon</div>;
      case 'analytics':
        return <div className="p-6">Advanced Analytics Coming Soon</div>;
      case 'billing':
        return <div className="p-6">Billing & Subscription Management Coming Soon</div>;
      case 'settings':
        return <div className="p-6">Settings Coming Soon</div>;
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
