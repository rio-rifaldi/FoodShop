export interface dataArticle{
    articles:[
        {
            author : string | null,
            content: string | null,
            description : string,
            publishedAt : string,
            title : string,
            url : string,
            urlToImage: string,
            source : [
                {
                    name:string | null
                }
            ]
        }
    ],
    totalResults : number
}