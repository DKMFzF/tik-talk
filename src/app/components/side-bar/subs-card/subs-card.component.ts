import { Component, Input } from '@angular/core';
import { IProfileView } from '../../../types/profiles';
import { ImgUrlPipe } from '../../../shared/pipes/img-url.pipe';

@Component({
  selector: 'app-subs-card',
  imports: [ImgUrlPipe],
  templateUrl: './subs-card.component.html',
  styleUrl: './subs-card.component.scss'
})
export class SubsCardComponent {
  @Input() profile!: IProfileView
}
