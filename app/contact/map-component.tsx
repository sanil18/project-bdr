"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

const createCustomIcon = () => {
  return L.divIcon({
    html: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#1D4ED8"/>
      </svg>
    `,
    className: "",
    iconSize: [36, 36], // Adjusted size
    iconAnchor: [18, 36], // Adjusted anchor
  });
};


export default function MapComponent() {
  const position: [number, number] = [25.17175, 55.340889] // 25°10'18.3"N 55°20'27.2"E
  const customIcon = createCustomIcon()

  return (
    <MapContainer center={position} zoom={15} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          BDR Heavy Equipment Maintenance LLC <br /> Your trusted partner in equipment repair.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

