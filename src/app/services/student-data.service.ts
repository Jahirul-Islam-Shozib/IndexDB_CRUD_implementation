import { Injectable } from '@angular/core';
import {Student} from "../domain/student";
import {BehaviorSubject, Subject} from "rxjs";
import {DexieService} from "../db/dexie.service";

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  studentInfoChange = new Subject<Student[]>()
  constructor(private dexieService: DexieService) { }
  public editedStudent!: Student;

 public studentsInfoList: Student[]=[

 ]

  getStudent(){
    return this.studentsInfoList.slice();
  }

  // saveStudent(student:Student){
  //   this.studentsInfoList.push(student)
  //   this.studentInfoChange.next(this.studentsInfoList.slice())
  // }

  getSelectedStudent(data:Student){
   this.dataSubject.next(data)
  }

  // updateStudent(id: number, data: Student){
  //  const index = this.studentsInfoList.findIndex((checkItem: Student)=>{
  //   return checkItem.studentId === id;
  //  })
  //   this.studentsInfoList[index]= data;
  //  this.studentInfoChange.next(this.studentsInfoList.slice())
  // }
}
