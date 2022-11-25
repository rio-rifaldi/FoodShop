import { ApolloServer, ExpressContext } from 'apollo-server-express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { graphqlUploadExpress } from 'graphql-upload-ts';
import { JwtPayload } from 'jsonwebtoken';
import mongoose from 'mongoose';
import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { ProductResolver } from './Resolver/ProductResolver';
import { UserResolver } from './Resolver/userResolver';
import { generateTimeAccess, generateToken, secretE, verifyToken } from './utils/Functions';


dotenv.config({path:__dirname +'/.env' })
console.log(__dirname);
const originList = [
    "https://studio.apollographql.com",
    "http://localhost:3000"

]
const boostraps = async () =>{
    console.clear()
    const schema = await buildSchema({
        resolvers : [
            UserResolver,ProductResolver
        ],
        authChecker : ({context}:{context:ExpressContext}) => {
            const token = context.req.cookies.Token;
            let isTrue  = false
         
            if(token){
                isTrue = true;  
            } 
            
            return isTrue
        }  
        

    })
    const server = new ApolloServer({
        schema,
         context : ({req,res}) =>{
             if(originList.indexOf(req.headers.origin as string) !== -1 ){
                 
                res.setHeader("Access-Control-Allow-Origin",req.headers.origin as string)
                res.setHeader("Access-Control-Allow-Credentials","true")
            }
            if(!req.cookies.RefreshToken) return {req,res}

            try {
                const tokenRefresh = req.cookies.RefreshToken
                const Token = req.cookies.Token
                const verify = verifyToken(tokenRefresh,secretE.secretTokenRefresh) as JwtPayload 
                if(verify && !Token){
                    const token = generateToken({data:verify.data},secretE.secretToken)
                     const cookieTimeToken = generateTimeAccess(3)

                    res.cookie("Token",token,{sameSite:"none",secure:true,expires:cookieTimeToken})
                }
            } catch (e) {
                console.log(e);
            }
            
            return {req,res}
         } 
    })
    
    const app = express()
    await server.start()
    app.use(cors({
        credentials:true,
        origin :["https://studio.apollographql.com","http://localhost:3000"]
    }))
    
    app.use(cookieParser())
    app.use(graphqlUploadExpress() )
    server.applyMiddleware({app})
    app.listen(4000,() => {
        console.log('server is running on port 4000 🚀');
    })
    mongoose.connect('mongodb://localhost:27017/login')
    const db = mongoose.connection
    db.on("open",() => console.log('database is connected 💻') )
    db.on("error",() => console.log('database not connected ❗') )
}   

boostraps();