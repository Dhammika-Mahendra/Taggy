import { Component, Inject } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Bookmark, BookmarkDocument, UpdateBookmarkGQL } from '../../../../../generated/graphql';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-link',
  standalone: true,
  imports: [MatButtonModule,MatFormFieldModule,MatInputModule,MatIconModule,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './add-link.component.html',
  styleUrl: './add-link.component.css'
})
export class AddLinkComponent {
  link = new FormControl('', [Validators.required]);

  constructor(
    private readonly updatebookmarkGql: UpdateBookmarkGQL,
    @Inject(MAT_DIALOG_DATA) private readonly data : {bookmark: Bookmark},
    private readonly dialogRef: MatDialogRef<AddLinkComponent>
  ){}

  getLinkError():string {
    return '';
  }
  

  addLink() {
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
        this.dialogRef.close();
      });
  }
}
