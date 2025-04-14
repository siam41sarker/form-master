import { useState } from "react"
const useInputHook = (dvalue = 'Siam') =>
    {
        const [values,setValues] = useState(dvalue);
        const handleData = e =>
            {
                setValues(e.target.value);
            }
        return [values,handleData];
    }
const useInputState = (defaultValuesHere="Sabrina")=>
    {
        const [measure,setMeasure] = useState(defaultValuesHere);
        const onChange = e =>
            {
                setMeasure(e.target.value);
            }
        return {
            measure,
            onChange
        }
    }
export {useInputHook,useInputState};