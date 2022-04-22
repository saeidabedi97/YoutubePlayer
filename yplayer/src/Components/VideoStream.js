import Youtube from "react-youtube";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

function VideoStream() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { videoId } = useParams();

  const { data, error } = useSWR(
    `https://youtube.thorsteinsson.is/api/videos/${videoId}`,
    fetcher
  );

  console.log(data);
  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      ></iframe>
    </div>
  );
}

export default VideoStream;
