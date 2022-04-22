import React from "react";
import VideoPlayer from "./Components/VideoPlayer";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <VideoPlayer />
      <Suspense fallback={<p>Loading bundle...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default App;
