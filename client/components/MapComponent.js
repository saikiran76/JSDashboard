import { useState, useEffect, useRef } from 'react';
import useFetchShipments from '../hooks/useFetchShipments';
import 'ol/ol.css';
import 'ol-ext/dist/ol-ext.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { fromLonLat } from 'ol/proj';
import { Icon, Style } from 'ol/style';
import Image from 'next/image';
import ship from '../assets/ship.png';
import plane from '../assets/plane.png'
import van from '../assets/van.png'

const MapComponent = ({ setMapObject, locations }) => {
  const mapContainer = useRef();
  const [map, setMap] = useState(null);

  const [selectedMilestone, setSelectedMilestone] = useState("")

  const url = 'http://localhost:4000';

  const { shipments, loading: shipmentsLoading, error: shipmentsError } = useFetchShipments(url);

  const milestones = []

  shipments.forEach(item => {
    milestones.push({
      milestone: item.milestone
    }) 
  });

  const handleMilestoneChange =(event)=>{
    setSelectedMilestone(event)
  }

  const center = locations.length > 0 ? [locations[0].lat, locations[0].long] : [51.505, -0.09];

  useEffect(() => {
    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([0, 0]), 
        zoom: 2,
      }),
    });
    map.setTarget(mapContainer.current);
    setMap(map);
    setMapObject(map);

    
    return () => {
      map.setTarget(undefined);
      setMapObject(null);
    };
  }, [setMapObject]);

  useEffect(() => {
    if (map && locations.length > 0) {
      const vectorSource = new VectorSource();
      const vectorLayer = new VectorLayer({
        source: vectorSource,
        style: new Style({
          image: new Icon({
            anchor: [0.5, 1],
            src: 'https://openlayers.org/en/latest/examples/data/icon.png', 
          }),
        }),
      });

      map.addLayer(vectorLayer);

      locations.forEach(location => {
        const feature = new Feature({
          geometry: new Point(fromLonLat([location.long, location.lat])),
          name: location.location,
        });
        vectorSource.addFeature(feature);
      });
    }
  }, [locations, map]);

  return <div ref={mapContainer} className="w-full h-full relative">
    <div className="absolute top-6 left-10 z-20">
        <select
          value={selectedMilestone}
          onChange={(e) => handleMilestoneChange(e.target.value)}
          className="p-2 border rounded-md bg-white shadow-md"
        >
          {milestones.map((item, index) => (
            <option key={index} value={item.milestone}>
              {item.milestone}
            </option>
          ))}
        </select>
      </div>

      <div className='bg-transparent absolute top-6 right-4 z-20'>
      <Image 
        src={ship} 
        alt="Ship" 
        width={45} 
        height={45} 
      />
      <Image 
        src={plane} 
        alt="Plane" 
        width={45} 
        height={45} 
      />
      <Image 
        src={van} 
        alt="Plane" 
        width={45} 
        height={45} 
      />
      </div>

  </div>;
};

export default MapComponent;


// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import useFetchShipments from '../hooks/useFetchShipments';

// const MapComponent = ({ locations }) => {
//   const [selectedMilestone, setSelectedMilestone] = useState("")

//   const url = 'http://localhost:4000';

//   const { shipments, loading: shipmentsLoading, error: shipmentsError } = useFetchShipments(url);

//   const milestones = []

//   shipments.forEach(item => {
//     milestones.push({
//       milestone: item.milestone
//     }) 
//   });

//   const handleMilestoneChange =(event)=>{
//     setSelectedMilestone(event)
//   }

  
//   // useEffect(() => {
//   //   // Adjust map view based on locations
//   // }, [locations]);
//   const center = locations.length > 0 ? [locations[0].lat, locations[0].long] : [51.505, -0.09];

//   return (
//     <div className='relative' style={{ height: '100vh' }}>
//       <div className="absolute top-6 left-7 z-20">
//         <select
//           value={selectedMilestone}
//           onChange={(e) => handleMilestoneChange(e.target.value)}
//           className="p-2 border rounded-md bg-white shadow-md"
//         >
//           {milestones.map((item, index) => (
//             <option key={index} value={item.milestone}>
//               {item.milestone}
//             </option>
//           ))}
//         </select>
//       </div>
//       <MapContainer center={center} zoom={2} style={{ height: '100%', width: '100%' }}>
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {locations.map((location) => (
//           <Marker key={location.id} position={[location.lat, location.long]}>
//             <Popup>
//               {location.location}
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default MapComponent;
