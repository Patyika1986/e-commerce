import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-regist-formular',
  templateUrl: './regist-formular.component.html',
  styleUrls: ['./regist-formular.component.scss']
})
export class RegistFormularComponent {
  constructor(private formbuilder: FormBuilder, private loginService: LoginService, private router: Router){}

  public form = this.formbuilder.group({
    firstname:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(25)])],
    lastname:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(25)])],
    streetNr:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(35)])],
    zip:['',Validators.compose([Validators.required])],
    city:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(35)])],
    tel:['',Validators.compose([Validators.required])],
    email:['',Validators.compose([Validators.required,Validators.minLength(8),Validators.maxLength(35),Validators.email])],
    password:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])],
    privacyPolicy:['',Validators.required],
  });


  signUp(){
    if(this.form.status === "VALID"){
      this.loginService.registUser(this.form.value).subscribe();
      this.router.navigate(['login']);
      console.log(this.form.value);
    }else{
      alert('the form is not valid')
    }

  }

}
