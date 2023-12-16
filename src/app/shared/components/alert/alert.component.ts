import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'alert-component',
  templateUrl: 'alert.component.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatButtonModule],
})
export class AlertComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string; message: string }
  ) {}
}
