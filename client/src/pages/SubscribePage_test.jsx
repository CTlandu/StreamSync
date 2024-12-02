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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center">
        <div className="flex w-full max-w-6xl mt-16">
          <Sidebar />
          <main className="flex-grow p-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">My Subscriptions</h2>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                  Add Subscription
                </button>
              </div>
            </div>

            {/* Import Section */}
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

            {/* Subscriptions List */}
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
