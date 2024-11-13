import React, { useState } from 'react';

const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

const VideoItem = ({ video }) => (
  <div className="video-item mb-4 flex">
    <img
      src={video.video_thumbnail}
      alt={video.video_title}
      className="w-32 h-18 object-cover mr-4 rounded"
    />
    <div>
      <p className="font-medium text-sm">{video.video_title}</p>
      <p className="text-xs text-gray-500">
        Published Date: {new Date(video.published_at).toLocaleDateString()}
      </p>
    </div>
  </div>
);

const YouTubeInformation = ({ channelInfo }) => {
  const [imgError, setImgError] = useState(false);

  if (!channelInfo) {
    return <div className="text-center py-4">加载中...</div>;
  }

  const { channel_title, avatar, subscribers, video_count, recent_videos } = channelInfo;

  const displayVideos = recent_videos && recent_videos.slice(0, 3);

  return (
    <div className="youtube-info bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="channel-header p-4 flex items-center border-b">
        <img
          src={imgError ? '/path/to/default-avatar.png' : avatar}
          alt={channel_title}
          className="channel-avatar w-16 h-16 rounded-full mr-4"
          onError={() => setImgError(true)}
        />
        <div>
          <h3 className="text-xl font-bold">{channel_title}</h3>
          <p className="text-gray-600">Subscribers: {formatNumber(subscribers)}</p>
          <p className="text-gray-600">#Videos: {formatNumber(video_count)}</p>
        </div>
      </div>
      <div className="recent-videos p-4">
        <h4 className="text-lg font-semibold mb-2">Latest Videos:</h4>
        {displayVideos && displayVideos.length > 0 ? (
          displayVideos.map((video) => <VideoItem key={video.video_id} video={video} />)
        ) : (
          <p className="text-gray-500">暂无最新视频</p>
        )}
      </div>
    </div>
  );
};

export default YouTubeInformation;
