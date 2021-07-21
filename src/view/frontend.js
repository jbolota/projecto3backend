import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

var Especialidade = require('../model/especialidade');

class listComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Especialidade: []
        }
    }
    componentDidMount() {
        const url = "http://localhost:3000/especialidade/lista";
        axios.get(url)
            .then(res => {
                if (res.data.success) {
                    const data = res.data.data;
                    console.log(data);
                    this.setState({ Especialidade: data });
                } else {
                    alert("Error Web Service!");
                }
            })
            .catch(error => {
                alert(error)
            });
    }
    render() {
        return (
            <table className="table table-hover table-striped">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th> 
                    <th scope="col">Role</th>
                    <th scope="col">Name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>1</th>
                    <th>1</th>
                    <th>1</th>
                    <td>
                        <button className="btnbtn-outline-info "> Edit </button>
                    </td>
                    <td>
                        <button className="btnbtn-outline-danger "> Delete </button>
                    </td>
                </tr>
                { this.loadFillData() }
            </tbody>
            </table>
        );
    }
    loadFillData(){
        return this.state.Especialidade.map((data, index)=>{
            return(
                <tr key={index}>
                   <th>{data.id}</th>
                <td>
                    <button className="btn btn-outline-info "> Edit </button>
                </td>
                <td>
                    <button className="btn btn-outline-danger "> Delete </button>
                </td>
                </tr>
                )
            });
        }
    }

    export default listComponent;
