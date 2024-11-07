import { Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookmarksDocument, CreateBookmarkGQL } from '../../../../generated/graphql';

@Component({
  selector: 'app-create-bookmark',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './create-bookmark.component.html',
  styleUrl: './create-bookmark.component.scss'
})
export class CreateBookmarkComponent {
  bookmarkName = new FormControl('', [Validators.required]);
  @Input() dialogVisibile: boolean = false;
  @Output() changeDialogVisibility = new EventEmitter<boolean>();

  constructor(
    private readonly createBookmarkGql: CreateBookmarkGQL
  ) {}

  ngOnInit(): void {
  }

  closeDialog(val:boolean):void{
    this.changeDialogVisibility.emit(val);
  }

  getBookmarkNameError():string {
    if (this.bookmarkName.touched && this.bookmarkName.hasError('required')) {
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
      });
  }
}
