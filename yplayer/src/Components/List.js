import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import {
  ListPreviewImages,
  ListContainer,
  VideoTitle,
  VideoDuration,
  VideoPublishedAt,
  VideoViews,
  TitleAndDurationContainer,
} from "./style";
import { AppContext } from "./VideoPlayer";
// import "./List.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function List({ search }) {
  const { data, error } = useSWR(
    `https://youtube.thorsteinsson.is/api/search?q=${search}`,
    fetcher
  );
  console.log("data", data);

  const { status, setStatus, count, setCount } = useContext(AppContext);

  return (
    <ListContainer className={status === "active" ? "lower" : "top"}>
      {data?.map((video) => (
        <div>
          <Link
            to={`/videostream/${video.id.videoId}`}
            style={{
              textDecoration: "none",
              fontSize: "45px",
              color: "whitesmoke",
              padding: "2px 0 0 10px ",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <ListPreviewImages
                className={status === "active" ? "smaller" : "bigger"}
                src={video.snippet.thumbnails.default.url}
                alt="videoPreview"
              />
              <TitleAndDurationContainer></TitleAndDurationContainer>
              <VideoTitle>{video.title}</VideoTitle>
              <VideoDuration>{video.snippet.duration}</VideoDuration>
            </div>

            <VideoPublishedAt>{video.snippet.publishedAt}</VideoPublishedAt>
            <VideoViews>{video.snippet.views}</VideoViews>
          </Link>
        </div>
      ))}
    </ListContainer>
  );
}

export default List;
