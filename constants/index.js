import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';


export const navLinks = [
  { href: "/", label: "Home" },
  { href: "about", label: "About " },
  { href: "services", label: "Services" },
  { href: "doctors", label: "Doctors" },
  { href: "blog", label: "Blog" },
  { href: "contact", label: "Contact Us" },
];

export const aboutus = [
  { label: "Easy online booking" },
  { label: "Emergency Dentistry" },
  { label: "Best Quality Services" },
  { label: "Discounts on all dentals treatment" },
];

export const statistics = [
  { value: "1000", label: "Happy clients" },
  { value: "15", label: "Years of Experiences" },
  { value: "300k", label: "Online Appointment" },
];

// export const products = [
//     {
//         imgURL: shoe4,
//         name: "Nike Air Jordan-01",
//         price: "$200.20",
//     },
//     {
//         imgURL: shoe5,
//         name: "Nike Air Jordan-10",
//         price: "$210.20",
//     },
//     {
//         imgURL: shoe6,
//         name: "Nike Air Jordan-100",
//         price: "$220.20",
//     },
//     {
//         imgURL: shoe7,
//         name: "Nike Air Jordan-001",
//         price: "$230.20",
//     },
// ];

// export const services = [
//     {
//         imgURL: truckFast,
//         label: "Free shipping",
//         subtext: "Enjoy seamless shopping with our complimentary shipping service."
//     },
//     {
//         imgURL: shieldTick,
//         label: "Secure Payment",
//         subtext: "Experience worry-free transactions with our secure payment options."
//     },
//     {
//         imgURL: support,
//         label: "Love to help you",
//         subtext: "Our dedicated team is here to assist you every step of the way."
//     },
// ];

// export const reviews = [
//     {
//         imgURL: customer1,
//         customerName: 'Morich Brown',
//         rating: 4.5,
//         feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
//     },
//     {
//         imgURL: customer2,
//         customerName: 'Lota Mongeskar',
//         rating: 4.5,
//         feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
//     }
// ];

export const footerLinks = [
  {
    title: "url(/images/logo.png)",
    links: [
      { name: "About us", link: "/" },
      { name: "Services", link: "/" },
      { name: "Blogs", link: "/" },
      { name: "Our team", link: "/" },
    ],
  },
  {
    title: "Feature",
    links: [
      { name: "Live Chats", link: "/" },
      { name: "Career", link: "/" },
      { name: "Unlimited Supports", link: "/" },
      { name: "Book appointment", link: "/" },
    ],
  },
  {
    title: "Our Work",
    links: [
      { name: "Speciualist", link: "/" },
      { name: "Benefit", link: "/" },
      { name: "Health", link: "/" },
      { name: "Services", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
       { name: "+92554862354", link: "tel:+92554862354", icon: FaPhone },
      { name: "South America vents road 8745", link: "/", icon: FaMapMarkerAlt },
      { name: "Dentalcare@gmail.com", link: "mailto:customer@nike.com", icon: FaEnvelope },
      { name: "www.dentalcare.com", link: "/", icon: FaGlobe },
    ],
  },
];

// export const socialMedia = [
//     { src: facebook, alt: "facebook logo" },
//     { src: twitter, alt: "twitter logo" },
//     { src: instagram, alt: "instagram logo" },
// ];
