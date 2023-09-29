import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    // return <Header favcol="Yellow"/>
    return <Container />
}

class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {show: true}
    }

    delHeader = () => {
        this.setState({show: false})
    }

    render() {
        let component;
        if( this.state.show ) {
            component = <Child />
        }
        return(
           <>
            {component}
            <button type="button" onClick={this.delHeader}>Delete Component</button>
           </>
        )
    }
}

class Child extends Component {
    componentWillUnmount() {
        alert('This Component will be deleted!')
    }

    render() {
        return( <h1>Component</h1> )
    }
}

// step 1
class Header extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = { favoriteColor: "Blue" }
    // }


    // static getDerivedStateFromProps(props, state) {
    //     return {favoriteColor: props.favcol}
    // }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({favoriteColor: "Black"})
    //     }, 2000)
    // }

    // shouldComponentUpdate() {
    //     return true;
    // }

    // changeColor = () => {
    //     this.setState({favoriteColor: "White"})
    // }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({favoriteColor: "Black"})
    //     }, 2000)
    // }

    // getSnapshotBeforeUpdate = (prevProps, prevState) => {
    //     document.getElementById('div1').innerHTML =
    //     "Before: " + prevState.favoriteColor;
    // }

    // componentDidUpdate = () => {
    //     document.getElementById('div2').innerHTML =
    //     "After: " + this.state.favoriteColor;
    // }

    // componentDidUpdate() {
    //     document.getElementById('div1').innerHTML =
    //     "Updated color to " + this.state.favoriteColor
    // }

    render() {
        return (
            <>
                <h1>My favorite color is {this.state.favoriteColor}</h1>
                {/* <button type="button" onClick={this.changeColor}>change color</button> */}
                <div id="div1"></div>
                <div id="div2"></div>
            </>
        )
    }
}

export default App;