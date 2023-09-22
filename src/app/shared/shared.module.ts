import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { SharedService } from './service/shared.service';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [SharedService],
  exports: [FooterComponent]
})
export class SharedModule { }
