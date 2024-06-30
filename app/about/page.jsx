import Header from "@/components/Header";
import Link from "next/link";
import { Button } from "@/components";
import Image from "next/image";
import Count from "@/components/Count";

const about = () => {
  return (
    <>
      <Header
        title="ABOUT US"
        message="Crafting radiant smiles one appoint at a time - welcome to our dedicated dental oasis where compassionate care meets clinical excellence"
        imageURL="/images/aboutpage.png"
      />
      <section className="w-full flex xl:flex-row flex-col justify-center  gap-10 max-container bg-primary-500  wide:padding-r padding-b xl:padding-l">
        <div className="relative mt-8 xl:w-1/2 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-4">
          <h1 className="font-bold mt-5 font-palanquin text-2xl">
            <span className="text-blue-300 text-4xl font-bold">---</span> OUR
            STORY <span className="text-blue-300 text-4xl font-bold">---</span>
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
      <Count />
      <section className="w-full flex xl:flex-row flex-col justify-center  gap-10 max-container bg-primary-500  wide:padding-r padding-b xl:padding-l">
        <div className="xl:w-1/2 mt-8 items-center flex justify-center xl:justify-start">
          <div className="bg-blue-300 max-sm:w-full pb-16 p-10 rounded-[100px] flex flex-col justify-center items-center gap-5 pt-4">
            <h1 className="font-bold mt-5 font-palanquin text-2xl">
              <span className="text-blue-400 text-4xl font-bold">---</span> MEET
              OUR CEO{" "}
              <span className="text-blue-400 text-4xl font-bold">---</span>
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
    </>
  );
};

export default about;
