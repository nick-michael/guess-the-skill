import logo from '/logo.svg'
import './App.css'
import { OsrsQuiz } from './osrs/osrs-quiz'

function App() {
    return (
        <>
            <div>
                <img src={logo} className="logo" alt="Vite logo" />
                <OsrsQuiz />
            </div>
        </>
    )
}

export default App
