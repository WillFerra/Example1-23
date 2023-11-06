import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public firstName!: string;
  public lastName!: string;
  public myAge!: number;

  public formGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    myAge: new FormControl()
  });
  

  constructor() {
    this.firstName = "Will";
    this.lastName = "Ferrante"
    this.myAge = 23;
  }

  submit(){
    this.firstName = this.formGroup.controls.firstName.value;
    this.lastName = this.formGroup.controls.lastName.value;
    this.myAge = this.formGroup.controls.myAge.value;
  }

}
