import { listProductI } from './../../pages/MyFood/Utils/Interfaces/index';
import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { atom, selector } from "recoil";
import { userI } from 'pages/ProfileCreator/Utils/Interfaces';

export interface dataUserI  {
    refetch :   (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<userI>>,
    loading : boolean,
    data : userI | undefined,
}


export const refetchState = atom<dataUserI| null>({
    key :"dataUserkey",
    default : null
})

export const productList = atom<listProductI| null>({
    key :"dataProductListkey",
    default : null
})

export const isLogined = atom<boolean>({
    key :"isLoginedkey",
    default : false
})

export const shopCart = atom<number>({
    key :"shopCartkey",
    default : 0
  })