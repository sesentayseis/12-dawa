import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    { title: 'Post 1', content: 'Lorem ipsum dolor sit amet.' },
    { title: 'Post 2', content: 'Consectetur adipiscing elit.' },
    { title: 'Post 3', content: 'Sed do eiusmod tempor incididunt.' },
  ];

  selectedPost: any;

  showDetails(post: any) {
    this.selectedPost = post;
  }
}
