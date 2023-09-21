import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    RegistrationComponent,
    UserDetailsComponent,
    EntryPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class HomeModule { }
