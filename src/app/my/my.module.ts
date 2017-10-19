import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../common/service/auth-guard.service';


import { myRoutes } from './my.routes';
import { AppSecooMyComponent } from './my.component';

@NgModule({
    imports: [
        RouterModule.forRoot(myRoutes)
    ],
    exports: [],
    declarations: [
        AppSecooMyComponent
    ],
    providers: [AuthGuard],
})
export class MyModule {}