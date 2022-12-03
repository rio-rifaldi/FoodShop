 export const minimizeContent = (content:string | null,size:number) =>{
        if(!content) return
        if(content?.length >  size){
            const trivia = `${content.slice(0,size)} ...`
            return trivia
        }else{
            return content
        }
    } 
  export const getCurrentTime = (time:string | null) => {
        if(!time) return
        const date = new Date(time);
        
        return date.toLocaleString()
    }