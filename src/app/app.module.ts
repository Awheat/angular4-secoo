import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

/* all-module */
import { IndexModule } from './index/index.module';
import { CategoryModule } from './category/category.module';
import { HotModule } from './hot/hot.module';
import { CartModule } from './cart/cart.module';
import { MyModule } from './my/my.module';

/* routes */
import { Routes } from './app.routes';

/* component */
import { AppComponent } from './app.component';
import { AppSecooIndexComponent } from './index/index.component';
import { AppSecooCategoryComponent } from './category/category.component';

/* service */
import { AjaxService } from './common/service/ajax.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    HttpModule,
    IndexModule,
    CategoryModule,
    HotModule,
    CartModule,
    MyModule
  ],
  providers: [AjaxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
