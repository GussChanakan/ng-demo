import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//! import components
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [

  //! default route
  {path: '', component: IndexComponent,}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
