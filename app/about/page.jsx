import Header from "@/components/Header";
import Link from "next/link";
import { Button } from "@/components";
import Image from 'next/image';
import { FaCheckCircle, FaUserMd } from 'react-icons/fa';
import { statisticsx } from "@/constants";

const Counts = () => {
  return (
    <section className="mt-8 px-24 " >
      <div className="flex justify-center xl:flex-row flex-col gap-16  border-dashed border-2 border-black shadow-xl items-center w-full py-12">
       
        {statisticsx.map((stat, index) => (
          <div className="flex flex-col justify-center items-center mb-2 " key={index}>
            <div className="flex justify-center items-center mb-2">
            <Image src={stat.imageURL} alt="images" width={40} height={50} />
            </div>
            <p className="text-2xl font-palanquin font-bold">{stat.value}<span className="text-primary-100 text-2xl font-palanquin font-bold">+</span></p>
            <p className="leading-7 font-montserrat text-slate-gray">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};


const OurSections = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center flex-col xl:flex-row mb-8">
          <div className="w-full md:w-1/2 xl:w-1/3 text-left">
          <div className="xl:block text-center mb-12">
          <h1 className="font-bold mt-5 flex items-center gap-2 justify-center font-palanquin text-2xl">
            <span className=" h-0.5 w-8 bg-blue-700"></span>
            <span>OUR SECTION</span>
            <span className=" h-0.5 w-8 bg-blue-700"></span>
            </h1>
        </div>
            <p className="text-gray-600 mb-12">
              Our Clinic offers you the best services you can ever have. We solve your dental health problems with good experienced specialists.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <FaCheckCircle className="text-yellow-500 mr-2" />
                <span className="text-gray-600">General Dentistry</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-yellow-500 mr-2" />
                <span className="text-gray-600">Cosmetic Dentistry</span>
              </div>
              <div className="flex items-center">
                <FaCheckCircle className="text-yellow-500 mr-2" />
                <span className="text-gray-600">Implant Dentistry</span>
              </div>
            </div>
          </div>
          
            <div className="flex justify-center items-center mr-5">
              <Image
                src="/images/section.png" // Replace with your image path
                width={400}
                height={400}
                alt="Dental Treatment"
              />
            </div>
          
        </div>
        <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="max-w-sm bg-white rounded-lg shadow-md">
            <Image
              src="/images/cos7.png" // Replace with your image path
              alt="General Dentistry"
              className="rounded-t-lg"
              width={400}
              height={250}
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">General Dentistry</h3>
              <div className="flex justify-center items-center mt-2">
                <FaUserMd className="text-blue-500 mr-2" />
                <p className="text-gray-600">3 Specialist Doctors</p>
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-white rounded-lg shadow-md">
            <Image
              src="/images/cos8.png" // Replace with your image path
              alt="Cosmetic Dentistry"
              className="rounded-t-lg"
              width={400}
              height={250}
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">Cosmetic Dentistry</h3>
              <div className="flex justify-center items-center mt-2">
                <FaUserMd className="text-blue-500 mr-2" />
                <p className="text-gray-600">3 Specialist Doctors</p>
              </div>
            </div>
          </div>
          <div className="max-w-sm bg-white rounded-lg shadow-md">
            <Image
              src="/images/cos9.png" // Replace with your image path
              alt="Implant Dentistry"
              className="rounded-t-lg"
              width={400}
              height={250}
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-gray-800">Implant Dentistry</h3>
              <div className="flex justify-center items-center mt-2">
                <FaUserMd className="text-blue-500 mr-2" />
                <p className="text-gray-600">3 Specialist Doctors</p>
              </div>
            </div>
          </div>
        </div>
        <Counts />
      </div>
    </div>
  );
};





const ContactInfo = () => {
  return (
    <div className="bg-primary-500 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto p-8">
        <div className="border-dashed border-2 border-gray-300 p-8 flex flex-col md:flex-row justify-evenly items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-bold text-black">Emergency contact</h2>
            <a href="tel:+445576364" className="text-2xl text-blue-600 mt-2">+445 576 364</a>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-gray-300 md:h-24 md:mx-8"></div>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-bold text-black">Opening Hours</h2>
            <ul className="mt-2 text-gray-600">
              <li>Monday - Friday: <span className="text-black">8:00am - 9pm</span></li>
              <li>Saturday: <span className="text-black">10:00am - 9pm</span></li>
              <li>Sunday: <span className="text-black">12:00pm - 6pm</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


const about = () => {
  return (
    <div className="bg-primary-500">
      <Header
        title="ABOUT US"
        message="Crafting radiant smiles one appoint at a time - welcome to our dedicated dental oasis where compassionate care meets clinical excellence"
        imageURL="/images/aboutpage.png"
      />
      <section className="w-full flex xl:flex-row flex-col justify-center  gap-10 max-container  wide:padding-r padding-b xl:padding-l">
        <div className="relative mt-8 xl:w-1/2 flex flex-col xl:justify-between justify-center items-center xl:items-start w-full  max-xl:padding-x pt-4">
          <h1 className="font-bold mt-5 flex justify-center items-center gap-2 font-palanquin text-2xl">
          <span className=" h-0.5 w-8 bg-blue-700"></span>
            <span>OUR STORY </span>
            <span className=" h-0.5 w-8 bg-blue-700"></span>
          </h1>
          <h6 className="text-sm leading-6 sm:max-w-sm text-slate-400 mt-8 font-montserrat">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            minus expedita aperiam est? Adipisci iure odit sit beatae obcaecati
            similique aperiam! Delectus iusto libero accusantium deleniti
            distinctio similique quod laborum? Sint omnis ipsa doloremque magni
            quis in ea quasi harum rerum aliquam, repudiandae magnam illo
            corporis velit. Eos, porro sunt.
          </h6>
          <h6 className="font-montserrat leading-6 text-slate-400 text-sm mt-8 sm:max-w-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            assumenda tempore quaerat obcaecati architecto debitis! Quae culpa
            architecto itaque cumque incidunt veniam nemo corporis blanditiis
            voluptate beatae quos iste est consectetur eius inventore
            laudantium, iure ver.
          </h6>
          <Link href="/contact">
            <div className="flex justify-center items-start mt-6 gap-4">
              <Button
                label="Get appointment"
                backgroundColor="bg-blue-500"
                textColor="text-white"
              />
              <Button
                label="Book appointment"
                backgroundColor="bg-blue-500"
                textColor="text-white"
              />
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center xl:mt-8">
          <Image src="/images/story.png" alt="hero" width={470} height={470} />
        </div>
      </section>
      <ContactInfo />
      <section className="w-full flex xl:flex-row flex-col justify-center mt-8 gap-10 max-container  wide:padding-r padding-b xl:padding-l relative">
      <div className="absolute mt-3 inset-0 xl:left-1/4 xl:ml-[-210px] flex items-center justify-center xl:block">
        <div className="bg-shape bg-blue-400"></div> {/* Apply the bg-shape class */}
      </div>
        <div className="xl:w-1/2 relative mt-8 items-center flex justify-center xl:justify-start">
          <div className="bg-blue-300 max-sm:w-full pb-16 p-10 rounded-[100px] flex flex-col justify-center items-center gap-5 pt-4">
            <h1 className="font-bold mt-5 flex items-center gap-2 justify-center font-palanquin text-2xl">
            <span className=" h-0.5 w-8 bg-blue-700"></span>
            <span>MEET OUR CEO</span>
            <span className=" h-0.5 w-8 bg-blue-700"></span>
            </h1>
            <h6 className="text-sm leading-6 sm:max-w-sm text-white font-montserrat">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              minus expedita aperiam est? Adipisci iure odit sit beatae .
            </h6>
            <h6 className="font-montserrat leading-6 text-white text-sm sm:max-w-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
              assumenda tempore quaerat obcaecati architecto debitis! Quae culpa
              architecto itaque cumque incidunt veniam nemo corporis blanditiis
              voluptate beatae quos iste est consectetur eius inventore
              laudantium, iure ver.
            </h6>
            <h6 className="text-sm leading-6 sm:max-w-sm text-white font-montserrat">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              minus expedita aperiam est? Adipisci iure odit sit beatae .
            </h6>
            <h6 className="text-sm leading-6 sm:max-w-sm text-white font-montserrat">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              minus expedita aperiam est? Adipisci iure odit sit beatae .
            </h6>
            <Link href="/contact">
              <div className="flex justify-center items-start gap-4">
                <Button
                  label="Meet our Doctors"
                  backgroundColor="bg-blue-500"
                  textColor="text-white"
                />
                <Button
                  label="Book appointment"
                  backgroundColor="bg-blue-500"
                  textColor="text-white"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center xl:pt-6">
          <Image
            src="/images/ceo.png"
            alt="hero"
            width={470}
            height={470}
            className="object-contain"
          />
        </div>

      </section>
      <OurSections />
    </div>
  );
};

export default about;
