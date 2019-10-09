import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;

  ngOnInit() {
    // Initialize the form before the view
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        // Grouping controls
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      projectStatus: new FormControl('stable'),
      password: new FormControl(null, Validators.required),
    });
  }
}
