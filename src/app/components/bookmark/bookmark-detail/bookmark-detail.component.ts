import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Bookmark, BookmarkGQL, Link, LinksGQL} from '../../../../generated/graphql';
import { switchMap } from 'rxjs';
import { AddLinkComponent } from './add-link/add-link.component';

@Component({
  selector: 'app-bookmark-detail',
  standalone: true,
  imports: [CommonModule,AddLinkComponent],
  templateUrl: './bookmark-detail.component.html',
  styleUrl: './bookmark-detail.component.scss'
})
export class BookmarkDetailComponent {
  dialogVisibile : boolean = false;
  bookmark: Bookmark | undefined;
  links: Link[] = [];
  isLoading = true;

  constructor(
    private readonly route: ActivatedRoute,
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
    this.dialogVisibile=true;
  }

  onLinkClick(url : string){
    window.open(url, '_blank');
  }

  onDialogVisibilityChange(val:boolean){
    this.dialogVisibile = val;
  }
}
