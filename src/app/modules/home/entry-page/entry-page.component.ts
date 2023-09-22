import { Component } from '@angular/core';
import {  tabMetaData } from 'src/app/shared/model/user.model';



@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.scss']
})
export class EntryPageComponent  {
  public tabElements = tabMetaData;
  public activeTab = 1;
  constructor() {}

  //update selected tab as  active 
  updateTabItem(item:number) : void {
    this.activeTab = item;
  } 
}


