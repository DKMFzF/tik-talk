import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ProfileService } from '../../shared/services/profile/profile.service';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    SideBarComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  private profileService = inject(ProfileService);

  // ngOnInit в Angular — это метод, который вызывается один раз после того, 
  // как Angular инициализирует все входные свойства компонентов 
  // их начальными значениями
  ngOnInit() {
    this.profileService.getUser().subscribe(val => {
      console.log(val);
    })
  }
}
