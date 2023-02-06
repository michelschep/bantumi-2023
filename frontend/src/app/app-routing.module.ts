import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotsComponent } from './bots/bots.component';

const routes: Routes = [
  { path: "bots", component: BotsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
