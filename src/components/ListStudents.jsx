import React, { useState } from "react";
import { average } from "../function/average.js";

/**
 * displays a row of each student
 * @param {Object} props
 * @returns {object} all grades, averages and overall average
 */

const ListStudents = ({ props }) => {
  const [studentOpen, setStudentOpen] = useState(false);

  const french = average(props.frenchMarks);
  const math = average(props.mathMarks);
  const science = average(props.scienceMarks);
  const averageOfSubjects = [];
  averageOfSubjects.push(french, math, science);

  const overall = Math.round(average(averageOfSubjects) * 10) / 10;

  return (
    <li className="list-students">
      {props.firstname + " " + props.surname}
      <button onClick={() => setStudentOpen((wasOpen) => !wasOpen)}>
        {studentOpen ? (
          <i class="fa-sharp fa-solid fa-chevron-down"></i>
        ) : (
          <i class="fa-sharp fa-solid fa-chevron-right"></i>
        )}
      </button>
      {studentOpen && (
        <div className="student">
          <ul className="list-notes">
            <li>La moyenne général est de {overall}</li>
            <br />
            <li>
              Les notes de français : {props.frenchMarks.join(", ")}. La moyenne
              est de {french}
            </li>
            <li>
              Les notes de math : {props.mathMarks.join(", ")}. La moyenne est
              de {math}
            </li>
            <li>
              Les notes de science : {props.scienceMarks.join(", ")}. La moyenne
              est de {science}
            </li>
            <br />
          </ul>
        </div>
      )}
    </li>
  );
};

export default ListStudents;
