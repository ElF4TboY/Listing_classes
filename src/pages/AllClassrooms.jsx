import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import DisplayComponent from "../components/DisplayComponent";

const AllClassrooms = () => {
  const [allClassrooms, setAllClassrooms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/classrooms")
      .then((res) => setAllClassrooms(res.data));
  }, []);

  return (
    <div className="body-container">
      <nav>
        <Navigation />
      </nav>
      <header>
        <div id="class1">
          <DisplayComponent
            api={allClassrooms}
            id={"class1"}
            className={"class-container"}
          />
        </div>
        <div id="class2">
          <DisplayComponent
            api={allClassrooms}
            id={"class2"}
            className={"class-container"}
          />
        </div>
      </header>
    </div>
  );
};

export default AllClassrooms;
