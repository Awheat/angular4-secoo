import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import { hotRoutes } from './hot.routes';

import { AppSecooHotComponent } from './hot.component';
import { AppSecooBrandsComponent } from './brands/brands.component';
import { AppSecooRecommendComponent } from './recommend/recommend.component'

@NgModule({
    imports: [
    	CommonModule,
        RouterModule.forRoot(hotRoutes)
    ],
    exports: [
    	AppSecooBrandsComponent
    ],
    declarations: [
        AppSecooHotComponent,
        AppSecooBrandsComponent,
        AppSecooRecommendComponent
    ],
    providers: [],
})
export class HotModule {}