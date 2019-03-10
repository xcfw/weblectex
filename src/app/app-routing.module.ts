import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [  
    {path: '' , component: AppModule},
	{path: 'contacts' , component: ContactComponent,
    {path: 'contacts' , component: ContactsComponent}
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }