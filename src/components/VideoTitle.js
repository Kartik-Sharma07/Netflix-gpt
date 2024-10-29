const VideoTitle = ({title, overview}) => {
  return (
    <div>
        <h1 className="font-bold text-6xl mb-10 text-white">{title}</h1>
        <p className="w-1/4 mb-5 text-lg text-white">{overview}</p>
        <div>
            <button className="px-3 py-2 mr-4 w-36 text-black font-semibold bg-white rounded text-xl hover:bg-opacity-80">Play</button>
            <button className="px-3 py-2 mr-4 w-36 text-white font-semibold bg-slate-700 bg-opacity-50 rounded text-xl ">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle