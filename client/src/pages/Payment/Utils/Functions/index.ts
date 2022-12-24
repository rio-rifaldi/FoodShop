import dana from "assets/images/svg/DANA.svg";
import gopay from "assets/images/svg/GoPay.svg";
import master from "assets/images/svg/master.svg";
import shoope from "assets/images/svg/ShopeePay.svg";
import visa from "assets/images/svg/Visa.svg";

export const minimizeContent = (content:string | null,size:number,full?:boolean) =>{
    if(!content) return
    if(content?.length >  size){
        const trivia = `${content.slice(0,size)} ...`
        return trivia
    }else{
        return content
    }
} 


export const getPaymentIcon = (payment?:string) =>{
    if(payment === "dana") return dana
    else if(payment === "goPay") return gopay
    else if(payment === "master") return master
    else if(payment === "shoopePay") return shoope
    else if(payment === "visa") return visa
} 