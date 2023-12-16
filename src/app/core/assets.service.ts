import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAsset } from '../common/types/asset.type';

@Injectable({
  providedIn: 'root',
})
export class AssetsService {
  constructor(private http: HttpClient) {}

  public getAssetByName(name: string): Observable<IAsset> {
    return this.http.get<IAsset>(`${environment.backendUrl}/assets/price`, {
      params: {
        name,
      },
    });
  }
  public getAssets(): Observable<IAsset[]> {
    return this.http.get<IAsset[]>(`${environment.backendUrl}/assets`);
  }
}
