import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SideNavBar } from './layout/components/side-nav-bar/side-nav-bar';
import { MatListModule } from '@angular/material/list';
import { Toolbar } from './layout/components/toolbar/toolbar';
import { DashboardModule } from './dashboard-module';

@NgModule({
  declarations: [
    App,
    SideNavBar,
    Toolbar,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    DashboardModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
