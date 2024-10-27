import { Component } from '@angular/core';
import { BookmarkComponent } from "../bookmark/bookmark.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BookmarkComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
