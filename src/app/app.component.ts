import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // селектор главной страницы
  
  // тут прописываются зависимости
  // которые нужны для создания главной страницы
  imports: [RouterOutlet],
  templateUrl: './app.component.html', // html-шаблон главной страницы
  styleUrl: './app.component.scss' // стили главной страницы
})
export class AppComponent {
  title = 'Tik-Talk';
}
