import EmployeeListItem from "./EmployeeListItem";
import employeesData from "../../data/employeesData";

function EmployeeList() {
  // const newArray = employeeData.map((employee) => (
  //   <EmployeeListItem
  //   title={employee.title}
  //   name={employee.name}
  //   image={employee.image}
  //   />
  // ));
  return (
    <div>
      {employeesData.map((employee) => (
        <EmployeeListItem
          title={employee.title}
          name={employee.name}
          image={employee.image}
        />
      ))}
    </div>
  );
}

export default EmployeeList;
