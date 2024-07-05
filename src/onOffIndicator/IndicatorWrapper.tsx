import {OnOffIndicator} from "./OnOffIndicator.tsx";
import React, {useState} from "react";

export const IndicatorWrapper = () => {
    const [onIsClick, setOnIsClick] = useState<boolean>(false);

    const changeIndicator = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (event.currentTarget.name === 'on') {
            setOnIsClick(true)
        } else {
            setOnIsClick(false)
        }
    }
    return <OnOffIndicator onIsClick={onIsClick} handleClick={changeIndicator}/>
}