import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { usersService } from 'src/services/users.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signupform!: FormGroup;
  constructor(private fb: FormBuilder,
    private registerService :usersService) {}
  ngOnInit(): void {
    this.signupform = this.fb.group({
      username: ['', Validators["required"]],
      email: ['', Validators["required"]],
      password: ['', Validators["required"]],
      levelOfAccess:['']
    })
  }
  submitsignup() {
    if(this.signupform.valid)
    this.registerService.insertUser(this.signupform.value).subscribe((res:any) => {
      // redirect 3al login aw el screen
      console.log(res);
    },err => {
      // toast message error
      console.log(err.error.message)
    })
    console.log(this.signupform.value)

  }
}
