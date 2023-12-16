import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, SideBarComponent, HttpClientModule],
  providers: [HttpClientModule],
})
export class AppComponent {}
