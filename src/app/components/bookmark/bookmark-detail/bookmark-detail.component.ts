import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Bookmark, BookmarkGQL, Link, LinksGQL} from '../../../../generated/graphql';
import { switchMap } from 'rxjs';
import { AddLinkComponent } from './add-link/add-link.component';

@Component({
  selector: 'app-bookmark-detail',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule,CommonModule,MatButtonModule,MatCardModule,MatProgressSpinnerModule],
  templateUrl: './bookmark-detail.component.html',
  styleUrl: './bookmark-detail.component.scss'
})
export class BookmarkDetailComponent {

  bookmark: Bookmark | undefined;
  links: Link[] = [];
  isLoading = true;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly dialog: MatDialog,
    private readonly bookmarkGql: BookmarkGQL,
    private readonly linksGql : LinksGQL
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          return this.bookmarkGql.watch({ _id: params['id'] }).valueChanges;
        }),
        switchMap((result) => {
          this.bookmark = result.data.bookmark;
          return this.linksGql.watch({ urls: result.data.bookmark.links })
            .valueChanges;
        })
      )
      .subscribe((result) => {
        this.isLoading = false;
        this.links = result.data.links;
      });
  }

  onAdd() {
    this.dialog.open(AddLinkComponent, {
      data: { bookmark: this.bookmark },
    });
  }

  onLinkClick(url : string){
    window.open(url, '_blank');
  }
}
