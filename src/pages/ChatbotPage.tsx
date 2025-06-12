import React, { useState } from 'react';
import { Send, ChevronRight, ChevronLeft, MessageCircle, ThumbsUp, Share2, MoreHorizontal } from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  avatar: string;
  abilities: string[];
  color: string;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface TopicThread {
  id: string;
  title: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  content: string;
  likes: number;
  replies: number;
  timestamp: string;
}

const agents: Agent[] = [
  {
    id: 'mark',
    name: 'Mark',
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=mark',
    abilities: ['Event Planning', 'Activity Recommendations', 'Schedule Management'],
    color: 'blue'
  },
  {
    id: 'athena',
    name: 'Athena',
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=athena',
    abilities: ['Real Estate/Investment', 'Property Analysis', 'Market Insights'],
    color: 'purple'
  },
  {
    id: 'nova',
    name: 'Nova',
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=nova',
    abilities: ['Booking and Logistics', 'Travel Planning', 'Transportation'],
    color: 'green'
  },
  {
    id: 'atlas',
    name: 'Atlas',
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=atlas',
    abilities: ['Place Discovery', 'Local Recommendations', 'Cultural Insights'],
    color: 'orange'
  },
  {
    id: 'luna',
    name: 'Luna',
    avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=luna',
    abilities: ['Entertainment Guide', 'Activity Matching', 'Social Planning'],
    color: 'pink'
  }
];

const topics = [
  'Forum',
  'Offre',
  'History',
  'Topics',
  'Visios',
  'Support',
  'News'
];

const sampleThreads: Record<string, TopicThread[]> = {
  'Forum': [
    {
      id: '1',
      title: 'Best practices for event planning',
      author: {
        name: 'Sarah Chen',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
        role: 'Event Planner'
      },
      content: 'I\'ve been organizing events for 5 years and wanted to share some key insights...',
      likes: 124,
      replies: 45,
      timestamp: '2 hours ago'
    },
    {
      id: '2',
      title: 'How to choose the perfect venue',
      author: {
        name: 'Michael Ross',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=michael',
        role: 'Venue Coordinator'
      },
      content: 'The venue sets the tone for your entire event. Here\'s what to consider...',
      likes: 89,
      replies: 32,
      timestamp: '4 hours ago'
    }
  ],
  'Support': [
    {
      id: '3',
      title: 'Common issues and solutions',
      author: {
        name: 'Tech Support Team',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=support',
        role: 'Support Specialist'
      },
      content: 'Here are the most common issues users face and how to resolve them...',
      likes: 156,
      replies: 78,
      timestamp: '1 day ago'
    }
  ]
};

