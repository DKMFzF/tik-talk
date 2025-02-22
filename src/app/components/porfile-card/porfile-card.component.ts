import { Component, Input } from '@angular/core';
import { IProfileView } from '../../types/profiles';
import { ImgUrlPipe } from '../../shared/pipes/img-url.pipe';

@Component({
  selector: 'app-porfile-card',
  imports: [ImgUrlPipe],
  templateUrl: './porfile-card.component.html',
  styleUrl: './porfile-card.component.scss'
})
export class PorfileCardComponent {
  @Input() profile!: IProfileView;
}
