import { FirstPage } from "./style";
import Form from "./Form";
import { useSearchParams } from "react-router-dom";
import List from "./List";
import { createContext, useState } from "react";

export const AppContext = createContext();

function VideoPlayer({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchText = searchParams.get("q");

  const [status, setStatus] = useState();
  const [count, setCount] = useState();

  return (
    <div>
      <AppContext.Provider value={{ status, setStatus, count, setCount }}>
        <FirstPage>
          <Form
            onSearch={(text) => {
              console.log(text);
              setSearchParams({ q: text });
            }}
          />
          {children}
          {searchText && <List search={searchText} />}
        </FirstPage>
      </AppContext.Provider>
    </div>
  );
}

export default VideoPlayer;
