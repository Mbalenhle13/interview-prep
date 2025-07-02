import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import data from './data.json';
import {JsonPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

type People = {
  id: string;
  name:  string;
  surname: string;
  gender: string;
  age: number;
  salary: number;
}

@Component({
  standalone: true,
  selector: 'app-table',
  imports: [
    JsonPipe,
    FormsModule
  ],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table implements OnInit {
  people: People[] = [];
  searchText: string = '';
  person?: People = {id: '7', name: '', surname: '', gender: '', age: 0, salary: 0, };


  constructor(private _cdr: ChangeDetectorRef)  {
  }

  ngOnInit() {
    this.people = data.people;
    //
    // this.people = this._http.get<ApiResponse>('https://jsonplaceholder.typicode.com/people').subscribe(people => {
    //
    // })
  }

  getPerson(person: People): void {
    this.person = person;
  }

  sortBySalary() {
    this.people.sort((a, b) => b.salary - a.salary);
  }

  sortByName() {
    this.people.sort((a, b) => {
      return a.name.localeCompare(b.name, undefined, { sensitivity: 'accent' });
    });
  }

  search(name: string): void {
    this.people = this.people.filter(person => person.name.toLowerCase().includes(name.toLowerCase()));
  }

  delete(person?: People): void {
    const index = this.people.findIndex(person => person.id === person.id);
    if(person) {
      this.people.splice(index, 1);
    }
  }
}
