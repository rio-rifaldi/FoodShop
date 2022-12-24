import { useMutation } from '@apollo/client'
import { output } from 'pages/CheckOut/Component/AccorditionDesc'
import React from 'react'
import { UseFormHandleSubmit } from 'react-hook-form'
import { GET_ALL_CART_PRODUCT, UPDATE_DESCRIPTION_ORDER } from '../Graphql'

type Props = {
    handleSubmit : UseFormHandleSubmit<output>,
    productId : string,
    SetNotEdit : () => void
}

const useUpdateDescriptionOrder = (props: Props) => {
    const {handleSubmit,productId,SetNotEdit} = props
    const [UpdateDesc,{data,error}] = useMutation(UPDATE_DESCRIPTION_ORDER,{
        refetchQueries:[
            {query:GET_ALL_CART_PRODUCT},
            "getProductInCart"
        ]
    })
    const onUpdate = handleSubmit(({desc},e) =>{
        e?.preventDefault()
        UpdateDesc({variables:{productId,description:desc}})
            .then((result) =>{ if(result.data) {SetNotEdit()}} )
    } )
    return { data,onUpdate}
}

export default useUpdateDescriptionOrder