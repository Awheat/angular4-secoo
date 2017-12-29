import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {__evn__} from '../../utils/evn';

/*
	ajax service by wuwc
	1.收集所有apis
	2.封装http,以及header
	3.错误消息统一处理

*/
@Injectable()
export class AjaxService {

    /* 属性 */
    public isDev: boolean;
    public base: string;
    public DEFAULT: any = {};

    public loading: any;

    /* apis */
    public url: any = {
        index: "/index"
    };

    //构造函数
    constructor(private http: Http) {
        this.loading = document.querySelector('.g_loading');
        __evn__();
        /* 初始化默认参数 */
        this.DEFAULT.params = {
            test: "1234567890"
        };
        this.DEFAULT.headers = {
            token: "zaq12wsxcde34rfv"
        };

        /* base */
        if (__evn__()) {
            this.base = '/api';
            this.initUrl(__evn__());
        } else {
            this.base = 'http://www.i728.top/pages/9/api';
            this.initUrl(__evn__());
        }

        console.log(this.url);
    }

    /* 根据不同环境拼接url */
    public initUrl(env): void {
        console.log("当前环境：" + (env == true ? "本地环境!" : "线上环境！"));
        for (let item in this.url) {
            if (env) {
                this.url[item] = this.base + this.url[item];
            } else {
                this.url[item] = this.base + this.url[item] + '.json';
            }
        }
    }

    public showLoading(): void {
        this.loading.style.display = 'block';
    }

    public hideLoading(): void {
        let timer = setTimeout(() => {
            this.loading.style.display = 'none';
            clearTimeout(timer);
        }, 3000);
    }


    public ajax(options): void {
        /* 合并参数 */
        let opts = Object.assign({}, this.DEFAULT, options);

        /* 参数 */
        let type = opts.type;
        let url = opts.url;
        let params = Object.assign(this.DEFAULT.params, opts.params);
        let headers = Object.assign(this.DEFAULT.headers, opts.headers);
        let success = opts.success;
        let errors = opts.errors;

        this.showLoading();
        if (type === 'get') {
            this.http.get(url, {
                params: params,
                headers: headers
            }).subscribe((response: any) => {
                this.hideLoading();
                let res = response.json();
                /*
                  大于0=> 成功
                  小于0=> 失败
                */
                if (res.status > 0) {
                    success(res);
                } else {
                    errors(res);
                }
            }, errors => console.log(errors));
        } else {
            this.http.post(url, params, {
                headers: headers
            }).subscribe((response: any) => {
                this.hideLoading();
                let res = response.json();
                /*
                  大于0=> 成功
                  小于0=> 失败
                */
                if (res.status > 0) {
                    success(res);
                } else {
                    errors(res);
                }
            }, errors => console.log(errors));
        }


    }
}