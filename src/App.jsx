import './App.css'
import Location from './components/Location/Location'
import SearchCity from './components/SearchCity/SearchCity'
import Weather from './components/Weather/Weather'

function App() {
 
  return (
   <div className="App">
    <SearchCity/>
    <Location/>
    <Weather/>
   </div>
  )
}

export default App
