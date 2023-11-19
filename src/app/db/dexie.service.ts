import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import {Student} from "../domain/student";

@Injectable({
  providedIn: 'root',
})
export class DexieService extends Dexie {
  students: Dexie.Table<Student, number>;

  constructor() {
    super('StudentDatabase');

    this.version(1).stores({
      students: '++studentId, studentName, studentAge, studentGrade',
    });

    this.students = this.table('students');
  }
}
