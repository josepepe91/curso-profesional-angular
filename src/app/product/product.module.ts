import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from '@product/product-routing.module';
import { ProductComponent } from '@product/components/product/product.component';
import { ProductDetailComponent } from '@product/components/product-detail/product-detail.component';
import { SharedModule } from '@shared/shared.module';
import { ProductsContainer } from '@product/containers/products/products.container';
import { MaterialModule } from '@material/material.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductsContainer
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
    MaterialModule
  ]
})
export class ProductModule {

}
