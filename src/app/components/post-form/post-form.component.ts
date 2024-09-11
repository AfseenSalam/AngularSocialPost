import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../modles/post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  @Output() Submitted =new EventEmitter<Post>();
  newPost:Post ={} as Post;
 
  EmitSubmit(){
    let result:Post = {...this.newPost};
    this.Submitted.emit(result);
    this.newPost = {} as Post;
  }
  

}
