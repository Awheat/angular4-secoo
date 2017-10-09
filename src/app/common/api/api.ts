import { Http } from '@angular/http';

export class Api{

	public isDev:boolean = true;
	public apiBase:string = '';

	constructor(private http:Http){
		if(this.isDev){
			this.apiBase = '/api';
		}else{
			this.apiBase = 'http://www.xxxx360.com/api'
		}
	}

	/* apis */
	/*public apis:any = {
		"index": this.apiBase + "/index"
	}*/

	// public DEFAULT = {
	// 	args:{},
	// 	headers: {}
	// };

	/* ajax */
	/*public ajax(option):void{
		const opt = Object.assign({},option);

		let type = opt.type;
		let url = opt.url;
		let args = opt.args;
		let headers = opt.headers;
		let success = opt.success;
		let error = opt.error;

		if(type === "get"){
			this.http.get(url,{
				params: args,
				headers: headers
			}).subscribe(res=>{
				success(res);
			},error=>{
				console.log(error);
			});
		}

	}*/


}