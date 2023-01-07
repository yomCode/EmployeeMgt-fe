import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Button from "./Button";


const UpdateEmployee = () => {

    const [id] = useParams();
    const [employee, setEmployee] = useState({

        id: "",
        firstName: "",
        lastName: "",
        email: ""
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value});
    }



    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await EmployeeService.getEmployeeById(id);
                setEmployee(response.fetchData)
            }catch(error){
                console.log(error)
            }
        };
        fetchData();
    }, [id])

    const updateEmployee = (e) => {
        e.preventDefault();
    }


    return(
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3 offset-md-3'>
                        <h3 className='text-center'>Update Employee</h3>
                            <div className='card-body'>
                                <form action="">
                                    <div className='form-group'>
                                        <label>First Name:</label>
                                        <input type="text" placeholder='First Name' className='form-control' 
                                        name='firstName' value={employee.firstName} onChange={(e) => handleChange(e)} />
                                    </div>
                                    <div>
                                        <label>Last Name:</label>
                                        <input type="text" placeholder='Last Name' className='form-control' 
                                        name='lastName' value={employee.lastName} onChange={(e) => handleChange(e)} />
                                    </div>
                                    <div>
                                        <label>Email Address:</label>
                                        <input type="email" placeholder='Email address' className='form-control' 
                                        name='email' value={employee.email} onChange={(e) => handleChange(e)} />
                                    </div>
                                    <div>
                                        <Button type="submit" classAttr="btn btn-success" title = "Save" click={updateEmployee} />
                                        <Button type="button" classAttr="btn btn-danger" title = "Cancel" />
                                    </div>                            
                                </form>
                            </div>
                    </div>    
                </div>    

            </div>
        </div>
    )
}


export default UpdateEmployee;