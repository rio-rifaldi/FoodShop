import { ExpressContext } from "apollo-server-express"
import client from "../../Config/Redis"

class LogoutService{
    async Logout ({res}:ExpressContext){
        
        res.clearCookie('RefreshToken',{sameSite:"none",secure:true})
        res.clearCookie('Token',{sameSite:"none",secure:true}) 
        await client.DEL("RefreshToken")    
        return "logout"
    }
}
export default LogoutService