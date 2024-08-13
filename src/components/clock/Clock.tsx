import {useEffect, useState} from "react";

// type PropsType = {
//
// }

export const Clock = ()=> {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(()=>{
            setDate(new Date())
        }, 1000)

        return ()=>{
            clearInterval(intervalId)
        }
    }, []);

    const getTwoDigitsString = (number: number) => number < 10 ? "0" + number : number;

    return <div>
        <span>{getTwoDigitsString(date.getHours())}</span>
        :
        <span>{getTwoDigitsString(date.getMinutes())}</span>
        :
        <span>{getTwoDigitsString(date.getSeconds())}</span>
    </div>
}