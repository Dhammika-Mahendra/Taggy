import { Component} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-bookmark',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,MatButtonModule,MatIconModule,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './create-bookmark.component.html',
  styleUrl: './create-bookmark.component.css'
})
export class CreateBookmarkComponent {
  bookmarkName = new FormControl('', [Validators.required]);

  constructor(
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
  }
}
