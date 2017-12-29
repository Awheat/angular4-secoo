import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import { hotRoutes } from './hot.routes';

import {FixedNavModule} from '../common/modules/fixed-nav.module';

import { AppSecooHotComponent } from './hot.component';
import { AppSecooBrandsComponent } from './brands/brands.component';
import { AppSecooRecommendComponent } from './recommend/recommend.component'

@NgModule({
    imports: [
    	CommonModule,
        RouterModule.forRoot(hotRoutes),
        FixedNavModule
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