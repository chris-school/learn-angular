import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  constructor() { }

  content = new ContentList();

  ngOnInit(): void {

    let contentItem1: Content = {
      id: 0,
      author: "Leo Tolstoy",
      title: "War and Peace",
      body: "War and Peace is a literary work mixed with chapters on history and philosophy by the Russian author Leo Tolstoy, first published serially, then published in its entirety in 1869. It is regarded as one of Tolstoy's finest literary achievements and remains an internationally praised classic of world literature.",
    }

    let contentItem2: Content = {
      id: 1,
      author: "Haruki Murakami",
      imgURL: "https://upload.wikimedia.org/wikipedia/en/b/b9/1Q84bookcover.jpg",
      title: "1Q84",
      body: "1Q84 is a novel written by Japanese writer Haruki Murakami, first published in three volumes in Japan in 2009–10. It covers a fictionalized year of 1984 in parallel with a \"real\" one. The novel is a story of how a woman named Aomame begins to notice strange changes occurring in the world."
    }

    let contentItem3: Content = {
      id: 2,
      author: "Anton Chekhov",
      type: "Story Fiction",
      title: "The Lady With the Dog",
      body: "\"The Lady with the Dog\" is a short story by Anton Chekhov. First published in 1899, it describes an adulterous affair between an unhappily married Moscow banker and a young married woman which begins while both are vacationing alone in Yalta.",
      tags: ["Short Story", "Classic", "Short Fiction"]
    }

    this.content.add(contentItem1);
    this.content.add(contentItem2);
    this.content.add(contentItem3);
  }

}
