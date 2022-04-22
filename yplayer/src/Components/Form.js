import { SearchField, SearchButton, SearchFieldContainer } from "./style";
import { useForm } from "react-hook-form";

function Form({ onSearch }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    onSearch(data.text);
  };

  return (
    <SearchFieldContainer onSubmit={handleSubmit(onSubmit)}>
      <SearchField type="text" {...register("text")} />
      <SearchButton type="submit">Search</SearchButton>
    </SearchFieldContainer>
  );
}

export default Form;
