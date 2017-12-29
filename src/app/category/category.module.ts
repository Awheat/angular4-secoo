import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';

import {FixedNavModule} from '../common/modules/fixed-nav.module';

import { categoryRoutes } from './category.routes';
import { AppSecooCategoryComponent } from './category.component';

@NgModule({
    imports: [
    	CommonModule,
        RouterModule.forRoot(categoryRoutes),
        FixedNavModule
    ],
    exports: [],
    declarations: [
        AppSecooCategoryComponent
    ],
    providers: [],
})
export class CategoryModule {}