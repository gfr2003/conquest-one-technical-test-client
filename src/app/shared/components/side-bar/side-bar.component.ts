import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatSlideToggleModule,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  constructor(private router: Router) {}
  @ViewChild('drawer') drawer!: MatSidenav;
  navigateTo(destination: string): void {
    this.router.navigate([destination]);
  }
}
