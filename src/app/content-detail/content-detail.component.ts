import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  id: number = 0;
  content: any = {};
  constructor(private route: ActivatedRoute, private contentService: ContentService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { 
      this.id = Number(params.get('id'));
      this.contentService.getContentItem(this.id).subscribe(
        c => {this.content = c; console.log(this.content); });
    });
  }

}
