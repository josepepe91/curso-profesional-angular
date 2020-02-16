import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { DemoComponent } from '@demo/components/demo/demo.component';
import { DemoRoutingModule } from '@demo/demo-routing.module';

@NgModule({
  declarations: [
    DemoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DemoRoutingModule,
    FormsModule
  ]
})
export class DemoModule {

}
