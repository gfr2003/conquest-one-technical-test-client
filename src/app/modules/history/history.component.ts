import { Component } from '@angular/core';
import { LastSearchsComponent } from './components/last-searchs/last-searchs.component';
import { MatIconModule } from '@angular/material/icon';
import { SideBarComponent } from '../../shared/components/side-bar/side-bar.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [LastSearchsComponent, MatIconModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
})
export class HistoryComponent {
  constructor(public sidebar: SideBarComponent) {}

  changeSideNav() {
    if (this.sidebar.drawer.opened) {
      this.sidebar.drawer.close();
    } else {
      this.sidebar.drawer.open();
    }
  }
}
