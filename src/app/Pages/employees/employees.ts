import {Component, OnInit} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {EmployeeService} from '../../../backend-mock/services/employee.service';
import {Table} from '../../Components/table/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

export type Employee = {
  id: number;
  employee_name: string;
  age: number;
  employee_salary: number;
}

@Component({
  standalone: true,
  selector: 'app-employee',
  imports: [
    JsonPipe,
    FormsModule,
    Table,
    CommonModule, HttpClientModule
  ],
  templateUrl: './employees.html',
  styleUrl: './employees.css',
  providers: [EmployeeService]
})
export class Employees implements OnInit {
  people: Employee[] = [];
  searchText: string = '';
  person?: Employee;

  constructor(private _service: EmployeeService)  {
  }

  ngOnInit() {
    this._service.getAllEmployees().subscribe(res => {
      this.people = res.data;
    });
  }

  getPerson(person: Employee): void {
    this.person = person;
  }

  sortBySalary() {
    this.people.sort((a, b) => b.employee_salary - a.employee_salary);
  }

  sortByName() {
    this.people.sort((a, b) => {
      return a.employee_name.localeCompare(b.employee_name, undefined, { sensitivity: 'accent' });
    });
  }

  search(name: string): void {
    this.people = this.people.filter(person => person.employee_name.toLowerCase().includes(name.toLowerCase()));
  }

  delete(person?: Employee): void {
    const index = this.people.findIndex(person => person.id === person.id);
    if(person) {
      this.people.splice(index, 1);
    }
  }
}
