// create your App component here
import React, {Component} from 'react'

class App extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        return fetch('http://api.open-notify.org/astros.json')
        .then(res=>res.json())
        .then(usersData=>{
            this.setState({
                users: usersData.people

            })

        })

    }
    render() {
        return (
            <div>
                {this.state.users.map(person=>person.name)}
            </div>)
    }
}

 export default App