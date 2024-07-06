import Header from "@/components/Header";

import Image from 'next/image';

const treatments = {
  "General Dentistry": [
    {
      name: "Teeth Whitening",
      description: "A teeth whitening procedure is a cosmetic dental treatment designed to lighten the color of teeth and remove stains and discoloration. It typically involves the application of a whitening agent, usually containing hydrogen peroxide or carbamide peroxide, to the surface of the teeth.",
      image: "/images/doctor1.png", // Adjust the image path accordingly
    },
    {
      name: "Teeth Filing",
      description: "This procedure involves the removal of decayed tooth material and filling the cavity with a dental filling material such as amalgam, composite resin, gold, or porcelain. Teeth filing helps restore the tooth's structure and function, preventing decay and strengthening the tooth.",
      image: "/images/doctor1.png",
    },
    {
      name: "Teeth Extraction",
      description: "A teeth extraction procedure is where a tooth is removed from its socket in the jawbone. This procedure is typically performed by a dentist or an oral surgeon. When a tooth is extensively decayed and cannot be restored with fillings or other dental treatments, extraction may be necessary.",
      image: "/images/doctor1.png",
    },
    {
      name: "Routine Checkup",
      description: "A routine dental checkup, also known as a dental examination or dental check-up, is a standard preventive dental procedure aimed at maintaining oral health and detecting any potential dental issues early on. Here's what typically happens during a routine dental checkup.",
      image: "/images/doctor1.png",
    },
  ],
  // Add other categories similarly
  "Cosmetic Dentistry": [
    {
      name: "Dental Veneers",
      description: "A dental veneers procedure is a treatment that involves the use of thin shells, typically made of porcelain or composite resin, to the front surface of the teeth to improve their appearance. Veneers are custom-made to match the shape, size, and color of the natural teeth.",
      image: "/images/doctor1.png",
    },
    {
      name: "Teeth Whitening",
      description: "A teeth whitening procedure is a cosmetic dental treatment designed to lighten the color of teeth and remove stains and discoloration. It typically involves the application of a whitening agent, usually containing hydrogen peroxide or carbamide peroxide, to the surface of the teeth.",
      image: "/images/doctor1.png",
    },
    {
      name: "Dental Bonding",
      description: "A dental bonding is a treatment used to repair or enhance the appearance of teeth affected by chips, cracks, discoloration, gaps, or irregular shapes. It involves the application of a tooth-colored composite resin material to the surface of the tooth.",
      image: "/images/doctor1.png",
    },
    {
      name: "Dental Crown",
      description: "A dental crown procedure, also known as a dental cap or tooth cap procedure, is a common dental treatment used to restore a damaged or decayed tooth to its original shape, size, strength, and appearance. A dental crown is a custom-made covering that encases the teeth.",
      image: "/images/doctor1.png",
    },
  ],
  "Dental Implant": [
    {
      name: "Teeth Replacement",
      description: "A teeth replacement procedure, also known as tooth replacement or dental restoration, is a dental treatment aimed at replacing missing teeth to restore function, aesthetics, and oral health. There are several options available for tooth replacement.",
      image: "/images/doctor1.png",
    },
    {
      name: "Bone Grafting",
      description: "A bone grafting procedure is a surgical treatment used to augment or regenerate bone tissue in the jawbone. Bone grafting is commonly performed in preparation for dental implant placement, as dental implants require a sufficient amount of healthy bone for stability.",
      image: "/images/doctor1.png",
    },
    {
      name: "All-on-6 implant",
      description: "All-on-6 Implants: All-on-6 implants are specialized procedures designed to restore an entire arch of missing teeth using a minimal number of dental implants. Typically, four to six dental implants are strategically placed in the jawbone to support a fixed bridge or full-arch prosthesis.",
      image: "/images/doctor1.png",
    },
    {
      name: "Single Teeth Replacement",
      description: "This procedure involves replacing a single missing tooth with a dental implant. A single implant post is surgically placed into the jawbone, and after a healing period, a custom-made dental crown is attached to the implant, effectively replacing the missing tooth.",
      image: "/images/doctor1.png",
    },
  ],
};



const TreatmentCard = ({ image, name, description }) => (
  <div className="w-[300px] rounded-xl overflow-hidden shadow-lg transform transition duration-300 ease-in-out group hover:scale-105">
    <Image src={image} alt={name} className="w-full" width={300} height={280}/>
    <div className=" text-center ">
      <div className="font-bold text-md my-4">{name}</div>
      <p className="text-white bg-blue-400 px-3 rounded-lg py-4 group-hover:bg-primary-100 text-sm group-hover:text-black group-hover:leading-relaxed">
        {description}
      </p>
    </div>
    <div className="px-6 text-center pt-4 pb-2">
      <button className="bg-blue-400 hover:bg-primary-100 text-white hover:text-black font-bold py-2 px-4 rounded transition-colors duration-300">
        Book now
      </button>
    </div>
  </div>
);


const CategorySection = ({ category, treatments }) => (
  <section className="my-8">
    <h2 className="text-2xl font-bold mb-4">{category}</h2>
    <div className="w-full flex flex-wrap items-center justify-center gap-6">
      {treatments.map((treatment, index) => (
        <div key={index} className=" p-2">
          <TreatmentCard {...treatment} />
        </div>
      ))}
    </div>
  </section>
);

const Dentistry = () => (
  <div className="container mx-auto px-4">
    <h1 className="font-bold text-2xl text-center my-16">DENTISTRY</h1>
    {Object.entries(treatments).map(([category, treatments], index) => (
      <CategorySection key={index} category={category} treatments={treatments} />
    ))}
  </div>
);




const services = () => {
  return (
    <div className="bg-primary-500">
      <Header
        title="OUR SERVICES"
        message="Your perfect smile starts here. Expert care for your brighest smile keeping your smile radiant and healthy."
        imageURL="/images/service.png"
      />
      <Dentistry />

    </div>

  );
};

export default services;
