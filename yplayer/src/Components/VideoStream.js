import { useParams } from "react-router-dom";
import useSWR from "swr";
import { VideoFrame } from "./style";
import { AppContext } from "./VideoPlayer";
import { useContext } from "react";

function VideoStream() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { videoId } = useParams();

  const { data, loading } = useSWR(
    `https://youtube.thorsteinsson.is/api/videos/${videoId}`,
    fetcher
  );

  const { setStatus } = useContext(AppContext);

  console.log(data);

  // if (loading) {
  //   return <p>Data is loading...</p>;
  // }
  return (
    <div>
      <VideoFrame src={`https://www.youtube.com/embed/${videoId}`}>
        {setStatus("active")}
      </VideoFrame>
      {/* {data.map((details) => (
        <div key={details.videoId}>
          <p>{details.title}</p>
        </div>
      ))} */}
    </div>
  );
}

export default VideoStream;
