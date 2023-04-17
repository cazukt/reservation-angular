import { Component, OnInit } from '@angular/core'
import { NgForm } from '@angular/forms'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { AuthService } from '../register/shared/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errors: any = []
  constructor(private authServece: AuthService, private router: Router) {}

  ngOnInit() {}

  login(loginForm: NgForm) {
    this.authServece.login(loginForm.value).subscribe(
      (token) => {
        console.log(token)
        this.router.navigate(['/products'])
      },
      (err: HttpErrorResponse) => {
        console.error(err)
        this.errors = err.error.errors
      }
    )
  }
}
