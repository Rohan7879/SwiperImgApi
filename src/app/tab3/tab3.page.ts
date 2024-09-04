import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  items: string[] = ['Junagadh', 'Rajkot', 'Ahmedabad'];
  selectedItems: { [key: string]: boolean } = { Junagadh: true };
  selectAll: boolean = false;
  constructor() {}
  selectAllItems() {
    for (const item of this.items) {
      this.selectedItems[item] = this.selectAll;
    }
  }
  updateSelectAll() {
    this.selectAll = Object.values(this.selectedItems).every((value) => value);
    console.log(this.selectAll);
  }
}
