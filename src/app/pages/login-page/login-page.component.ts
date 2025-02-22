import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService, IAuthService } from '../../shared/services/auth/auth.service';
import { IAuthPost } from '../../types/auth';
import { Router } from '@angular/router';

type LoginForm = {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
}

interface ILoginPageComponent {
  onSubmit(event: Event): void; 
}

/**
 * страница авторизации
 */
@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent implements ILoginPageComponent {
  private authService: IAuthService = inject(AuthService);
  public form: FormGroup<LoginForm> = new FormGroup<LoginForm>({
    username: new FormControl<string | null>(null, Validators.required),
    password: new FormControl<string | null>(null, Validators.required),
  });
  public router: Router = inject(Router);

  public onSubmit(event: Event) {
    if (this.form.valid) this.authService.login(this.form.value as IAuthPost).subscribe(res => {
      console.log(res);
    });
  }
}
