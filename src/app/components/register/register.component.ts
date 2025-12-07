import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/wallet/wallet.module';
import { WalletServicesService } from 'src/app/services/wallet-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public user:IUser={} as IUser;

  constructor(private service:WalletServicesService, private fb: FormBuilder) { }
  RegisterForm=this.fb.group({
    Email_id:['', [Validators.required ,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    Name:['', Validators.required],
    Address:['', Validators.required,],
    Accountno:['', Validators.required],
    Mobileno:['', [Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
    Password:['', Validators.required]
});
AddPerson(){
  if(this.RegisterForm.valid){
    this.RegisterForm.reset();
    alert('Registration successful')
  }else{
    alert('Please Register Again')
  }
}
get Email_id(){
  return this.RegisterForm.get('Email_id');
}
get Name(){
  return this.RegisterForm.get('Name');
}
get Address(){
  return this.RegisterForm.get('Address');
}
get Mobileno(){
  return this.RegisterForm.get('Mobileno');
}
get Accountno(){
  return this.RegisterForm.get('Accountno');
}
get Password(){
  return this.RegisterForm.get('Password');
}




RegisterUser(){
    if(this.RegisterForm.valid){
    this.service.register(this.user).subscribe(data=>console.log(data));
  }
  else{
    return;
  }


}

}
