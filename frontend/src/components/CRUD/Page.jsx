import CRUD from "./CRUD"

function Page() {
  return (
    <div className="min-h-screen w-full bg-red-700">
      <div className="h-full w-full grid grid-cols-2 gap-3 p-5">
        <div className="h-[70vh] w-full bg-red-500 rounded-lg flex items-center justify-center">
          <h1 className="text-[4em] font-bold text-white">Add Your Itineraries here</h1>
        </div>
        <div className="h-[70vh] w-full bg-red-700 rounded-lg object-cover overflow-hidden">
          <video 
            src="https://videos.pexels.com/video-files/3002384/3002384-sd_640_360_25fps.mp4" 
            autoPlay 
            loop 
            muted 
            className="h-full w-full object-cover"
            alt="Background video"
          ></video>
        </div>
      </div>
      <CRUD />
    </div>
  )
}

export default Page
