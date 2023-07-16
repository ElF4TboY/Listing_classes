import { classroomsApi, studentsApi } from "../interfaces/interfaces";
import { displayClassroom } from "./displayComponents/displayClassroom";
import { displayStudents } from "./displayComponents/displayStudents";

let classrooms: classroomsApi[];
let students: studentsApi[];

/**
 *@param {string | null} id
 */
export const fetchApi = async (slug: string, className: string, id?: any) => {
  await fetch(slug)
    .then((res) => res.json())
    .then((data) => {
      switch (className) {
        case "classroom":
          classrooms = data;
          displayClassroom(classrooms);
          break;
        case "students":
          students = data;
          displayStudents(students, id);
          break;

        default:
          console.log("fetchApi() ne glop pas");

          break;
      }
    });
};
