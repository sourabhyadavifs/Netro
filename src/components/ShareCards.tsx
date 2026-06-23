import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  QrCode, Smartphone, Mail, LayoutGrid, CreditCard, 
  Tv, Watch, Library, ArrowLeft, ArrowRight, ArrowRightCircle
} from "lucide-react";

interface ShareMethod {
  id: number;
  title: string;
  description: string;
  icon: any;
  accent: string;
  badge?: string;
  visualMockup: React.ReactNode;
}

export default function ShareCards() {
  const methods: ShareMethod[] = [
    {
      id: 1,
      title: "QR in App",
      description: "No clutter. No friction. Open the Netro app and share your professional info in seconds.",
      icon: QrCode,
      accent: "from-emerald-500/10 to-teal-500/10",
      badge: "Most Popular",
      visualMockup: (
        <div className="relative w-full h-28 bg-emerald-50 rounded-xl overflow-hidden flex items-center justify-center border border-emerald-100/50">
          <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <QrCode className="w-16 h-16 text-emerald-600 animate-pulse" />
        </div>
      )
    },
    {
      id: 2,
      title: "NFC Cards",
      description: "Link your digital profile to premium matte, metallic or sustainable wood NFC cards for ultimate impact.",
      icon: Smartphone,
      accent: "from-blue-500/10 to-indigo-500/10",
      badge: "Premium Wood & Steel",
      visualMockup: (
        <div className="relative w-full h-28 bg-blue-50 rounded-xl overflow-hidden flex items-center justify-center border border-blue-100/50">
          <div className="w-24 h-15 bg-slate-900 rounded-lg shadow-md flex flex-col justify-between p-2 text-white border border-white/10 rotate-6 transform translate-y-2">
            <span className="text-[7px] tracking-widest font-bold">NETRO PRO</span>
            <div className="flex justify-between items-center">
              <span className="text-[6px]">Alex Rivera</span>
              <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center text-[5px]">)))</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Email Signatures",
      description: "Extend your corporate brand into every outbound email with custom-generated linked signatures.",
      icon: Mail,
      accent: "from-purple-500/10 to-pink-500/10",
      visualMockup: (
        <div className="relative w-full h-28 bg-purple-50 rounded-xl overflow-hidden flex flex-col justify-between p-3 border border-purple-100/50 text-[8px] text-gray-500">
          <div className="flex items-center gap-1.5 border-b border-purple-100 pb-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
          </div>
          <div className="space-y-1">
            <p className="font-bold text-gray-800">Best regards,</p>
            <p className="font-semibold text-purple-700">Sarah Jenkins</p>
            <p>Talent Acquisition Director | Stripe</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Widgets",
      description: "Put your QR code and top social channels directly on your phone's home screen for swift access.",
      icon: LayoutGrid,
      accent: "from-orange-500/10 to-amber-500/10",
      badge: "iOS & Android",
      visualMockup: (
        <div className="relative w-full h-28 bg-orange-50 rounded-xl overflow-hidden flex items-center justify-center gap-2 border border-orange-100/50">
          <div className="w-14 h-14 bg-white rounded-2xl shadow-xs border border-orange-200/50 p-1 flex flex-col items-center justify-center">
            <QrCode className="w-7 h-7 text-orange-600" />
            <span className="text-[7px] font-bold text-gray-500 mt-1">Netro</span>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Wallet Integration",
      description: "You're always one swipe away from sharing. Access your card dynamically from Apple or Google Wallet.",
      icon: CreditCard,
      accent: "from-pink-500/10 to-rose-500/10",
      visualMockup: (
        <div className="relative w-full h-28 bg-pink-50 rounded-xl overflow-hidden flex items-center justify-center border border-pink-100/50">
          <div className="w-24 h-16 bg-gradient-to-br from-gray-800 to-black rounded-lg shadow-md p-2 text-white flex flex-col justify-between -rotate-3 transform translate-y-1">
            <div className="flex justify-between items-center">
              <span className="text-[7px] font-bold text-emerald-400">Apple Wallet</span>
              <span className="text-[6px]">Olivia West</span>
            </div>
            <div className="w-6 h-6 bg-white rounded-xs p-0.5 self-end">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-black"><path d="M0 0h40v40H0zm60 0h40v40H60zM0 60h40v40H0zm60 60h40v40H60z" /></svg>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Virtual Backgrounds",
      description: "Extend your corporate identity into Zoom, Teams or Meet. Display a sleek branded QR alongside your face.",
      icon: Tv,
      accent: "from-indigo-500/10 to-violet-500/10",
      badge: "Zoom / Teams",
      visualMockup: (
        <div className="relative w-full h-28 bg-indigo-50 rounded-xl overflow-hidden flex items-center justify-center border border-indigo-100/50">
          <div className="w-32 h-20 bg-gray-900 rounded-sm shadow-xs border border-white/10 p-1.5 flex justify-between items-end">
            <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-white text-[10px]">👤</div>
            <div className="w-8 h-8 bg-white rounded-xs p-1 flex items-center justify-center">
              <QrCode className="w-6 h-6 text-black" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Apple Watch",
      description: "On the go? Share your card straight from your wrist. Perfect for casual networking at gyms or sports clubs.",
      icon: Watch,
      accent: "from-red-500/10 to-orange-500/10",
      visualMockup: (
        <div className="relative w-full h-28 bg-red-50 rounded-xl overflow-hidden flex items-center justify-center border border-red-100/50">
          <div className="w-12 h-16 bg-gray-950 rounded-2xl shadow-xs border border-gray-800 p-1 flex flex-col justify-between items-center text-white">
            <div className="w-1 h-1 rounded-full bg-red-500" />
            <QrCode className="w-6 h-6 text-white" />
            <span className="text-[5px] text-gray-400">10:28</span>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Smart QR Stands",
      description: "Place beautiful acrylic or smart wooden QR displays on retail checkout desks or exhibition counters.",
      icon: Library,
      accent: "from-teal-500/10 to-emerald-500/10",
      badge: "Retail / Events",
      visualMockup: (
        <div className="relative w-full h-28 bg-teal-50 rounded-xl overflow-hidden flex items-center justify-center border border-teal-100/50">
          <div className="w-14 h-20 bg-gray-100 border border-gray-300 rounded-md shadow-md flex flex-col justify-between items-center p-2 transform rotate-6 translate-y-1">
            <span className="text-[6px] font-bold text-gray-500">Scan to Connect</span>
            <QrCode className="w-7 h-7 text-gray-800" />
            <div className="w-10 h-1 bg-gray-300 rounded-full" />
          </div>
        </div>
      )
    }
  ];

  // Carousel scroll controls
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= methods.length - 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? methods.length - 3 : prev - 1));
  };

  return (
    <div className="space-y-8" id="share-cards-root">
      {/* Header Carousel Buttons (matches the PDF mockups) */}
      <div className="flex justify-between items-end" id="share-header">
        <div className="space-y-2 text-left">
          <span className="text-emerald-500 font-display font-semibold tracking-wider text-sm uppercase">
            Scan It. Tap It. Link It.
          </span>
          <h3 className="font-display font-bold text-3xl md:text-4xl text-gray-900 tracking-tight">
            One account. Multiple ways to connect.
          </h3>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <button 
            onClick={prevSlide}
            className="w-11 h-11 rounded-full border border-gray-200 bg-white hover:border-emerald-500 text-gray-600 hover:text-emerald-500 transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Previous"
            id="share-prev-btn"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-11 h-11 rounded-full border border-gray-200 bg-white hover:border-emerald-500 text-gray-600 hover:text-emerald-500 transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Next"
            id="share-next-btn"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Grid of Cards (highly responsive, transforms into full bento structure) */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" 
        id="share-methods-grid"
      >
        {methods.map((method) => {
          const IconComponent = method.icon;
          return (
            <motion.div
              key={method.id}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`bg-white border border-gray-100 rounded-3xl p-5 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-gray-200 transition-shadow duration-300 relative group`}
              id={`share-card-${method.id}`}
            >
              {/* Badge */}
              {method.badge && (
                <span className="absolute top-4 right-4 bg-emerald-50 text-emerald-600 text-[9px] font-extrabold px-2 py-0.5 rounded-full tracking-wider uppercase">
                  {method.badge}
                </span>
              )}

              {/* Icon Frame */}
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${method.accent} flex items-center justify-center text-gray-800 mb-4`}>
                <IconComponent className="w-5 h-5 text-gray-700" />
              </div>

              {/* Text Fields */}
              <div className="space-y-1.5 text-left mb-5">
                <h4 className="font-display font-semibold text-gray-900 text-lg group-hover:text-emerald-600 transition-colors">
                  {method.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {method.description}
                </p>
              </div>

              {/* Visual Interactive Mockup inside card */}
              <div className="mt-auto">
                {method.visualMockup}
                <div className="flex items-center gap-1.5 text-emerald-500 font-semibold text-[11px] mt-4 hover:underline cursor-pointer">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
