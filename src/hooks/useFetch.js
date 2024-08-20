import React,{useState,useEffect,useCallback} from "react"

const useFetch = ({url,dependency})=>{
    console.log(url)
const [response,setResponse] = useState({
data:{},
error:{},
loading:false,
})
const getData = useCallback(()=>{
    const getData = async()=>{
        const url = url
        const getApi  = await axios.get(url)
        console.log(getApi)
        return getApi
      }
},[])
useEffect(()=>{
if(url){
    getData()
}
},[dependency])

const {data,error,loading} = response

return [data,error,loading]
}


export default useFetch