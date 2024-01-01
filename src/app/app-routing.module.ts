import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContactComponent } from './contact/contact.component';
import { SolutionComponent } from './solution/solution.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HeaderComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Solution', component: SolutionComponent },
  { path: 'Contact/:name', component: ContactComponent} 



];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
