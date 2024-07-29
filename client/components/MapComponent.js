import { useState, useEffect, useRef } from 'react';
import useFetchShipments from '../hooks/useFetchShipments';
import useFetchLocations from '../hooks/useFetchLocations';
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
import plane from '../assets/plane.png';
import van from '../assets/van.png';

const MapComponent = ({ setMapObject }) => {
  const mapContainer = useRef();
  const [map, setMap] = useState(null);
  const [selectedMilestone, setSelectedMilestone] = useState("");

  const url = 'https://jsdashboard.onrender.com';

  const { locations, loading: locationsLoading, error: locationsError } = useFetchLocations(url, selectedMilestone);
  const { shipments, loading: shipmentsLoading, error: shipmentsError } = useFetchShipments(url);

  const milestones = [];

  shipments.forEach(item => {
    if (!milestones.includes(item.milestone)) {
      milestones.push(item.milestone);
    }
  });

  const handleMilestoneChange = (event) => {
    setSelectedMilestone(event.target.value);
  };

  useEffect(() => {
    if (locations.length === 0) return;
    
    const center = fromLonLat([locations[0].long, locations[0].lat]);

    const initialMap = new Map({
      target: mapContainer.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center,
        zoom: 2,
      }),
    });

    setMap(initialMap);
    setMapObject(initialMap);

    return () => {
      initialMap.setTarget(null);
    };
  }, [locations, setMapObject]);

  useEffect(() => {
    if (!map || locations.length === 0) return;

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

    map.getView().fit(vectorSource.getExtent(), { duration: 1000 });

    return () => {
      map.removeLayer(vectorLayer);
    };
  }, [locations, map]);

  if (locationsLoading || shipmentsLoading) {
    return <div>Loading...</div>;
  }

  if (locationsError || shipmentsError) {
    return <div>Error loading data</div>;
  }

  return (
    <div ref={mapContainer} className="w-full h-full relative">
      <div className="absolute top-6 left-10 z-20">
        <select
          value={selectedMilestone}
          onChange={handleMilestoneChange}
          className="p-2 border rounded-md bg-white shadow-md"
        >
          <option value="">Select Milestone</option>
          {milestones.map((milestone, index) => (
            <option key={index} value={milestone}>
              {milestone}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-transparent absolute top-6 right-4 z-20">
        <Image src={ship} alt="Ship" width={45} height={45} />
        <Image src={plane} alt="Plane" width={45} height={45} />
        <Image src={van} alt="Van" width={45} height={45} />
      </div>
    </div>
  );
};

export default MapComponent;
