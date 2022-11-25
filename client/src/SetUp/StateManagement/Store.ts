import { listProductI } from './../../pages/MyFood/Utils/Interfaces/index';
import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { userType } from "pages/ProfileCreator/Component/ProfileBio";
import { atom, selector } from "recoil";

export interface dataUserI  {
    refetch :   (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<userType>>,
    loading : boolean,
    data : userType | undefined,
}
export interface ProductListI{

}


export const refetchState = atom<dataUserI| null>({
    key :"dataUserkey",
    default : null
})

export const productList = atom<listProductI| null>({
    key :"dataProductListkey",
    default : null
})
// export const countNextState = selector({
//     key : "counterNext",
//     get : ({get}) =>{
//         return get(counterState) + 1;
//     }
// })
