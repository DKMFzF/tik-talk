import { Component } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';

/**
 * сайд-бар
 */
@Component({
  selector: 'app-side-bar',
  imports: [SvgComponent],
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
