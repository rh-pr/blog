export type Post = {
    id: string
    title: string,
    image:string | File,
    category: string,
    post: string,
    createdata: string
}


export type Menu = {
    text: string,
    path: string
}

export interface CreatedPost {
    id: string
}