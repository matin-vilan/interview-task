import NeshanMap from "@neshan-maps-platform/react-openlayers";
import "@neshan-maps-platform/react-openlayers/dist/style.css";
import { useRef } from "react";
import type { Ol } from "@neshan-maps-platform/react-openlayers";
import { useApp } from "../../store/AppProvider";

export default function Map() {
  const markerRef = useRef(null);
  const { setFormValues, formValues } = useApp();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onInit = (ol: Ol, map: any) => {
    const vectorSource = new ol.source.Vector();
    const vectorLayer = new ol.layer.Vector({
      source: vectorSource,
    });

    map.addLayer(vectorLayer);

    map.on(
      "dblclick",
      function (event: { preventDefault: () => void; coordinate: number }) {
        event.preventDefault();

        vectorSource.clear();

        const coordinates = event.coordinate;

        const clickedCoordinates = ol.proj.toLonLat(coordinates);

        setFormValues({
          ...formValues,
          map: { lat: clickedCoordinates[0], lng: clickedCoordinates[1] },
        });

        const marker = new ol.Feature(new ol.geom.Point(coordinates));
        marker.setStyle(
          new ol.style.Style({
            image: new ol.style.Icon({
              src: "/assets/images/marker.png",
              scale: "0.06",
            }),
          })
        );

        const overlay = new ol.Overlay({
          position: coordinates,
          element: document.createElement("div"),
        });

        vectorSource.addFeature(marker);

        markerRef.current = overlay;
      }
    );

    setTimeout(() => {
      const view = map.getView();
      view.animate({
        center: ol.proj.fromLonLat([51.36281969540723, 35.69672648316882]),
        zoom: 12,
        duration: 1000,
      });
    }, 2000);
  };

  // Enter Your API Key for neshan here.

  return (
    <div className=" bg-blue-100 w-full">
      <NeshanMap
        mapKey='YOUR API KEY ...'
        defaultType="neshan"
        center={{ latitude: 35.7665394, longitude: 51.4749824 }}
        style={{ height: "48vh", width: "100%" }}
        onInit={onInit}
        zoom={13}
      ></NeshanMap>
    </div>
  );
}
