export type Post = {
    id: string
    title: string,
    image:string | File,
    category: string,
    post: string,
    createDate: string
}


export type Menu = {
    text: string,
    path: string
}