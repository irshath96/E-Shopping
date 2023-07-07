import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { SpicesComponent } from './pages/spices/spices.component';
import { PulseComponent } from './pages/pulse/pulse.component';
import { FlourComponent } from './pages/flour/flour.component';
import { RiceComponent } from './pages/rice/rice.component';
import { TeaComponent } from './pages/tea/tea.component';
import { OilComponent } from './pages/oil/oil.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';


@NgModule({
  declarations: [
    ProductComponent,
    SpicesComponent,
    PulseComponent,
    FlourComponent,
    RiceComponent,
    TeaComponent,
    OilComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
