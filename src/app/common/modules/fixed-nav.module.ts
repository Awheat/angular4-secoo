import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AppSecooFixedNavComponent} from '../../index/fixed-nav/fixed-nav.component';

@NgModule({
    imports: [CommonModule,RouterModule],
    exports: [AppSecooFixedNavComponent],
    declarations: [AppSecooFixedNavComponent],
    providers: [],
})
export class FixedNavModule {
}