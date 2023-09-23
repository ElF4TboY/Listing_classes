// import { notesBoardApi } from "../../interfaces/interfaces";
import { calculateAverage } from "../calculateAverage";
import {
  createContent,
  createDiv,
  createLi,
  createUl,
} from "../createHTMLElement";
import { notesBoard } from "../../db/mockNotesBoard";

export const displayNotes = (id: string, foreignKey: string) => {
  const parentNode: HTMLElement | null = document.getElementById(id);
  const newDiv = createDiv("student");
  const newUl = createUl("list-notes");
  newDiv.classList.add(id);

  notesBoard.map((element) => {
    if (element.studentId === foreignKey) {
      const frenchMarks = element.frenchMarks;
      const mathMarks = element.mathMarks;
      const scienceMarks = element.scienceMarks;
      const allNotes = [...frenchMarks, ...mathMarks, ...scienceMarks];

      const newContent = document.createTextNode(
        `La moyenne générale est de ${calculateAverage(allNotes)} / 20.`
      );
      const newLi = createLi("notes", newContent);

      newUl.appendChild(newLi);
      newUl.appendChild(createContent("français", frenchMarks));
      newUl.appendChild(createContent("math", mathMarks));
      newUl.appendChild(createContent("science", scienceMarks));
      newDiv.appendChild(newUl);
      parentNode?.appendChild(newDiv);
    }
  });
};
