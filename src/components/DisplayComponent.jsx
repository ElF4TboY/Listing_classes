import React from "react";

import ListClass from "./ListClass";
import ListStudents from "./ListStudents";

/**
 * to browse an api
 * @param {Array} api
 * @param {String} id
 * @param {String} className
 * @returns {Object} calls the display component
 */

const DisplayComponent = ({ api, id, className }) => {
  return (
    <ul className={className}>
      {api
        .filter((element) => element.classId === id)
        .map((element) => {
          if (className === "class-container") {
            return <ListClass key={element.id} props={element} id={id} />;
          } else if (className === "students-container") {
            return <ListStudents key={element.id} props={element} />;
          }
        })}
    </ul>
  );
};

export default DisplayComponent;
