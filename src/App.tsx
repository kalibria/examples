
import './App.css'
import {MySelectorWrapper} from "./components/MySelector/MySelectorWrapper.tsx";
import {IndicatorWrapper} from "./components/onOffIndicator/IndicatorWrapper.tsx";


function App() {


    return (
        <div className={'wrapper'}>
            <IndicatorWrapper/>
            <MySelectorWrapper/>
        </div>
    )
}

export default App
