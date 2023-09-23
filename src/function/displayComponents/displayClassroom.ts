// import { classroomsApi } from "../../interfaces/interfaces";
// import { fetchApi } from "../fetchApi";
import { createBtn, createDiv, createLi, createUl } from "../createHTMLElement";
import { classrooms } from "../../db/mockClassrooms";
import { displayStudents } from "./displayStudents";

/**
 * to display each classroom of the API
 */
export const displayClassroom = () => {
  const app: HTMLElement | null = document.getElementById("app");
  const newDiv = createDiv("all-classrooms");
  const newUl = createUl("class-container");

  classrooms.map((classroom) => {
    const newContent: Text = document.createTextNode(`${classroom.name}`);
    const newLi = createLi("list-class", newContent, classroom.classId);
    const newBtn = createBtn(`${classroom.classId}-btn`);

    newLi.appendChild(newBtn);
    newUl.appendChild(newLi);
    newDiv.appendChild(newUl);
    app?.appendChild(newDiv);

    const getNewBtn: HTMLElement | null = document.getElementById(
      `${classroom.classId}-btn`
    );
    getNewBtn?.addEventListener("click", () => {
      const getDiv: HTMLElement | null = document.querySelector(
        `.${classroom.classId}`
      );
      if (getDiv) {
        getDiv.remove();
        newBtn.textContent = "Open";
      } else {
        // fetchApi(
        //   "http://localhost:3004/students",
        //   "students",
        //   classroom.classId
        // );
        displayStudents(classroom.classId);
        newBtn.textContent = "Close";
      }
    });
  });
};
