import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';


import { categoryRoutes } from './category.routes';
import { AppSecooCategoryComponent } from './category.component';

@NgModule({
    imports: [
    	CommonModule,
        RouterModule.forRoot(categoryRoutes)
    ],
    exports: [],
    declarations: [
        AppSecooCategoryComponent
    ],
    providers: [],
})
export class CategoryModule {}