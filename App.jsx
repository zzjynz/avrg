import React, { useState } from "react";

const App = () => {
  const [activeTab, setActiveTab] = useState("about");

  // Social Media Links
  const socialMediaLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/ixf8zz",
      iconColor: "bg-red-500",
    },
    {
      name: "Facebook",
      url: "https://facebook.com/artem.karonov",
      iconColor: "bg-red-500",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@lolhaberlul",
      iconColor: "bg-red-500",
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@soulless_believer",
      iconColor: "bg-red-500",
    },
  ];

  // Gallery Images
  const galleryImages = [
    "https://res.cloudinary.com/dxyrb68wn/image/upload/c_crop,w_1100,h_1200/v1749689443/Screenshot_20250416-143903_1_1_lytlyn.jpg",
    "https://res.cloudinary.com/dxyrb68wn/image/upload/c_crop,h_1200/v1749689698/IMG-20250526-WA0003_1_tinohs.jpg",
    "https://res.cloudinary.com/dxyrb68wn/image/upload/v1749689975/1000025805_1_t8yuif.jpg",
    "https://res.cloudinary.com/dxyrb68wn/image/upload/v1749690452/Screenshot_20250416-001145_1_nale6n.png",
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg border-b border-red-900 py-6 text-center">
        <h1 className="text-4xl font-extrabold">Iznaur Alimkhanov</h1>
        <p className="text-xl mt-2 opacity-90">
          Zertifizierter Personal Trainer & Fitness Coach
        </p>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-gray-800 shadow-md sticky top-0 z-10 border-t border-red-900">
        <ul className="flex justify-center space-x-6 py-3">
          <li>
            <button
              onClick={() => setActiveTab("about")}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeTab === "about"
                  ? "bg-red-700 text-white"
                  : "hover:bg-gray-700 text-gray-300"
              }`}
            >
              Über mich
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("gallery")}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeTab === "gallery"
                  ? "bg-red-700 text-white"
                  : "hover:bg-gray-700 text-gray-300"
              }`}
            >
              Galerie
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeTab === "contact"
                  ? "bg-red-700 text-white"
                  : "hover:bg-gray-700 text-gray-300"
              }`}
            >
              Kontakt
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* About Section */}
        {activeTab === "about" && (
          <section className="mb-12 animate-fadeIn">
            <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
              Über mich
            </h2>
            <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md border border-red-900">
              <p className="text-lg leading-relaxed mb-4">
                Hallo! Ich bin Iznaur Alimkhanov, ein leidenschaftlicher und
                zertifizierter Personal Trainer mit über 5 Jahren Erfahrung im
                Bereich Krafttraining und Ernährung.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Mein Ziel ist es, Menschen dabei zu helfen, ihre persönlichen
                Ziele zu erreichen – ob Muskelaufbau, Gewichtsreduktion oder
                einfach mehr Vitalität und Energie im Alltag.
              </p>
              <p className="text-lg leading-relaxed">
                Jeder Mensch ist einzigartig, deshalb erstelle ich individuelle
                Trainings- und Ernährungspläne, die perfekt auf deine
                Bedürfnisse abgestimmt sind.
              </p>
            </div>
          </section>
        )}

        {/* Gallery Section */}
        {activeTab === "gallery" && (
          <section className="mb-12 animate-fadeIn">
            <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
              Meine Bilder
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-red-900"
                >
                  <img
                    src={img}
                    alt={`Personal Training ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeTab === "contact" && (
          <section className="mb-12 animate-fadeIn">
            <h2 className="text-3xl font-bold mb-6 text-center text-red-500">
              Kontaktiere Mich
            </h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg mb-10">
                Klicke unten, um mich direkt per WhatsApp kontaktieren.
              </p>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/4917621383011"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 bg-red-700 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-all hover:scale-105"
              >
                <span className="w-5 h-5 rounded-full bg-white"></span>
                <span className="text-lg">WhatsApp Nachricht senden</span>
              </a>

              {/* Optional: Social Media Below WhatsApp Button */}
              <div className="mt-16">
                <p className="text-lg mb-6">Oder folge mir auf:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                  {socialMediaLinks.map((platform, index) => (
                    <a
                      key={index}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition-all duration-300 border border-red-900 hover:border-red-600 hover:bg-gray-700"
                    >
                      <span className="w-5 h-5 rounded-full bg-red-500"></span>
                      <span className="font-medium">{platform.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 border-t border-red-900">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Iznaur Alimkhanov | Alle Rechte vorbehalten</p>
        </div>
      </footer>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
