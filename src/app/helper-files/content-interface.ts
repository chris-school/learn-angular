export interface Content {
    id: number;
    author: string;
    imgURL?: string;
    type?: string;
    title: string;
    body: string;
    tags?: string[];
}