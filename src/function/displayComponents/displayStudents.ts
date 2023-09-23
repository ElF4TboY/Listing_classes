// import { studentsApi } from "../../interfaces/interfaces";
import { createBtn, createDiv, createLi, createUl } from "../createHTMLElement";
// import { fetchApi } from "../fetchApi";
import { students } from "../../db/mockStudents";
import { displayNotes } from "./displayNotes";

/**
 * to display each students of each class of the API
 */
export const displayStudents = (id: string) => {
  const parentNode: HTMLElement | null = document.getElementById(id);
  const newDiv = createDiv("class-card");
  const newUl = createUl("students-container");
  newDiv.classList.add(id);

  students.map((student) => {
    if (student.classId === id) {
      const newContent = document.createTextNode(
        `${student.firstname} ${student.surname}`
      );
      const newLi = createLi("list-students", newContent, `${student.id}`);
      const newBtn = createBtn(`${student.id}-btn`);

      newLi.appendChild(newBtn);
      newUl.appendChild(newLi);
      newDiv.appendChild(newUl);
      parentNode?.appendChild(newDiv);
    }

    const getNewBtn: HTMLElement | null = document.getElementById(
      `${student.id}-btn`
    );
    getNewBtn?.addEventListener("click", () => {
      const getDiv: HTMLElement | null = document.querySelector(
        `.${student.id}`
      );
      if (getDiv) {
        getDiv.remove();
        getNewBtn.textContent = "Open";
      } else {
        // fetchApi(
        //   "http://localhost:3004/notesBoard",
        //   "notes",
        //   student.id,
        //   student.studentId
        // );
        displayNotes(student.id, student.studentId);
        getNewBtn.textContent = "Close";
      }
    });
  });
};
