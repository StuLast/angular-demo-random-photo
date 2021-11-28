import { Component } from '@angular/core';
import { PhotoApiService } from './photo-api.service';
import { IPhoto } from './photo-finder/photo-finder.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  image: IPhoto | null = null;
  
  constructor(
    private photoAPI: PhotoApiService
  ) {
    this.onGetPhoto();
  }

  onGetPhoto = (): void => {
    console.log('On Get Photo emitted');
    this.photoAPI.getPhoto().subscribe((response: any) => {
      this.image = response;
    });
  }
}
