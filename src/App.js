import logo from './logo.svg';
import './App.scss';
import './styles/fonts.scss'
import Card from './components/card/Card';
import Slider from './components/slider/Slider';

function App() {
  return (
    <div className="App">
      <div className="slider">
        <Slider/>
      </div> 
    </div>
  );
}

export default App;
