import {Component, OnInit} from '@angular/core';
import {Student} from "./domain/student";
import {DexieService} from "./db/dexie.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myApp';

  newStudent: Student = new Student(0, '', 0, 0);
  updatedStudent!: Student;

  students: Student[] = [];
  edited: boolean = false;

  constructor(private dexieService: DexieService) {}

  ngOnInit() {
    this.loadStudents();
  }

  async addStudent(data: Student) {
      await this.dexieService.students.add(data);
      this.loadStudents();
      this.newStudent = new Student(0, '', 0, 0);
  }

  async loadStudents() {
    this.students = await this.dexieService.students.toArray();
  }

  async onUpdate(student: Student){
    console.log(student)
    await  this.dexieService.students.update(student.studentId, student)
    this.loadStudents()
  }

  async onDeleteStudent(student: Student){
    await this.dexieService.students.delete(student.studentId)
    this.loadStudents()
  }
}
