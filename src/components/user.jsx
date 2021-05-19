import React, { Component } from 'react';

class User extends Component {
    state = {
        id: this.props.user.id,
        name: this.props.user.name,
        email: this.props.user.email,
        phrase: this.props.user.phrase,
        editUser: this.props.user.editUser
    }

    handleEdit = () => {
        this.setState({
            editUser: true
        })
    }

    render() {
        if (this.state.editUser) {
            return (
                <form onSubmit={(e) => this.props.onSubmit(e, this.props.user.id)}>
                    <label htmlFor="name">Name:</label>
                    <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={e => this.setState({ name: e.target.value }) }
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={e => this.setState({ email: e.target.value }) }
                    />
                    <label htmlFor="phrase">Phrase:</label>
                    <input
                        name="phrase"
                        type="text"
                        value={this.state.phrase}
                        onChange={e => this.setState({ phrase: e.target.value }) }
                    />
                    <input
                        type="submit"
                        value="Save"
                    />
                </form>
            )
        } else {
            return (
                <div className="userDiv">
                    <h3>{this.state.name}</h3>
                    <span>{this.state.email}</span><br></br>
                    <span>{this.state.phrase}</span>
                    <div>
                        <button onClick={() => this.props.onDelete(this.props.user.id)}>Delete</button>
                        <button onClick={this.handleEdit}>Edit</button>
                    </div>
                </div>
            )
        }
    }

}

export default User;