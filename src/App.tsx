import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, X, Check, ArrowRight, ShieldCheck, Sparkles, QrCode, 
  Smartphone, Mail, Lock, Settings, Zap, Users, Layers, Activity, 
  Database, RefreshCw, Calendar, CheckCircle, ExternalLink, Download, 
  Tv, Watch, Library, Award, ChevronDown, CheckSquare, User,
  Linkedin, Twitter, Github
} from "lucide-react";

// Import custom sub-components
import NetroLogo from "./components/NetroLogo";
import AnimatedCounter from "./components/AnimatedCounter";
import FAQAccordion from "./components/FAQAccordion";
import InteractiveShowcase from "./components/InteractiveShowcase";
import InteractiveCardBuilder from "./components/InteractiveCardBuilder";
import ShareCards from "./components/ShareCards";
import Testimonials from "./components/Testimonials";
import Marquee from "./components/Marquee";
import { PricingPlan } from "./types";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  // Nav links
  const navLinks = [
    { label: "Solutions", href: "#solutions" },
    { label: "Teams", href: "#teams" },
    { label: "Enterprise", href: "#enterprise" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" }
  ];

  // Trusted By partners (clean text representations + modern style)
  const partners = [
    { name: "Microsoft" },
    { name: "Google" },
    { name: "Amazon" },
    { name: "Meta" },
    { name: "Nike" },
    { name: "Adobe" },
    { name: "HubSpot" },
    { name: "Salesforce" }
  ];

  // Pricing Plans
  const plans: PricingPlan[] = [
    {
      name: "Starter",
      price: "0",
      period: "month",
      description: "Perfect for independent professionals to digitize their identity.",
      features: [
        "1 Active Digital Business Card",
        "Standard Dynamic QR Code",
        "Social Media & Contact Links",
        "Apple & Google Wallet Integration",
        "Standard Client-side Contact Storage"
      ],
      ctaText: "Get Started Free",
      isPopular: false,
      color: "border-gray-100 bg-white"
    },
    {
      name: "Pro",
      price: "299",
      period: "month",
      description: "Advanced branding, custom files, meeting widgets, and rich leads capture.",
      features: [
        "Unlimited Active Cards",
        "Custom Logo & Branding control",
        "Wood or Matte Plastic NFC Card Companion",
        "Embedded Bookings (Calendly, Cal.com)",
        "Premium Wallet Passes & Watch Apps",
        "Advanced Analytics & Tracking logs",
        "Priority Customer Support (24/7)"
      ],
      ctaText: "Upgrade to Pro",
      isPopular: true,
      color: "border-emerald-500 bg-white ring-2 ring-emerald-500/10"
    },
    {
      name: "Business",
      price: "Custom",
      period: "org",
      description: "Enterprise-grade controls, automated directories, and automated CRM sync.",
      features: [
        "Everything in Pro, unlimited seats",
        "SAML Single Sign-On (SSO) & Azure AD sync",
        "Centralized Admin Console & Roles",
        "Bi-directional CRM sync (Salesforce, HubSpot)",
        "Custom domain mapping (card.yourco.com)",
        "SOC 2 compliance logs & Dedicated Support Manager",
        "Invoiced Billing & SLA guarantees"
      ],
      ctaText: "Contact Sales",
      isPopular: false,
      color: "border-gray-100 bg-white"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafc] text-gray-900 font-sans selection:bg-emerald-500/15 selection:text-emerald-700 overflow-x-hidden antialiased" id="netro-app-container">
      
      {/* ==================== NAVBAR ==================== */}
      <header className="sticky top-0 z-50 transition-all duration-300" id="netro-header">
        <div className="glass border-b border-gray-200/50">
          <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between" id="nav-inner-container">
            {/* Left Logo */}
            <a href="#" className="focus:outline-hidden" id="nav-logo-link">
              <NetroLogo size={36} />
            </a>

            {/* Center navigation links */}
            <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-500 hover:text-gray-900 font-medium text-sm transition-colors duration-200"
                  id={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right CTAs */}
            <div className="hidden md:flex items-center gap-4" id="desktop-ctas">
              <a
                href="#builder-section"
                className="text-gray-600 hover:text-gray-900 font-semibold text-sm transition-colors"
                id="login-btn"
              >
                Log In
              </a>
              <a
                href="#builder-section"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-emerald-500/10 flex items-center gap-1.5 cursor-pointer"
                id="create-card-btn"
              >
                <span>Create My Card</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-600 hover:text-gray-900 p-2 focus:outline-hidden"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-gray-100 shadow-lg overflow-hidden absolute top-18 left-0 right-0 z-40"
              id="mobile-nav-panel"
            >
              <div className="px-6 py-5 space-y-4 flex flex-col text-left">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-600 hover:text-gray-950 font-semibold text-base py-1"
                    id={`mobile-nav-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                ))}
                <hr className="border-gray-100" />
                <div className="flex flex-col gap-3 pt-2">
                  <a
                    href="#builder-section"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-2.5 font-semibold text-gray-700 hover:bg-gray-50 rounded-xl"
                  >
                    Log In
                  </a>
                  <a
                    href="#builder-section"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-1.5"
                  >
                    <span>Create My Card</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative pt-10 pb-20 md:py-28 overflow-hidden" id="hero-section">
        {/* Subtle mesh background layout */}
        <div className="absolute top-0 left-1/4 w-150 h-150 bg-gradient-to-br from-emerald-100/30 to-indigo-100/30 rounded-full blur-3xl -z-10" />
        <div className="absolute -top-40 right-10 w-120 h-120 bg-gradient-to-bl from-teal-50/40 to-emerald-100/20 rounded-full blur-3xl -z-10 animate-pulse duration-[10s]" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-left" id="hero-content">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100/50 rounded-full px-3.5 py-1 text-xs text-emerald-700 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                <span>Your business card just got an upgrade</span>
              </div>

              {/* Majestic Headline */}
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-gray-900 tracking-tight leading-none">
                Your business card <br className="hidden md:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-emerald-600">
                  just got an upgrade
                </span>
              </h1>

              {/* Supporting Subheadline */}
              <p className="text-gray-500 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
                The easiest way to share who you are, grow your network, and never lose a contact again. Built with high-fidelity NFC tap, secure corporate branding, and native CRM integrations.
              </p>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="#builder-section"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-base py-4 px-8 rounded-full shadow-lg shadow-emerald-500/15 flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
                  id="hero-primary-cta"
                >
                  <span>Create My Card</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#pricing"
                  className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-semibold text-base py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
                  id="hero-secondary-cta"
                >
                  <span>Book a Demo</span>
                </a>
              </div>

              {/* Bottom indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-100" id="hero-badges">
                <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold">
                  <CheckSquare className="w-4 h-4 text-emerald-500" />
                  <span>No App Required to Scan</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold">
                  <CheckSquare className="w-4 h-4 text-emerald-500" />
                  <span>Compatible with NFC Tap</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold col-span-2 sm:col-span-1">
                  <CheckSquare className="w-4 h-4 text-emerald-500" />
                  <span>Corporate SSO Certified</span>
                </div>
              </div>
            </div>

            {/* Right Premium iPhone visual mockup */}
            <div className="lg:col-span-5 flex justify-center" id="hero-visual">
              <div className="relative w-full max-w-[340px]" id="hero-phone-mockup">
                {/* Visual Ambient Glows */}
                <div className="absolute top-1/4 -left-12 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-12 -right-12 w-64 h-64 bg-indigo-100/40 rounded-full blur-3xl -z-10" />

                {/* iPhone Container */}
                <div className="relative border-[8px] border-gray-900 rounded-[44px] bg-white shadow-2xl overflow-hidden aspect-[9/18.5] flex flex-col">
                  {/* Dynamic Island Look */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5.5 bg-gray-900 rounded-full z-30" />

                  {/* App Screen Content */}
                  <div className="flex-1 overflow-y-auto no-scrollbar pt-10 px-4 pb-5 flex flex-col bg-gray-50 select-none">
                    {/* Header profile background spacer */}
                    <div className="h-20 bg-emerald-500/10 rounded-2xl relative overflow-hidden p-3 flex justify-between items-start">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[8px] font-bold text-emerald-700 bg-emerald-500/10 px-2 py-0.5 rounded-full uppercase tracking-widest">
                        NETRO PRO
                      </span>
                    </div>

                    {/* Member Floating Profile card */}
                    <div className="bg-white rounded-3xl p-4 border border-gray-100 shadow-md -mt-10 relative space-y-3">
                      <div className="flex justify-between items-end">
                        {/* Custom Headshot placeholder */}
                        <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-white shadow-xs rounded-xl overflow-hidden flex items-center justify-center text-gray-400">
                          <User className="w-7 h-7" />
                        </div>
                        <span className="text-[9px] font-extrabold text-white bg-slate-900 py-1 px-3 rounded-lg shadow-xs">
                          Active Pass
                        </span>
                      </div>

                      <div className="text-left space-y-1">
                        <h3 className="font-display font-bold text-gray-900 text-lg leading-tight">
                          Alex Rivera
                        </h3>
                        <p className="text-xs text-emerald-500 font-semibold font-sans">
                          VP of Enterprise Growth
                        </p>
                        <p className="text-xs text-gray-400 font-semibold">
                          Acme Corporation
                        </p>
                        <p className="text-[10px] text-gray-500 leading-relaxed pt-2 border-t border-gray-50">
                          Scaling software delivery with cloud-native frameworks and secure, integrated digital profiles.
                        </p>
                      </div>
                    </div>

                    {/* QR Code and Save Contacts container */}
                    <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs mt-3 flex items-center justify-between gap-3">
                      <div className="text-left space-y-0.5">
                        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">TAP OR SCAN</p>
                        <p className="text-xs font-bold text-gray-900">Dynamic Card Link</p>
                      </div>
                      <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center p-1.5 shrink-0">
                        {/* High Fidelity QR Code Path */}
                        <svg viewBox="0 0 100 100" className="w-9 h-9 fill-white">
                          <path d="M0 0h30v30H0zm40 0h20v20H40zM70 0h30v30H70zM0 40h20v20H0zm50 40h20v20H50zm20-40h30v30H70zM0 70h30v30H0zm40 10h10v10H40zm40 10h20v10H80z" />
                          <rect x="10" y="10" width="10" height="10" />
                          <rect x="80" y="10" width="10" height="10" />
                          <rect x="10" y="80" width="10" height="10" />
                        </svg>
                      </div>
                    </div>

                    {/* Floating companion widget visual */}
                    <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-xs mt-3 flex items-center justify-between text-left text-xs text-gray-600 hover:text-emerald-500 cursor-pointer">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-emerald-500" />
                        <span className="font-semibold text-[11px]">Book a 15m Call</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Floating tags */}
                <div className="absolute -left-10 top-1/3 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-gray-100/50 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                    <CheckSquare className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 font-bold uppercase">CRM SYNC</p>
                    <p className="text-xs font-bold text-gray-900">HubSpot Live</p>
                  </div>
                </div>

                <div className="absolute -right-8 bottom-1/4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-gray-100/50 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-gray-400 font-bold uppercase">NFC ACTIVE</p>
                    <p className="text-xs font-bold text-gray-900">1-Tap Connect</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRUSTED BY SECTION ==================== */}
      <section className="bg-white py-12 border-y border-gray-100" id="trusted-by">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <p className="text-gray-400 font-display font-semibold tracking-wider text-xs uppercase">
            Trusted by professionals and teams worldwide
          </p>
          <Marquee items={partners} />
        </div>
      </section>

      {/* ==================== FEATURE SECTION #1 ==================== */}
      <section className="py-20 md:py-28" id="solutions">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          
          {/* Card 1: Create your card in seconds */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text left */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-emerald-500 font-display font-semibold tracking-wider text-sm uppercase">
                Step 01
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
                Create your card in seconds
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Personalize your digital business card with your photo, company logo, custom branding color, social links and structured contact information. Change your title or company? No problem. Update details in seconds, and your changes reflect instantly across every active card.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Customize layouts, photos, and links</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Real-time instant content updates</span>
                </li>
              </ul>
              <div className="pt-2">
                <a
                  href="#builder-section"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm px-6 py-3 rounded-full shadow-xs inline-flex items-center gap-2 cursor-pointer transition-all"
                >
                  <span>Create My Card</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            {/* Visual right */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="bg-gray-100 rounded-3xl p-8 w-full max-w-md border border-gray-200/50 relative overflow-hidden flex items-center justify-center aspect-video">
                {/* SVG representing visual customization */}
                <div className="space-y-3 w-full max-w-xs">
                  <div className="h-3 bg-gray-300 rounded-full w-2/3" />
                  <div className="h-3 bg-gray-200 rounded-full w-full" />
                  <div className="h-3 bg-gray-200 rounded-full w-1/2" />
                  <div className="flex gap-2 pt-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-500 ring-2 ring-white" />
                    <span className="w-5 h-5 rounded-full bg-indigo-500 ring-2 ring-white" />
                    <span className="w-5 h-5 rounded-full bg-amber-500 ring-2 ring-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Share your card with anyone */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
            {/* Visual left */}
            <div className="lg:col-span-6 flex justify-center lg:order-last">
              <div className="lg:col-span-6 space-y-6 text-left">
                <span className="text-emerald-500 font-display font-semibold tracking-wider text-sm uppercase">
                  Step 02
                </span>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
                  Share your card with anyone
                </h2>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  QR code, NFC card tap, direct URLs, email signatures, wallet passes, or mobile home widgets—share who you are seamlessly. Even if your recipient does not have the Netro application, they can scan, save, and export your contact details instantly to their native address book.
                </p>
                <ul className="space-y-2 text-xs font-semibold text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>No app download or signups required for recipients</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span>NFC physical card taps & Apple Wallet passes</span>
                  </li>
                </ul>
                <div className="pt-2">
                  <a
                    href="#share-methods"
                    className="text-emerald-600 hover:text-emerald-700 font-bold text-sm inline-flex items-center gap-1 hover:underline"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            {/* Visual right */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="bg-gray-100 rounded-3xl p-8 w-full max-w-md border border-gray-200/50 aspect-video flex flex-col justify-center items-center relative overflow-hidden">
                <QrCode className="w-20 h-20 text-gray-800 animate-pulse" />
                <span className="text-xs font-bold text-gray-400 mt-3">SCAN OR TAP</span>
              </div>
            </div>
          </div>

          {/* Card 3: Never forget a face */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text left */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-emerald-500 font-display font-semibold tracking-wider text-sm uppercase">
                Step 03
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 tracking-tight leading-tight">
                Never forget a face, or a moment
              </h2>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Netro keeps track of who you met, where, and when. Add immediate context, private meeting notes, and conversation reminders to every connection you establish. Keep contacts organized dynamically without losing tracking leads in forgotten desk piles.
              </p>
              <ul className="space-y-2 text-xs font-semibold text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Interactive contact memory timeline</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>CRM sync to Salesforce, HubSpot & more</span>
                </li>
              </ul>
              <div className="pt-2">
                <a
                  href="#teams"
                  className="text-emerald-600 hover:text-emerald-700 font-bold text-sm inline-flex items-center gap-1 hover:underline"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            {/* Visual right */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="bg-white rounded-3xl p-6 w-full max-w-md border border-gray-200/50 shadow-sm text-left space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-xs font-bold text-gray-400">Captured Leads</span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">ACTIVE TIMELINE</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-gray-800">Olivia West</p>
                      <p className="text-[10px] text-gray-400">Met at CES Summit 2026</p>
                    </div>
                    <span className="text-[9px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-md font-bold">Follow up</span>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-gray-800">Marcus Vance</p>
                      <p className="text-[10px] text-gray-400">Outreach Co. VP</p>
                    </div>
                    <span className="text-[9px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-md font-bold">CRM Synced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== VISION SECTION ==================== */}
      <section className="bg-gray-50 py-20 border-y border-gray-100" id="vision">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-emerald-500 font-display font-semibold tracking-wider text-sm uppercase">
              The Vision
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-gray-900 tracking-tight leading-none">
              Netro's mission is to be trusted by millions of professionals globally
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Helping people build stronger professional relationships, secure brand consistency, and establish meaningful network connections without wasteful paper trail dependencies.
            </p>
          </div>

          {/* Interactive Showcase tabs section */}
          <InteractiveShowcase />
        </div>
      </section>

      {/* ==================== WHY TEAMS LOVE NETRO ==================== */}
      <section className="py-20 md:py-28" id="teams">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-emerald-500 font-display font-semibold tracking-wider text-sm uppercase">
              Collaborative Growth
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-gray-900 tracking-tight">
              Why teams love Netro
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Keep employee brand representations completely unified, automate lead capturing, and scale organization directories with absolute ease.
            </p>
            <div className="pt-2">
              <a
                href="#pricing"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm px-6 py-3 rounded-full shadow-xs inline-flex cursor-pointer transition-all"
              >
                Start 30 day free trial
              </a>
            </div>
          </div>

          {/* 2x2 Grid of features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="teams-grid">
            {/* Card 1: Brand compliance */}
            <div className="bg-white border border-gray-100 hover:border-gray-200 rounded-3xl p-8 flex flex-col justify-between text-left space-y-6 transition-all shadow-xs group cursor-default">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900">
                  Every card, always on brand
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Lock your logo, official corporate Hex colors, standardized social handles, and message structures across every employee card. Brand consistency, built-in securely.
                </p>
              </div>
              <div className="h-1.5 w-12 bg-emerald-500 rounded-full" />
            </div>

            {/* Card 2: CRM integration */}
            <div className="bg-white border border-gray-100 hover:border-gray-200 rounded-3xl p-8 flex flex-col justify-between text-left space-y-6 transition-all shadow-xs group cursor-default">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900">
                  Sync with your CRM in seconds
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Automatically create leads and sync contact data straight into standard cloud tools. Netro supports seamless connections with Salesforce, HubSpot, Zoho, and Pipedrive pipelines.
                </p>
              </div>
              <div className="h-1.5 w-12 bg-indigo-500 rounded-full" />
            </div>

            {/* Card 3: Centralized Management */}
            <div className="bg-white border border-gray-100 hover:border-gray-200 rounded-3xl p-8 flex flex-col justify-between text-left space-y-6 transition-all shadow-xs group cursor-default">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900">
                  Centralized Management
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Manage cards, brand assets, user permissions, and corporate licenses from one comprehensive admin console. Create, edit, or revoke cards instantly in bulk.
                </p>
              </div>
              <div className="h-1.5 w-12 bg-purple-500 rounded-full" />
            </div>

            {/* Card 4: Built to Scale */}
            <div className="bg-white border border-gray-100 hover:border-gray-200 rounded-3xl p-8 flex flex-col justify-between text-left space-y-6 transition-all shadow-xs group cursor-default">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-900">
                  Built to Scale
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Onboard whole teams in minutes. Integrate with Microsoft Entra ID or Okta directory systems to automate synchronization, ensuring employees are setup instantly as they join.
                </p>
              </div>
              <div className="h-1.5 w-12 bg-orange-500 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ENTERPRISE SECTION (Dark) ==================== */}
      <section className="bg-slate-950 text-white py-20 md:py-28 relative overflow-hidden" id="enterprise">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <span className="text-emerald-400 font-display font-semibold tracking-wider text-sm uppercase">
                Enterprise Grade
              </span>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-none">
                Built for enterprise. <br />
                Secure from day one.
              </h2>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Netro is built to fulfill strict enterprise IT guidelines. From robust role-based permissions (RBAC) to compliant audit tracking, we keep team networks secure and compliant.
              </p>

              {/* Enterprise Features list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4" id="enterprise-features">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Check className="w-4.5 h-4.5" />
                  </div>
                  <span className="font-semibold text-sm text-gray-200">SAML SSO / Active Directory</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Check className="w-4.5 h-4.5" />
                  </div>
                  <span className="font-semibold text-sm text-gray-200">Role-Based Access (RBAC)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Check className="w-4.5 h-4.5" />
                  </div>
                  <span className="font-semibold text-sm text-gray-200">SOC 2 Compliance Ready</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Check className="w-4.5 h-4.5" />
                  </div>
                  <span className="font-semibold text-sm text-gray-200">Centralized Audit Logs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Check className="w-4.5 h-4.5" />
                  </div>
                  <span className="font-semibold text-sm text-gray-200">Bulk Permissions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <Check className="w-4.5 h-4.5" />
                  </div>
                  <span className="font-semibold text-sm text-gray-200">24/7 Enterprise Support</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#pricing"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm px-8 py-3.5 rounded-full inline-flex cursor-pointer transition-all shadow-md shadow-emerald-500/20"
                >
                  Book a Demo
                </a>
              </div>
            </div>

            {/* Right Column visual dashboard mockup */}
            <div className="lg:col-span-6 flex justify-center" id="enterprise-visual">
              <div className="bg-slate-900 border border-white/10 rounded-3xl p-6 w-full max-w-lg shadow-2xl relative overflow-hidden text-left space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[10px] font-bold text-gray-400 tracking-widest">NETRO SECURITY OPERATIONS</span>
                </div>
                
                {/* Security Status Panel mockup */}
                <div className="space-y-3 font-mono text-[11px] text-gray-400">
                  <div className="flex justify-between items-center bg-black/40 border border-white/5 rounded-xl p-3">
                    <span>STATUS: ACTIVE CONNECTION</span>
                    <span className="text-emerald-400 font-bold">● SECURE</span>
                  </div>
                  <div className="p-3 bg-black/20 rounded-xl space-y-2 border border-white/5">
                    <p className="text-gray-300 font-semibold">[SYSTEM INTEGRITY SUMMARY]</p>
                    <p className="flex justify-between"><span>• SSO Login Check:</span> <span className="text-emerald-400">PASS</span></p>
                    <p className="flex justify-between"><span>• Directory Sync:</span> <span className="text-emerald-400">PASS (1,482 Profiles Active)</span></p>
                    <p className="flex justify-between"><span>• Audit Logs:</span> <span className="text-emerald-400">SOC-2 VERIFIED</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW TO SHARE SECTION ==================== */}
      <section className="py-20 md:py-28 bg-gray-50/50" id="share-methods">
        <div className="max-w-7xl mx-auto px-6">
          <ShareCards />
        </div>
      </section>

      {/* ==================== HOW IT WORKS ==================== */}
      <section className="py-20 md:py-28" id="how-it-works">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-emerald-500 font-display font-semibold tracking-wider text-sm uppercase">
              Three Steps
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-gray-900 tracking-tight">
              Simple. Seamless. Powerful.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Get setup in less than three minutes and elevate how you share your professional story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="steps-grid">
            {/* Step 1 */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 space-y-4 text-left shadow-xs">
              <span className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 font-display font-bold text-lg flex items-center justify-center">
                01
              </span>
              <h3 className="font-display font-bold text-xl text-gray-900">
                Create & Design
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Add your headshot, branding color palette, corporate socials, Calendly links, and contact channels in seconds.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 space-y-4 text-left shadow-xs">
              <span className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 font-display font-bold text-lg flex items-center justify-center">
                02
              </span>
              <h3 className="font-display font-bold text-xl text-gray-900">
                Share Instant Passes
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Present your QR, tap beautiful metallic NFC cards, load Apple Wallet passes, or attach standard linked signatures.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 space-y-4 text-left shadow-xs">
              <span className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 font-display font-bold text-lg flex items-center justify-center">
                03
              </span>
              <h3 className="font-display font-bold text-xl text-gray-900">
                Scale & Track
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Track link click logs, note custom meeting contexts, and automatically synchronize newly captured connections with your CRM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== INTERACTIVE CARD BUILDER PLAYGROUND ==================== */}
      <section className="py-20 md:py-28 bg-gray-50 border-y border-gray-100" id="builder-section">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-emerald-500 font-display font-semibold tracking-wider text-sm uppercase">
              No obligation playground
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-gray-900 tracking-tight leading-none">
              Your business card just got an upgrade
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Design your card instantly below. See the high-contrast live rendering pass, dynamic QR code adjustments, and try exporting options in real-time.
            </p>
          </div>

          <InteractiveCardBuilder />
        </div>
      </section>

      {/* ==================== SOCIAL PROOF ==================== */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100" id="social-proof">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12" id="counters-grid">
            
            <div className="space-y-2">
              <p className="font-display font-extrabold text-4xl md:text-5xl text-gray-900 tracking-tight flex items-center justify-center gap-0.5">
                <AnimatedCounter value={10000} suffix="+" />
              </p>
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                Active Professionals
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-display font-extrabold text-4xl md:text-5xl text-gray-900 tracking-tight flex items-center justify-center gap-0.5">
                <AnimatedCounter value={500} suffix="+" />
              </p>
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                Global Companies
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-display font-extrabold text-4xl md:text-5xl text-gray-900 tracking-tight flex items-center justify-center gap-0.5">
                <AnimatedCounter value={1} prefix="" suffix="M+" duration={2} />
              </p>
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                Connections Shared
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-display font-extrabold text-4xl md:text-5xl text-gray-900 tracking-tight flex items-center justify-center gap-0.5">
                <AnimatedCounter value={95} suffix="%" />
              </p>
              <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">
                Customer Satisfaction
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-20 md:py-28" id="resources">
        <div className="max-w-7xl mx-auto px-6">
          <Testimonials />
        </div>
      </section>

      {/* ==================== PRICING SECTION ==================== */}
      <section className="py-20 md:py-28 bg-gray-50/50 border-t border-gray-100" id="pricing">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-emerald-500 font-display font-semibold tracking-wider text-sm uppercase">
              Transparent Pricing
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-gray-900 tracking-tight">
              Fair, transparent pricing plans
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              No hidden fees, cancel anytime. Find the plan that scales with your networking volume.
            </p>

            {/* Toggle Billing Period */}
            <div className="inline-flex items-center gap-1.5 bg-gray-100 p-1 rounded-full border border-gray-200" id="pricing-period-toggle">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  billingPeriod === "monthly"
                    ? "bg-white text-gray-900 shadow-xs"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Monthly billing
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  billingPeriod === "yearly"
                    ? "bg-white text-gray-900 shadow-xs"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                <span>Yearly billing</span>
                <span className="bg-emerald-100 text-emerald-700 text-[9px] font-extrabold px-1.5 py-0.5 rounded-full">
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Matrices Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch" id="pricing-grid">
            {plans.map((plan) => {
              // Calculate pricing for yearly or raw string
              const isNumber = !isNaN(Number(plan.price));
              let displayedPrice = plan.price;
              if (isNumber && billingPeriod === "yearly") {
                const yearlyVal = Math.round(Number(plan.price) * 12 * 0.8); // 20% discount
                displayedPrice = `${Math.round(yearlyVal / 12)}`; // showing monthly equivalent or total
              }

              return (
                <div
                  key={plan.name}
                  className={`border rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${plan.color} ${
                    plan.isPopular ? "shadow-xl border-emerald-500/30" : "shadow-xs hover:shadow-md"
                  }`}
                  id={`pricing-card-${plan.name.toLowerCase()}`}
                >
                  {/* Popular marker badge */}
                  {plan.isPopular && (
                    <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white text-[10px] font-extrabold py-1 px-4 rounded-full shadow-md tracking-wider uppercase">
                      MOST POPULAR
                    </span>
                  )}

                  {/* Top Details */}
                  <div className="space-y-6 text-left">
                    <div>
                      <h4 className="font-display font-bold text-2xl text-gray-900 capitalize">
                        {plan.name}
                      </h4>
                      <p className="text-gray-500 text-xs leading-relaxed mt-2.5 min-h-[40px]">
                        {plan.description}
                      </p>
                    </div>

                    <div className="flex items-baseline gap-1" id={`price-label-${plan.name.toLowerCase()}`}>
                      <span className="font-display font-extrabold text-4xl md:text-5xl text-gray-900">
                        {isNumber ? `₹${displayedPrice}` : plan.price}
                      </span>
                      {isNumber && (
                        <span className="text-gray-400 text-xs font-semibold">
                          /{plan.period}
                        </span>
                      )}
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 pt-6 border-t border-gray-100">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        KEY FEATURES INCLUDED
                      </p>
                      <ul className="space-y-2.5 text-xs text-gray-600">
                        {plan.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 leading-tight">
                            <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Primary Button */}
                  <div className="pt-8 mt-auto">
                    <a
                      href="#builder-section"
                      className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all text-center block cursor-pointer ${
                        plan.isPopular
                          ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/10"
                          : "bg-gray-150 hover:bg-gray-200 text-gray-800"
                      }`}
                    >
                      {plan.ctaText}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section className="py-20 md:py-28 bg-white" id="faq">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-emerald-500 font-display font-semibold tracking-wider text-sm uppercase">
              Frequently Asked Questions
            </span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-gray-900 tracking-tight">
              Got questions? We've got answers.
            </h2>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Learn how Netro protects and amplifies brand networks while making connection management effortless.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="py-16 md:py-24 bg-white" id="final-cta">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 rounded-[32px] p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Visual Ambient overlay grids */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" />

            <div className="max-w-3xl mx-auto space-y-8 relative z-10 text-center">
              <span className="text-emerald-400 font-display font-semibold tracking-wider text-sm uppercase">
                Ready to Upgrade?
              </span>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none">
                Ready to upgrade the way <br />
                you connect?
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto font-normal">
                Create your digital business card in minutes. Unify corporate branding, automate CRM logging, and secure your connections instantly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <a
                  href="#builder-section"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-8 rounded-full transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-1.5 cursor-pointer text-center"
                >
                  <span>Create My Card</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#pricing"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/10 font-semibold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer text-center"
                >
                  <span>Book a Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-12" id="resources">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-start" id="footer-links-grid">
            
            {/* Logo and desc column */}
            <div className="col-span-2 space-y-4 text-left">
              <NetroLogo size={36} />
              <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                Netro is an AI-powered Digital Business Card and Contact Management Platform helping modern professionals, scaling startups and enterprise teams share credentials, capture leads and scale branding.
              </p>
              <div className="flex gap-4 pt-1" id="social-networks">
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 1: Product */}
            <div className="text-left space-y-4">
              <h5 className="text-gray-900 font-display font-semibold text-xs uppercase tracking-wider">
                Product
              </h5>
              <ul className="space-y-2.5 text-xs text-gray-500 font-medium">
                <li><a href="#solutions" className="hover:text-gray-900 transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a></li>
                <li><a href="#teams" className="hover:text-gray-900 transition-colors">Teams</a></li>
                <li><a href="#enterprise" className="hover:text-gray-900 transition-colors">Enterprise</a></li>
              </ul>
            </div>

            {/* Column 2: Resources */}
            <div className="text-left space-y-4">
              <h5 className="text-gray-900 font-display font-semibold text-xs uppercase tracking-wider">
                Resources
              </h5>
              <ul className="space-y-2.5 text-xs text-gray-500 font-medium">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Guides</a></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="text-left space-y-4">
              <h5 className="text-gray-900 font-display font-semibold text-xs uppercase tracking-wider">
                Company
              </h5>
              <ul className="space-y-2.5 text-xs text-gray-500 font-medium">
                <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
              </ul>
            </div>

          </div>

          <hr className="border-gray-100" />

          {/* Bottom Copyright and Legal links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-medium">
            <p id="copyright">
              © 2026 Netro. All rights reserved.
            </p>
            <div className="flex items-center gap-6" id="legal-links">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
