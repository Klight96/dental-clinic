import Header from "@/components/Header";

import Image from "next/image";

const DoctorCard = ({ imageSrc, name, specialty, description, services }) => {
  return (
    <div className="relative p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out border-2 border-blue-400 hover:bg-blue-400 overflow-hidden group transform hover:scale-105">
      <div className="flex justify-center">
        <Image
          src={imageSrc}
          alt={name}
          width={200}
          height={200}
          className="rounded-full border-4 border-white"
        />
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-center">{name}</h2>
        <p className="text-center text-gray-600">{specialty}</p>
        <p className="text-gray-600 text-center mt-2 transition-opacity duration-300 ease-in-out group-hover:opacity-0 h-12 overflow-hidden group-hover:h-0">
          {description}
        </p>
        <div className="absolute inset-0 p-6 flex flex-col items-center justify-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          {services.map((service, index) => (
            <p key={index} className="text-blue-500 text-center">
              {service}
            </p>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <button className="border-2 border-primary-100 px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out group-hover:bg-blue-400">
            <span className="block group-hover:hidden">
              Book An Appointment
            </span>
            <span className="hidden group-hover:block">Learn more</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const doctorList = [
  {
    imageSrc: "/images/doctor1.png", // Replace with your image paths
    name: "Dr. Roberto Walkers",
    specialty: "GENERAL DENTISTRY",
    description:
      "Cosmetic dentistry is a fascinating field that blends artistry with dental science to enhance smiles and boost confidence. Whether you're considering teeth whitening, dental implants, or other procedures",
    services: [
      "Teeth Whitening",
      "Teeth Filling",
      "Teeth Extraction",
      "Routine Checkup",
    ],
  },
  {
    imageSrc: "/images/doctor2.png",
    name: "Dr. Isabella Johnson",
    specialty: "COSMETIC DENTISTRY",
    description:
      "Cosmetic dentistry is a fascinating field that blends artistry with dental science to enhance smiles and boost confidence. Whether you're considering teeth whitening, dental implants, or other procedures",
    services: [
      "Teeth Whitening",
      "Teeth Filling",
      "Teeth Extraction",
      "Routine Checkup",
    ],
  },
  {
    imageSrc: "/images/doctor3.png",
    name: "Dr. David Adams",
    specialty: "GENERAL DENTISTRY",
    description:
      "Cosmetic dentistry is a fascinating field that blends artistry with dental science to enhance smiles and boost confidence. Whether you're considering teeth whitening, dental implants, or other procedures",
    services: [
      "Teeth Whitening",
      "Teeth Filling",
      "Teeth Extraction",
      "Routine Checkup",
    ],
  },
  {
    imageSrc: "/images/doctor3.png",
    name: "Dr. David Adams",
    specialty: "GENERAL DENTISTRY",
    description:
      "Cosmetic dentistry is a fascinating field that blends artistry with dental science to enhance smiles and boost confidence. Whether you're considering teeth whitening, dental implants, or other procedures",
    services: [
      "Teeth Whitening",
      "Teeth Filling",
      "Teeth Extraction",
      "Routine Checkup",
    ],
  },
  {
    imageSrc: "/images/doctor3.png",
    name: "Dr. David Adams",
    specialty: "GENERAL DENTISTRY",
    description:
      "Cosmetic dentistry is a fascinating field that blends artistry with dental science to enhance smiles and boost confidence. Whether you're considering teeth whitening, dental implants, or other procedures",
    services: [
      "Teeth Whitening",
      "Teeth Filling",
      "Teeth Extraction",
      "Routine Checkup",
    ],
  },
  {
    imageSrc: "/images/doctor3.png",
    name: "Dr. David Adams",
    specialty: "GENERAL DENTISTRY",
    description:
      "Cosmetic dentistry is a fascinating field that blends artistry with dental science to enhance smiles and boost confidence. Whether you're considering teeth whitening, dental implants, or other procedures",
    services: [
      "Teeth Whitening",
      "Teeth Filling",
      "Teeth Extraction",
      "Routine Checkup",
    ],
  },
  {
    imageSrc: "/images/doctor3.png",
    name: "Dr. David Adams",
    specialty: "GENERAL DENTISTRY",
    description:
      "Cosmetic dentistry is a fascinating field that blends artistry with dental science to enhance smiles and boost confidence. Whether you're considering teeth whitening, dental implants, or other procedures",
    services: [
      "Teeth Whitening",
      "Teeth Filling",
      "Teeth Extraction",
      "Routine Checkup",
    ],
  },
  {
    imageSrc: "/images/doctor3.png",
    name: "Dr. David Adams",
    specialty: "GENERAL DENTISTRY",
    description:
      "Cosmetic dentistry is a fascinating field that blends artistry with dental science to enhance smiles and boost confidence. Whether you're considering teeth whitening, dental implants, or other procedures",
    services: [
      "Teeth Whitening",
      "Teeth Filling",
      "Teeth Extraction",
      "Routine Checkup",
    ],
  },
  {
    imageSrc: "/images/doctor3.png",
    name: "Dr. David Adams",
    specialty: "GENERAL DENTISTRY",
    description:
      "Cosmetic dentistry is a fascinating field that blends artistry with dental science to enhance smiles and boost confidence. Whether you're considering teeth whitening, dental implants, or other procedures",
    services: [
      "Teeth Whitening",
      "Teeth Filling",
      "Teeth Extraction",
      "Routine Checkup",
    ],
  },
];

const doctors = () => {
  return (
    <div>
      <Header
        title="MEET OUR DOCTORS"
        message="We gives you assurance that you will experience highest quality service with our expert"
        imageURL="/images/doctor4.png"
      />
      <div className=" max-container bg-primary-500  wide:padding-r padding-b xl:padding-l p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {doctorList.map((doctor, index) => (
          <DoctorCard key={index} {...doctor} />
        ))}
      </div>
    </div>
  );
};

export default doctors;
