import { Component, inject } from '@angular/core';
import { PorfileCardComponent } from '../../components/porfile-card/porfile-card.component';
import { ProfileService } from '../../shared/services/profile/profile.service';
import { IProfileView } from '../../types/profiles';

/**
 * страница поиска
 */
@Component({
  selector: 'app-search-page',
  imports: [PorfileCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  public title = 'Tic-Talk-Search'
  private profileService = inject(ProfileService)
  public profiles: IProfileView[] = [];

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
