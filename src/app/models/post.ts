export class Post {
    constructor(public id: number,
        public title: string,
        public highlight: string,
        public text: string,
        public imgSrc: string,
        public link: string,
        public date: string,
        public tags: string[]) 
        { }
}