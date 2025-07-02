import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.html',
  standalone: true,
  imports: [
    RouterLink
  ],
  styleUrl: './side-nav.css'
})
export class SideNav {
 navItems = [{name: 'Table', route: 'table'}, {name: 'Editor', route: 'editor'}];
}
