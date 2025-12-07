import { Component } from '@angular/core';
import { IUser } from 'src/app/models/wallet/wallet.module';
import { WalletServicesService } from 'src/app/services/wallet-services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public User:Array<IUser>=[];
  constructor(private service:WalletServicesService) { }
  ngOnInit(){

    this.service.Getlogin().subscribe(data =>this.User.push(data[0]));
    console.log(this.User)
  }
}
