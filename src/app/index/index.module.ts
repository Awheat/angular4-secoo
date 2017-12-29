import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FixedNavModule} from '../common/modules/fixed-nav.module';
/* routes */
import { indexRoutes } from './index.routes';
/* component */
import { AppSecooIndexComponent } from './index.component';
/*import { AppSecooFixedNavComponent } from './fixed-nav/fixed-nav.component';*/
@NgModule({
    imports: [
        RouterModule.forRoot(indexRoutes),
        FixedNavModule
    ],
    exports: [],
    declarations: [
        AppSecooIndexComponent
    ],
    providers: [],
})
export class IndexModule {}