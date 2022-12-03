export interface userI {
    getUser : {
        firstName :string,
        lastName :string,
        email : string,
        username: string
        country : string,
        birthDay : string,
        numberTelp : string,
        address :string,
        aboutMe : string,
        profession :string,
        profileImage :{
            url : string,
            secureUrl : string
        }
        shopCart:[
            {
              amount: number
            }
          ]
    },
}