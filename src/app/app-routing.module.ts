import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VolsComponent } from './vols/vols.component';
import { AddVolComponent } from './add-vol/add-vol.component';
import { UpdateVolComponent } from './update-vol/update-vol.component';

const routes: Routes = [
  {path: "vols", component : VolsComponent},
  {path: "add-vol", component : AddVolComponent},
  {path: "", redirectTo: "vols", pathMatch: "full" },
  {path: "updateVol/:id" , component: UpdateVolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
