import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddTutorialComponent} from "./components/add-tutorial/add-tutorial.component";
import {Query1Component} from "./components/query1/query1.component";

const routes: Routes = [
  {path: 'first-component', component: AddTutorialComponent},
  {path: 'query1', component: Query1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
