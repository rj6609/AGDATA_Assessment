import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonFormComponent } from './person-form/person-form.component';

@NgModule({
  declarations: [PersonFormComponent],
  imports: [CommonModule],
  exports: [PersonFormComponent]  // Export the component if it will be used outside this module
})
export class PersonModule { }
