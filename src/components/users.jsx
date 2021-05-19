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
                        phrase: data[i].company.catchPhrase
                    }
                )
            }
    
            this.setState({ users: usersArr, loading: false, initialFetch: false })
        }
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
                        />
                    ))}

                </div>
             );
        }
    }
}
 
export default Users;