import { FirstPage, YoutubeHeader } from "./style";
import Form from "./Form";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import List from "./List";
import { createContext } from "react";

export const AppContext = createContext();

function VideoPlayer() {
  const [isFetch, setIsFetch] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchText = searchParams.get("q");

  return (
    <div>
      <embed
        src="Images/backgroundimage.jpg"
        style={{ width: "100%", height: "750px" }}
      />
      <YoutubeHeader>YoutubeSearcher22</YoutubeHeader>
      <AppContext.Provider value={{ isFetch, setIsFetch }}>
        <FirstPage>
          <Form
            onSearch={(text) => {
              console.log(text);
              setSearchParams({ q: text });
            }}
          />
          {searchText && <List search={searchText} />}
        </FirstPage>
      </AppContext.Provider>
    </div>
  );
}

export default VideoPlayer;
