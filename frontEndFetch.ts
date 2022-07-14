type Params = {
        primaryKey?: number | string;
        dataBase?: string;
        command: string;
        table?: string;
        data?: object;
        col?: number;
        headers?: string[]

}


export async function Mutation(API:string, dataParams:Params){

    let res;

    try {
        res = fetch(API,{
             method: 'POST', 
             mode: 'no-cors', 
             cache: 'no-cache', 
             credentials: 'same-origin', 
             headers: {
             'Content-Type': 'application/json'
             
             },
             redirect: 'follow', 
             referrerPolicy: 'no-referrer', 
             body: JSON.stringify(dataParams)
         }).then(res=>{
          console.log(res)
        }).then(data=>{
          console.log("data", data)
        });
        
    } catch (error) {
        
    }

    return res

}
