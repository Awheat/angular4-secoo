import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { loginRoutes } from './login.routes';
import { AppSecooLoginComponent } from './login.component';

@NgModule({
    imports: [
        RouterModule.forRoot(loginRoutes),
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [],
    declarations: [
        AppSecooLoginComponent
    ],
    providers: [],
})
export class LoginModule {}