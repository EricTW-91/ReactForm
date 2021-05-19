import React, { Component } from 'react';
import User from './user';

class Users extends Component {
    state = { 
        loading: true,
        editUser: false,
        initialFetch: true,
        userCount: 10,
        users: [],
    }

    async componentDidMount() {
        if (this.state.initialFetch) {
            const url = "https://jsonplaceholder.typicode.com/users";
            const response = await fetch(url);
            const data = await response.json();
    
            let usersArr = new Array;

            for(let i=0; i<this.state.userCount; i++){
                usersArr.push(
                    {
                        id: data[i].id,
                        name: data[i].name,
                        email: data[i].email,
                        phrase: data[i].company.catchPhrase,
                        editUser: false
                    }
                )
            }
    
            this.setState({ users: usersArr, loading: false, initialFetch: false })
        }
    }

    handleDelete = userID => {
        this.setState({
            users: this.state.users.filter(user => user.id !== userID)
        })
    }


    handleSubmit = (e, userID) => {
        e.preventDefault(); //prevent the page reload
        
        console.log(e.target[0].defaultValue)
        console.log(this.state.users[userID - 1])
        
        const user = {
            id: userID,
            name: e.target[0].defaultValue,
            email: e.target[1].defaultValue,
            phrase: e.target[2].defaultValue,
            editUser: false
        }



        // this.setState({
        //     users: this.state.users[userID-1]
        // })

    }

    render() {
        if (this.state.loading) {
            return <div>Loading</div>
        } else {
            return (
                <div>
                    {this.state.users.map(user => (
                        <User
                            key={user.id}
                            user={user}
                            onDelete={this.handleDelete}
                            onSubmit={this.handleSubmit}
                        />
                    ))}

                </div>
             );
        }
    }
}
 
export default Users;