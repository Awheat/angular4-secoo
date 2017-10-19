import { Component ,OnInit, ViewEncapsulation } from '@angular/core';
import { _require } from '../utils/require_lib';
declare let Swiper: any;
@Component({
	selector: 'app-secoo-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.css','../../assets/css/swiper.min.css'],
	encapsulation: ViewEncapsulation.None
})

export class AppSecooDetailComponent implements OnInit{

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
	}
}