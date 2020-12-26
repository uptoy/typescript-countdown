import React,{FunctionComponent,useState,useEffect} from 'react'

type CountDownFCProps = {
    minutesDefault:number,
    secondsDefault:number
}

export const CountDownFC:FunctionComponent<CountDownFCProps> =({minutesDefault,secondsDefault})=>{

    const [minutes,setMinutes] = useState(minutesDefault)
    const [seconds,setSeconds] = useState(secondsDefault)

    useEffect(()=>{
        const timer = setInterval(()=>{
            if(seconds>0){
                setSeconds(seconds-1)
            }
            if(seconds === 0){
                if(minutes === 0){
                    clearInterval(timer)
                }else{
                    setMinutes(minutes-1)
                    setSeconds(59)
                }
            }
        },1000)
        return ()=>clearInterval(timer)
    },[minutes,seconds])

    return(
        <div>
            {
                minutes === 0 && seconds === 0 ? <h1>finished</h1>:<h1>count</h1>
            }
        </div>
    )
}