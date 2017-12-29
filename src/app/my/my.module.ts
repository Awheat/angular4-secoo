import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../common/service/auth-guard.service';

import {FixedNavModule} from '../common/modules/fixed-nav.module';
import {myRoutes} from './my.routes';
import {AppSecooMyComponent} from './my.component';

@NgModule({
    imports: [
        RouterModule.forRoot(myRoutes),
        FixedNavModule
    ],
    exports: [],
    declarations: [
        AppSecooMyComponent
    ],
    providers: [AuthGuard],
})
export class MyModule {
}