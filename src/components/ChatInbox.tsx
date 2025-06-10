
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  Search, 
  Phone, 
  Video, 
  MoreVertical,
  Send,
  Paperclip,
  Smile,
  Star,
  Archive,
  Tag,
  User,
  Clock
} from 'lucide-react';

const ChatInbox = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState('');

  const chats = [
    {
      id: 1,
      name: 'Sarah Johnson',
      phone: '+1 (555) 123-4567',
      lastMessage: 'Thanks for the quick response! I have one more question...',
      time: '2m ago',
      unread: 3,
      status: 'open',
      agent: 'John D.',
      tags: ['Priority', 'Sales']
    },
    {
      id: 2,
      name: 'Mike Chen',
      phone: '+1 (555) 987-6543',
      lastMessage: 'I received the order confirmation. When will it ship?',
      time: '15m ago',
      unread: 1,
      status: 'pending',
      agent: 'Emma S.',
      tags: ['Support']
    },
    {
      id: 3,
      name: 'Lisa Garcia',
      phone: '+1 (555) 456-7890',
      lastMessage: 'Perfect! The product looks amazing. Thank you!',
      time: '1h ago',
      unread: 0,
      status: 'resolved',
      agent: 'Mike R.',
      tags: ['Feedback']
    },
    {
      id: 4,
      name: 'David Wilson',
      phone: '+1 (555) 321-0987',
      lastMessage: 'Can you help me with the integration process?',
      time: '2h ago',
      unread: 0,
      status: 'open',
      agent: 'Sarah L.',
      tags: ['Technical']
    }
  ];

  const messages = [
    {
      id: 1,
      type: 'received',
      content: 'Hi! I have a question about your pricing plans.',
      time: '10:30 AM',
      status: 'delivered'
    },
    {
      id: 2,
      type: 'sent',
      content: 'Hello! I\'d be happy to help you with our pricing. What specific information are you looking for?',
      time: '10:32 AM',
      status: 'read'
    },
    {
      id: 3,
      type: 'received',
      content: 'I need to know about the difference between Pro and Enterprise plans.',
      time: '10:35 AM',
      status: 'delivered'
    },
    {
      id: 4,
      type: 'sent',
      content: 'Great question! The main differences are:\n\n• Pro: Up to 1,000 contacts, 5 team members\n• Enterprise: Unlimited contacts, unlimited team members, priority support\n\nWould you like me to send you a detailed comparison?',
      time: '10:37 AM',
      status: 'read'
    },
    {
      id: 5,
      type: 'received',
      content: 'Thanks for the quick response! I have one more question...',
      time: '10:45 AM',
      status: 'delivered'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'resolved': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="flex h-[calc(100vh-2rem)] gap-4">
      {/* Chat List */}
      <Card className="w-80 flex flex-col">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Inbox</CardTitle>
            <Badge variant="secondary">24 Active</Badge>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search conversations..."
              className="pl-9"
            />
          </div>
        </CardHeader>
        <CardContent className="flex-1 p-0 overflow-auto">
          <div className="space-y-1">
            {chats.map((chat, index) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(index)}
                className={`p-4 cursor-pointer border-b hover:bg-muted/50 transition-colors ${
                  selectedChat === index ? 'bg-primary/5 border-l-4 border-l-primary' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <Avatar>
                    <AvatarFallback>{chat.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-sm truncate">{chat.name}</h4>
                      <span className="text-xs text-muted-foreground">{chat.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate mb-2">
                      {chat.lastMessage}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge className={`text-xs ${getStatusColor(chat.status)}`}>
                          {chat.status}
                        </Badge>
                        {chat.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      {chat.unread > 0 && (
                        <Badge variant="destructive" className="text-xs px-1.5 py-0.5">
                          {chat.unread}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Window */}
      <Card className="flex-1 flex flex-col">
        {/* Chat Header */}
        <CardHeader className="pb-3 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>
                  {chats[selectedChat]?.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium">{chats[selectedChat]?.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{chats[selectedChat]?.phone}</span>
                  <span>•</span>
                  <span>Agent: {chats[selectedChat]?.agent}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Phone className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Video className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Star className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Archive className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {/* Messages */}
        <CardContent className="flex-1 p-4 overflow-auto">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[70%] ${msg.type === 'sent' ? 'order-1' : 'order-2'}`}>
                  <div
                    className={`px-4 py-3 rounded-lg ${
                      msg.type === 'sent'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  </div>
                  <div className={`flex items-center gap-2 mt-1 text-xs text-muted-foreground ${
                    msg.type === 'sent' ? 'justify-end' : 'justify-start'
                  }`}>
                    <Clock className="w-3 h-3" />
                    <span>{msg.time}</span>
                    {msg.type === 'sent' && (
                      <span className="capitalize">• {msg.status}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>

        {/* Message Input */}
        <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <Paperclip className="w-4 h-4" />
            </Button>
            <div className="flex-1 relative">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="pr-10"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && message.trim()) {
                    console.log('Sending message:', message);
                    setMessage('');
                  }
                }}
              />
              <Button variant="ghost" size="sm" className="absolute right-1 top-1/2 -translate-y-1/2">
                <Smile className="w-4 h-4" />
              </Button>
            </div>
            <Button 
              disabled={!message.trim()}
              onClick={() => {
                if (message.trim()) {
                  console.log('Sending message:', message);
                  setMessage('');
                }
              }}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* Contact Info Panel */}
      <Card className="w-80">
        <CardHeader>
          <CardTitle className="text-lg">Contact Info</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <Avatar className="w-16 h-16 mx-auto mb-3">
              <AvatarFallback className="text-lg">
                {chats[selectedChat]?.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <h3 className="font-medium">{chats[selectedChat]?.name}</h3>
            <p className="text-sm text-muted-foreground">{chats[selectedChat]?.phone}</p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Status</span>
              <Badge className={getStatusColor(chats[selectedChat]?.status || 'open')}>
                {chats[selectedChat]?.status}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Assigned Agent</span>
              <span className="text-sm">{chats[selectedChat]?.agent}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Last Activity</span>
              <span className="text-sm">{chats[selectedChat]?.time}</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {chats[selectedChat]?.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              <Button variant="outline" size="sm" className="h-6 px-2 text-xs">
                <Tag className="w-3 h-3 mr-1" />
                Add Tag
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-2">Quick Actions</h4>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <User className="w-4 h-4 mr-2" />
                View Profile
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Archive className="w-4 h-4 mr-2" />
                Archive Chat
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Star className="w-4 h-4 mr-2" />
                Mark Important
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatInbox;
