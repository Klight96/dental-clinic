import { Button } from ".";
import Image from "next/image";
import Count from "./Count";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="w-full flex xl:flex-row flex-col justify-center  gap-10 max-container bg-primary-500  wide:padding-r padding-b xl:padding-l">
        <div className="relative xl:w-1/2 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-4">
          <h6 className="font-bold font-montserrat">For a better smile</h6>
          <h1 className="font-bold mt-5 font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px]">
            Because your smile is precious <br />
            your Dental health is important to <br />
            us at <span className="text-blue-400">Dental</span> Clinic
          </h1>
          <h3 className="font-montserrat text-slate-gray text-lg leading-8 mt-8 mb-14 sm:max-w-sm">
            We check the health of your teeth by the best specialist in our
            clinic
          </h3>
          <Link href="/blog" >
          <Button label='Get appointment' backgroundColor='bg-blue-500' textColor='text-white'/>
          </Link>
          
        </div>
        <div className="flex justify-center items-center xl:pt-6">
          <Image
            src="/images/hero.png"
            alt="hero"
            width={470}
            height={470}
            className="object-contain"
          />
        </div>
      </section>
      <Count />
    </>
  );
};

export default Hero;
