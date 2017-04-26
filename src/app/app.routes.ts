import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

import { Error404Component } from './Components/Other/Error/Error404/error_404.component';
import { Error500Component } from './Components/Other/Error/Error500/error_500.component';
import { TestComponent } from './Components/Other/Test/test.component';

import { AuthGuardCanActivate } from './Components/AuthGuard/Activate/auth.guard.can.activate';

export const routes: Routes = [
  { path: '', component: DefaultComponent },
  {
    path: 'main',
    children: [
      {
        path: '',
        redirectTo: 'panel',
        pathMatch: 'full'
      },
      {
        path: 'panel',
        canActivate: [AuthGuardCanActivate],
        component: PanelComponent,
        children: [
          {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full'
          },
          {
            path: 'home',
            component: HomeComponent
          },
          {
            path: 'page',
            children: [
              { path: '', redirectTo: '/other/error/404', pathMatch: 'full' },
              { path: 'kategori', component: KategoriComponent },
              { path: 'search/:text', component: SearchComponent },
              { path: 'settings', component: SettingsComponent },
            ]
          }
        ]
      },
      { path: 'login', component: LoginComponent },
      { path: 'forgotPassword', component: ForgotPasswordComponent },
    ]
  },
  {
    path: 'other',
    children: [
      { path: '', redirectTo: '/other/error/404', pathMatch: 'full' },
      {
        path: 'error',
        children: [
          { path: '', redirectTo: '/other/error/404', pathMatch: 'full' },
          { path: '404', component: Error404Component },
          { path: '500', component: Error500Component }
        ]
      },
      { path: 'test', component: TestComponent },
    ]
  },
  { path: '**', redirectTo: 'other/error/404' }
];
