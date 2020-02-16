import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@material/material.module';
import { ProductsListComponent } from '@admin/components/products-list/products-list.component';
import { NavComponent } from '@admin/components/nav/nav.component';
import { ProductEditComponent } from '@admin/components/product-edit/product-edit.component';
import { FormProductComponent } from '@admin/components/form-product/form-product.component';
import { TableComponent } from '@admin/components/table/table.component';
import { DashboardComponent } from '@admin/components/dashboard/dashboard.component';
import { ProductFormComponent } from '@admin/components/product-form/product-form.component';
import { AdminRoutingModule } from '@admin/admin-routing.module';



@NgModule({
  declarations: [ProductFormComponent, NavComponent, TableComponent, DashboardComponent, ProductsListComponent,
    FormProductComponent, ProductEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AdminModule { }
