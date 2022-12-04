import * as cloudinary  from 'cloudinary'

cloudinary.v2.config({ 
        cloud_name: 'dl37k9cl7', 
        api_key: '286347715974176', 
        api_secret: 'Hhk35X_JOboSDhM8zkcV6YKSTg0',
        
      });

export default cloudinary



// return cloudinary.v2.config({ 
//     cloud_name: process.env.CLOUD_NAME, 
//     api_key: process.env.API_KEY, 
//     api_secret: process.env.API_SECRET,
//   });



