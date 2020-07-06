import React, { Component } from 'react';
import axios from 'axios';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = { userList: [] };
    }

    componentDidMount() {
        axios.get('/user')
            .then((res) => {
                console.log(res.data['data']);
                this.setState({ userList: res.data['data'] })
            }).catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>User List</h1>
                <table className="table table-sm" style={{ width: '80%', margin: '10px auto' }}>
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.userList.map((listValue, index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{listValue.name}</td>
                                <td>{listValue.email}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        )
    }

}

export default UserList;