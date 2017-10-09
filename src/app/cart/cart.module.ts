import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { cartRoutes } from './cart.routes';
import { AppSecooCartComponent } from './cart.component';

@NgModule({
    imports: [
        RouterModule.forRoot(cartRoutes)
    ],
    exports: [],
    declarations: [
        AppSecooCartComponent
    ],
    providers: [],
})
export class CartModule {}