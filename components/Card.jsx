import Image from "next/image";
import { Button } from ".";

const Card = () => {
  return (
    <section className=" bg-primary-500 w-full">
      <div className="bg-blue-400 xl:w-5/6 flex flex-col justify-center  gap-6 max-container pb-8">
        <div className="flex flex-col justify-center items-center gap-2 mt-4 p-4 text-white">
          <h1 className="text-xl">OUR CLINIC SERVICES</h1>
          <p className="text-sm ">
            We check the health of your teeth by the best
          </p>
          <p className="text-sm">specialist in our clinic</p>
        </div>
        <div className=" w-full flex xl:flex-row flex-col justify-center items-center gap-5">
          <div className="p-2 w-[300px] flex flex-col gap-3 items-center justify-center bg-white rounded-3xl ">
            <div className="flex justify-center items-center">
              <Image
                src="/images/toothpic.png"
                alt="tooth logo"
                width={90}
                height={50}
              />
            </div>
            <h1 className="text-black text-xl">General dentistry</h1>
            <p className="text-sm text-slate-400 tracking-wide text-center">
              This cover a wide range of treatment options and basic procedures
              for dental care
            </p>
            <Button
              label="Learn more"
              backgroundColor="transparent"
              textColor="text-blue-400"
            />
          </div>
          <div className="p-2 w-[300px] flex flex-col gap-3 items-center justify-center bg-blue-500 rounded-3xl ">
            <div className="flex justify-center items-center">
              <Image
                src="/images/toothpic1.png"
                alt="tooth logo"
                width={90}
                height={70}
              />
            </div>
            <h1 className="text-white text-xl">General dentistry</h1>
            <p className="text-sm text-white tracking-wide text-center">
              This cover a wide range of treatment options and basic procedures
              for dental care
            </p>
            <Button
              label="Learn more"
              backgroundColor="transparent"
              textColor="text-white"
            />
          </div>
          <div className="p-2 w-[300px] flex flex-col gap-3 items-center justify-center bg-white rounded-3xl ">
            <div className="flex justify-center items-center">
              <Image
                src="/images/toothpic.png"
                alt="tooth logo"
                width={90}
                height={50}
              />
            </div>
            <h1 className="text-black text-xl">General dentistry</h1>
            <p className="text-sm text-slate-400 tracking-wide text-center">
              This cover a wide range of treatment options and basic procedures
              for dental care
            </p>
            <Button
              label="Learn more"
              backgroundColor="transparent"
              textColor="text-blue-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
