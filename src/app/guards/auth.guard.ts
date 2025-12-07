import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { WalletServicesService } from "../services/wallet-services.service";
import { IUser } from "../models/wallet/wallet.module";

@Injectable({
    providedIn: "root"
  })
  export class AuthGuard implements CanActivate {
    constructor(private router: Router, private service:WalletServicesService) {}
    public Users:Array<IUser>=[];

    canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
      // Check if user is logged in
      this.service.Getlogin().subscribe(data => this.Users=data);
      if (this.Users.length==1){
          // If the user is authenticated, allow access to the route
          console.log(this.Users);
          return true;
        }else{
          // If the user is not authenticated, redirect to the login page
          this.router.navigate(['/login']);
          return false;
        }
      }
  }