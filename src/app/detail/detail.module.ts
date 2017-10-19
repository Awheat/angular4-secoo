import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { detailRoutes } from './detail.routes';
import { AppSecooDetailComponent } from './detail.component';

@NgModule({
    imports: [
        RouterModule.forRoot(detailRoutes)
    ],
    exports: [],
    declarations: [
        AppSecooDetailComponent
    ],
    providers: [],
})
export class DetailModule {}