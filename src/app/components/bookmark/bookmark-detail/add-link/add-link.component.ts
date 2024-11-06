import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Bookmark, BookmarkDocument, UpdateBookmarkGQL } from '../../../../../generated/graphql';

@Component({
  selector: 'app-add-link',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './add-link.component.html',
  styleUrl: './add-link.component.scss'
})
export class AddLinkComponent {
  link = new FormControl('', [Validators.required]);
  @Input() dialogVisibile: boolean = false;
  @Output() changeDialogVisibility = new EventEmitter<boolean>();

  constructor(
    private readonly updatebookmarkGql: UpdateBookmarkGQL
  ){}

  getLinkError():string {
    return '';
  }
  
  closeDialog(val:boolean):void{
    this.changeDialogVisibility.emit(val);
  }

/*   addLink() {
    this.updatebookmarkGql
      .mutate(
        {
          updateBookmarkData: {
            _id: this.data.bookmark._id,
            links: [...this.data.bookmark.links, this.link.value!],
          },
        },
        {
          refetchQueries: [
            {
              query: BookmarkDocument,
              variables: { _id: this.data.bookmark._id },
            },
          ],
        }
      )
      .subscribe(() => {
      });
  } */

  addLink(){

  }
}
