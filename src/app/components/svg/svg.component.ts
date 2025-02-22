import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg[icon]',
  standalone: true,
  imports: [],
  template: '<svg:use [attr.href]="href"></svg:use>',
  styles: ['']
})
export class SvgComponent {
  @Input() icon = ''
  
  get href() {
    console.log(`/assets/${this.icon}.svg#${this.icon}`)
    return `/assets/${this.icon}.svg#${this.icon}`
  }
}
