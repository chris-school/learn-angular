import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../services/content.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  constructor(private contentService: ContentService, private messageService: MessageService) { }

  title = "title";
  tags = "tags";

  contentArray: Content[] = [];
  foundContent: string = "";

  newContentItem: Content = {
    id: 5,
    title: "Title",
    body: "Body",
    author: "Author"
  }

  ngOnInit(): void {

    //this.contentArray = this.contentService.getContent();

    this.contentService.getContent().subscribe(content => this.contentArray = content)
    this.messageService.add("Content retreved!");
  }

  save(): void {
    this.contentService.addContent(this.newContentItem).subscribe(content => { this.contentArray.push(content) });
  }

  search(query: string) {
    let contentFound = false;
    for (let i = 0; i < this.contentArray.length; i++) {
      if (this.contentArray[i].title.toLowerCase() == query.toLowerCase()) {
        contentFound = true;
      }
    }

    if (contentFound) {
      this.foundContent = "There is content with that title."
    } else {
      this.foundContent = "There is no content with that title."
    }
  }

  displayId(itemId: number) {
    console.log("Item id: " + itemId);
  }
}
