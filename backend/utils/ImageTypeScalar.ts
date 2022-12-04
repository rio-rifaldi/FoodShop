import { GraphQLScalarType, Kind } from "graphql";
import { imageI } from "./interfaces";

console.clear();
export const  ImageTypeScalar = new GraphQLScalarType({
    name : "imageTypeSC",
    description : "to scalar type",
    serialize(value) {
        console.log(value,"from seliaze")
        return value
    },
    parseValue(value) {
        console.log(value,'from parse')
        return value
    },
    parseLiteral(ast){
        console.log(ast,"ast")
    }

    
}) 