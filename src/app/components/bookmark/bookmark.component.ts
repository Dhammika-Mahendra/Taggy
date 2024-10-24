import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CreateBookmarkComponent } from './create-bookmark/create-bookmark.component';

@Component({
  selector: 'app-bookmark',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatIconModule,MatButtonModule],
  templateUrl: './bookmark.component.html',
  styleUrl: './bookmark.component.css'
})
export class BookmarkComponent {
  bookmarks$: any;

  constructor(
    private readonly dialog: MatDialog,
    private readonly router: Router
  ) {}

  onFabClick() {
    this.dialog.open(CreateBookmarkComponent);
  }

  onBookmarkClick(bookmarkId: string) {
    this.router.navigate(['/bookmarks', bookmarkId]);
  }

}
