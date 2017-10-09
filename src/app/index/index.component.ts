/**
 * Created by Administrator on 2017/9/5.
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { _require } from '../utils/require_lib';
import { AjaxService } from '../common/service/ajax.service';
declare let Swiper: any;
@Component({
  selector: 'app-secoo-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css','../../assets/css/swiper.min.css'],
  encapsulation: ViewEncapsulation.None
})

/* http://5ishe.win/pages/9/api/test.json */
export class AppSecooIndexComponent implements OnInit{

	constructor(private ajaxSrv:AjaxService){
	}

	ngOnInit(){
		/* 引入：swiper.js */
		_require('assets/js/swiper.min.js',function(){
			/* swiper初始化 */
			new Swiper('.swiper-container',{
				autoplay: 5000,
				loop: true,
				pagination : '.swiper-pagination'
			});
		});

		/* 测试请求 */
		this.ajaxSrv.ajax({
			type:"get",
			url: this.ajaxSrv.url.index,
			params:{
				"aa":"123",
				"bb":"234"
			},
			success:function(res){

			}
		});
	}

	/*
		代办事项：
		1.封装http
		2.管理所有api的类
		3.首页数据动态加载
		4. 全屏的加载效果
	*/
}
