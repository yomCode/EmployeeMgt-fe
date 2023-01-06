import React, { Component } from 'react';
import Button from './Button';



// const CREATE_EMPLOYEE_ROUTE = "/api/v1/admin/add-employees";
const PATH_TO_EMPLOYEE_LIST = '/api/v1/admin/all-employees';

class CreateEmployeeComponent extends Component {

    
    
    constructor(props){
        super(props)

        this.state = {
           
            firstName: '',
            lastName: '',
            emailAddress: ''

        }
        this.changefirstNameHandler = this.changefirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailAddressHandler = this.changeEmailAddressHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this)
    }


    changefirstNameHandler = (event) => {
        this.setState({firstName: event.target.value});

    }
    

    changeLastNameHandler(event){
        this.setState({lastName: event.target.value});
    }

    changeEmailAddressHandler(event){
        this.setState({emailAddress: event.target.value});
    }

    saveEmployee = (e) =>{
        e.prevenentDefault();

        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailAddress: this.state.emailAddress}
        console.log('employee => ' + JSON.stringify(employee));
    }

    cancel(elem){
        this.setState({})
        window.location.href = PATH_TO_EMPLOYEE_LIST;
        
    }
    
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add new Employee</h3>
                                <div className='card-body'>
                                    <form action="">
                                        <div className='form-group'>
                                            <label>First Name:</label>
                                            <input type="text" placeholder='First Name' className='form-control' 
                                            name='firstName' value={this.state.firstName} onChange={this.changefirstNameHandler} />
                                        </div>
                                        <div>
                                            <label>Last Name:</label>
                                            <input type="text" placeholder='Last Name' className='form-control' 
                                            name='lastName' value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                        </div>
                                        <div>
                                            <label>Email Address:</label>
                                            <input type="email" placeholder='Email address' className='form-control' 
                                            name='emailAddress' value={this.state.emailAddress} onChange={this.changeEmailAddressHandler} />
                                        </div>
                                        <div>
                                            <Button type="submit" classAttr="btn btn-success" title = "Save" click={this.saveEmployee} />
                                            <Button type="button" classAttr="btn btn-danger" title = "Cancel" click={this.cancel.bind(this)} />
                                        </div>                            
                                    </form>
                                </div>
                        </div>

                    </div>


                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;