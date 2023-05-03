import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signupform!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.signupform = this.fb.group({
      Username: ['', Validators["required"]],
      Email: ['', Validators["required"]],
      Password: ['', Validators["required"]],
      Type:['']
    })
  }
  submitsignup() {
    console.log(this.signupform.value)

  }
}
