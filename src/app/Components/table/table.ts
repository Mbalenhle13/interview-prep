import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-table',
  imports: [],
  templateUrl: './table.html',
  styleUrl: './table.css'
})
export class Table {
  @Input() data?: any[];
  @Output() showSelected: EventEmitter<any> = new EventEmitter();

  constructor()  {}

  getSelected(selected: any) {
    this.showSelected.emit(selected);
  }
}
