import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateBookmarkComponent } from './create-bookmark/create-bookmark.component';
import { Bookmark, BookmarksGQL } from '../../../generated/graphql';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bookmark',
  standalone: true,
  imports: [CommonModule, CreateBookmarkComponent],
  templateUrl: './bookmark.component.html',
  styleUrl: './bookmark.component.scss'
})
export class BookmarkComponent {
  bookmarks$ = new Observable<Bookmark[]>();
  dialogVisibile : boolean = false;

  constructor(
    private readonly router: Router,
    private readonly bookmarks: BookmarksGQL
  ) {}

  ngOnInit() {
    this.bookmarks$ = this.bookmarks.watch()
      .valueChanges.pipe(map((res:any) => res.data.bookmarks));
  }

  onFabClick() {
    this.dialogVisibile = true;
  }

  onBookmarkClick(bookmarkId: string) {
    this.router.navigate(['/bookmark', bookmarkId]);
  }

  onDialogVisibilityChange(val:boolean){
    this.dialogVisibile = val;
  }

}
