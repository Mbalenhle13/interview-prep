import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-editor',
  imports: [
    FormsModule
  ],
  templateUrl: './editor.html',
  styleUrl: './editor.css',
  encapsulation: ViewEncapsulation.None
})
export class Editor implements OnInit {

  input = '';
  newVal = '';

  @HostBinding('class.wrapper') mounted = true;
 ngOnInit() {
 }

 append() {
   if(this.input === undefined || this.input === '') {
     return;
   }

   if(this.newVal === '') {
     this.newVal =  this.input;
   }else {   this.newVal = this.newVal + ', ' + this.input;}
   this.input = '';
 }

 undo() {
   if(this.newVal === ''){
     return;
   }

   const lastCommaIndex = this.newVal.lastIndexOf(', ');

   if(lastCommaIndex === -1) {
     return;
   }

   this.newVal = this.newVal.slice(0, lastCommaIndex);

 }
}
