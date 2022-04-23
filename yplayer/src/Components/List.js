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
  InnerDetails,
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
            <InnerDetails className={status === "active" ? "column" : "row"}>
              <ListPreviewImages
                className={status === "active" ? "smaller" : "bigger"}
                src={video.snippet.thumbnails.default.url}
                alt="videoPreview"
              />
              <TitleAndDurationContainer>
                <VideoTitle
                  className={status === "active" ? "columnTitle" : "rowTitle"}
                >
                  {video.title}
                </VideoTitle>
                <VideoDuration
                  className={
                    status === "active" ? "columnDuration" : "rowDuration"
                  }
                >
                  {video.snippet.duration}
                </VideoDuration>
                <VideoPublishedAt
                  className={
                    status === "active" ? "columnPublishDate" : "rowPublishDate"
                  }
                >
                  {video.snippet.publishedAt}
                </VideoPublishedAt>
                <VideoViews
                  className={status === "active?" ? "columnViews" : "rowViews"}
                >
                  Views:{video.snippet.views}
                </VideoViews>
              </TitleAndDurationContainer>
            </InnerDetails>
          </Link>
        </div>
      ))}
    </ListContainer>
  );
}

export default List;
