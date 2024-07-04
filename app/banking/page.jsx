import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const features = [
  { icon: "💳", title: "Free Account", description: "No maintenance fees" },
  { icon: "🔒", title: "Secure", description: "Bank-level security" },
  { icon: "📈", title: "Growth", description: "Earn interest on savings" },
];



function HeroSection() {
  return (
    <section className="bg-hero-pattern bg-cover bg-center h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to BankX</h1>
        <p className="text-lg  mt-4">Your trusted banking partner</p>
        <button className="mt-6 py-2 px-4 bg-purple-600 text-white rounded-lg">Get Started</button>
      </div>
    </section>
  );
}



function Footer() {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto text-center text-gray-400">
        <p>&copy; 2024 BankX. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-gray-400 hover:text-white" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-400 hover:text-white" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-400 hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
}



export default function FeaturesSection() {
  return (
    <>
        <HeroSection />
        <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {features.map((feature) => (
            <div key={feature.title} className="p-6">
              <>
                <div className="text-4xl">{feature.icon}</div>
                <h1 className="text-3xl mt-4">{feature.title}</h1>
                <p className="text-gray-600">{feature.description}</p>
              </>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />  
    </>
  );
}
