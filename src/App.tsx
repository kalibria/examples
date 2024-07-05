import React, {useState} from "react";
import {OnOffIndicator} from "./onOffIndicator/OnOffIndicator.tsx";


function App() {
    const [onIsClick, setOnIsClick] = useState<boolean>(false);

    const changeIndicator = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (event.currentTarget.name === 'on') {
            setOnIsClick(true)
        } else {
            setOnIsClick(false)
        }
    }

  return (
    <>
        <OnOffIndicator onIsClick={onIsClick} handleClick={changeIndicator}/>
    </>
  )
}

export default App
