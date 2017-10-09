import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/* routes */
import { indexRoutes } from './index.routes';
/* component */
import { AppSecooIndexComponent } from './index.component';
import { AppSecooFixedNavComponent } from './fixed-nav/fixed-nav.component';
@NgModule({
    imports: [
        RouterModule.forRoot(indexRoutes)
    ],
    exports: [],
    declarations: [
        AppSecooIndexComponent,
        AppSecooFixedNavComponent
    ],
    providers: [],
})
export class IndexModule {}