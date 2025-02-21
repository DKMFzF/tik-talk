import { Component, inject } from '@angular/core';
import { PorfileCardComponent } from '../../components/porfile-card/porfile-card.component';
import { ProfileService } from '../../shared/services/profile.service';
import { IProfile } from '../../types/profiles';

@Component({
  selector: 'app-search-page',
  imports: [PorfileCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  title = 'Tic-Talk-Search'
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
