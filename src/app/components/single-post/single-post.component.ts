import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../modles/post';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent {
  @Input() DisplayItem: Post ={} as Post;
  @Output() Deleted = new EventEmitter<Post>();
  @Output() Vote = new EventEmitter<Post>();

EmitDelete(){
  this.Deleted.emit(this.DisplayItem);
}
upvote(){
  this.Vote.emit(this.DisplayItem);
}
}

