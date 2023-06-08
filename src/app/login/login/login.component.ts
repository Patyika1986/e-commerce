import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private formbuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  public form = this.formbuilder.group({
    email: [
      '',
      Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(6),
        Validators.maxLength(26),
      ]),
    ],
    password: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4),
      ]),
    ],
  });

  public isUserRegistred = false;
  public acountNotExist = '';

  login() {
    if (this.form.status === 'VALID') {
      this.loginService.getAllUsers().subscribe((users) => {
        console.log(users);

        const isUserRegisted = users.find(
          (user: any) =>
            user.email === this.form.value.email &&
            user.password === this.form.value.password
        );

        if (isUserRegisted) {
          this.isUserRegistred = true;

          window.localStorage.setItem('userIsLoged', JSON.stringify(users));
          this.router.navigate(['payment-overview']);
        } else {
          this.isUserRegistred = true;
          this.acountNotExist =
            '*** The specified email address or password does not exist! ***';
        }
      });
    } else {
    }
  }
}
