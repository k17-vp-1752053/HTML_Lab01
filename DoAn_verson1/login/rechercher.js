import react from "react"
var reactDOME = require('react-dom');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div>Hello World </div>
    }


}

reactDOM.render(< App /> , document.getElementById("root");