import { Routes } from '@angular/router';
import {Table} from './Components/table/table';
import {Editor} from './Components/editor/editor';
import {Homepage} from './Pages/homepage';

export const routes: Routes = [
  {
    path: '',
    component: Homepage,
  },
  {
    path: 'table',
    component: Table
  },
  {
    path: 'editor',
    component: Editor
  }
];
