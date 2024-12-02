import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';

const ContentCard = ({ content }) => {
  const renderStars = (priority) => {
    return [...Array(priority)].map((_, index) => (
      <span key={index} className="text-yellow-400 text-xl">
        ★
      </span>
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex items-start space-x-4">
        {/* Platform Icon and Priority Stars */}
        <div className="flex flex-col items-center">
          <div className="mb-2">
            {content.platform === 'youtube' ? (
              <FaYoutube className="text-red-600 text-2xl" />
            ) : content.platform === 'instagram' ? (
              <FaInstagram className="text-pink-600 text-2xl" />
            ) : (
              <FaTwitter className="text-blue-400 text-2xl" />
            )}
          </div>
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
              content.creator === 'PlayStation'
                ? 'bg-blue-600'
                : content.creator === 'William and Mary'
                  ? 'bg-green-600'
                  : content.creator === 'Elon Musk'
                    ? 'bg-black'
                    : 'bg-gray-400'
            }`}
          >
            {content.creator.charAt(0)}
          </div>
          <div className="mt-2">{renderStars(content.priority)}</div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-semibold">{content.creator}</h3>
            <span className="text-sm text-gray-500">{content.timeAgo}</span>
          </div>
          {content.thumbnail && (
            <div className="mt-2 relative w-[150px] h-[100px]">
              <img
                src={content.thumbnail}
                alt={content.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 right-0 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded m-2">
                {content.duration}
              </div>
            </div>
          )}
          <p className="mt-2 text-sm text-gray-700">{content.title}</p>
        </div>
      </div>
    </div>
  );
};

const FollowingPage = () => {
  // 更新模拟数据
  const [contents] = useState([
    {
      creator: 'PlayStation',
      platform: 'instagram',
      priority: 3,
      timeAgo: '20 minutes ago',
      thumbnail: 'https://placeholder.com/150x100',
      title:
        'New PlayStation 5 design with PS5 style, focusing on energy efficiency and aesthetics...',
      duration: '1:00',
    },
    {
      creator: 'William and Mary',
      platform: 'youtube',
      priority: 2,
      timeAgo: '7 hours ago',
      thumbnail: 'https://placeholder.com/150x100',
      title:
        'This year, we are celebrating the 400th anniversary of the founding of the College of William and Mary...',
      duration: '12:34',
    },
    {
      creator: 'Elon Musk',
      platform: 'twitter',
      priority: 1,
      avatar: 'https://placeholder.com/150',
      timeAgo: '21 hours ago',
      thumbnail: 'https://placeholder.com/300x200',
      title: 'Breaking news: Latest updates from SpaceX...',
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow flex justify-center">
        <div className="flex w-full max-w-6xl mt-16">
          <Sidebar />
          <main className="flex-grow p-4">
            <h2 className="text-2xl font-semibold mb-4">Following Updates</h2>
            <div className="max-w-3xl mx-auto">
              {contents.map((content, index) => (
                <ContentCard key={index} content={content} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FollowingPage;
