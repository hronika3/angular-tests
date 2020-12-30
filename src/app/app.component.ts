import { Component } from '@angular/core';
import {AppCounterService} from './services/app-counter.service';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-red',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Title 1', text: 'Text 11111111111', id: 1 },
    {title: 'Title 2', text: 'Text 22222222222', id: 2 }
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post)
    console.log('Post', post)
  }

}





















