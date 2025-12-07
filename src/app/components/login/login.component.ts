import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/wallet/wallet.module';
import { WalletServicesService } from 'src/app/services/wallet-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public user:IUser={} as IUser;
  public Users:Array<IUser>=[];
  constructor(private service:WalletServicesService, private fb: FormBuilder) { }
  RegisterForm=this.fb.group({
    Email_id:['', [Validators.required ,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    Password:['', Validators.required]
});
ngOnInit(){

  this.service.GetUsers().subscribe(data => this.Users=data);
}

Login_person(){
  if(this.RegisterForm.valid){
    this.RegisterForm.reset();
  }else{
  }
}
get Email_id(){
  return this.RegisterForm.get('Email_id');
}
get Password(){
  return this.RegisterForm.get('Password');
}
LoginUser(){
  this.Users=this.Users.filter(item =>item.Email_id==this.RegisterForm.value.Email_id && item.Password==this.RegisterForm.value.Password);
  this.user=this.Users[0]
  if (this.Users.length==1){
    alert('Login successful you can go to dashboard by double clicking on it')
    this.service.login(this.user).subscribe(data=>console.log(data));
  }
  else{
    alert('The Password and Email_id are not matched')
  }
}
}
