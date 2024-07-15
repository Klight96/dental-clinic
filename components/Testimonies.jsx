import Image from "next/image";
import { FaMessage } from "react-icons/fa6";

const Testimonies = () => {
  return (
    <section className="bg-primary-500 w-full">
      <div className="flex flex-col xl:w-5/6 justify-center gap-10 max-container padding-b">
        <div className="mt-12 flex p-8 flex-col gap-3 items-center justify-center">
          <h1 className="text-black text-2xl">OPINION OF PATIENTS</h1>
          <p className="text-sm text-slate-400">
            Out patients comment is what keeps us moving and giving the thrive
            to keep working and improving in our health care systems to change.
          </p>
        </div>
        <div className="flex p-2 flex-col xl:flex-row gap-10 items-center xl:justify-between">
          <div className="bg-blue-400 p-8 rounded-xl max-sm:w-4/5 w-[480px]">
            <div className="flex max-sm:flex-col justify-center items-center gap-4">
              <div className="flex justify-center items-center">
                <Image
                  src="/images/client.png"
                  alt="pic"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center gap-2 items-center">
                <h1 className="text-xl font-bold">Mr Gabriel Scotts</h1>
                <h6 className="text-md">Happy Client</h6>
              </div>
            </div>
            <h1 className="mt-4 text-xl max-sm:text-sm max-sm:leading-6 text-black flex justify-center items-center">
              With growing competition in every industry in every aspect - from
              price to technolology to innovation - Allwood believes the way to
              to differentiate your brand is through improving costumer
              experience
            </h1>
            <div className="mt-3 flex justify-center items-center">icons</div>
          </div>
          <div className="bg-white p-8 rounded-xl max-sm:w-4/5 w-[480px]">
            <div className="flex justify-center max-sm:flex-col items-center gap-4">
              <div className="flex justify-center items-center">
                <Image
                  src="/images/client1.png"
                  alt="pic"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center gap-2 items-center">
                <h1 className="text-xl font-bold">Mr Gabriel Scotts</h1>
                <h6 className="texl-md">Happy Client</h6>
              </div>
            </div>
            <h1 className="mt-4 text-xl max-sm:text-sm max-sm:leading-6 text-black flex justify-center items-center">
              With growing competition in every industry in every aspect - from
              price to technolology to innovation - Allwood believes the way to
              to differentiate your brand is through improving costumer
              experience
            </h1>
            <div className="mt-3 flex justify-center items-center"><FaMessage /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
