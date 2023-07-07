import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { SpicesComponent } from './pages/spices/spices.component';
import { PulseComponent } from './pages/pulse/pulse.component';
import { FlourComponent } from './pages/flour/flour.component';
import { RiceComponent } from './pages/rice/rice.component';
import { TeaComponent } from './pages/tea/tea.component';
import { OilComponent } from './pages/oil/oil.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'spices', pathMatch: 'full'
  },
  {
    path: 'spices', component: SpicesComponent
  },
  {
    path: 'pulse', component: PulseComponent
  },
  {
    path: 'flour', component: FlourComponent
  },
  {
    path: 'rice', component: RiceComponent
  },
  {
    path: 'tea', component: TeaComponent
  },
  {
    path: 'oil', component: OilComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
