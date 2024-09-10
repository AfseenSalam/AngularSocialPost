import { Component } from '@angular/core';
import { Post } from '../../modles/post';
import { SinglePostComponent } from '../single-post/single-post.component';
import { PostFormComponent } from '../post-form/post-form.component';

@Component({
  selector: 'app-social-posts',
  standalone: true,
  imports: [SinglePostComponent,PostFormComponent],
  templateUrl: './social-posts.component.html',
  styleUrl: './social-posts.component.css'
})
export class SocialPostsComponent {
  showForm:boolean =false;
posts:Post[]=[
  {
    title: "Midnight Snack Cravings",
    thought: "Is it too late for pizza? Asking for a friend.",
    upvote:0
},
{
    title: "Long Week, Finally Friday!",
    thought: "After a crazy week, I'm ready to kick back, relax, and do absolutely nothing.",
    upvote:0
},
{
    title: "Morning Workout Done!",
    thought: "Feeling so energized after that morning run. Who am I?!",
    upvote:0
},
{
    title: "Procrastination at Its Finest",
    thought: "Should be working on my project, but here I am scrolling through memes.",
    upvote:0
},
{
    title: "Rainy Day Vibes",
    thought: "Rain, hot cocoa, and a good book – perfect combo for a cozy day in.",
    upvote:0
}
];

submit(p:Post){
this.posts.push({... p, upvote:0} );
this.showForm = false;
}
toggleForm() {
  this.showForm = !this.showForm;
}
DeletePost(i:Post){
  let index:number =this.posts.findIndex(x=>x === i);
  this.posts.splice(index,1);
}
Upvote(i:Post){
i.upvote++;
}
}
