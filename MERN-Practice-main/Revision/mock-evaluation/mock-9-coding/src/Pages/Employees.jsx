import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  callForAllEmployees,
  getEmployeesData,
} from "../redux/employees/action";

const Employees = () => {
  const dispatch = useDispatch();
  const { employeesData } = useSelector((state) => state.employee);
  useEffect(() => {
    dispatch(getEmployeesData());
  }, []);
  console.log(employeesData);
  return (
    <div>
      {employeesData &&
        employeesData.map((e, i) => (
          <div key={i}>
            <img src={e.img} />
            <p>Name:{e.name}</p>
            <p>Age: {e.age}</p>
            <p>Gender:{e.gender}</p>
            <p>Department:{e.department}</p>
            <p>Salary :{e.salary}</p>
            <p>Contact No:{e.contact}</p>
          </div>
        ))}
    </div>
  );
};

export default Employees;
//https://mock8muskan.herokuapp.com/employees
