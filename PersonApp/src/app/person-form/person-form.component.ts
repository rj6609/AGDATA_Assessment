import { Component } from '@angular/core';
import { PersonService, Person } from '../person.service'; // Adjust the path if necessary

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent {
  person: Person = { name: '', address: '' }; // Initial person object
  submittedPerson?: Person; // Holds the data returned by the API

  constructor(private personService: PersonService) {}

  onSubmit(): void {
    this.personService.savePerson(this.person).subscribe(response => {
      this.submittedPerson = response; // Update with the response from the API
    });
  }
}