const ChatbotPage: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [selectedAbility, setSelectedAbility] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [expandedAgent, setExpandedAgent] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [isTopicExpanded, setIsTopicExpanded] = useState(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: `This is a response from ${selectedAgent?.name || 'the bot'} about ${selectedAbility || 'general topics'}`,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleAgentClick = (agent: Agent) => {
    if (expandedAgent === agent.id) {
      setExpandedAgent(null);
    } else {
      setExpandedAgent(agent.id);
      setSelectedAgent(agent);
      setSelectedAbility(null);
    }
  };

  const handleAbilityClick = (ability: string) => {
    setSelectedAbility(ability);
  };

  const handleTopicClick = (topic: string) => {
    setSelectedTopic(topic);
    setIsTopicExpanded(true);
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Sidebar - AI Agents */}
      <div className={`bg-white border-r border-slate-200 flex flex-col py-6 transition-all duration-300 ${
        isTopicExpanded ? 'w-48' : 'w-64'
      }`}>
        <h2 className="px-6 text-lg font-semibold text-slate-800 mb-4">AI Agents</h2>
        <div className="space-y-1 px-4 overflow-y-auto">
          {agents.map(agent => (
            <div key={agent.id}>
              <button
                onClick={() => handleAgentClick(agent)}
                className={`w-full p-3 rounded-lg flex items-center gap-3 transition-colors ${
                  selectedAgent?.id === agent.id 
                    ? `bg-${agent.color}-50 text-${agent.color}-700` 
                    : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <img 
                  src={agent.avatar} 
                  alt={agent.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 text-left">
                  <div className="font-medium">{agent.name}</div>
                </div>
                <ChevronRight 
                  size={18} 
                  className={`transition-transform ${expandedAgent === agent.id ? 'rotate-90' : ''}`}
                />
              </button>
              
              {expandedAgent === agent.id && (
                <div className="ml-12 mt-1 space-y-1">
                  {agent.abilities.map((ability) => (
                    <button
                      key={ability}
                      onClick={() => handleAbilityClick(ability)}
                      className={`w-full text-left px-4 py-2 rounded-md text-sm transition-colors ${
                        selectedAbility === ability
                          ? `bg-${agent.color}-100 text-${agent.color}-700`
                          : 'hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      {ability}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Middle Section - Chat */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${
        isTopicExpanded ? 'w-[25%]' : 'w-[60%]'
      }`}>
        {/* Chat Header */}
        <div className="h-16 bg-white border-b border-slate-200 flex items-center px-6">
          {selectedAgent ? (
            <div className="flex items-center">
              <img 
                src={selectedAgent.avatar} 
                alt={selectedAgent.name}
                className="w-8 h-8 rounded-full mr-3"
              />
              <div>
                <div className="font-medium text-slate-800">{selectedAgent.name}</div>
                {selectedAbility && (
                  <div className="text-sm text-slate-500">{selectedAbility}</div>
                )}
              </div>
            </div>
          ) : (
            <span className="text-slate-500">Select an AI agent to start chatting</span>
          )}
        </div>

        {/* Chat Messages - Adjusted height to leave space for input */}
        <div className="overflow-y-auto p-6 space-y-4" style={{ height: 'calc(100vh - 180px)' }}>
          {messages.map(message => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] rounded-lg px-4 py-2 ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-slate-800 border border-slate-200'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input - Fixed at bottom with proper height */}
        <div className="bg-white border-t border-slate-200 p-4 h-20 flex items-center">
          <div className="flex items-center gap-4 w-full">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Section - Topics */}
      <div className={`bg-white border-l border-slate-200 flex flex-col transition-all duration-300 ${
        isTopicExpanded ? 'w-[60%]' : 'w-24'
      }`}>
        <div className="p-4 border-b border-slate-200 flex justify-between items-center">
          <h3 className={`font-medium text-slate-800 ${!isTopicExpanded && 'sr-only'}`}>Topics</h3>
          <button
            onClick={() => setIsTopicExpanded(!isTopicExpanded)}
            className="p-2 hover:bg-slate-100 rounded-full"
          >
            {isTopicExpanded ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>

        {isTopicExpanded ? (
          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              {selectedTopic && sampleThreads[selectedTopic]?.map(thread => (
                <div key={thread.id} className="mb-6 bg-white rounded-lg border border-slate-200 p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <img
                      src={thread.author.avatar}
                      alt={thread.author.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-medium text-slate-900">{thread.author.name}</h4>
                      <p className="text-xs text-slate-500">{thread.author.role}</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">{thread.title}</h3>
                  <p className="text-slate-600 mb-4">{thread.content}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <button className="flex items-center gap-1 hover:text-blue-600">
                      <ThumbsUp size={16} />
                      <span>{thread.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-600">
                      <MessageCircle size={16} />
                      <span>{thread.replies}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-600">
                      <Share2 size={16} />
                    </button>
                    <span className="ml-auto text-xs">{thread.timestamp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            {topics.map(topic => (
              <button
                key={topic}
                onClick={() => handleTopicClick(topic)}
                className={`h-24 flex items-center justify-center cursor-pointer hover:bg-slate-50 transition-colors ${
                  selectedTopic === topic ? 'bg-slate-100' : ''
                }`}
              >
                <span 
                  className="transform -rotate-90 whitespace-nowrap text-slate-600 hover:text-blue-600 transition-colors"
                  style={{ transformOrigin: 'center' }}
                >
                  {topic}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatbotPage;