import { ExpressContext } from "apollo-server-express";
import { GraphQLError } from "graphql";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { ProductType } from "../dataSchema/ProductSchema";
import { ShopChartType } from "../dataSchema/shopCartType";
import { AppService } from "../Services/AppServices";

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

    @Query(() => [ProductType])
    async findProduct(
        @Arg("query") query:string,
    ){
        return this.appService.findProduct(query)
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
        @Arg("description",{nullable:true}) description:string,
        @Ctx() ctx:ExpressContext
    ):Promise<GraphQLError | boolean >{ 
        return this.appService.AddProductToChart(ctx,productId,description)
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

    @Mutation(() => Boolean)
    async UpdateDescriptionOrder(
        @Arg("productId") productId:string,
        @Arg("description") description:string,
        @Ctx() ctx:ExpressContext
    ):Promise<GraphQLError | boolean >{ 
        return this.appService.UpdateDescriptionOrder(ctx,productId,description)
    }

    @Mutation(() => Boolean)
    async addPaymentMethod(
        @Arg("paymentMethod") paymentMethod:string,
        @Arg("detailAddress") detailAddress:string,
        @Ctx() ctx:ExpressContext
    ):Promise<GraphQLError | boolean >{ 
        return this.appService.addPaymentMethod(ctx,paymentMethod,detailAddress)
    }

    @Mutation(() => Boolean)
    async deletePaymentMethod(
        @Arg("paymentId") paymentId:string,
        @Ctx() ctx:ExpressContext
    ):Promise<GraphQLError | boolean >{ 
        return this.appService.deletePaymentMethod(ctx,paymentId)
    }

    @Mutation(() => Boolean)
    async onBuyProduct(
        @Ctx() ctx:ExpressContext
    ):Promise<GraphQLError | boolean >{ 
        return this.appService.onBuyProduct(ctx)
    }

}
