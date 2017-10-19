import { AbstractControl, ValidatorFn } from '@angular/forms';
/* username: 验证函数 */
export function username() : ValidatorFn{
	let telephone = /^1[34578][0-9]{9}/;
	let email = /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/;
	let uname = /^[a-zA-Z\u4e00-\u9fa5_]{2,12}$/;

	return (control: AbstractControl): { [key: string]: any } => {
	    if(!control.value) return null;
	    return telephone.test(control.value) || email.test(control.value) || uname.test(control.value) ?null:{'username':{name}}
	};
}