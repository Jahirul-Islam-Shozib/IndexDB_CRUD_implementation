import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StudentDataService} from "../services/student-data.service";
import {Student} from "../domain/student";

@Component({
  selector: 'app-student-data-table',
  templateUrl: './student-data-table.component.html',
  styleUrls: ['./student-data-table.component.css']
})
export class StudentDataTableComponent implements OnInit {

  @Input()
  studentList!: Student[]

  @Output()
  removeStudent = new EventEmitter<Student>()


  constructor(private studentService: StudentDataService) {
  }

  ngOnInit() {
    // this.studentList = this.studentService.getStudent()
    // this.studentService.studentInfoChange.subscribe((student)=>{
    //   this.studentList = student;
    // })
    console.log(this.studentList)
  }

  editStudent(data: Student) {
    this.studentService.getSelectedStudent(data)
  }

  deleteStudent(student: Student){
   this.removeStudent.next(student)
  }
}
