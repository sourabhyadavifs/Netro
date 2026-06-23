import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  User, Briefcase, Mail, Phone, Globe, Linkedin, Twitter, 
  Github, Calendar, CheckCircle, ArrowRight, ShieldCheck, Search
} from "lucide-react";

interface CardPreset {
  id: string;
  tabLabel: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  email: string;
  phone: string;
  website: string;
  themeColor: string;
  accentClass: string;
  badge?: string;
  socials: { icon: any; label: string; value: string }[];
  customWidget?: React.ReactNode;
}

export default function InteractiveShowcase() {
  const presets: CardPreset[] = [
    {
      id: "personal",
      tabLabel: "Personal Card",
      name: "Olivia West",
      role: "Lead UX Designer",
      company: "Westervelt Design",
      bio: "Crafting delightful interfaces and modern visual identities. Passionate about fluid motion and minimal designs.",
      email: "olivia.west@westervelt.io",
      phone: "+1 (415) 555-8291",
      website: "westervelt.design",
      themeColor: "#10B981",
      accentClass: "bg-emerald-500",
      badge: "Creative Folio",
      socials: [
        { icon: Linkedin, label: "LinkedIn", value: "@oliviaux" },
        { icon: Twitter, label: "Twitter", value: "@olivia_codes" },
        { icon: Github, label: "GitHub", value: "oliviawest-dev" }
      ],
      customWidget: (
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-xs space-y-1">
          <p className="font-semibold text-gray-800">Featured Case Study</p>
          <div className="flex items-center justify-between text-gray-500 hover:text-emerald-500 transition-colors cursor-pointer">
            <span>Stripe Checkout Redesign 2026</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      )
    },
    {
      id: "sales",
      tabLabel: "Sales Card",
      name: "Marcus Vance",
      role: "VP of Enterprise Growth",
      company: "Outreach.io",
      bio: "Helping Fortune 500 companies scale revenue pipelines and optimize outreach. Let's find your growth levers.",
      email: "marcus.vance@outreach.io",
      phone: "+1 (202) 555-0143",
      website: "outreach.io/solutions",
      themeColor: "#4F46E5",
      accentClass: "bg-indigo-600",
      badge: "Book Meeting",
      socials: [
        { icon: Linkedin, label: "LinkedIn", value: "@marcusgrowth" },
        { icon: Twitter, label: "Twitter", value: "@mv_leads" }
      ],
      customWidget: (
        <button className="w-full bg-indigo-600 text-white rounded-xl py-2 px-3 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-xs">
          <Calendar className="w-4 h-4" />
          <span>Schedule 15m Introduction Call</span>
        </button>
      )
    },
    {
      id: "recruiter",
      tabLabel: "Recruiter Card",
      name: "Sarah Jenkins",
      role: "Talent Acquisition Director",
      company: "Stripe",
      bio: "Seeking elite engineers, product leaders, and designers worldwide. Join our team and build the future of GDP.",
      email: "sjenkins@stripe.com",
      phone: "+1 (650) 555-7382",
      website: "stripe.com/careers",
      themeColor: "#EC4899",
      accentClass: "bg-pink-500",
      badge: "We're Hiring!",
      socials: [
        { icon: Linkedin, label: "LinkedIn", value: "@sarahrecruit" },
        { icon: Github, label: "GitHub", value: "stripe-talent" }
      ],
      customWidget: (
        <div className="bg-pink-50/50 border border-pink-100 rounded-xl p-3 text-xs space-y-2">
          <div className="flex items-center gap-1.5 font-semibold text-pink-700">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse"></span>
            <span>Active Roles (Remote/Global)</span>
          </div>
          <ul className="space-y-1 text-gray-600">
            <li className="flex items-center justify-between text-[11px] hover:underline cursor-pointer">
              <span>• Principal React Developer</span>
              <span className="text-pink-600">Apply</span>
            </li>
            <li className="flex items-center justify-between text-[11px] hover:underline cursor-pointer">
              <span>• Senior Infrastructure Engineer</span>
              <span className="text-pink-600">Apply</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: "executive",
      tabLabel: "Executive Card",
      name: "Arthur Pendelton",
      role: "Chief Executive Officer",
      company: "Apex Enterprises",
      bio: "Investing in future technologies, building enterprise-grade systems, and supporting global leadership summits.",
      email: "ap@apex-enterprises.com",
      phone: "+1 (212) 555-9000",
      website: "apex-enterprises.com",
      themeColor: "#111827",
      accentClass: "bg-gray-900",
      badge: "Investor Portal",
      socials: [
        { icon: Linkedin, label: "LinkedIn", value: "@arthurceo" },
        { icon: Twitter, label: "Twitter", value: "@ap_apex" }
      ],
      customWidget: (
        <div className="bg-amber-50/40 border border-amber-200/50 rounded-xl p-3 text-xs">
          <div className="flex items-center gap-1.5 font-semibold text-amber-800 mb-1">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>Executive Trust Verified</span>
          </div>
          <p className="text-[11px] text-gray-500">Corporate keys verified with secure SAML, end-to-end audit tracking enabled.</p>
        </div>
      )
    },
    {
      id: "enterprise",
      tabLabel: "Enterprise Card",
      name: "Netro Corporate",
      role: "Global Account Director",
      company: "Microsoft Partner",
      bio: "Unifying branding, communication, and directory assets across all Microsoft account divisions. Integrated with Netro Enterprise.",
      email: "netro.enterprise@microsoft.com",
      phone: "+1 (800) 555-0199",
      website: "microsoft.com/partners",
      themeColor: "#10B981",
      accentClass: "bg-emerald-500",
      badge: "SSO Verified",
      socials: [
        { icon: Linkedin, label: "LinkedIn", value: "@microsoft_enterprise" }
      ],
      customWidget: (
        <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 text-xs space-y-1">
          <p className="font-semibold text-emerald-800">Company-Wide Directory</p>
          <p className="text-[11px] text-emerald-600">Locked assets, verified brand hex, automated CRM contact sync to Salesforce Hub.</p>
        </div>
      )
    }
  ];

  const [activeTab, setActiveTab] = useState<string>("personal");
  const activePreset = presets.find((p) => p.id === activeTab) || presets[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="showcase-grid">
      {/* LEFT: Selector Tabs with Descriptions */}
      <div className="lg:col-span-5 space-y-6" id="showcase-selectors">
        <div className="space-y-3">
          <span className="text-emerald-500 font-display font-semibold tracking-wider text-sm uppercase">
            Tailored Experiences
          </span>
          <h3 className="font-display font-bold text-3xl md:text-4xl text-gray-900 tracking-tight leading-none">
            Designed for every professional path
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            Whether you are a scaling startup founder, a recruiter talent-hunting on the move, or managing standard branding for 5,000 employees. Netro fits you seamlessly.
          </p>
        </div>

        {/* Tab Buttons Stack */}
        <div className="flex flex-col gap-2.5" id="showcase-tabs-stack">
          {presets.map((preset) => {
            const isSelected = activeTab === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => setActiveTab(preset.id)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                  isSelected
                    ? "bg-white border-gray-200 shadow-md ring-1 ring-emerald-500/10"
                    : "bg-gray-50/50 border-transparent hover:bg-gray-50 hover:border-gray-100"
                }`}
                id={`tab-select-${preset.id}`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      isSelected ? "scale-125" : "scale-100"
                    }`}
                    style={{ backgroundColor: preset.themeColor }}
                  />
                  <div>
                    <p className="font-display font-semibold text-gray-900 text-sm">
                      {preset.tabLabel}
                    </p>
                    <p className="text-xs text-gray-500 font-sans mt-0.5">
                      {preset.role} • {preset.company}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  className={`w-4 h-4 text-gray-400 transition-all group-hover:translate-x-1 ${
                    isSelected ? "text-emerald-500 translate-x-1" : ""
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT: High Fidelity Phone Mockup displaying the digital card */}
      <div className="lg:col-span-7 flex justify-center" id="showcase-phone-column">
        <div className="relative w-full max-w-[340px]" id="phone-mockup-wrapper">
          {/* Subtle Glow Behind the phone */}
          <div className="absolute -inset-4 bg-emerald-100/40 rounded-5xl blur-2xl -z-10 animate-pulse duration-[8000ms]" />

          {/* iPhone Mockup Frame */}
          <div className="relative border-[8px] border-gray-900 rounded-[44px] bg-white shadow-2xl overflow-hidden aspect-[9/18.5] flex flex-col">
            {/* Speaker & Sensor Island (Dynamic Island Look) */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5.5 bg-gray-900 rounded-full z-30 flex items-center justify-end px-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
            </div>

            {/* In-app Screen Content */}
            <div className="flex-1 overflow-y-auto no-scrollbar pt-10 px-4 pb-5 flex flex-col bg-gray-50 select-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePreset.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4 flex flex-col flex-1"
                >
                  {/* Virtual Business Card Cardholder */}
                  <div className="bg-white rounded-3xl border border-gray-100 shadow-xs overflow-hidden relative">
                    {/* Header accent strip */}
                    <div
                      className="h-16 relative"
                      style={{ backgroundColor: activePreset.themeColor }}
                    >
                      {activePreset.badge && (
                        <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase">
                          {activePreset.badge}
                        </span>
                      )}
                    </div>

                    {/* Headshot Avatar placeholder */}
                    <div className="px-4 -mt-8 flex justify-between items-end mb-3">
                      <div className="w-16 h-16 rounded-2xl bg-gray-200 border-4 border-white shadow-xs overflow-hidden flex items-center justify-center text-gray-400">
                        <User className="w-8 h-8" />
                      </div>
                      
                      {/* Interactive Save contact icon */}
                      <button className="bg-gray-900 text-white p-2 rounded-xl text-[10px] font-semibold hover:bg-gray-800 transition-colors shadow-xs">
                        Save Contact
                      </button>
                    </div>

                    {/* Member Info */}
                    <div className="px-4 pb-4 space-y-1">
                      <h4 className="font-display font-bold text-gray-900 text-lg leading-tight flex items-center gap-1">
                        {activePreset.name}
                        {activePreset.id === "enterprise" && (
                          <CheckCircle className="w-4 h-4 text-emerald-500 fill-emerald-500/10" />
                        )}
                      </h4>
                      <p className="text-xs text-gray-500 font-medium">
                        {activePreset.role}
                      </p>
                      <p className="text-xs font-semibold text-gray-700">
                        {activePreset.company}
                      </p>
                      <p className="text-[11px] text-gray-500 leading-relaxed pt-1 border-t border-gray-50 mt-1.5">
                        {activePreset.bio}
                      </p>
                    </div>
                  </div>

                  {/* Contact Info Widget List */}
                  <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-xs space-y-2">
                    <div className="flex items-center gap-2.5 text-xs text-gray-600 hover:text-gray-900 transition-colors">
                      <Mail className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="truncate">{activePreset.email}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-gray-600 hover:text-gray-900 transition-colors">
                      <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span>{activePreset.phone}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-gray-600 hover:text-gray-900 transition-colors">
                      <Globe className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span>{activePreset.website}</span>
                    </div>
                  </div>

                  {/* Social Channels Button Cluster */}
                  <div className="grid grid-cols-2 gap-2" id="phone-social-links">
                    {activePreset.socials.map((soc, i) => {
                      const Icon = soc.icon;
                      return (
                        <div
                          key={i}
                          className="bg-white border border-gray-100 rounded-xl p-2.5 flex items-center gap-2 hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          <Icon className="w-4 h-4 text-gray-600 shrink-0" />
                          <div className="min-w-0">
                            <p className="text-[9px] text-gray-400 font-sans leading-none">{soc.label}</p>
                            <p className="text-[10px] text-gray-700 font-medium truncate mt-0.5">{soc.value}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Custom Embeds (such as Calendar widget or Job listings) */}
                  {activePreset.customWidget}

                  {/* QR Scan code preview footer */}
                  <div className="mt-auto bg-white border border-gray-100 rounded-2xl p-3 flex items-center justify-between gap-3">
                    <div className="space-y-0.5">
                      <p className="text-[10px] text-gray-400 font-sans">SCAN TO SAVE</p>
                      <p className="text-xs font-bold text-gray-800 leading-tight">Instant Network Card</p>
                    </div>
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 100 100" className="w-8 h-8 fill-white">
                        {/* High density mockup QR symbol */}
                        <path d="M0 0h30v30H0zm40 0h20v20H40zM70 0h30v30H70zM0 40h20v20H0zm50 40h20v20H50zm20-40h30v30H70zM0 70h30v30H0zm40 10h10v10H40zm40 10h20v10H80z" />
                        <rect x="10" y="10" width="10" height="10" />
                        <rect x="80" y="10" width="10" height="10" />
                        <rect x="10" y="80" width="10" height="10" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
