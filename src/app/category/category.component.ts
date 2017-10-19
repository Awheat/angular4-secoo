import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-secoo-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.css']
})

export class AppSecooCategoryComponent implements OnInit{
	/* 变量以及数据 */
	public isActive:number = 1;
	public currentField:string = "A";
	public data:any ={
		tabs: [
			{id:"1",name: "分类"},
			{id:"2",name: "品牌"}	
		],
		categorys: [
			{
				id:"1",
				title: "包袋 Bags",
				items: [
					{url:"#",name:"单肩包"},
					{url:"#",name:"手提包"},
					{url:"#",name:"斜挎包"},
					{url:"#",name:"公文包"},
					{url:"#",name:"单肩包"},
					{url:"#",name:"手提包"},
					{url:"#",name:"斜挎包"},
					{url:"#",name:"公文包"},
					{url:"#",name:"单肩包"},
					{url:"#",name:"斜挎包"},
					{url:"#",name:"单肩包"},
					{url:"#",name:"手提包"}
				]
			},
			{
				id:"2",
				title: "包袋 Bags",
				items: [
					{url:"#",name:"单肩包"},
					{url:"#",name:"手提包"},
					{url:"#",name:"斜挎包"},
					{url:"#",name:"公文包"},
					{url:"#",name:"单肩包"},
					{url:"#",name:"手提包"},
					{url:"#",name:"斜挎包"},
					{url:"#",name:"公文包"},
					{url:"#",name:"单肩包"},
					{url:"#",name:"斜挎包"},
					{url:"#",name:"单肩包"},
					{url:"#",name:"手提包"}
				]
			},
			{
				id:"3",
				title: "包袋 Bags",
				items: [
					{url:"#",name:"单肩包"},
					{url:"#",name:"手提包"},
					{url:"#",name:"斜挎包"},
					{url:"#",name:"公文包"},
					{url:"#",name:"单肩包"},
					{url:"#",name:"手提包"},
					{url:"#",name:"斜挎包"},
					{url:"#",name:"公文包"},
					{url:"#",name:"单肩包"},
					{url:"#",name:"斜挎包"},
					{url:"#",name:"单肩包"},
					{url:"#",name:"手提包"}
				]
			},
			{
				id:"4",
				title: "包袋 Bags",
				items: [
					{url:"#",name:"单肩包"},
					{url:"#",name:"手提包"},
					{url:"#",name:"斜挎包"},
					{url:"#",name:"公文包"},
					{url:"#",name:"单肩包"},
					{url:"#",name:"手提包"},
					{url:"#",name:"斜挎包"},
					{url:"#",name:"公文包"},
					{url:"#",name:"单肩包"},
					{url:"#",name:"斜挎包"},
					{url:"#",name:"单肩包"},
					{url:"#",name:"手提包"}
				]
			},
			{
				id:"5",
				title: "包袋 Bags",
				items: [
					{url:"#",name:"单肩包"},
					{url:"#",name:"手提包"},
					{url:"#",name:"斜挎包"},
					{url:"#",name:"公文包"},
					{url:"#",name:"单肩包"},
					{url:"#",name:"手提包"},
					{url:"#",name:"斜挎包"},
					{url:"#",name:"公文包"},
					{url:"#",name:"单肩包"},
					{url:"#",name:"斜挎包"},
					{url:"#",name:"单肩包"},
					{url:"#",name:"手提包"}
				]
			}
		],
		brands:{
			fixSiderBar:[
				{id:"brand_0",text:"A"},
				{id:"brand_1",text:"B"},
				{id:"brand_2",text:"C"},
				{id:"brand_3",text:"D"},
				{id:"brand_4",text:"E"},
				{id:"brand_5",text:"F"},
				{id:"brand_6",text:"G"},
				{id:"brand_7",text:"H"},
				{id:"brand_8",text:"I"},
				{id:"brand_9",text:"J"},
				{id:"brand_10",text:"K"},
				{id:"brand_11",text:"L"},
				{id:"brand_12",text:"M"},
				{id:"brand_13",text:"N"},
				{id:"brand_14",text:"O"}
			],
			brandItems:[
				{
					title:"A",
					items:[
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"}
					]
				},
				{
					title:"B",
					items:[
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"}
					]
				},
				{
					title:"C",
					items:[
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"}
					]
				},
				{
					title:"D",
					items:[
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"}
					]
				},
				{
					title:"E",
					items:[
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"}
					]
				},
				{
					title:"F",
					items:[
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"}
					]
				},
				{
					title:"G",
					items:[
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"}
					]
				},
				{
					title:"H",
					items:[
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"}
					]
				},
				{
					title:"I",
					items:[
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"}
					]
				},
				{
					title:"J",
					items:[
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"}
					]
				},
				{
					title:"K",
					items:[
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"}
					]
				},
				{
					title:"L",
					items:[
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"}
					]
				},
				{
					title:"M",
					items:[
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"}
					]
				},
				{
					title:"N",
					items:[
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"}
					]
				},
				{
					title:"O",
					items:[
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"},
						{zh:"阿迪达斯",en:"adidasi"}
					]
				}
			]
		}
	} ;
	/* 选择tab事件 */
	public onTabSwitch($event){
		this.isActive = $event;
	}



	test(id,field){
		this.clearAllMarginTop();
		this.currentField = field;
		document.getElementById(id).scrollIntoView(); 
		document.getElementById(id).style.marginTop = "46px";
	}

	clearAllMarginTop(){
		const lis = document.querySelectorAll(".bds_item");
		for(var i=0;i<lis.length;i++){
			lis[i+''].style.marginTop="0px";
		}
	}

	public tops:any[] = [];
	public arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];
	ngOnInit(){
		/* 获取元素距离顶部的距离 */
		let timer = setTimeout(()=>{
			const doms = document.querySelectorAll(".bds_item");
			for(let i=0;i<doms.length;i++){
				this.tops.push((doms[i+""].offsetTop)+46);
			}
			clearTimeout(timer);
		},1000)

		// let dom = document.querySelectorAll(".bds_item");
		// console.log(dom[0+''].offsetTop);
		

		console.log(this.tops);

		/*this.search(this.tops,100);*/
		
		window.addEventListener('scroll',(event)=>{
			let _top = document.documentElement.scrollTop || document.body.scrollTop;
			console.log(_top);
			this.getScrollPosition(_top);
		},false);
	}



	getScrollPosition(left:any){
		left = left + 46;
		for(let i=this.tops.length-1;i>0;i--){
			if(left>this.tops[i]){
				console.log(this.arr[i]);
				this.currentField = this.arr[i];
				break;
			}else {
				this.currentField = 'A';
			}
		}
	}

}