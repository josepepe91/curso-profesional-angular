import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from '@admin/components/product-form/product-form.component';
import { ProductsListComponent } from '@admin/components/products-list/products-list.component';
import { NavComponent } from '@admin/components/nav/nav.component';
import { ProductEditComponent } from '@admin/components/product-edit/product-edit.component';
import { FormProductComponent } from '@admin/components/form-product/form-product.component';
import { TableComponent } from '@admin/components/table/table.component';
import { DashboardComponent } from '@admin/components/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'table',
        component: TableComponent
      },
      {
        path: 'products',
        component: ProductsListComponent
      },
      {
        path: 'products/create',
        component: FormProductComponent
      },
      {
        path: 'products/edit/:id',
        component: ProductEditComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
