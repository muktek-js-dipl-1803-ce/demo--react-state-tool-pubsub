import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// STEP-01
import {BrowserRouter} from 'react-router-dom'

// STEP-02
class AppRouter extends Component {
  render(){
    return (
      // STEP-03
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  }
}

// STEP-04
ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
