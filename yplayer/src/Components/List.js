import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { AppContext } from "./VideoPlayer";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function List({ search }) {
  const { isFetch } = useContext(AppContext);

  const { data, error } = useSWR(
    `https://youtube.thorsteinsson.is/api/search?q=${search}`,
    fetcher
  );
  console.log("data", data);

  return (
    <>
      {data?.map((video) => (
        <div>
          <Link to={`/videostream/${video.id.videoId}`}>
            (
            <img
              src={video.snippet.thumbnails.default.url}
              alt="videoPreview"
            />
            )
          </Link>
        </div>
      ))}
    </>
  );
}

export default List;
