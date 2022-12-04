import { ExpressContext } from "apollo-server-express";
import { GraphQLError } from "graphql";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { ProductType } from "../dataSchema/ProductSchema";
import { AppService } from "../Services/AppServices";
import { ShopChartType } from "../TypeDef/shopCartType";

Resolver()
export class AppResolver{
    constructor(private appService:AppService ) {
        this.appService = new AppService()
    }

    @Query(() => [ProductType])
    async GetAllProduct(
        @Ctx() ctx: ExpressContext,
    ){
        return this.appService.QueryProduct(ctx)
    }

    @Query(() => [ShopChartType])
    async GetProductInCart(
        @Ctx() ctx:ExpressContext
    ){
        return this.appService.GetProductInCart(ctx)
    }
    
    @Mutation(() => Boolean)
    async AddProductToCart(
        @Arg("productId") productId:string,
        @Ctx() ctx:ExpressContext
    ):Promise<GraphQLError | boolean >{ 
        return this.appService.AddProductToChart(ctx,productId)
    }
    @Mutation(() => Boolean)
    async DeleteProductInCart(
        @Arg("productId") productId:string,
        @Ctx() ctx:ExpressContext
    ):Promise<GraphQLError | boolean >{ 
        return this.appService.DeleteProductInCart(ctx,productId)
    }

    @Mutation(() => Boolean)
    async DecreasingProductInCart(
        @Arg("productId") productId:string,
        @Ctx() ctx:ExpressContext
    ):Promise<GraphQLError | boolean >{ 
        return this.appService.DecreasingProductInCart(ctx,productId)
    }

}
// - list all product
// - add product to charth ===> {
//     desciption : productId => userchart(from jsonwebtoken)
// }
// - list chart 
// - delete chart product
// - icremnemt buying product (base product id)
// - decrement buying product (base product id)