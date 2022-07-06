import axios from 'axios'
export const GET_USERDATA='GET_USERDATA'

export const apidata=()=>{
    return async function(dispatch){
try{
        const data= await axios('https://jsonplaceholder.typicode.com/users')
        dispatch({
            type:GET_USERDATA,
            payload:data.data

        })
    }

        catch(err){
            console.log(err);

    }




}

}
