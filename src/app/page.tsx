"use client"
import axios from 'axios';
import { use, useEffect, useState } from "react";
import { useSocket } from "../context/SocketProvider";

import GoogleMaps from "@/components/GoogleMaps";
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

 
type SliderProps = React.ComponentProps<typeof Slider>
export default function Home() {
  const [markers, setMarkers] = useState<google.maps.LatLngLiteral[]>([]);
  const { sendMessage, messages,currentmsg } = useSocket();
  // [roll, pitch, throttle, yaw]
  const [roll, setroll] = useState(0)
  const [pitch, setpitch] = useState(0)
  const [throttle, setthrottle] = useState(0)
  const [yaw, setyaw] = useState(0)
  const aru=[roll,pitch,throttle,yaw]
  const [ism1clock, setism1clock] = useState<boolean>(true)
  const [ism2clock, setism2clock] = useState<boolean>(false)
  const [ism3clock, setism3clock] = useState<boolean>(true)
  const [ism4clock, setism4clock] = useState<boolean>(false)


  // const [ism4clock, setism4clock] = useState<boolean>(false)
  

  const [message, setMessage] = useState("["+String(aru)+"]");
  const [currData, setcurrData] = useState({
    "temp":0,
    "r_x":0,
    "r_y":0,
    "r_z":0,
    "a_x":0,
    "a_y":0,
    "a_z":0,
  })

  // function controlSpeed(val:number){
  //   setroll(val)
  //   sendMessage(String(val))
  // }
  useEffect(()=>{
    const arr1=[roll,pitch,throttle,yaw]
    axios.get(`https://fitting-ladybird-sharing.ngrok-free.app/api/manual/{\"manual_inputs\":[${String(arr1)}]}`,{
      headers: {
        "ngrok-skip-browser-warning": "69420",
    }
    })
    // sendMessage(`{\"manual_inputs\":[${String(arr1)}]}`)
  },[roll,pitch,throttle,yaw])

  useEffect(()=>{
    // setcurrData(JSON.parse(currentmsg))
    console.log(currentmsg)
  },[currentmsg])
  // console.log(currData);

  useEffect(()=>{
    console.log(roll)
  },[roll])
useEffect(() => {
  console.log(messages);
},[message])
  function arm(){
    console.log("hello")
    axios.get('https://fitting-ladybird-sharing.ngrok-free.app/api/arm/true',{
      headers: {
        "ngrok-skip-browser-warning": "69420",
    }
    })
  // axios.get('https://3a31-103-211-14-200.ngrok-free.app/api/arm/true')
  //   axios.get('https://3a31-103-211-14-200.ngrok-free.app/api/arm/true',{
  //     headers: {
  //         "ngrok-skip-browser-warning": "69420",
  //     }
  // })
  .then(function (response) {
    // handle success
    console.log(response);
  })
  }

  function disarm(){
    axios.get('https://fitting-ladybird-sharing.ngrok-free.app/api/arm/false',{
      headers: {
        "ngrok-skip-browser-warning": "69420",
    }
    })
  .then(function (response) {
    // handle success
    console.log(response);
  })
  }
  function connect(){
    axios.get('https://fitting-ladybird-sharing.ngrok-free.app/',{
      headers: {
        "ngrok-skip-browser-warning": "69420",
    }
    })
  .then(function (response) {
    // handle success
    console.log(response);
  })
  }
  function manual_control(){
    axios.get('https://fitting-ladybird-sharing.ngrok-free.app/api/startmanual/',{
      headers: {
        "ngrok-skip-browser-warning": "69420",
    }
    }) .then(function (response) {
      // handle success
      console.log(response);
    })
    }
  function takeoff(){
    axios.get('https://fitting-ladybird-sharing.ngrok-free.app/api/takeoff/',{
      headers: {
        "ngrok-skip-browser-warning": "69420",
    }
    }) .then(function (response) {
      // handle success
      console.log(response);
    })
    }
  function land(){
    axios.get('https://fitting-ladybird-sharing.ngrok-free.app/api/land/',{
      headers: {
        "ngrok-skip-browser-warning": "69420",
    }
    }) .then(function (response) {
      // handle success
      console.log(response);
    })
    }
  function test(){
    axios.get('http://pizero-tcp.at.remote.it:33002/rest/get',{
    }) .then(function (response) {
      // handle success
      console.log(response);
    })
    }
  function setalt(){
    axios.get('https://fitting-ladybird-sharing.ngrok-free.app/api/setalt/20/',{
      headers: {
        "ngrok-skip-browser-warning": "69420",
    }
    }) .then(function (response) {
      // handle success
      console.log(response);
    })
    }
  function send_loc(){
    console.log(markers[0]["lat"])
    console.log(markers[0]["lng"])
    const arr = [markers[0]["lat"],markers[0]["lng"]]
    axios.get(`https://fitting-ladybird-sharing.ngrok-free.app/api/goto/{\"loc\":[${String(arr)}]}`,{
      headers: {
        "ngrok-skip-browser-warning": "69420",
    }
    })
  .then(function (response) {
    // handle success
    console.log(response);
  })
  }
  
  return (
  <div className='bg-black min-h-screen text-white h-screen'>
    <div className='flex gap-1 fixed z-[10000] bg-green-700 w-full h-16'>
      <div onClick={connect} className='cursor-pointer bg-red-600 rounded w-20 h-10 flex justify-center items-center' >Connect</div>
      <div onClick={arm} className='cursor-pointer bg-red-600 rounded w-20 h-10 flex justify-center items-center' >arm</div>
      <div onClick={disarm} className='cursor-pointer bg-red-600 rounded w-20 h-10 flex justify-center items-center'>disarm</div>
      <div onClick={takeoff} className='cursor-pointer bg-red-600 rounded w-20 h-10 flex justify-center items-center'>Takeoff</div>
      <div onClick={land} className='cursor-pointer bg-red-600 rounded w-20 h-10 flex justify-center items-center'>land</div>
      <div onClick={setalt} className='cursor-pointer bg-red-600 rounded w-20 h-10 flex justify-center items-center'>setalt</div>
      <div onClick={manual_control} className='cursor-pointer bg-red-600 rounded w-44 h-10 flex justify-center items-center'>Start Manual Controls</div>
      <div onClick={send_loc} className='cursor-pointer bg-red-600 rounded w-44 h-10 flex justify-center items-center'>Goto</div>
      <div onClick={test} className='cursor-pointer bg-red-600 rounded w-44 h-10 flex justify-center items-center'>test</div>
      <button
          onClick={(e) => sendMessage(message)}
          className="bg-red-600 rounded-md px-3 py-1 h-10"
        >
          Refresh Data
        </button>
    </div>
    {/* <div>Mode</div> */}
    <div className="flex flex-col items start h-full w-full">
      <div className="h-full w-full mt-16">
        <GoogleMaps markers={markers} setMarkers={setMarkers} rotation={0} />
      </div>
        {/* <div className="  w-60 p-10 flex flex-col gap-4 fixed cursor-pointer top-96">
        <div className="flex gap-2">
        roll
        <Slider
          defaultValue={[0]}
          min={0}
          max={1}
          step={.01}
          className={cn("w-[40%]")}
          onValueChange={(e)=>setroll(e[0])}
        />
        {roll}
     
        </div>
        <div className="flex gap-2">
        pitch
        <Slider
          defaultValue={[0]}
          min={0}
          max={1}
          step={.01}
          className={cn("w-[40%]")}
          onValueChange={(e)=>setpitch(e[0])}
          />
        {pitch}
        
        </div>
        <div className="flex gap-2">
        throttle
        <Slider
          defaultValue={[0]}
          min={0}
          max={1}
          step={.01}
          className={cn("w-[40%]")}
          onValueChange={(e)=>setthrottle(e[0])}
        />
        {throttle}
        
        </div>

        <div className="flex gap-2">         
        yaw
        <Slider
          defaultValue={[0]}
          min={0}
          max={1}
          step={.01}
          className={cn("w-[40%]")}
          onValueChange={(e)=>setyaw(e[0])}
        />
        {yaw}
        
        </div>
        </div> */}
      </div>
  </div>
  );
}

