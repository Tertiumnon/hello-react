import React from 'react';
import {
  BrowserRouter,
  Route, Redirect
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import Slider from './pages/slider';

import './App.css';

const initialSate = {
  slider: {
    margin: 10,
    width: 100,
    size: 100,
    radius: 10,
    count: 3,
    cards: [],
    active: 0
  }
};
const store = createStore(rootReducer, initialSate, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" render={() => (
            <Redirect to="/slider?count=5"/>
          )} />
          <Route path="/slider/:count?" component={Slider} />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
