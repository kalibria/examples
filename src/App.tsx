import {IndicatorWrapper} from "./onOffIndicator/IndicatorWrapper.tsx";
import {MySelectorWrapper} from "./MySelector/MySelectorWrapper.tsx";
import './App.css'

function App() {


    return (
        <div className={'wrapper'}>
            <IndicatorWrapper/>
            <MySelectorWrapper/>
        </div>
    )
}

export default App
