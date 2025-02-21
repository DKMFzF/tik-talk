import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PorfileCardComponent } from "./components/porfile-card/porfile-card.component";
import { ProfileService } from './data/services/profile.service';
import { IProfile } from './types/profiles';
import { TProfileId } from './types/profiles';

@Component({
  selector: 'app-root', // селектор главной страницы
  
  // тут прописываются зависимости
  // которые нужны для создания главной страницы
  imports: [RouterOutlet, PorfileCardComponent],
  templateUrl: './app.component.html', // html-шаблон главной страницы
  styleUrl: './app.component.scss' // стили главной страницы
})
export class AppComponent {
  title = 'Tik-Talk';
  profileService = inject(ProfileService)
  profiles: IProfile[] = [];

  constructor() {
    this.profileService.getTestAcc().subscribe({
      next: (val) => {
        this.profiles = val;
      },
      error: (err) => {
        throw new Error(err);
      }
    });
  }
}
