import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import assets from "../assets/assets";

const ProfilePage = () => {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState("New User");
  const [bio, setBio] = useState("Hi everyone, I am using Quick Chat!");

  const handleSubmitHandler = (e) => {
      e.preventDefault();
      navigate("/");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat">
      <div className="w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg">
        <form onSubmit={handleSubmitHandler} className="flex flex-col gap-5 p-10 flex-1">
          <h3 className="text-lg">Profile Details</h3>
          <label
            htmlFor="avatar"
            className="flex items-center gap-3 cursor-pointer"
          >
            <input
              onChange={(e) => {
                setSelectedImage(e.target.files[0]);
              }}
              type="file"
              id="avatar"
              accept=".png, .jpg, .jpeg"
              hidden
            />
            <img
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : assets.avatar_icon
              }
              className={`w-12 h-12 ${selectedImage && "rounded-full"}`}
            />
            upload profile image
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="Enter your name"
            required
          />
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
            placeholder="Write profile bio"
            required
          ></textarea>
          <button type="submit" className="bg-gradient-to-r from-purple-400 to-violet-800 text-white p-2 rounded-md text-lg cursor-pointer hover:opacity-60">
            Save
          </button>
        </form>
        <img src={assets.logo_icon} alt=""  className="max-w-44 aspect-square rounded-full mx-10  max-sm:mt-10"/>
      </div>
    </div>
  );
};

export default ProfilePage;
