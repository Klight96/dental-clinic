import { aboutus } from "@/constants";
import Image from "next/image";
import { IoIosCheckmark } from "react-icons/io";

const About = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center gap-10 max-container bg-primary-500  wide:padding-r padding-b xl:padding-l padding-t">
      <div className="flex justify-center items-center xl:pr-8">
        <Image src="/images/about.png" alt="" width={470} height={470} />
      </div>
      <div className=" relative xl:w-1/2 flex-col flex justify-center items-start w-full  max-xl:padding-x padding-l ">
        <h1 className="font-bold font-palanquin max-sm:text-[72px] max-sm:leading-[82px] text-4xl ">
          About Us
        </h1>
        <p className="my-5 font-bold text-xl">
          Our clinic offers the best services you can ever have. <br />
          we solves your dentals health problems with good <br /> experience
          specialist.
        </p>
        {aboutus.map((stat, index) => (
          <div key={index} className="mt-8 text-2xl">
            <div className="flex gap-2 items-center justify-center">
            <div className="text-4xl text-white rounded-full bg-primary-100 ">
            <IoIosCheckmark />
            </div>
            <p className="leading-7   font-montserrat text-slate-gray">
              {stat.label}
            </p>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
