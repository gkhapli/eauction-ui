import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  form:FormGroup;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', Validators.minLength(8));
  matcher = new MyErrorStateMatcher();
  constructor(private fb:FormBuilder, 
    private authService: AuthService, 
    private router: Router) { 
      this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    }); 
  }

  ngOnInit(): void {
  }

  login() {
    console.log("Inside login");
    
    this.authService.login(this.email, this.password)
        .subscribe(
            () => {
                console.log("User is logged in");
                this.router.navigateByUrl('/products');
            }
        );
    
    
}

}
