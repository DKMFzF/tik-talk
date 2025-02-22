import { Component } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';
import { SubsCardComponent } from './subs-card/subs-card.component';
import { RouterLink } from '@angular/router';

/**
 * сайд-бар
 */
@Component({
  selector: 'app-side-bar',
  imports: [SvgComponent, SubsCardComponent, RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
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
