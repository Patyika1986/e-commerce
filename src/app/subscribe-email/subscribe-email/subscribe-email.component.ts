import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-subscribe-email',
  templateUrl: './subscribe-email.component.html',
  styleUrls: ['./subscribe-email.component.scss'],
})
export class SubscribeEmailComponent {
  constructor(private formBuilder: FormBuilder) {}

  public form = this.formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
  });
  public mailValide: boolean = false;
  public mailInvalid: boolean = false;
  public sendEMail: string = 'Send E-Mail Status';
  public sendEmailText: string = '';

  async subscribeEmail(): Promise<void> {
    if (this.form.status === 'VALID') {
      this.sendEmailText = 'Subscribe newsletter was successfuly!';
      emailjs.init(environment.apiKey);
      let params = {
        email_id: this.form.value.email,
        reply_to: this.form.value.email,
      };
      try {
        const mail = await emailjs.send(
          environment.service,
          environment.template,
          params
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      this.sendEmailText = 'Something went Wrong pleas try it again !';
    }
  }

  resetForm() {
    this.form.reset();
  }
}
