import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {FixedNavModule} from '../common/modules/fixed-nav.module';

import { cartRoutes } from './cart.routes';
import { AppSecooCartComponent } from './cart.component';

@NgModule({
    imports: [
        RouterModule.forRoot(cartRoutes),
        FixedNavModule
    ],
    exports: [],
    declarations: [
        AppSecooCartComponent
    ],
    providers: [],
})
export class CartModule {}