import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { HistoryComponent } from './modules/history/history.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'history', component: HistoryComponent },
];
