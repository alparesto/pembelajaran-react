import react, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

const myFirstElement = <h1>Hello World!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(myFirstElement)