import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  User, Briefcase, Mail, Phone, Globe, Sparkles, Check, 
  Linkedin, Twitter, Github, Download, QrCode, CreditCard, ExternalLink, RefreshCw
} from "lucide-react";
import { BusinessCardData } from "../types";

export default function InteractiveCardBuilder() {
  const [formData, setFormData] = useState<BusinessCardData>({
    name: "Alex Rivera",
    role: "Senior Growth Manager",
    company: "Acme Corp",
    email: "alex@acme.co",
    phone: "+1 (555) 382-9012",
    website: "acme.co/growth",
    bio: "Driving scalable enterprise expansion & growth analytics. Open to networking with sales & product teams.",
    themeColor: "#10B981",
    socials: {
      linkedin: "alex-rivera-growth",
      twitter: "alex_rivera",
      github: "alexr-growth"
    }
  });

  const [cardTemplate, setCardTemplate] = useState<"modern" | "classic" | "minimal">("modern");
  const [isSaved, setIsSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        console.warn("Clipboard API not available");
      }
    } catch (err) {
      console.warn("Clipboard access blocked or failed", err);
    }
  };

  const handlePrint = () => {
    try {
      window.print();
    } catch (err) {
      console.warn("Printing is not supported in this environment", err);
    }
  };

  const colors = [
    { name: "Emerald", hex: "#10B981" },
    { name: "Indigo", hex: "#6366F1" },
    { name: "Dark Slate", hex: "#111827" },
    { name: "Vibrant Orange", hex: "#f95716" },
    { name: "Crimson", hex: "#EF4444" },
    { name: "Orchid Purple", hex: "#A855F7" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name.startsWith("socials.")) {
      const socialKey = name.split(".")[1];
      setFormData(prev => ({
        ...prev,
        socials: {
          ...prev.socials,
          [socialKey]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const selectColor = (hex: string) => {
    setFormData(prev => ({ ...prev, themeColor: hex }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
    }, 3500);
  };

  // Generate a mock path value for QR code based on user info to simulate dynamic QR rendering!
  const getDynamicQRData = () => {
    const rawString = `${formData.name}|${formData.role}|${formData.company}|${formData.email}`;
    // Simple hashed deterministic SVG path representation for varied look based on user input
    let hash = 0;
    for (let i = 0; i < rawString.length; i++) {
      hash = (hash << 5) - hash + rawString.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }
    const seed = Math.abs(hash) % 4;
    
    if (seed === 0) {
      return "M10 10h20v20H10zm40 0h10v10H50zm20 0h20v20H70zM10 40h10v10H10zm40 10h20v20H50zm20-40h20v20H70zM10 70h20v20H10zm40 10h10v10H40zm40 10h20v10H80z M20 20h10v10H20zm50 0h10v10H70zm-50 50h10v10H20z";
    } else if (seed === 1) {
      return "M10 10h25v25H10zm45 0h15v10H55zm15 0h15v25H70zM10 45h15v15H10zm40 5h20v20H50zm25-45h15v25H75zM10 70h25v25H10zm45 15h10v10H55zm15 0h15v10H70z M20 20h10v10H20zm50 0h10v10H70zm-50 50h10v10H20z";
    } else if (seed === 2) {
      return "M10 10h20v20H10zm40 0h20v10H40zm30 0h20v20H70zM10 40h20v20H10zm40 10h10v10H40zm20-40h30v30H70zM0 70h30v30H0zm40 10h10v10H40zm40 10h20v10H80z M15 15h10v10H15zm55 0h10v10H70zm-55 55h10v10H15z";
    } else {
      return "M0 0h30v30H0zm40 0h20v20H40zM70 0h30v30H70zM0 40h20v20H0zm50 80h20v20H50zm20-40h30v30H70zM0 70h30v30H0zm40 10h10v10H40zm40 10h20v10H80z M10 10h10v10H10zm70 0h10v10H80zm-70 70h10v10H10z";
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-xl max-w-5xl mx-auto" id="card-builder-root">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* LEFT PANEL: Form Editor (lg:col-span-6) */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6" id="builder-editor">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-emerald-500 font-semibold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Interactive Card Customizer</span>
            </div>
            <h4 className="font-display font-bold text-2xl text-gray-900 tracking-tight">
              Create your dynamic digital card
            </h4>
            <p className="text-gray-500 text-xs">
              Personalize colors, contact cards, social networks and instantly view the interactive card & responsive QR code.
            </p>
          </div>

          <form onSubmit={handleSave} className="space-y-4 text-left">
            {/* Name and Title Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Alex Rivera"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-sm font-medium text-gray-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                  Job Title
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    placeholder="e.g. Lead Developer"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-sm font-medium text-gray-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Company & Bio */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g. Stripe"
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-4 text-sm font-medium text-gray-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                  Website
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="e.g. stripe.com"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-sm font-medium text-gray-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. alex@stripe.com"
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-sm font-medium text-gray-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +1 (555) 0199"
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-sm font-medium text-gray-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Description Bio */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                About / Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows={2}
                maxLength={180}
                placeholder="Write a brief, punchy introduction..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2.5 px-4 text-sm font-medium text-gray-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
              />
            </div>

            {/* Color Theme Selector */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                Brand Palette
              </label>
              <div className="flex flex-wrap gap-2.5" id="brand-colors-list">
                {colors.map((color) => {
                  const isSelected = formData.themeColor === color.hex;
                  return (
                    <button
                      key={color.hex}
                      type="button"
                      onClick={() => selectColor(color.hex)}
                      style={{ backgroundColor: color.hex }}
                      className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110 shadow-xs relative"
                      title={color.name}
                    >
                      {isSelected && (
                        <Check className="w-4 h-4 text-white drop-shadow-md" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Template Selector */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                Card Layout
              </label>
              <div className="grid grid-cols-3 gap-2" id="layout-selectors-row">
                {(["modern", "classic", "minimal"] as const).map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => setCardTemplate(style)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold capitalize border transition-all cursor-pointer ${
                      cardTemplate === style
                        ? "bg-gray-900 border-gray-900 text-white"
                        : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-2 flex items-center gap-3">
              <button
                type="submit"
                className="flex-1 bg-emerald-500 text-white font-semibold py-3 px-6 rounded-xl hover:bg-emerald-600 transition-all shadow-md shadow-emerald-500/10 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSaved ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Card Created & Active!</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 animate-pulse" />
                    <span>Generate My Digital Card</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT PANEL: Live Visual Preview Card & QR (lg:col-span-6) */}
        <div className="lg:col-span-6 bg-gray-50 rounded-2xl p-6 flex flex-col justify-between border border-gray-100" id="builder-preview">
          
          {/* Card Header Selector */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5" />
              <span>Interactive Live Preview</span>
            </span>
            <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-full px-2.5 py-1 text-[10px] text-emerald-600 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span>LIVE INTEGRATION</span>
            </div>
          </div>

          {/* Dynamic Card Render */}
          <div className="flex-1 flex flex-col justify-center items-center py-4">
            <motion.div
              layout
              className={`w-full max-w-sm rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white transition-all duration-300 relative`}
            >
              {/* Card Header Area */}
              {cardTemplate !== "minimal" ? (
                <div
                  className="h-28 relative transition-colors duration-300"
                  style={{ backgroundColor: formData.themeColor }}
                >
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-xs rounded-full px-2.5 py-0.5 text-[9px] font-bold text-white tracking-wider uppercase">
                    {formData.company}
                  </div>
                </div>
              ) : (
                <div className="h-4" />
              )}

              {/* Card Body */}
              <div className="p-5 pt-0 relative flex flex-col sm:flex-row gap-4 items-start">
                
                {/* Left profile and QR representation */}
                <div className="flex-1 min-w-0 space-y-4">
                  {/* Title Info */}
                  <div className={`${cardTemplate === "minimal" ? "mt-2" : "-mt-8"}`}>
                    <div className="w-14 h-14 rounded-xl bg-gray-100 border-2 border-white shadow-xs overflow-hidden flex items-center justify-center text-gray-400 mb-2">
                      <User className="w-7 h-7" />
                    </div>
                    <h5 className="font-display font-bold text-gray-900 text-base tracking-tight leading-none">
                      {formData.name || "Unnamed Professional"}
                    </h5>
                    <p className="text-xs text-gray-500 font-sans mt-1">
                      {formData.role || "Job Title"}
                    </p>
                    <p
                      className="text-xs font-semibold transition-colors duration-300 mt-0.5"
                      style={{ color: formData.themeColor }}
                    >
                      {formData.company || "Company"}
                    </p>
                  </div>

                  {/* Body bio */}
                  <p className="text-[11px] text-gray-500 leading-relaxed font-sans max-w-xs">
                    {formData.bio || "No profile bio provided yet."}
                  </p>

                  {/* Contact listings */}
                  <div className="space-y-1.5 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="truncate">{formData.email || "no-email@company.com"}</span>
                    </div>
                    {formData.phone && (
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <span>{formData.phone}</span>
                      </div>
                    )}
                    {formData.website && (
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Globe className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <span className="truncate">{formData.website}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right side QR Code Frame */}
                <div className="sm:self-stretch flex flex-col justify-between items-center sm:items-end shrink-0 gap-4">
                  <div className="bg-white border border-gray-100 rounded-2xl p-2.5 shadow-xs flex flex-col items-center">
                    <span className="text-[8px] font-bold text-gray-400 mb-1">SCAN CARD</span>
                    {/* SVG Vector QR Code dynamically responding to inputs */}
                    <svg viewBox="0 0 100 100" className="w-20 h-20 fill-gray-900">
                      <path d={getDynamicQRData()} />
                    </svg>
                  </div>
                  
                  {/* Dynamic Template indicator */}
                  <div className="text-[9px] font-bold tracking-wider px-2 py-1 bg-gray-100 text-gray-500 rounded-md uppercase">
                    {cardTemplate}
                  </div>
                </div>

              </div>

              {/* Minimal Accent Bar */}
              {cardTemplate === "minimal" && (
                <div className="h-1.5 w-full absolute bottom-0 left-0" style={{ backgroundColor: formData.themeColor }} />
              )}
            </motion.div>
          </div>

          {/* Builder Utility Bar */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center gap-1.5 text-[11px]">
              <QrCode className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>NFC / Apple Wallet / QR Ready</span>
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrint}
                className="flex items-center gap-1 hover:text-gray-900 cursor-pointer transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export PDF</span>
              </button>
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1 hover:text-gray-900 cursor-pointer transition-colors relative"
              >
                {copied ? (
                  <span className="text-emerald-500 font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    Copied!
                  </span>
                ) : (
                  <>
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Copy Payload</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
