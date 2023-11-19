import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StudentDataService} from "../services/student-data.service";
import {Student} from "../domain/student";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit{
  studentForm!:FormGroup

  @Output()
  updateStudentDetails = new EventEmitter<Student>()

  @Output()
  newStudent =new EventEmitter<Student>()

  selectedStudent!: Student;
  editMode: boolean = false;

  constructor( private fb : FormBuilder,
               private studentService: StudentDataService
               ) {
  }

  ngOnInit() {
    this.studentService.data$.subscribe(data => {
      this.selectedStudent = data;
      if(this.selectedStudent){
        this.editMode = true;
        this.initiateStudentForm(this.selectedStudent)
      } else {
        this.initiateStudentForm()
      }
    });
  }


  initiateStudentForm(editData?:Student){
  this.studentForm = this.fb.group({
    studentId:[editData? editData.studentId : null],
    studentName:[editData? editData.studentName : null],
    studentAge:[editData? editData.studentAge : null],
    studentGrade:[editData? editData.studentGrade : null],
  })
  }

  onSubmitStudentForm(){
    if(this.editMode){
      //this.studentService.updateStudent(this.selectedStudent.studentId, this.studentForm.value)
      this.updateStudentDetails.next(this.studentForm.value)
    }else{
      //this.studentService.saveStudent(this.studentForm.value)
      this.newStudent.next(this.studentForm.value)
    }
    this.studentForm.reset();
  }

}
