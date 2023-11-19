export class Student {
  studentId: number;
  studentName: string;
  studentAge: number;
  studentGrade: number;

  constructor(studentId: number, studentName: string, studentAge: number, studentGrade: number) {
    this.studentId = studentId;
    this.studentName = studentName;
    this.studentAge = studentAge;
    this.studentGrade = studentGrade;
  }
}
