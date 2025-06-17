import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';

  constructor() {

  }

  ngOnInit(): void {

  }

  // Exibir o header apenas se a URL não for a raiz ('')
  exibirHeader(): boolean {
    const url = window.location.pathname;
    return url !== '/';
  }
}
