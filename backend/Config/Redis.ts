import { createClient } from "@redis/client";


const client = createClient();

(async () => {
    client.on('error',(e) => console.log(e) )
    await client.connect()
})()

export default client