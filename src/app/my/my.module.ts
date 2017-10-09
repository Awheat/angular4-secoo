import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
    providers: [],
})
export class MyModule {}