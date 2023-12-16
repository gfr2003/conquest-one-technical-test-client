import { Component } from '@angular/core';
import { SearchAssetComponent } from './components/search-asset/search-asset.component';
import { IAsset } from '../../common/types/asset.type';
import { AssetChartComponent } from './components/asset-chart/asset-chart.component';
import { SideBarComponent } from '../../shared/components/side-bar/side-bar.component';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [SearchAssetComponent, AssetChartComponent, MatIconModule],
})
export class HomeComponent {
  public assetData?: IAsset;
  constructor(public sidebar: SideBarComponent) {}

  public showAssetPrice(assetData: IAsset) {
    this.assetData = assetData;
  }

  changeSideNav() {
    if (this.sidebar.drawer.opened) {
      this.sidebar.drawer.close();
    } else {
      this.sidebar.drawer.open();
    }
  }
}
