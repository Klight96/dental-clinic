import { statistics } from "@/constants";

const Count = () => {
  return (
    <section className=" bg-primary-500  px-24 " >
      <div className="flex justify-center xl:flex-row flex-col gap-16  border-dashed border-2 border-black shadow-xl items-center w-full py-16">
        <h1 className="font-bold font-palanquin text-2xl ">
          We are so unique in our way
        </h1>
        {statistics.map((stat, index) => (
          <div key={index}>
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

export default Count;
