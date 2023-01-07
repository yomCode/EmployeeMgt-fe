import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FooterComponents from './components/FooterComponents';
import HeaderComponents from './components/HeaderComponents';
import AddEmployee from './components/AddEmployee';
import ListEmployee from './components/ListEmployeeComponent';
import UpdateEmployee from './components/UpdateEmployee';


const PATH_TO_HOME = '/';
const PATH_TO_EMPLOYEE_LIST = '/employeeList';
const PATH_TO_ADD_EMPLOYEE = '/addEmployee';
const PATH_TO_UPDATE_EMPLOYEE = '/updateEmployee/:id';

function App() {
  return (
    
    <div>
      <BrowserRouter>

          <HeaderComponents />
            <div className="container">
              <Routes>
                <Route path= {PATH_TO_HOME} element={<ListEmployee />} /> 
                <Route path = {PATH_TO_EMPLOYEE_LIST} element= {<ListEmployee />} />
                <Route path= {PATH_TO_ADD_EMPLOYEE} element= {<AddEmployee />} />
                <Route path={PATH_TO_UPDATE_EMPLOYEE} element={<UpdateEmployee />} />
              </Routes>
            </div>

          <FooterComponents />
      </BrowserRouter>
    </div>
  );
}

export default App;
