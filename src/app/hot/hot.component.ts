/**
 * Created by Administrator on 2017/9/5.
 */
import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { _require } from '../utils/require_lib';
declare let Swiper: any;
@Component({
  selector: 'app-secoo-hot',
  templateUrl: './hot.component.html',
  styleUrls: ['./hot.component.css','../../assets/css/swiper.min.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppSecooHotComponent implements OnInit{

	public hot_nav:any[] = [];
	public active:number = 0;

	constructor(){}

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


		this.hot_nav = [
	   		{
	   			id:"1",
	   			name:"最新",
	   			icon:"assets/images/hot/nav/1.jpg"
	   		},
	   		{
	   			id:"2",
	   			name:"时髦",
	   			icon:"assets/images/hot/nav/2.jpg"
	   		},
	   		{
	   			id:"3",
	   			name:"型男",
	   			icon:"assets/images/hot/nav/3.jpg"
	   		},
	   		{
	   			id:"4",
	   			name:"女士",
	   			icon:"assets/images/hot/nav/4.jpg"
	   		},
	   		{
	   			id:"5",
	   			name:"生活",
	   			icon:"assets/images/hot/nav/5.jpg"
	   		},
	   		{
	   			id:"6",
	   			name:"美妆",
	   			icon:"assets/images/hot/nav/6.jpg"
	   		},
	   		{
	   			id:"7",
	   			name:"健康",
	   			icon:"assets/images/hot/nav/7.jpg"
	   		}
		];
	}


	onGetHotByType(index){
		this.active = index;
	}
}
