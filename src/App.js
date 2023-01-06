import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import FooterComponents from './components/FooterComponents';
import HeaderComponents from './components/HeaderComponents';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';


const PATH_TO_HOME = '/';
const PATH_TO_EMPLOYEE_LIST = '/api/v1/admin/all-employees';
const PATH_TO_ADD_EMPLOYEE = '/api/v1/admin/add-employees';

function App() {
  return (
    
    <div>
      <BrowserRouter>

          <HeaderComponents />
            <div className="container">
              <Routes>
                <Route path= {PATH_TO_HOME} element={<ListEmployeeComponent />} /> 
                <Route path = {PATH_TO_EMPLOYEE_LIST} element= {<ListEmployeeComponent />} />
                <Route path= {PATH_TO_ADD_EMPLOYEE} element= {<CreateEmployeeComponent />} />
              </Routes>
            </div>

          <FooterComponents />
      </BrowserRouter>
    </div>
  );
}

export default App;
