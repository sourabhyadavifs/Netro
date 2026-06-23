import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "../types";

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What is Netro?",
    answer: "Netro is an AI-powered Digital Business Card and Contact Management Platform designed for modern professionals and enterprises. It enables teams to create, customize, distribute, and track premium digital cards instantly while organizing new connections in a unified space."
  },
  {
    id: 2,
    question: "How does QR sharing work?",
    answer: "Every Netro card generates a unique, dynamic high-resolution QR code. Anyone can point their smartphone camera at your QR code to load your digital card instantly. From there, they can download your contact card (.vcf) directly into their native address book—all without downloading any app."
  },
  {
    id: 3,
    question: "Can I use NFC cards?",
    answer: "Yes, fully! Netro cards can be programmed onto premium matte plastic, sustainable wood, or brushed-metal physical NFC cards. When you tap the card on anyone's iPhone or Android device, your digital card launches instantly on their browser."
  },
  {
    id: 4,
    question: "Does Netro support CRM integrations?",
    answer: "Yes. Netro features native, real-time bi-directional integrations with leading enterprise CRMs, including Salesforce, HubSpot, Zoho, and Pipedrive. Contacts collected in the field are pushed automatically with context, conversation tags, and notes."
  },
  {
    id: 5,
    question: "Is Netro secure?",
    answer: "Absolutely. Security is engineered in from day one. Netro features SAML-based Single Sign-On (SSO), granular Role-Based Access Controls (RBAC), SOC 2 compliance readiness, and full audit logs to safeguard your company's network and customer data."
  },
  {
    id: 6,
    question: "Can enterprises manage employees centrally?",
    answer: "Yes. Our centralized Admin Console gives organization admins complete oversight. You can onboard thousands of employees via CSV or Microsoft Entra ID, lock in strict brand palettes, update job titles instantly, and revoke access in real-time."
  },
  {
    id: 7,
    question: "Do recipients need to install the Netro app?",
    answer: "No, they don't need any app. Your digital card is a responsive web application designed to load flawlessly on any modern mobile or desktop browser. One tap saves your contact, links, and details straight to their phone's contact book."
  },
  {
    id: 8,
    question: "Can I customize branding?",
    answer: "Yes, 100%. You can upload custom layouts, headshots, organization logos, and link banners, and pick brand colors down to the exact Hex code. Enterprise licenses allow custom domains (e.g., card.yourcompany.com) for a completely branded experience."
  }
];

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4" id="faq-accordion-root">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className="border border-gray-100 bg-white rounded-2xl overflow-hidden shadow-xs hover:border-gray-200 transition-colors duration-200"
            id={`faq-item-${faq.id}`}
          >
            <button
              onClick={() => toggle(faq.id)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-hidden"
              aria-expanded={isOpen}
              id={`faq-btn-${faq.id}`}
            >
              <span className="font-display font-semibold text-lg text-gray-900 pr-4">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="shrink-0 text-gray-400"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed text-sm">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
