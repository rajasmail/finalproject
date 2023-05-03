import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { usersService } from 'src/services/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  fieldTextType!: boolean;
  loginform!: FormGroup;
  message: string= '';
  pVisibility: boolean = false;
  constructor(private fb: FormBuilder,
    private router: Router,
    private usersservice:usersService) {}
  ngOnInit(): void {
    this.loginform = this.fb.group({
      Email: ['', Validators["required"]],
      Password: ['', Validators["required"]],
    })
  }


  submitlogin() {
    console.log(this.loginform.value)
    this.usersservice.getLoginUser(this.loginform.value).subscribe((results :any) => {
      console.log(results);
      if(results.levelOfAccess === 1) {
        this.router.navigate(['/detail'])
      }
    },
    err => {
      this.message = err.error.message;
      this.pVisibility = true;
      console.log(err.error.message)
    })

  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}
