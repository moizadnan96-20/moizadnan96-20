import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { DevopComponent } from "./components/devop/devop.component";
const routes: Routes = [
  {
    path:'',
    component:DevopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevopsRoutingModule { }
