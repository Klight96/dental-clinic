import Image from "next/image";

const Header = ({ title, message, imageURL }) => {
  return (
    <div className="bg-blue-300 w-full max-container  wide:padding-r xl:padding-l">
      <div className="flex w-auto flex-col max-xl:padding-x wide:padding-r xl:padding-l xl:flex-row xl:justify-between justify-center items-center gap-10">
        <div className="flex flex-col  sm:max-w-sm items-start justify-center gap-5 text-white">
          <h1 className="text-3xl font-bold ">{title}</h1>
          <p className="text-sm">{message}</p>
        </div>
        <div className="flex justify-center items-center h-auto">
          <Image
            src={imageURL}
            alt="logo image"
            height={270}
            width={340}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
