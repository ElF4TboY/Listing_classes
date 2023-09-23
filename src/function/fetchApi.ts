import {
  classroomsApi,
  studentsApi,
  notesBoardApi,
} from "../interfaces/interfaces";
import { displayClassroom } from "./displayComponents/displayClassroom";
import { displayNotes } from "./displayComponents/displayNotes";
import { displayStudents } from "./displayComponents/displayStudents";

let classrooms: classroomsApi[];
let students: studentsApi[];
let notesBoard: notesBoardApi[];

/**
 *@param {string | null} id
 */
export const fetchApi = async (
  slug: string,
  className: string,
  id?: any,
  foreignKey?: any
) => {
  await fetch(slug)
    .then((res) => res.json())
    .then((data) => {
      switch (className) {
        case "classroom":
          console.log(data);

          classrooms = data;
          displayClassroom(classrooms);
          break;
        case "students":
          students = data;
          displayStudents(students, id);
          break;
        case "notes":
          notesBoard = data;
          displayNotes(notesBoard, id, foreignKey);
          break;

        default:
          console.log("fetchApi() ne glop pas");

          break;
      }
    });
};
