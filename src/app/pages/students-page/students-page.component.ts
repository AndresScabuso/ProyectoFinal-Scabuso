import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';
import { StudentDetailsComponent } from 'src/app/shared/components/student-details/student-details.component';
import { StudentDialogComponent } from 'src/app/shared/components/student-dialog/student-dialog.component';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent {
  // Estudiante precargados
  students : Student[] = [
    new Student(1, 'Lionel', 'Messi', 'lmessi@gmail.com', true),
    new Student(2, 'Angel', 'Di Maria', 'adimaria@gmail.com', true),
    new Student(3, 'Lautaro', 'Martinez', 'lmartinez@gmail.com', false),
    new Student(4, 'Emiliano', 'Martinez', 'emartinez@gmail.com', true),
  ]

  // Columnas que se van a mostrar en la tabla
  displayedColumns = ['id', 'details', 'firstName', 'lastName', 'email', 'isActive', 'edit', 'delete'];

  constructor(private readonly dialogService: MatDialog) {}

  // Agrega un estudiante
  addStudent() {
    const dialog = this.dialogService.open(StudentDialogComponent, { width: '60%' });
    dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.students[this.students.length -1]?.id;
        this.students = [...this.students, new Student(lastId+1, value.firstName, value.lastName, value.email, value.isActive)];
      }
    })
  }

  // Modifica un estudiante
  editStudent(student: Student) {
    const dialog = this.dialogService.open(StudentDialogComponent, { data: student, width: '60%' });
    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.students = this.students.map((stu) => stu.id === student.id ? { ...stu, ...data } : stu);
      }
    })
  }

  // Elimina un estudiante
  removeStudent(student: Student) {
    this.students = this.students.filter((stu) => stu.id !== student.id);
  }

  details(student: Student) {
    this.dialogService.open(StudentDetailsComponent, { data: student });
  }
}
