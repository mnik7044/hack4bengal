import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
const PatientProfile = () => {
  const [value, setValue] = useState();

  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  const handleJoinChatRoom = useCallback(() => {
    navigate(`/ChatApp`);
  }, [navigate]);

  return (
    //  <input value = {value} onChange = {e => setValue(e.target.value)} type='text' placeholder='Enter Room Code'/>
    //  <button onClick={handleJoinRoom}>Join</button>
    // <button onClick={handleJoinChatRoom}>Join ChatRoom</button>

    <div>
      <form className="relative flex justify-center p-80">
        <label htmlFor="simple-search" className="sr-only">
          Searcb
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-10 pointer-events-none"></div>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            id="simple-search"
            className=" text-black w-[140vh] rounded-lg dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Code/Link  "
            required=""
          />
        </div>

        <button
          onClick={handleJoinRoom}
          type="submit"
          placeholder="Join Video Call"
          className=" p-2.5 h-42 w-30 ml-2 -top-8 relative  text-black bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
        >
          Video
        </button>
        <button
          onClick={handleJoinChatRoom}
          type="submit"
          className="p-2.5 ml-2  relative flex top-0 text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
        >
          Chat
        </button>
      </form>
    </div>
  );
};

export default PatientProfile;
