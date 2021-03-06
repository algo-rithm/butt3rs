import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms/src/directives/ng_form";

import { AuthService } from "../auth.service";

@Component({
  selector: "pnut-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  maxDate: Date;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  onSumbit(form: NgForm) {
    if (form.valid) {
      this.authService.registerUser({
        email: form.value.email,
        password: form.value.password
      });
    }
  }
}
