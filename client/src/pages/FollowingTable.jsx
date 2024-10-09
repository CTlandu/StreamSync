import React from "react";
import YouTubeInformation from "./YouTubeInformation";

const FollowingTable = ({ followings, onEdit, onDelete }) => {
  if (followings.length === 0) {
    return <p>暂无数据</p>;
  }

  return (
    <div>
      <table className="min-w-full bg-white border border-gray-300 mb-4">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">平台</th>
            <th className="py-2 px-4 border-b">用户名</th>
            <th className="py-2 px-4 border-b">操作</th>
          </tr>
        </thead>
        <tbody>
          {followings.map((following) => (
            <tr key={following._id}>
              <td className="py-2 px-4 border-b">{following.platform}</td>
              <td className="py-2 px-4 border-b">{following.username}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => onEdit(following)}
                  className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                >
                  编辑
                </button>
                <button
                  onClick={() => onDelete(following._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  删除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {followings
          .filter((following) => following.platform === "YouTube")
          .map((following) => (
            <YouTubeInformation
              key={following._id}
              nickname={following.username}
            />
          ))}
      </div>
    </div>
  );
};

export default FollowingTable;
