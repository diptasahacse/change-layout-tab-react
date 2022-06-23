import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [selectedLayout, setSelectedLayout] = useState('')

  return (
    <div className='mx-auto' style={{maxWidth:"1200px", width:"100%"}}>
      <div>
        <button className={` normal-button-bg  py-2 px-3 rounded-lg m-1 ${(selectedLayout == '' || selectedLayout == 'layout1') && 'active-button'}`} onClick={() =>setSelectedLayout('layout1')}>Layout 1</button>
        <button className={` normal-button-bg  py-2 px-3 rounded-lg m-1 ${(selectedLayout == 'layout2') && 'active-button'}`}  onClick={() =>setSelectedLayout('layout2')}>Layout 2</button>
        <button className={` normal-button-bg  py-2 px-3 rounded-lg m-1 ${(selectedLayout == 'layout3') && 'active-button'}`}  onClick={() =>setSelectedLayout('layout3')}>Layout 3</button>
      </div>



      <div className={`grid gap-2 ${selectedLayout == 'layout2' && 'grid-cols-3'} ${selectedLayout == 'layout3' && 'grid-cols-4'}`}>
        <div className={`card-bg-color flex justify-center items-center rounded-lg py-4 text-white ${selectedLayout == 'layout3' && 'col-span-4'} ${selectedLayout == 'layout2' && 'h-80'}`}>Card 1</div>
        <div className={`card-bg-color flex justify-center items-center rounded-lg py-4 text-white ${selectedLayout == 'layout2' && 'h-80'}  ${selectedLayout == 'layout3' && 'h-96'}`}>Card 2</div>
        <div className={`card-bg-color flex justify-center items-center rounded-lg py-4 text-white ${selectedLayout == 'layout3' && 'col-span-2 h-96'} ${selectedLayout == 'layout2' && 'h-80'}`}>Card 3</div>
        <div className={`card-bg-color flex justify-center items-center rounded-lg py-4 text-white  ${selectedLayout == 'layout2' && 'h-80'}  ${selectedLayout == 'layout3' && 'h-96'}`}>Card 4</div>
        <div className={`card-bg-color flex justify-center items-center rounded-lg py-4 text-white ${selectedLayout == 'layout3' && 'col-span-4'} ${selectedLayout == 'layout2' && 'h-80'}`}>Card 5</div>
      </div>


    </div>
  );
}

export default App;
