import { MatDialog } from '@angular/material/dialog';
import { AssetsService } from '../../../../core/assets.service';
import { AlertComponent } from '../../../../shared/components/alert/alert.component';
import { IAsset } from '../../../../common/types/asset.type';
import { Subscription } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
@Component({
  selector: 'app-last-searchs',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './last-searchs.component.html',
  styleUrl: './last-searchs.component.scss',
})
export class LastSearchsComponent implements OnInit {
  @Input() assets!: IAsset[];
  private subscriptions$ = new Subscription();

  constructor(
    private readonly assetsService: AssetsService,
    private readonly dialog: MatDialog
  ) {}

  public ngOnInit() {
    this.getLastAssets();
  }

  public getLastAssets() {
    const asset$ = this.assetsService.getAssets().subscribe({
      next: (response: IAsset[]) => {
        this.assets = response;
      },
      error: (error: { error: { message: string } }) => {
        this.dialog.open(AlertComponent, {
          minHeight: '140px',
          maxHeight: '600px',
          minWidth: '300px',
          maxWidth: '600px',
          data: {
            title: 'Opss..',
            message: error.error?.message || 'Não foi possivel listar o ativo',
          },
        });
      },
    });
    this.subscriptions$.add(asset$);
  }
}
