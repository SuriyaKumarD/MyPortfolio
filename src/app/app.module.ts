import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { AboutComponentComponent } from './dashboard/header/about-component/about-component.component';
import { SkillComponent } from './dashboard/header/skill/skill.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, HeaderComponent, AboutComponentComponent, SkillComponent],
  imports: [BrowserModule, AppRoutingModule, NgxTypedJsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
