function EmployeeListItem(props) {
  console.log(props);
  return (
    <div className="item-container">
      <img alt="employee" width="80px" height="80px" src={props.image} />

      <div className="employee-details">
        <h2>{props.name}</h2>
        <p>{props.title}</p>
        <p>{props.phone}</p>
        <p>{props.website}</p>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default EmployeeListItem;
