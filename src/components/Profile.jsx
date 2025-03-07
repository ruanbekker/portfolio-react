import React from "react";
import profilePic from "../public/profile.png";

const Profile = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <img
        src={profilePic}
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-turquoise shadow-lg"
      />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Ruan Bekker
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        DevOps Engineer, Open Source Contributor, Golfer
      </p>
    </div>
  );
};

export default Profile;

