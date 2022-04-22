import { useSearchParams } from "react-router-dom";
import List from "../Components/List";

export default function Search() {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("q");

  return <List search={searchText} />;
}
