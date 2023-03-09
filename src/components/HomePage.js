import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

function HomePage() {
  return (
    <>
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList />
    </>
  );
}

export default HomePage;
