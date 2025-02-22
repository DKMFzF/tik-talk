import { Component, inject } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';
import { SubsCardComponent } from './subs-card/subs-card.component';
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../shared/services/profile/profile.service';
import { AsyncPipe, JsonPipe } from '@angular/common';

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
    JsonPipe
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  public profileService = inject(ProfileService);
  
  subscribers = this.profileService.getSubscribersList();

  // me = this.profileService.getMe();

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
}
