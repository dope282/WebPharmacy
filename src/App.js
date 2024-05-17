import React from 'react';
import './App.css';
import Toolbar from './Toolbar';
import SearchBox from './Searchbox';
import ShowImg from './ShowCase';
import DownSide from './Downside';
import Page2 from './Page2/index';
import { BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import Page3 from './Page3';

function App() {
  return (
    <BrowserRouter>
        <div className="App-header">
          <Toolbar/>
          <SearchBox/>
          <ShowImg/>
          <DownSide/>
          <Page2/>
          <Page3/>
      </div>
    </BrowserRouter>
  );
}

export default App;
