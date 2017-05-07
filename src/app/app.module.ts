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
import { SearchComponent } from './Components/Main/Panel/Page/Search/search.component';
import { SettingsComponent } from './Components/Main/Panel/Page/Settings/settings.component';
import { ForgotPasswordComponent } from './Components/Main/ForgotPassword/forgot.password.component';
import { RegisterComponent } from './Components/Main/Register/register.component';

import { Error404Component } from './Components/Other/Error/Error404/error_404.component';
import { Error500Component } from './Components/Other/Error/Error500/error_500.component';
import { TestComponent } from './Components/Other/Test/test.component';

import { ViNotificationComponent } from './Tools/Components/ViNotification/vi.notification.component';
import { ViModalsComponent } from './Tools/Components/ViModals/vi.modals.component';

import { CommonService } from './Components/Common/Service/common.service';
import { UserService } from './Components/Main/Login/Service/user.service';
import { StorageService } from './Components/Storage/Service/storage.service';
import { SearchService } from './Components/Main/Panel/Page/Search/Service/search.service';
import { ViNotificationService } from './Tools/Components/ViNotification/Service/vi.notification.service';

import { AuthGuardCanActivate } from './Components/AuthGuard/Activate/auth.guard.can.activate';

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
    TestComponent,
    ViNotificationComponent,
    SearchComponent,
    SettingsComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    ViModalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {})
  ],
  providers: [
    CommonService,
    UserService,
    StorageService,
    SearchService,
    AuthGuardCanActivate,
    ViNotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
