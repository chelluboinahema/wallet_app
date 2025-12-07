import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/wallet/wallet.module';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WalletServicesService {

  constructor(private http: HttpClient) { }
  register(user:IUser){
    return this.http.post('http://localhost:3000/register',user);
  }
  GetUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>(' http://localhost:3000/register');
  }
  login(user:IUser){
    return this.http.post('http://localhost:3000/login',user);
  }
  Getlogin():Observable<IUser[]>{
    return this.http.get<IUser[]>(' http://localhost:3000/login');
  }
}
