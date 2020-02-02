import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericErrorComponent } from './pages/generic-error/generic-error.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [GenericErrorComponent],
  imports: [CommonModule, MatCardModule],
  exports: [GenericErrorComponent],
})
export class SharedModule {}
