export type classroomsApi = {
  id: number;
  classId: string;
  name: string;
};

export type studentsApi = {
  id: number;
  classId: string;
  firstname: string;
  surname: string;
  frenchMarks: number[];
  mathMarks: number[];
  scienceMarks: number[];
};
