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
    axios.get('https://3a31-103-211-14-200.ngrok-free.app/api/arm/true',{
      headers: {
          "ngrok-skip-browser-warning": "69420",
      }
  })
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
// "<!DOCTYPE html>
// <html class="h-full" lang="en-US" dir="ltr">
//   <head>
//     <link rel="preload" href="https://cdn.ngrok.com/static/fonts/euclid-square/EuclidSquare-Regular-WebS.woff" as="font" type="font/woff" crossorigin="anonymous" />
//     <link rel="preload" href="https://cdn.ngrok.com/static/fonts/euclid-square/EuclidSquare-RegularItalic-WebS.woff" as="font" type="font/woff" crossorigin="anonymous" />
//     <link rel="preload" href="https://cdn.ngrok.com/static/fonts/euclid-square/EuclidSquare-Medium-WebS.woff" as="font" type="font/woff" crossorigin="anonymous" />
//     <link rel="preload" href="https://cdn.ngrok.com/static/fonts/euclid-square/EuclidSquare-Semibold-WebS.woff" as="font" type="font/woff" crossorigin="anonymous" />
//     <link rel="preload" href="https://cdn.ngrok.com/static/fonts/euclid-square/EuclidSquare-MediumItalic-WebS.woff" as="font" type="font/woff" crossorigin="anonymous" />
//     <link rel="preload" href="https://cdn.ngrok.com/static/fonts/ibm-plex-mono/IBMPlexMono-Text.woff" as="font" type="font/woff" crossorigin="anonymous" />
//     <link rel="preload" href="https://cdn.ngrok.com/static/fonts/ibm-plex-mono/IBMPlexMono-TextItalic.woff" as="font" type="font/woff" crossorigin="anonymous" />
//     <link rel="preload" href="https://cdn.ngrok.com/static/fonts/ibm-plex-mono/IBMPlexMono-SemiBold.woff" as="font" type="font/woff" crossorigin="anonymous" />
//     <link rel="preload" href="https://cdn.ngrok.com/static/fonts/ibm-plex-mono/IBMPlexMono-SemiBoldItalic.woff" as="font" type="font/woff" crossorigin="anonymous" />
//     <meta charset="utf-8">
//     <meta name="author" content="ngrok">
//     <meta name="description" content="ngrok is the fastest way to put anything on the internet with a single command.">
//     <meta name="robots" content="noindex, nofollow">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <link id="style" rel="stylesheet" href="https://cdn.ngrok.com/static/css/error.css">
//     <noscript>You are about to visit 3a31-103-211-14-200.ngrok-free.app, served by 103.211.14.200. This website is served for free through ngrok.com. You should only visit this website if you trust whoever sent the link to you. (ERR_NGROK_6024)</noscript>
//     <script id="script" src="https://cdn.ngrok.com/static/js/error.js" type="text/javascript"></script>
//   </head>
//   <body class="h-full" id="ngrok">
//     <div id="root" data-payload="eyJjZG5CYXNlIjoiaHR0cHM6Ly9jZG4ubmdyb2suY29tLyIsImNvZGUiOiI2MDI0IiwiaG9zdHBvcnQiOiIzYTMxLTEwMy0yMTEtMTQtMjAwLm5ncm9rLWZyZWUuYXBwIiwibWVzc2FnZSI6IllvdSBhcmUgYWJvdXQgdG8gdmlzaXQgM2EzMS0xMDMtMjExLTE0LTIwMC5uZ3Jvay1mcmVlLmFwcCwgc2VydmVkIGJ5IDEwMy4yMTEuMTQuMjAwLiBUaGlzIHdlYnNpdGUgaXMgc2VydmVkIGZvciBmcmVlIHRocm91Z2ggbmdyb2suY29tLiBZb3Ugc2hvdWxkIG9ubHkgdmlzaXQgdGhpcyB3ZWJzaXRlIGlmIHlvdSB0cnVzdCB3aG9ldmVyIHNlbnQgdGhlIGxpbmsgdG8geW91LiIsInNlcnZpbmdJUCI6IjEwMy4yMTEuMTQuMjAwIiwidGl0bGUiOiJPSyJ9"></div>
//   </body>
// </html>
// "
