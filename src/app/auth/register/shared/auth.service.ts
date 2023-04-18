import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { JwtHelperService } from '@auth0/angular-jwt'

const jwt = new JwtHelperService()

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  // getProducts():Observable<any>{
  //   // return products
  //   return this.http.get('/api/v1/products/')
  // }

  register(userData: any): Observable<any> {
    return this.http.post('/api/v1/users/register', userData)
  }

  login(userData: any): Observable<any> {
    return this.http.post('/api/v1/users/login', userData).pipe(
      map((token) => {
        const decordedToken=jwt.decodeToken(JSON.stringify(token))
        localStorage.setItem('app-auth', JSON.stringify(token))
        localStorage.setItem('app-meta', JSON.stringify(decordedToken))
        debugger
        return token
      })
    )
  }
}
