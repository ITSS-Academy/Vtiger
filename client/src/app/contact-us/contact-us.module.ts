import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { SharedModule } from '../shared/shared/shared.module';
import { FormContactComponent } from './components-contact/form-contact/form-contact.component';


@NgModule({
  declarations: [
    ContactUsComponent,
    FormContactComponent,
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    SharedModule,
  ]
})
export class ContactUsModule { }
