import { Component } from '@angular/core';


@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.scss']
})
export class EntryPageComponent {
  public tabElements = [
    {
      name: 'Registration',
      value: 1
    },
    {
      name: 'User Details',
      value: 2
    }]
  public activeTab = 1;
  constructor() {}
  ngOnInit(): void {
  }

  //update selected tab as  active 
  updateTabItem(item:number) : void {
    this.activeTab = item;
  } 
}


