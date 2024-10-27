import { Component} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookmarksDocument, CreateBookmarkGQL } from '../../../../generated/graphql';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-bookmark',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatButtonModule,MatIconModule,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './create-bookmark.component.html',
  styleUrl: './create-bookmark.component.scss'
})
export class CreateBookmarkComponent {
  bookmarkName = new FormControl('', [Validators.required]);

  constructor(
    private readonly createBookmarkGql: CreateBookmarkGQL,
    private readonly dialogRef: MatDialogRef<CreateBookmarkComponent>
  ) {}

  ngOnInit(): void {
  }

  getBookmarkNameError():string {
    if (this.bookmarkName.hasError('required')) {
      return 'You must enter a value.';
    }
    return '';
  }

  createBookmark() {
    const nameData = this.bookmarkName.value || ''; 

    this.createBookmarkGql.
    mutate({ 
      createBookmarkData: { name: nameData } 
    },
    {
      refetchQueries: [{query: BookmarksDocument}]
    }
    )
      .subscribe((res) => {
        this.dialogRef.close();
      });
  }
}
