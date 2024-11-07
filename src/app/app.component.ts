import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, HomeComponent]
})
export class AppComponent {
  title = 'SecondApp';
}
