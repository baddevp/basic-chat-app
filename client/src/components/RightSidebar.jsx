import React from 'react'
import assets, { imagesDummyData } from '../assets/assets'

const RightSidebar = ({ selectedUser, setSelectedUser }) => {
  return selectedUser && (
    <div className={`bg-[#8185B2]/10 text-white w-full relative overflow-y-auto scroll-container ${selectedUser ? 'max-md:hidden' : ''} `}>
      {/* User Profile Section */}
      <div className='pt-10 flex flex-col items-center gap-2 text-xs font-light mx-auto'>
        <img src={selectedUser?.profilePic || assets.avatar_icon} alt="" className='w-20 aspect-[1/1] rounded-full' />
        <h1 className='px-10 text-xl font-medium mx-auto flex items-center gap-2'>
          {selectedUser?.fullName || "Unknown User"}
          <span className='w-2 h-2 rounded-full bg-green-500'></span>
          </h1>
          <p className='text-gray-500 px-10 mx-auto'>{selectedUser?.bio || "Unknown Status"}</p>
      </div>
      <hr className='border-gray-500 my-4' />
      <div className='px-5 text-xs'>
        <p>Media</p>
        <div className='mt-2 max-h-[200px] overflow-y-scroll scroll-container grid grid-cols-2 gap-4 opacity-80'>
           {imagesDummyData.map((url, index) => (
          <div key={index} onClick={()=> window.open(url) } className='cursor-pointer rounded'>
            <img src={url} alt={`media-${index}`} className='w-full h-20 object-cover rounded-md' />
          </div>
        ))}
        </div>
        
        
        <button className='absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-violet-800 text-white border-none font-light py-2 px-20 rounded-full cursor-pointer hover:opacity-80'>Logout</button>

      </div>
    </div>
  )
}

export default RightSidebar