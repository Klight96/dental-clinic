// "use client";

import Header from "@/components/Header";
import dynamic from 'next/dynamic';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import Link from "next/link";
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import L from "leaflet";

// import 'leaflet/dist/leaflet.css';
// import 'esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css';
// import icon from "leaflet/dist/images/marker-icon.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";
// import * as ELG from "esri-leaflet-geocoder";

// let DefaulIcon = L.icon({
//   iconUrl: icon,
//   shadowUrl: markerShadow,
// });
// L.Marker.prototype.options.icon = DefaulIcon;

// const center = [51.505, -0.09];

// const EsriLeafletGeocoder = () => {
//   const map = useMap();

//   useEffect(() => {
//     const searchControl = ELG.geosearch().addTo(map);

//     const results = L.layerGroup().addTo(map);

//     searchControl.on("results", function (data) {
//       results.clearLayers();
//       for (let i = data.results.length - 1; i >= 0; i--) {
//         results.addLayer(L.marker(data.results[i].latlng));
//       }
//     });
//   }, [map]);

//   return null;
// };

// const GeoCoderMarker = ({address}) => {

//     const map = useMap()
//     const [position, setPosition] = useState([60, 19])

//     useEffect(()=> {
//         ELG.geocode().text(address).run((err, results, response)=> {
//             if(results?.results?.length > 0){
//                 const {lat, lng} = results?.results[0].latlng
//                   setPosition([lat, lng])
//                 map.flyTo([lat, lng], 6)
//             }
//         })
//     }, [address])

//   return (
//     <Marker position={position} icon={DefaulIcon}>
//         <Popup/>
//     </Marker>
//   )
// }


// const Map = ({address, city, country}) => {
//   return (
//     <MapContainer
//     center={[53.35, 18.8]}
//     zoom={1}
//     scrollWheelZoom={false}
//     style={{
//         height: "40vh",
//         width: "100%",
//         marginTop: "20px",
//         zIndex: 0,
       
//     }}
//     >
//         <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
//         <GeoCoderMarker address={`${address} ${city} ${country}`} />
//     </MapContainer>
//   )
// }

const MapComponent = dynamic(() => import('@/components/MapComponent'), { ssr: false });


const contact = () => {
  return (
    <div className="bg-primary-500">
      <div>
        <Header
          title="CONTACT US"
          message="Smile Brighter, Contact Us Today."
          imageURL="/images/contact.png"
        />
      </div>
      <div className="flex mt-24 pb-8 flex-col items-center justify-center">
        <div className=" xl:w-2/3 px-8 w-full mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">
            Call or Drop us a message for query
          </h2>
          <p className="text-center mb-6">
            Fill this form and we will get in touch as soon as possible!
          </p>
          <form className="space-y-8">
            <div className="flex flex-col xl:justify-center xl:items-center xl:flex-row gap-6 xl:space-x-4">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 p-5 shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 p-5 shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className=" flex flex-col xl:justify-center xl:items-center xl:flex-row gap-6 xl:space-x-4">
              <input
                type="text"
                placeholder="Phone no"
                className="flex-1 p-5 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Subject"
                className="flex-1 p-5 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <textarea
              placeholder="Description"
              className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <div className="flex items-center justify-center">
            <Link href="/contact">
            <button
              type="submit"
              className="px-5  py-3 bg-blue-400 text-white  font-semibold rounded-md hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send message
            </button>
            </Link>
            </div>
          </form>
        </div>
        <div className="mt-16 w-full xl:w-3/4 px-8 grid grid-cols-2 max-sm:grid-cols-1 gap-6">
          <div className="flex flex-col gap-10 py-3 px-7 shadow-md rounded-md items-center bg-white space-x-2">
            <span className="text-yellow-500 text-2xl"> <FaGlobe /> </span>
            <a
              href="http://www.dentalcare.com"
              className="text-xl font-semibold"
            >
              www.dentalcare.com
            </a>
          </div>
          <div className="flex flex-col gap-10 py-3 px-7 shadow-md rounded-md items-center  bg-white space-x-2">
            <span className="text-yellow-500 text-2xl"> <FaPhone /></span>
            <a href="tel:+77569023081" className="text-lg font-semibold">
              +77569023081
            </a>
          </div>
          <div className="flex flex-col gap-10 py-3 px-7 shadow-md rounded-md  items-center  bg-white space-x-2">
            <span className="text-yellow-500 text-2xl"><FaEnvelope /></span>
            <a
              href="mailto:dentalcare@gmail.com"
              className="text-lg font-semibold"
            >
              Dentalcare@gmail.com
            </a>
          </div>
          <div className="flex flex-col gap-10 py-3 px-7 shadow-md rounded-md items-center  bg-white  space-x-2">
            <span className="text-yellow-500 text-2xl"><FaMapMarkerAlt /></span>
            <p className="text-lg font-semibold">
              South America vents road 8745
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full max-w-4xl mx-auto pb-8">
        {/* <MapContainer center={center} zoom={13} style={{ height: "400px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center}>
            <Popup>
              Our location
            </Popup>
          </Marker>
          <EsriLeafletGeocoder />

        </MapContainer> */}
        {/* <MapContainer
          center={center}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
        <TileLayer
  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
 
/>


          <Marker position={center}>
            <Popup>Our location</Popup>
          </Marker>
          <EsriLeafletGeocoder />
        </MapContainer> */}

            {/* <Map
              // address={data?.address}
              // city={data?.city}
              // country={data?.country}
            /> */}
            <MapComponent />
      </div>
    </div>
  );
};

export default contact;




{/* <Map
address={data?.address}
city={data?.city}
country={data?.country}
/> */}