import React, { useEffect, useState } from "react";
import axios from "axios";
import ListStudents from "./ListStudents";
import DisplayComponent from "./displayComponent";

/**
 * displays a row of each classroom and display all students
 * @param {Object} props
 * @returns {Object} a classroom
 * @return {Object} calls the display component of each students
 */

const ListClass = ({ props, id }) => {
  const [allStudents, setAllStudents] = useState([]);
  const [classOpen, setClassOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3004/students")
      .then((res) => setAllStudents(res.data));
  }, []);

  return (
    <li className="list-class">
      {props.name}
      <button onClick={() => setClassOpen((wasOpen) => !wasOpen)}>
        {classOpen ? (
          <i class="fa-sharp fa-solid fa-chevron-down"></i>
        ) : (
          <i class="fa-sharp fa-solid fa-chevron-right"></i>
        )}
      </button>
      {classOpen && (
        <div className="class-card">
          <DisplayComponent
            api={allStudents}
            id={id}
            className={"students-container"}
          />
        </div>
      )}
    </li>
  );
};

export default ListClass;
