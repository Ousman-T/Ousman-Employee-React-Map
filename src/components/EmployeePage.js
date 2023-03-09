import EmployeeListItem from "./EmployeeListItem";
import Header from "./Header";
// import EmployeeList from "./EmployeeList";
import employeesData from "../../data/employeesData";

function EmployeePage(props) {
  return (
    <div>
      <Header title="Employee" />

      <EmployeeListItem
        name={employeesData[2].name}
        title={employeesData[2].title}
        image={employeesData[2].image}
        phone={employeesData[2].phone}
        website={employeesData[2].website}
        email={employeesData[2].email}
      />
    </div>
  );
}

export default EmployeePage;
