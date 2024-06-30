import Image from "next/image";

const Doctors = () => {
  return (
 <section className="bg-primary-500 w-full">
    <div className="flex flex-col xl:w-5/6 justify-center gap-10 max-container padding-b ">
      <div className="mt-12 flex p-8 flex-col gap-3 items-center justify-center">
        <h1 className="text-black text-2xl">MEET OUR DOCTORS</h1>
        <p className="text-sm text-slate-400">
          We gives you an assurance that you will experience highest quality service with our expert 
        </p>
      </div>
      <div className="flex p-2 flex-col xl:flex-row xl:w-auto items-center gap-10 xl:justify-between">
        <div className="flex justify-center items-center object-cover">
            <Image src="/images/frame1.png" alt="frame" width={280} height={340} className="object-cover"/>
        </div>
        <div className="flex justify-center items-center object-cover">
            <Image src="/images/frame2.png" alt="frame" width={280} height={340} className="object-cover"/>
        </div>
        <div className="flex justify-center items-center object-cover">
            <Image src="/images/frame3.png" alt="frame" width={280} height={340} className="object-cover"/>
        </div>
        <div className="flex justify-center items-center object-cover">
            <Image src="/images/frame4.png" alt="frame" width={280} height={340} className="object-cover"/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Doctors