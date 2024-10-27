import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CreateBookmarkComponent } from './create-bookmark/create-bookmark.component';
import { Bookmark, BookmarksGQL } from '../../../generated/graphql';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bookmark',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatIconModule,MatButtonModule],
  templateUrl: './bookmark.component.html',
  styleUrl: './bookmark.component.scss'
})
export class BookmarkComponent {
  bookmarks$ = new Observable<Bookmark[]>();

  constructor(
    private readonly dialog: MatDialog,
    private readonly router: Router,
    private readonly bookmarks: BookmarksGQL
  ) {}

  ngOnInit() {
    this.bookmarks$ = this.bookmarks.watch()
      .valueChanges.pipe(map((res:any) => res.data.bookmarks));
  }

  onFabClick() {
    this.dialog.open(CreateBookmarkComponent);
  }

  onBookmarkClick(bookmarkId: string) {
    this.router.navigate(['/bookmark', bookmarkId]);
  }

}
