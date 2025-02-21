import { Component, Input } from '@angular/core';
import { IProfile } from '../../types/profiles';

@Component({
  selector: 'app-porfile-card',
  imports: [],
  templateUrl: './porfile-card.component.html',
  styleUrl: './porfile-card.component.scss'
})
export class PorfileCardComponent {
  @Input() profile!: IProfile;
}
