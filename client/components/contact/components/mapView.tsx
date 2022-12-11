import React from "react";
import { PushpinTwoTone } from "@ant-design/icons";
import GoogleMapReact, { Coords } from "google-map-react";
const Marker = (props: any) => (
  <PushpinTwoTone
    data={props}
    style={{ fontSize: 26, transform: "translate(0, -22px)" }}
    twoToneColor="#C53030"
  />
);
interface Props {
  center: Coords;
  zoom?: number;
}
const MapView = ({ center, zoom = 14 }: Props) => (
  <GoogleMapReact
    bootstrapURLKeys={{
      key: "AIzaSyCiienfd57yidM9CTTApnjBNqOxWv-SX3o",
    }}
    center={center}
    defaultCenter={{ lat: center.lat, lng: center.lng }}
    defaultZoom={zoom}
  >
    <Marker lat={center.lat} lng={center.lng} />
  </GoogleMapReact>
);

export default MapView;
