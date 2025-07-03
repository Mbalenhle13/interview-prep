import { Routes } from '@angular/router';
import {Editor} from './Components/editor/editor';
import {Homepage} from './Pages/homepage/homepage';
import {Employees} from './Pages/employees/employees';

export const routes: Routes = [
  {
    path: '',
    component: Homepage,
  },
  {
    path: 'employees',
    component: Employees
  },
  {
    path: 'editor',
    component: Editor
  }
];
