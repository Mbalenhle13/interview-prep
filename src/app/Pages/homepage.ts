import { Component } from '@angular/core';
import {SideNav} from '../Components/side-nav/side-nav';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [SideNav],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {

}
