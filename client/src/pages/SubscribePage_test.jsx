import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { FaYoutube, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import { SiBilibili } from 'react-icons/si';

const API_BASE_URL = import.meta.env.VITE_API_URL;

// 将 getPlatformIcon 移到组件外部
const getPlatformIcon = (platform) => {
  const iconClass = 'text-2xl';
  switch (platform.toLowerCase()) {
    case 'youtube':
      return <FaYoutube className={`${iconClass} text-red-600`} />;
    case 'instagram':
      return <FaInstagram className={`${iconClass} text-pink-600`} />;
    case 'tiktok':
      return <FaTiktok className={`${iconClass} text-black`} />;
    case 'twitter':
      return <FaTwitter className={`${iconClass} text-blue-400`} />;
    case 'bilibili':
      return <SiBilibili className={`${iconClass} text-blue-400`} />;
    default:
      return null;
  }
};

const SubscriptionCard = ({ subscription, onDelete, onManage, onPriorityChange }) => {
  const renderStars = (currentPriority) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3].map((star) => (
          <button
            key={star}
            onClick={() => onPriorityChange(subscription._id, star)}
            className={`text-xl ${
              star <= currentPriority ? 'text-yellow-400' : 'text-gray-300'
            } hover:text-yellow-500 transition-colors`}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Platform Icon */}
          {getPlatformIcon(subscription.platform)}

          {/* Channel Info */}
          <div>
            <h3 className="font-semibold">{subscription.channel_title}</h3>
            <p className="text-sm text-gray-500">{subscription.channel_username}</p>
          </div>
        </div>

        {/* Stars and Actions */}
        <div className="flex items-center space-x-4">
          {renderStars(subscription.priority || 0)}
          <button
            onClick={() => onManage(subscription)}
            className="px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Manage
          </button>
          <button
            onClick={() => onDelete(subscription._id)}
            className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const SubscribePage_test = () => {
  const [userId, setUserId] = useState(null);
  const [userEmail, setUserEmail] = useState('test@wm.edu');
  const [subscriptions, setSubscriptions] = useState([
    {
      _id: '1',
      platform: 'youtube',
      channel_title: 'PlayStation',
      channel_username: 'playstation',
      priority: 3,
    },
    {
      _id: '2',
      platform: 'instagram',
      channel_title: 'William & Mary',
      channel_username: 'william_and_mary',
      priority: 2,
    },
    {
      _id: '3',
      platform: 'twitter',
      channel_title: 'Elon Musk',
      channel_username: 'elonmusk',
      priority: 1,
    },
  ]);
  const [selectedPlatform, setSelectedPlatform] = useState('youtube');
  const [inputValue, setInputValue] = useState('');

  const handlePriorityChange = (subscriptionId, newPriority) => {
    setSubscriptions(
      subscriptions.map((sub) =>
        sub._id === subscriptionId ? { ...sub, priority: newPriority } : sub
      )
    );
  };

  const handleManage = (subscription) => {
    console.log('Managing subscription:', subscription);
    // 实现管理功能
  };

  const handleDelete = (subscriptionId) => {
    setSubscriptions(subscriptions.filter((sub) => sub._id !== subscriptionId));
  };

  const handleImport = (platform) => {
    console.log('Importing from:', platform);
    // 实现导入功能
  };

  const handleAddSubscription = () => {
    if (!inputValue.trim()) return;

    // 创建新的订阅对象
    const newSubscription = {
      _id: Date.now().toString(), // 临时使用时间戳作为唯一ID
      platform: selectedPlatform,
      channel_title: inputValue, // 使用输入值作为频道标题
      channel_username: inputValue.toLowerCase().replace(/\s+/g, '_'), // 创建一个基础用户名
      priority: 1, // 默认优先级
    };

    // 更新订阅列表
    setSubscriptions((prevSubscriptions) => [...prevSubscriptions, newSubscription]);

    // 清空输入框
    setInputValue('');

    // 可选：重置平台选择为默认值
    setSelectedPlatform('youtube');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center">
        <div className="flex w-full max-w-6xl mt-16">
          <Sidebar />
          <main className="flex-grow p-4">
            <h2 className="text-2xl font-semibold text-center mb-8">My Subscriptions</h2>

            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="relative">
                <select
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg pl-10 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {['youtube', 'instagram', 'tiktok', 'twitter', 'bilibili'].map((platform) => (
                    <option key={platform} value={platform} className="flex items-center">
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </option>
                  ))}
                </select>
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  {getPlatformIcon(selectedPlatform)}
                </div>
              </div>

              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter channel URL or username"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                onClick={handleAddSubscription}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center space-x-2"
              >
                <span>Add Subscription</span>
              </button>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-6">
              <p className="text-sm text-gray-600 mb-2">Or import from:</p>
              <div className="flex space-x-4">
                {['youtube', 'instagram', 'tiktok', 'twitter', 'bilibili'].map((platform) => (
                  <button
                    key={platform}
                    onClick={() => handleImport(platform)}
                    className="p-2 hover:bg-gray-200 rounded transition"
                  >
                    {getPlatformIcon(platform)}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {subscriptions.map((subscription) => (
                <SubscriptionCard
                  key={subscription._id}
                  subscription={subscription}
                  onDelete={handleDelete}
                  onManage={handleManage}
                  onPriorityChange={handlePriorityChange}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SubscribePage_test;
