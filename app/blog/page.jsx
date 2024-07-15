import Header from "@/components/Header";
import { FaSearch, FaAward, FaBlog, FaNewspaper } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { FaRegComments } from "react-icons/fa6";

const posts = [
  {
    image: "/images/blog5.png",
    date: "November 15, 2024",
    title: "Dental Care is Running a Sales On All Tooth Filling",
    description:
      "Tooth fillings are a common and effective dental treatment for restoring teeth affected by decay or damage...",
    author: "admin",
    comments: "0",
  },
  {
    image: "/images/blog1.png",
    date: "November 15, 2024",
    title: "Dental Care is Running a Sales On All Tooth Filling",
    description:
      "Tooth fillings are a common and effective dental treatment for restoring teeth affected by decay or damage...",
    author: "admin",
    comments: "0",
  },
  {
    image: "/images/blog2.png",
    date: "November 15, 2024",
    title: "Dental Care is Running a Sales On All Tooth Filling",
    description:
      "Tooth fillings are a common and effective dental treatment for restoring teeth affected by decay or damage...",
    author: "admin",
    comments: "0",
  },
  {
    image: "/images/blog3.png",
    date: "November 15, 2024",
    title: "Dental Care is Running a Sales On All Tooth Filling",
    description:
      "Tooth fillings are a common and effective dental treatment for restoring teeth affected by decay or damage...",
    author: "admin",
    comments: "0",
  },
  {
    image: "/images/blog4.png",
    date: "November 15, 2024",
    title: "Dental Care is Running a Sales On All Tooth Filling",
    description:
      "Tooth fillings are a common and effective dental treatment for restoring teeth affected by decay or damage...",
    author: "admin",
    comments: "0",
  },
  {
    image: "/images/blog6.png",
    date: "November 15, 2024",
    title: "Dental Care is Running a Sales On All Tooth Filling",
    description:
      "Tooth fillings are a common and effective dental treatment for restoring teeth affected by decay or damage...",
    author: "admin",
    comments: "0",
  },
  {
    image: "/images/blog7.png",
    date: "November 15, 2024",
    title: "Dental Care is Running a Sales On All Tooth Filling",
    description:
      "Tooth fillings are a common and effective dental treatment for restoring teeth affected by decay or damage...",
    author: "admin",
    comments: "0",
  },
  {
    image: "/images/blog8.png",
    date: "November 15, 2024",
    title: "Dental Care is Running a Sales On All Tooth Filling",
    description:
      "Tooth fillings are a common and effective dental treatment for restoring teeth affected by decay or damage...",
    author: "admin",
    comments: "0",
  },
  {
    image: "/images/blog9.png",
    date: "November 15, 2024",
    title: "Dental Care is Running a Sales On All Tooth Filling",
    description:
      "Tooth fillings are a common and effective dental treatment for restoring teeth affected by decay or damage...",
    author: "admin",
    comments: "0",
  },
];

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover p-3 rounded-md"
      />
      <div className="p-4 text-sm">
        <p className="text-gray-600">{post.date}</p>
        <h3 className=" font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-700 mb-4">{post.description}</p>
        <div className="flex justify-between items-center">
          
          <div className="flex justify-start items-center gap-1 text-blue-400">
            <GoPerson />
            <p>{post.author}</p>
          </div>
          <div className="flex justify-start items-center gap-1 text-blue-400">
          <FaRegComments />
          <p >{post.comments}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="px-6 pb-6 bg-gray-100 rounded-lg xl:absolute">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2 pb-4 relative inline-block half-border">Search Keywords</h2>
        <div className="relative mt-6">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full px-4 py-4 border rounded-full focus:outline-none"
          />
          <button className="absolute right-2 top-4 ">
            <FaSearch className="w-8 h-8 text-blue-400" />
          </button>
        </div>
      </div>
      <div className="mb-6 mt-12">
        <h2 className="text-2xl font-bold mb-2 pb-4 relative inline-block half-border">Categories</h2>
        <ul>
          <li className="mb-2 mt-8 pb-2 text-xl border-b-2 border-gray-500 flex  items-center">
            <FaAward className="mr-2 text-blue-400" />
            <a href="#" className="text-gray-500">
              Award Winning
            </a>
          </li>
          <li className="mb-2 mt-8 pb-2 text-xl border-b-2 border-gray-500 flex items-center">
            <FaBlog className="mr-2 text-blue-400" />
            <a href="#" className="text-gray-500">
              Blog
            </a>
          </li>
          <li className="mb-2 mt-8 pb-2 text-xl border-b-2 border-gray-500 flex items-center">
            <FaNewspaper className="mr-2 text-blue-400" />
            <a href="#" className="text-gray-500">
              News
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-6 mt-12">
        <h2 className="text-2xl font-bold mb-2 pb-4 relative inline-block half-border">Recent Posts</h2>
        <ul>
          <li className="mb-4 mt-8">
            <a href="#" className="flex items-center">
              <img
                src="/images/blog12.png"
                alt=""
                className="w-36 h-24 rounded-lg mr-4"
              />
              <div>
                <p className="text-blue-400">May 18, 2024</p>
                <p className="text-gray-600 hover:underline">
                  May dental office need a blog area care to ailing...
                </p>
              </div>
            </a>
          </li>
          <li className="mb-4 mt-4">
            <a href="#" className="flex items-center">
              <img
                src="images/blog5.png"
                alt=""
                className="w-36 h-24 rounded-lg mr-4"
              />
              <div>
                <p className=" text-blue-400">May 18, 2024</p>
                <p className="text-gray-600 hover:underline">
                  May dental office need a blog area care to ailing...
                </p>
              </div>
            </a>
          </li>
          <li className="mb-4 mt-4">
            <a href="#" className="flex items-center">
              <img
                src="images/blog11.png"
                alt=""
                className="w-36 h-24 rounded-lg mr-4"
              />
              <div>
                <p className="text-blue-400">May 18, 2024</p>
                <p className="text-gray-600 hover:underline">
                  May dental office need a blog area care to ailing...
                </p>
              </div>
            </a>
          </li>
          <li className="mb-4 mt-4">
            <a href="#" className="flex items-center">
              <img
                src="images/blog10.png"
                alt=""
                className="w-36 h-24 rounded-lg mr-4"
              />
              <div>
                <p className="text-blue-400">May 18, 2024</p>
                <p className="text-gray-600 hover:underline">
                  May dental office need a blog area care to ailing...
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl border-b-[6px] border-blue-400 inline-block pb-2 font-bold mb-6">Tags</h2>
        <div className="flex mt-8/2 flex-wrap gap-2">
          {[
            "Care",
            "Dental",
            "Eye",
            "Eye Care",
            "Eye Care Laboratory",
            "Health",
            "Laboratory",
            "Modern Clinic",
          ].map((tag) => (
            <a
              href="#"
              key={tag}
              className=" border border-blue-400 rounded-full px-4 py-3 text-sm hover:bg-blue-400 hover:text-white transition"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <>
      <div>
        <Header
          title="We Bring You Great News From Our Clinic"
          message="Keeping you updated on every news from our blogs."
          imageURL="/images/blog.png"
        />
      </div>

      <div className="max-container relative px-4 py-8 mt-8 bg-primary-500  padding-b xl:padding-l">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <PostCard key={index} post={post} />
            ))}
          </div>
          <div className="relative xl:w-2/3">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
