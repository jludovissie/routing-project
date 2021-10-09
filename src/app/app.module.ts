import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  {path:'', redirectTo:'servers', pathMatch:'full'} ,
  {path:'servers', component: ServersComponent} ,
  {path:'users', component: UsersComponent} ,
  {path:'**', component: NotFoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
