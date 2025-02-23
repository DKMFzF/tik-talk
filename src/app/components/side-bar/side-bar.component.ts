import { Component, inject } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';
import { SubsCardComponent } from './subs-card/subs-card.component';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../shared/services/profile/profile.service';
import { AsyncPipe } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { ImgUrlPipe } from '../../shared/pipes/img-url.pipe';

/**
 * сайд-бар
 */
@Component({
  selector: 'app-side-bar',
  imports: [
    SvgComponent, 
    SubsCardComponent, 
    RouterLink, 
    AsyncPipe,
    ImgUrlPipe
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  public profileService = inject(ProfileService);
  
  subscribers = this.profileService.getSubscribersList();

  me = this.profileService.me

  public menuItems = [
    {
      label: 'Моя страница',
      icon: 'home',
      link: ''
    },
    {
      label: 'Чаты',
      icon: 'chats',
      link: 'chats'
    },
    {
      label: 'Поиск',
      icon: 'search',
      link: 'search'
    }
  ]

  ngOnInit() {
    firstValueFrom(this.profileService.getUser());
  }
}
