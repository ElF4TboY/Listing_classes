import { classroomsApi } from "../../interfaces/interfaces";
import { createBtn, createDiv, createLi, createUl } from "../createHTMLElement";
import { fetchApi } from "../fetchApi";

/**
 * to display each classroom of the API
 */
export const displayClassroom = (classrooms: classroomsApi[]) => {
  const app: HTMLElement | null = document.getElementById("app");
  const newDiv = createDiv("all-classrooms");
  const newUl = createUl("class-container");

  classrooms.map((classroom) => {
    const newContent: Text = document.createTextNode(`${classroom.name}`);
    const newLi = createLi("list-class", classroom.classId, newContent);
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
        fetchApi(
          "http://localhost:3004/students",
          "students",
          classroom.classId
        );
        newBtn.textContent = "Close";
      }
    });
  });
};
