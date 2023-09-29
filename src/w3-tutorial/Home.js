import react, {Component} from 'react'
import ReactDOM from 'react-dom/client'

function Hello(props) {
    return <h1>Hello, {props.nama}!</h1>
}

function App() {
    return <Hello nama="Alfa"/>
}

export default App;