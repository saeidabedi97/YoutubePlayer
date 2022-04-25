import { forwardRef } from "react"
import {SearchField} from "./style"
import { Primary } from "./TextField.stories"


function TextField({primary, placeholder, ...props}, ref){


    return(
        <SearchField type="text" primary={primary} placeholder={placeholder} ref={ref} {...props}></SearchField>
    )

    }
    
export default forwardRef(TextField)