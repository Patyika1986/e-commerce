import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private formbuilder: FormBuilder, private loginService: LoginService){}

  public form = this.formbuilder.group({
    email: ['', Validators.compose([Validators.required,Validators.email,Validators.minLength(6),Validators.maxLength(26)])],
    password: ['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(4)])]
  });


  login(){
    this.loginService.getAllUsers().subscribe(users => {
      console.log(users);
      
    });

let data = JSON.stringify(this.form.value)
    this.loginService.isUserLoged(this.form.value).subscribe(user => {
      console.log(user,'post methode');
      
    })
  }
}
