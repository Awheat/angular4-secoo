import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-secoo-fixed-nav',
    templateUrl: './fixed-nav.component.html',
    styleUrls: ['./fixed-nav.component.css']
})
export class AppSecooFixedNavComponent implements OnInit {

    public nav: any[] = [
        {url: "/index", text: "首页"},
        {url: "/hot", text: "尖货"},
        {url: "/category", text: "分类"},
        {url: "/cart", text: "购物袋"},
        {url: "/my", text: "我的"},
    ];

    @Input() activeId: number = 0;

    constructor() {
    }

    ngOnInit() {

    }
}