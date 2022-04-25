import { SearchButton } from "./style"

export default function Button ({children, ...props}){


    return (
        <SearchButton type="submit" Primary>{children}</SearchButton>
    )
}