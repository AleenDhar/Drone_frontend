"use client"
import axios from 'axios';
export default function Home() {
  // function arm(){
  //   console.log("hello")
  //   axios.get('http://127.0.0.1:5000/api/gps/hi')
  // .then(function (response) {
  //   // handle success
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .finally(function () {
  //   // always executed
  // });
  // }
  function arm(){
    console.log("hello")
    // axios.get('https://fitting-ladybird-sharing.ngrok-free.app/api/arm/true')
    // axios.get('https://3a31-103-211-14-200.ngrok-free.app/api/arm/true')
    axios.get('https://3a31-103-211-14-200.ngrok-free.app/api/arm/true')
    // axios.get('https://pizero-tcp.at.remote.it:33002/api/arm/true')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  }

  function disarm(){
    axios.get('https://3a31-103-211-14-200.ngrok-free.app/api/arm/false')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  }
  
  return (
  <>
    <div className='flex gap-1'>
      <div onClick={arm} className='cursor-pointer bg-red-600 rounded w-20 h-10 flex justify-center items-center' >arm</div>
      <div onClick={disarm} className='cursor-pointer bg-red-600 rounded w-20 h-10 flex justify-center items-center'>disarm</div>
    </div>
    <div>Mode</div>
    <div>Map</div>
  </>
  );
}
