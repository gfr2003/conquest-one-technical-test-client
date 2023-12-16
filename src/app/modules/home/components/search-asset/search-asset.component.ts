import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AssetsService } from '../../../../core/assets.service';
import { Subscription } from 'rxjs';
import { IAsset } from '../../../../common/types/asset.type';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AlertComponent } from '../../../../shared/components/alert/alert.component';
import { LoaderComponent } from '../../../../shared/components/loader/loader.component';

@Component({
  selector: 'app-search-asset',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    LoaderComponent,
  ],
  providers: [MatDialogModule],
  templateUrl: './search-asset.component.html',
  styleUrl: './search-asset.component.scss',
})
export class SearchAssetComponent implements OnDestroy {
  isLoading = false;
  assetName = new FormControl('', [Validators.required]);
  @Output() assetData: EventEmitter<IAsset> = new EventEmitter<IAsset>();
  private subscriptions$ = new Subscription();
  constructor(
    private readonly assetsService: AssetsService,
    private readonly dialog: MatDialog
  ) {}

  ngOnDestroy() {
    this.subscriptions$.unsubscribe();
  }

  public searchAsset() {
    this.isLoading = true;
    if (this.assetName.invalid || !this.assetName.value) {
      this.isLoading = false;
      return;
    }
    const assetByName$ = this.assetsService
      .getAssetByName(this.assetName.value.toUpperCase())
      .subscribe({
        next: (response) => {
          this.isLoading = false;
          this.assetData.emit(response);
        },
        error: (error) => {
          this.isLoading = false;
          this.dialog.open(AlertComponent, {
            minHeight: '140px',
            maxHeight: '600px',
            minWidth: '300px',
            maxWidth: '600px',
            data: {
              title: 'Opss..',
              message:
                error.error?.message || 'Não foi possivel listar o ativo',
            },
          });
        },
      });
    this.subscriptions$.add(assetByName$);
  }
}
