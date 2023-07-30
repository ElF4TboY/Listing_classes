export type classroomsApi = {
  id: string;
  classId: string;
  name: string;
};

export type studentsApi = {
  id: string;
  classId: string;
  firstname: string;
  surname: string;
  frenchMarks: number[];
  mathMarks: number[];
  scienceMarks: number[];
};

export type noteBoard = {
  id: string;
  studentId: string;
  frenchMarks: number[];
  mathMarks: number[];
  scienceMarks: number[];
};
