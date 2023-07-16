import { studentsApi } from "../../interfaces/interfaces";
import { createBtn, createDiv, createLi, createUl } from "../createHTMLElement";

/**
 * to display each students of each class of the API
 */
export const displayStudents = (students: studentsApi[], id: string) => {
  const parentNode: HTMLElement | null = document.getElementById(id);
  const newDiv = createDiv("class-card");
  const newUl = createUl("students-container");
  newDiv.classList.add(id);

  students.map((student) => {
    if (student.classId === id) {
      const newContent = document.createTextNode(
        `${student.firstname} ${student.surname}`
      );
      const newLi = createLi("list-students", `${student.id}`, newContent);
      const newBtn = createBtn(`${student.id}-btn`);

      newLi.appendChild(newBtn);
      newUl.appendChild(newLi);
      newDiv.appendChild(newUl);
      parentNode?.appendChild(newDiv);
    }

    const getNewBtn: HTMLElement | null = document.getElementById(
      `${student.id}-btn`
    );
    getNewBtn?.addEventListener("click", () =>
      console.log(`surprise motherfucker ${student.id}`)
    );
  });
};
