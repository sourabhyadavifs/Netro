import React from "react";
import { motion } from "motion/react";
import { Star, Quote, ShieldCheck } from "lucide-react";
import { Testimonial } from "../types";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Olivia West",
    role: "Lead UX Designer",
    company: "Westervelt Design",
    content: "Netro completely replaced paper cards for our studio. Clients love scanning our wood NFC cards, and our organic project lead collection rate has spiked by 65% in just two months!",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Liam Sterling",
    role: "Partner",
    company: "LVMH Capital",
    content: "A absolute game changer for networking at major executive summits. The Apple Wallet integration is flawless—one quick swipe and contacts have my verified investor credentials.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Sophia Chen",
    role: "VP of Talent Acquisition",
    company: "Stripe",
    content: "Onboarding 800+ employees with the Netro Admin Console was completed in minutes via Azure AD. Best-in-class security, SAML SSO support, and 100% corporate branding compliance.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    id: 4,
    name: "Marcus Vance",
    role: "Head of Growth",
    company: "Outreach.io",
    content: "Real-time sync to our CRM means no leads are dropped. Notes recorded at conferences end up straight in Salesforce pipelines for immediate SDR followup. Truly indispensable.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    id: 5,
    name: "Eleanor Vance",
    role: "Director of Brand Marketing",
    company: "Nike Global",
    content: "Our team's email signatures and virtual Zoom backgrounds are now locked under Netro. Every webinar and outbound touchpoint is aligned with our strict corporate brand guidelines.",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
    rating: 5
  },
  {
    id: 6,
    name: "Devon Harris",
    role: "Co-Founder & CTO",
    company: "Core Labs",
    content: "We ordered the custom brushed-metal NFC cards for our leadership team. The physical build is extremely premium, and the backend cloud software is secure, modular, and fast.",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="space-y-12" id="testimonials-root">
      <div className="text-center space-y-3">
        <span className="text-emerald-500 font-display font-semibold tracking-wider text-sm uppercase">
          Client Endorsements
        </span>
        <h3 className="font-display font-bold text-3xl md:text-5xl text-gray-900 tracking-tight max-w-2xl mx-auto">
          Trusted by elite leaders and global startups
        </h3>
        <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
          See how teams and enterprises are upgrading their corporate networks, capturing more qualified leads, and ditching wasteful paper cards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="testimonials-grid">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-gray-200 transition-all duration-300 relative text-left"
            id={`testimonial-${testimonial.id}`}
          >
            {/* Quote decoration */}
            <div className="absolute top-6 right-6 text-emerald-500/10">
              <Quote className="w-10 h-10 rotate-180" />
            </div>

            {/* Stars */}
            <div className="flex gap-0.5 text-amber-400 mb-4" id={`rating-${testimonial.id}`}>
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>

            {/* Quote content */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6 font-sans flex-1">
              "{testimonial.content}"
            </p>

            {/* User Metadata info */}
            <div className="flex items-center gap-3.5 border-t border-gray-50 pt-4 mt-auto">
              <img
                src={testimonial.avatarUrl}
                alt={testimonial.name}
                referrerPolicy="no-referrer"
                className="w-11 h-11 rounded-full object-cover shrink-0 bg-gray-100"
              />
              <div className="min-w-0">
                <h5 className="font-display font-bold text-gray-900 text-sm flex items-center gap-1.5">
                  {testimonial.name}
                  {testimonial.id === 3 && (
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  )}
                </h5>
                <p className="text-xs text-gray-400 truncate">
                  {testimonial.role}
                </p>
                <p className="text-[11px] font-bold text-emerald-600 mt-0.5">
                  {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
