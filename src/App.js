import React from 'react';
import './App.css';
import Toolbar from './Toolbar';
import SearchBox from './Searchbox';
import ShowImg from './ShowCase';
import DownSide from './Downside';
import Page2 from './Page2/index';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App-header">

          <Toolbar/>
          <SearchBox/>
          <ShowImg/>
          <DownSide/>
          {/* <Route path="/page2" Component={Page2}/> */}
          <Page2/>
      </div>
    </BrowserRouter>
  );
}

export default App;
