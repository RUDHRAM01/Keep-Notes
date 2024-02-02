import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../post.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  post!: Post;
  id!: number;
  constructor(public postServices: PostService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    this.id = this.route.snapshot.params['postId'];
    this.postServices.find(this.id).subscribe((data: Post)=>{
      this.post = data;
    });
  }
}
