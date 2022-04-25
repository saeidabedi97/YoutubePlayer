import { SearchField, SearchButton, SearchFieldContainer } from "./style";
import { useForm } from "react-hook-form";
import TextField from "./TextField";
import Button from "./ButtonForSearch";

function Form({ onSearch }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    onSearch(data.text);
  };

  return (
    <SearchFieldContainer onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register("text")} />
      <Button>search</Button>
    </SearchFieldContainer>
  );
}

export default Form;
