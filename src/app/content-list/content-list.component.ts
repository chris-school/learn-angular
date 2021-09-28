import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  constructor() { }

  contentArray: Content[] = [];

  displayId(itemId: Number) {
    console.log("Item id: " + itemId);
  }

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

    let contentItem4: Content = {
      id: 3,
      author: "Pablo Neruda",
      title: "Cien Sonetos de Amor",
      body: "Cien sonetos de amor is a collection of sonnets written by the Chilean poet and Nobel Laureate Pablo Neruda originally published in Argentina in 1959. Dedicated to his beloved wife, Matilde Urrutia, it is divided into the four stages of the day: morning, afternoon, evening, and night."
    }

    let contentItem5: Content = {
      id: 4,
      author: "Anton Chekhov",
      imgURL: "https://upload.wikimedia.org/wikipedia/commons/3/35/The_Cherry_Orchard_MAT.jpg",
      title: "The Cherry Orchard",
      body: "The Cherry Orchard is the last play by Russian playwright Anton Chekhov. Written in 1903, it was first published by Znaniye, and came out as a separate edition later that year in Saint Petersburg, via A.F. Marks Publishers."
    }

    this.contentArray.push(contentItem1)
    this.contentArray.push(contentItem2)
    this.contentArray.push(contentItem3)
    this.contentArray.push(contentItem4)
    this.contentArray.push(contentItem5)
  }
}
