"use client"
import React, { useEffect, useRef, useState } from 'react'
import { GoogleMap, useJsApiLoader, useLoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '100%',
}

const center = {
  // 28.7229209, 77.0661732
  lat: 28.722924866565638,
  lng: 77.06622069072736,
}
// const center = {
//   // 28.7229209, 77.0661732
//   lat:48.8566,
//   lng:  2.5,
// }

type Props = {
  markers: google.maps.LatLngLiteral[];
  setMarkers: (markers: google.maps.LatLngLiteral[]) => void;
  rotation:number;
}

export default function GoogleMaps({markers, setMarkers,rotation}:Props) {
  const mapRef = useRef<google.maps.Map>();
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDIIHuhDqqLm4o79JV5NRbGK1ngq5BX-Kc',
  })
  if (loadError) {
    return <div>Error loading the map!</div>;
  }


  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map:any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map:any) {
    setMap(null)
  }, [])
  const handleClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      // setMarkers([...markers, event.latLng.toJSON()]);
      setMarkers([ event.latLng.toJSON()]);
    }
  };
  useEffect(()=>{
    console.log(markers)
  },[markers])

  // const handleMarkerClick = (index:any) => {
  //   if (markers) {
  //     const empty: google.maps.LatLngLiteral[] = []
  //     const arr= markers
  //     arr.splice(index, 1)
  //     console.log(arr)
  //     setMarkers(arr); 
      
  //   }
  // };
    if (!isLoaded) {
    return <div>Loading...</div>;
    }
    let markerIcon={}
  if (isLoaded) 
{
    markerIcon = {
    path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,  // Predefined symbol shape
    fillColor: 'red',                         // Fill color
    fillOpacity: 1,                             // Fill opacity
    scale: 6,                                  // Scale of the symbol
    strokeColor: 'black',                       // Stroke color
    strokeWeight: 2,                            // Stroke weight
    rotation: rotation,
    anchor: new window.google.maps.Point(0, 2.5)
  };}
  const mapStyles = [{
    featureType: "poi",
    stylers: [
      {
        visibility: "off",
      },
    ],
  }]
  return isLoaded &&(
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={1000}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={handleClick}
      options={{
        styles: mapStyles, // Apply the custom styles
      }}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {/* @ts-ignore */}
      <Marker position={center} icon={markerIcon} />
      {/* <Marker position={center}  /> */}
      {markers.map((marker, index) => {
          return  <Marker key={index} position={marker} onClick={()=>{
            console.log(index)
            setMarkers([])
          }} />
})}
    </GoogleMap>
  ) 
}

