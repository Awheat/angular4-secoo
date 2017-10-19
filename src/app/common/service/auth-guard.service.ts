import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private router:Router){}
	//路由守卫
	canActivate(){
		console.log('路由守卫~');
		if(localStorage.getItem('isLogin') === "true"){
			return true;
		}else {
			this.router.navigate(['/login']);
			return false;
		}
	}
}