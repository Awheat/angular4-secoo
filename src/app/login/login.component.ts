import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { username } from '../common/validator/username';

@Component({
	selector: 'app-secoo-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})


export class AppSecooLoginComponent implements OnInit {

	public login: FormGroup;

	constructor(private fb:FormBuilder, private router:Router){}

	ngOnInit(){
		this.login = this.fb.group({
			username: ['',[Validators.required, username()]],
			password: ['',[Validators.required]],
			vcode: ['',[Validators.required]],
		});
	}

	onLoginSubmit(login){
		console.log(login);
		if(!login.invalid){
			alert('验证通过~');
			localStorage.setItem('isLogin','true');
			this.router.navigate(['/my']);
		}else{
			alert('验证失败~');
		}
	}


}