export interface BusinessCardData {
  name: string;
  role: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  bio: string;
  themeColor: string;
  photoUrl?: string;
  logoUrl?: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    instagram?: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
  rating: number;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular: boolean;
  color: string;
}

export interface ShareMethod {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}
