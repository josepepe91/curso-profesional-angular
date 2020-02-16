import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ExponentialPipe } from '@shared/pipes/exponential/exponential.pipe';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartComponent } from '@shared/components/cart/cart.component';
import { HighlightDirective } from '@shared/directives/highlight/highlight.directive';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { MaterialModule } from '@material/material.module';

@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    CartComponent
  ],
  exports: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
