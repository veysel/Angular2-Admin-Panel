import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { routes } from './app.routes';

import { AppComponent } from './Components/app.component';

import { DefaultComponent } from './Components/Default/default.component';

import { LoginComponent } from './Components/Main/Login/login.component';
import { PanelComponent } from './Components/Main/Panel/PanelMain/panel.component';
import { MenuTopComponent } from './Components/Main/Panel/Menu/MenuTop/menu.top.component';
import { MenuLeftComponent } from './Components/Main/Panel/Menu/MenuLeft/menu.left.component';
import { MenuBottomComponent } from './Components/Main/Panel/Menu/MenuBottom/menu.bottom.component';
import { HomeComponent } from './Components/Main/Panel/Home/home.component';
import { KategoriComponent } from './Components/Main/Panel/Page/Kategori/kategori.component';

import { Error404Component } from './Components/Other/Error/Error404/error_404.component';
import { Error500Component } from './Components/Other/Error/Error500/error_500.component';
import { TestComponent } from './Components/Other/Test/test.component';

import { TestService } from './Components/Common/Service/test.service';
import { CommonService } from './Components/Common/Service/common.service';
import { UserService } from './Components/Main/Login/Service/user.service';
import { StorageService } from './Components/Storage/Service/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    LoginComponent,
    PanelComponent,
    MenuTopComponent,
    MenuLeftComponent,
    MenuBottomComponent,
    HomeComponent,
    KategoriComponent,
    Error404Component,
    Error500Component,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {})
  ],
  providers: [
    TestService,
    CommonService,
    UserService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
