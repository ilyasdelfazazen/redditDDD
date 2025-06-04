import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Globe, 
  Search, 
  ChevronDown, 
  Package, 
  Wrench, 
  Tag, 
  Store, 
  Users,
  Activity,
  MapPin
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import PlacesSidebar from './components/PlacesSidebar';
import HomePage from './pages/HomePage';
import HealthPage from './pages/HealthPage';
import ChefchaouenPage from './pages/ChefchaouenPage';
import ChatbotPage from './pages/ChatbotPage';
import { ExplorationMode } from './types';

function App() {
  const [mode, setMode] = useState<ExplorationMode>('place');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPlacesSidebarOpen, setIsPlacesSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'health', label: 'Health' },
    { value: 'education', label: 'Education' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'sports', label: 'Sports' },
    { value: 'culture', label: 'Culture' },
    { value: 'business', label: 'Business' }
  ];

  const navItems = {
    products: {
      title: 'Products',
      icon: <Package size={20} />,
      items: ['Featured Products', 'New Arrivals', 'Best Sellers', 'Categories', 'Brands']
    },
    services: {
      title: 'Services',
      icon: <Wrench size={20} />,
      items: ['Consulting', 'Training', 'Support', 'Custom Solutions', 'Maintenance']
    },
    promotions: {
      title: 'Promotional Offers',
      icon: <Tag size={20} />,
      items: ['Current Deals', 'Seasonal Offers', 'Clearance', 'Bundle Deals', 'Special Discounts']
    },
    eshops: {
      title: 'E-Shops',
      icon: <Store size={20} />,
      items: ['Featured Shops', 'New Shops', 'Popular Shops', 'Shop Categories', 'Shop Directory']
    },
    cooperatives: {
      title: 'Cooperatives',
      icon: <Users size={20} />,
      items: ['Local Cooperatives', 'Artisan Groups', 'Fair Trade', 'Community Projects', 'Support Programs']
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b border-slate-200">
          <div className="container mx-auto px-4">
            <div className="h-16 flex items-center justify-between gap-8">
              {/* Left section */}
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="p-2 rounded-md hover:bg-slate-50 transition-colors"
                >
                  <Activity size={22} className="text-slate-700" />
                </button>
              </div>

              {/* Center section */}
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold text-blue-600">Place</span>
                <span className="text-2xl font-bold text-slate-800">2</span>
              </Link>

              {/* Right section */}
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setIsPlacesSidebarOpen(true)}
                  className="p-2 rounded-md hover:bg-slate-50 transition-colors"
                >
                  <MapPin size={22} className="text-slate-700" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Bar - Only show on home page */}
        <Routes>
          <Route path="/" element={
            <>
              <div className="bg-white border-b border-slate-200 shadow-sm">
                <div className="container mx-auto">
                  <nav className="flex justify-center">
                    {Object.entries(navItems).map(([key, { title, icon, items }]) => (
                      <div key={key} className="relative group">
                        <button className="px-6 py-4 text-slate-700 hover:text-blue-600 flex items-center gap-2">
                          {icon}
                          {title}
                          <ChevronDown size={16} />
                        </button>
                        <div className="absolute left-0 top-full bg-white border border-slate-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px] z-50">
                          <div className="py-2">
                            {items.map((item, index) => (
                              <a
                                key={index}
                                href="#"
                                className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                              >
                                {item}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Search Area - Only show on home page */}
              <div className="container mx-auto px-4 flex justify-center">
                <div className="max-w-4xl w-full flex items-center gap-2 py-3">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-40 px-2 py-1.5 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700 text-sm"
                  >
                    {categories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                  <div className="flex-1 relative">
                    <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="text"
                      placeholder={`Search in ${selectedCategory === 'all' ? 'all categories' : selectedCategory}...`}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-1.5 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                  </div>
                </div>
              </div>
            </>
          } />
        </Routes>

        <Sidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />

        <PlacesSidebar
          isOpen={isPlacesSidebarOpen}
          onClose={() => setIsPlacesSidebarOpen(false)}
        />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage mode={mode} />} />
            <Route path="/health" element={<HealthPage />} />
            <Route path="/africa/morocco/chefchaouen" element={<ChefchaouenPage />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
          </Routes>
        </main>

        <footer className="bg-white border-t border-slate-200 py-4 px-6">
          <div className="container mx-auto flex items-center justify-between text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Globe size={18} />
              <span>Place2 © 2025</span>
            </div>
            <div className="flex gap-6">
              <Link to="/chatbot" className="hover:text-blue-600 transition-colors">Chatbot</Link>
              <a href="#" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;