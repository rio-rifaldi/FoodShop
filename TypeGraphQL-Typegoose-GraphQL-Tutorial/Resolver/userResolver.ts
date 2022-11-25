import { ExpressContext } from 'apollo-server-express';
import { GraphQLError } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Arg, Authorized, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { LoginOut, userDataSchema } from "../dataSchema/UserSchema";
import * as U from '../Services/User'
import { imagesType } from '../TypeDef/imageType';
import { UserInputDetail } from '../TypeDef/InputType/UserDetailInput';
import { UserInput, UserInputAuth } from '../TypeDef/InputType/UserInputType';
import { UploadFileI } from '../utils/interfaces';


console.clear()

@Resolver()
export class UserResolver{

  constructor(
    private getUserService :U.GetUserService = new U.GetUserService(),
    private helloService :U.HelloService = new U.HelloService(),
    private createUserService :U.CreateUserService = new U.CreateUserService(),
    private updateUserAuthService :U.UpdateUserAuthService = new U.UpdateUserAuthService(),
    private loginService :U.LoginService = new U.LoginService(),
    private deleteUserService :U.DeleteUserService = new U.DeleteUserService(),
    private verifyUserUpdateService :U.VerifyUserUpdateService = new U.VerifyUserUpdateService(),
    private logoutService :U.LogoutService = new U.LogoutService(),
    private addUserDetailInfoService :U.AddUserDetailInfoService = new U.AddUserDetailInfoService(),
    private updateUserDetailInfoService :U.UpdateUserDetailInfoService = new U.UpdateUserDetailInfoService(),
    private addImageProfileService :U.AddImageProfileService = new U.AddImageProfileService(),
    private updateImageProfileService :U.UpdateImageProfileService = new U.UpdateImageProfileService(),
    private deleteImageProfileService :U.DeleteImageProfileService = new U.DeleteImageProfileService(),
        
     ) {}


    
    @Authorized()
    @Query(()=> String)
    async Hello (@Ctx() ctx:ExpressContext){
        return this.helloService.Hello(ctx)
   }
   @Authorized()
    @Query(()=> userDataSchema)
    getUser (@Ctx() ctx:ExpressContext){
        return this.getUserService.getUser(ctx)
   }
 

    @Mutation(()=> userDataSchema)
    async CreateUser ( 
        @Arg('input') input:UserInputAuth,
        @Ctx() ctx:ExpressContext
        ):Promise<userDataSchema | GraphQLError>{
       return this.createUserService.CreateUser(input,ctx)
   }
   

   @Mutation(() => userDataSchema )
   async updateUserAuth (
       @Arg('input') input:UserInputAuth,
       @Ctx() ctx:ExpressContext
   ):Promise< userDataSchema | boolean | GraphQLError | undefined>{
       return this.updateUserAuthService.updateUserAuth(ctx,input)
  }

   @Mutation(() => LoginOut )
   async Login (
       @Arg('input') input:UserInput,
       @Ctx() ctx:ExpressContext
   ):Promise<LoginOut | GraphQLError>{
       return this.loginService.Login(input,ctx)
  }

   @Mutation(() => String)
   async DeteleUser (
    @Ctx() ctx:ExpressContext
   ) : Promise<string | GraphQLError>{
        return this.deleteUserService.DeleteUser(ctx) 
   }

   @Mutation(()=> Boolean)
   async VerifyUserUpdate ( 
       @Ctx() ctx:ExpressContext,
        @Arg('password') password: string,
       ):Promise<boolean | GraphQLError >{
           console.clear();
      return this.verifyUserUpdateService.verifyUserAuth(ctx,password)
  }

   @Mutation(() => String)
   async Logout (
    @Ctx() ctx:ExpressContext
   ) : Promise<string>{
        return this.logoutService.Logout(ctx)
   }


   
   // Mutation userDetail

   @Mutation(()=> userDataSchema)
   async addUserDetailInfo ( 
       @Arg('input') input:UserInputDetail,
       @Ctx() ctx:ExpressContext
       ):Promise<userDataSchema | GraphQLError >{
      return this.addUserDetailInfoService.addUserDetail(input,ctx)
  }
   @Mutation(()=> userDataSchema)
   async updateUserDetailInfo ( 
       @Arg('input') input:UserInputDetail,
       @Ctx() ctx:ExpressContext
       ):Promise<userDataSchema | GraphQLError | undefined >{
      return this.updateUserDetailInfoService.updateUserDetail(ctx,input)
  }



    // Mutation image Profile

    @Mutation(()=> imagesType)
    async addImageProfile ( 
        @Arg('file',() => GraphQLUpload) file : UploadFileI,
        @Ctx() ctx:ExpressContext
        ):Promise<imagesType | GraphQLError >{
       return this.addImageProfileService.addImageProfile(ctx,file)
   }

    @Mutation(()=> imagesType)
    async updateImageProfile ( 
        @Arg('file',() => GraphQLUpload) file : UploadFileI,
        @Ctx() ctx:ExpressContext
        ):Promise<imagesType | GraphQLError >{
       return this.updateImageProfileService.updateImageProfile(ctx,file)
   }

    @Mutation(()=> Boolean)
    async deleteImageProfile ( 
        @Ctx() ctx:ExpressContext
        ):Promise<boolean | GraphQLError >{
            console.clear();
       return this.deleteImageProfileService.deleteImageProfile(ctx)
   }
}   