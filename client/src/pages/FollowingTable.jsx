import React from 'react';
import YouTubeInformation from './YouTubeInformation';

const FollowingTable = ({ followings, onDelete, youtubeInfo, isLoading, error }) => {
  console.log('FollowingTable props:', { followings, youtubeInfo, isLoading, error });
  if (isLoading) {
    return <div className="text-center py-4">加载中...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  return (
    <div>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Platform
            </th>
            <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Channel Username
            </th>
            <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Channel ID
            </th>
            <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Channel Title
            </th>
            <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {followings.map((following) => {
            const channelInfo = youtubeInfo[following.channel_index_id];
            return (
              <tr key={following._id}>
                <td className="py-2 px-4 text-sm">{following.platform}</td>
                <td className="py-2 px-4 text-sm">
                  {channelInfo ? channelInfo.channel_username : following.channel_username}
                </td>
                <td className="py-2 px-4 text-sm">{following.channel_index_id}</td>
                <td className="py-2 px-4 text-sm">{following.channel_title}</td>
                <td className="py-2 px-4 text-sm">
                  <button
                    onClick={() => onDelete(following._id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {followings
          .filter((following) => following.platform === 'YouTube')
          .map((following) => (
            <YouTubeInformation
              key={following._id}
              channelInfo={youtubeInfo[following.channel_index_id]}
            />
          ))}
      </div>
    </div>
  );
};

export default FollowingTable;
