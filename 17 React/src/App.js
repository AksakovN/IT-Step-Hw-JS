import { useState } from 'react';
import './App.css';
import { Card } from './components/bibliography/bibliography';
import { Drinks } from './components/drink/drink';
import { api } from './utils/data/data';
import { drinks } from "./utils/data/drinks";

function App() {


  const [isShowCard, setIsShowCard] = useState(false);
  const [isShowDrink, setIsShowDrink] = useState(false);
  function handlerClick(event){ 
    if (event.target.innerText === '№ 1') {
      setIsShowCard(!isShowCard);
      setIsShowDrink(false);
    }
    if (event.target.innerText === '№ 2') {
      setIsShowDrink(!isShowDrink);
      setIsShowCard(false)
    }
  };



  return (
    <div className="App">
      <div className='menu'>
        <div className='menuItem' onClick={handlerClick}>№ 1</div>
        <div className='menuItem' onClick={handlerClick}>№ 2</div>
      </div>

      {isShowCard && <Card data={api}/>}
      {isShowDrink && <Drinks data={drinks}/>}

    </div>
  );
}

export default App;
