import { footerLinks } from "@/constants";

import Image from "next/image";



const Footer = () => {
  return (
    <section className="bg-white relative w-full">
      <div className="absolute xl:w-[480px] text-white xl:h-[280px] w-full p-8 z-10 xl:left-1/2 xl:ml-[-240px] -top-28 bg-blue-400 rounded-3xl">
        <div className=" w-full">
          <div className="flex flex-col xl:mt-6 justify-center items-center text-black gap-6">
            <h1 className="text-xl font-black">join our newsletter</h1>
            <p className=" text-md text-center">
              You can easily receive exclusive news by subscribing to our
              newsletter
            </p>
            <div className="bg-white rounded-full flex flex-wrap sm:flex-nowrap justify-between px-3 py-2 items-center w-full">
              <input
                className="flex-grow ml-2 text-sm text-black"
                type="text"
                placeholder="enter your address"
              />
              <button className="mt-2 sm:mt-0 rounded-full text-sm bg-primary-100 px-6 py-2">
                subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-100 p-24 text-white mt-24">
        <footer className="max-container mt-28 animate-fadeIn">
          <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
            <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap ">
              {footerLinks.map((section) => (
                <div key={section.title.startsWith("url(")}>
                  {section.title.startsWith("url(") ? (
                    <Image
                      src={section.title.slice(4, -1)}
                      alt="Logo"
                      className="mb-4"
                      width={100}
                      height={50}
                    />
                  ) : (
                    <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                      {section.title}
                    </h4>
                  )}

                  <ul>
                    {section.links.map((link) => (
                      <li
                        className="mt-3 flex items-center font-montserrat text-base leading-normal text-white transition-transform transform hover:scale-105"
                        key={link.name}
                      >
                        {link.icon && (
                          <link.icon className="w-5 h-5 mr-2 text-primary-100" />
                        )}
                        <a href={link.link} className="hover:underline">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
            <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
              <Image
                src="/images/logo.png"
                alt="copyright sign"
                width={80}
                height={40}
                className="rounded-full m-0"
              />
              
              <p>Copyright. All rights reserved.</p>
            </div>
            <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
          </div>
        </footer>
      </div>
    </section>
  );
};
export default Footer;
