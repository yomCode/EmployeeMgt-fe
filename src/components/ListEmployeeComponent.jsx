import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import Button from './Button';


const CREATE_EMPLOYEE_ROUTE = "/api/v1/admin/add-employees";


class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            employees : []
        }
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) =>{
            this.setState({employees : res.data});
        })
    
    }

     addEmployee(){
        window.location.href = CREATE_EMPLOYEE_ROUTE;
    }
    
    render() {
        return (
            <div> 
                <h2 className='text-center' >Employee List</h2>
                <div>
                    <button className='btn btn-primary' onClick={this.addEmployee}>Add new Employee</button>
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th className='text-center'>S/N</th>
                                <th className='text-center'>Employee First Name</th>
                                <th className='text-center'>Employee Last Name</th>
                                <th className='text-center'>Employee Email</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                this.state.employees.map(
                                    employee => 
                                    <tr key = {employee.id}> 
                                    <td> {} </td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.email}</td>
                                    <td>
                                        <div className='col d-flex justify-content-around'>
                                            <Button type="button"  title = "Delete" classAttr='btn btn-danger' />
                                            <Button type="button" title = "Edit" classAttr='btn btn-primary' />
                                            <Button type="button" title = "View" classAttr='btn btn-info' />
                                        </div>
                                        
                                    </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;