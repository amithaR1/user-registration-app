import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  public currentMonth : string = '';
  public currentYear: number = 0;

  ngOnInit():void {
    this.getCurrentMonthYear();
  }
  // to get cuurent month and year value
  getCurrentMonthYear(): void {
    const monthNames = ['January','Febraury','March','April','May','June','July','August','September','October','November','December'];
    this.currentMonth = monthNames[(new Date()).getMonth()];
    this.currentYear = new Date().getFullYear();
  }
}
