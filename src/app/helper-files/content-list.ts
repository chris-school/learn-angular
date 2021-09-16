import { Content } from "./content-interface";

export class ContentList {
    private _items: Content[];

    constructor() {
        this._items = [];
    }

    add(item: Content) {
        this._items.push(item);
    }

    count(): number {
        return this._items.length;
    }

    getAtIndex(index: number) {

        if (index < 0 || index > this._items.length - 1) {
            console.log("Outside of the range")
            return `<h3>ERROR: Index out of bounds check usages of ContentList.getAtIndex()</h3>`;
        } else {
            let item = this._items[index];
        
            let friendlyHtml = `<h1>ID: ${item.id}</h1>
                <p>Author: ${item.author}</p>
            `;

            if (item.imgURL != null) {
                friendlyHtml += `<img src="${item.imgURL}">`;
            } else if (item.type != null) {
                friendlyHtml += `<p>Type: ${item.type}</p>`;
            }

            // Add the title and body to the html
            friendlyHtml += `<p>Title: ${item.title}</p>
                <p>Body: ${item.body}</p>
            `;

            if (item.tags != null) {
                friendlyHtml += `<p>Tags: ${item.tags}</p>`;
            }

            return friendlyHtml;
        }
    }

    get items(): Content[] {
        return this._items;
    }
}