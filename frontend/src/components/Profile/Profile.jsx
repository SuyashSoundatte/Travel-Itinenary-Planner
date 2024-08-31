import axios from "axios"
import { useEffect, useState } from "react"
import { Avatar } from "@mui/material";

function Profile() {
  const [name, setname] = useState("");

  useEffect(() => {
    const userData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/66d1cd7da54896b6155ecf94`);
        console.log(response)
        setname(response.data.name);
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
      <div className="h-full wfull bg-blue-400">
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
      </div>
      <div className="h-full wfull bg-blue-400">
        <h1>{name}</h1>
      </div>
    </div>
  )
}

export default Profile;
