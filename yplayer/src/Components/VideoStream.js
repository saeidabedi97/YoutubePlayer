import { useParams } from "react-router-dom";
import useSWR from "swr";
import { VideoFrame } from "./style";
import { AppContext } from "./VideoPlayer";
import { useContext } from "react";

function VideoStream() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { videoId } = useParams();

  const { data, error } = useSWR(
    `https://youtube.thorsteinsson.is/api/videos/${videoId}`,
    fetcher
  );

  const { setStatus } = useContext(AppContext);

  console.log(data);
  return (
    <div>
      <VideoFrame src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}>
        {setStatus("active")}
      </VideoFrame>
      <p>{data.datePublished}</p>
      <p>{data.description}</p>
      <p>{data.duration}</p>
      <p>{}</p>
    </div>
  );
}

export default VideoStream;
