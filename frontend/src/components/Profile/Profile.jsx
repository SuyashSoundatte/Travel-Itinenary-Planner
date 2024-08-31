import axios from "axios"
import { useEffect, useState } from "react"
import { Avatar } from "@mui/material";

function Profile() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  useEffect(() => {
    const userData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/66d1eec8841d739d873a97ad`);
        console.log(response)
        setname(response.data.name);
        setemail(response.data.email);
        console.log(name)
      } catch (error) {
        console.error("Error fetching data:", error);
        setname("Error loading name");
      }
    };
    userData();
  }, []);

  return (
    <div className="h-screen w-full bg-blue-300 p-5 grid gap-3 grid-cols-[300px_1fr]">
      <div className="h-full wfull bg-blue-400 flex flex-col justify-center items-center">
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
      <h1>{name}</h1>          
      <h1>{email}</h1>
      </div>
      <div className="h-full wfull bg-blue-400 gap-5 grid grid-cols-2 grid-rows-2 p-5">
        <div className="h-full w-full bg-blue-700 rounded-lg shadow-xl grid place-items-center">
          <h1 className="text-[2em]">Total Trips</h1>
          <h1 className="text-[6em] font-bold">12</h1>
        </div>
        <div className="h-full w-full bg-blue-700 rounded-lg shadow-xl object-cover">
          <video src="https://videos.pexels.com/video-files/2252797/2252797-sd_640_360_30fps.mp4"></video>
        </div>
        <div className="h-full w-full bg-blue-700 rounded-lg shadow-xl"></div>
        <div className="h-full w-full bg-blue-700 rounded-lg shadow-xl"></div>
      </div>
    </div>
  )
}

export default Profile;
