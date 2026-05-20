"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="small"
        sizing="mediumLargeSizeMediumTitles"
        background="noise"
        cardStyle="layered-gradient"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "Overview", id: "hero" },
              { name: "Services", id: "features" },
              { name: "Wealth", id: "wealth" },
              { name: "Contact", id: "contact" },
            ]}
            brandName="Axis Premium"
            button={{ text: "Get Started", href: "#contact" }}
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroCentered
            background={{ variant: "gradient-bars" }}
            title="Banking Excellence, Refined for You"
            description="Experience premium financial services tailored to your ambitions. From wealth management to exclusive banking privileges, Axis Bank delivers sophistication at every touchpoint."
            avatars={[
              { src: "http://img.b2bpic.net/free-photo/confident-outline-business-side-face-male_1194-3839.jpg", alt: "Client 1" },
              { src: "http://img.b2bpic.net/free-photo/people-having-dinner-luxurious-restaurants_23-2151081913.jpg", alt: "Client 2" },
              { src: "http://img.b2bpic.net/free-photo/portrait-mature-businessman-with-laptop-desk-restaurant_23-2147956344.jpg", alt: "Client 3" },
              { src: "http://img.b2bpic.net/free-photo/young-attractive-woman-walking-street_1303-23416.jpg", alt: "Client 4" },
              { src: "http://img.b2bpic.net/free-photo/conceptual-3d-render-credit-debit-cards-futuristic-platform_187299-47941.jpg", alt: "Client 5" },
            ]}
            buttons={[{ text: "Discover Premium Banking", href: "#contact" }]}
            marqueeItems={[
              { type: "text", text: "Global Reach" },
              { type: "text", text: "Wealth Planning" },
              { type: "text", text: "24/7 Concierge" },
              { type: "text", text: "Asset Security" },
              { type: "text", text: "Custom Strategies" },
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <MetricSplitMediaAbout
            useInvertedBackground={false}
            title="A Legacy of Trust & Innovation"
            description="Axis Bank combines decades of financial expertise with modern digital elegance to provide banking solutions that cater specifically to your lifestyle and wealth objectives."
            metrics={[
              { value: "150+", title: "Premium Branches" },
              { value: "24/7", title: "Dedicated Support" },
              { value: "Global", title: "Investment Reach" },
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/husband-wife-deliberating-car-showroom-deciding-price-pay_482257-123988.jpg"
            mediaAnimation="blur-reveal"
            metricsAnimation="slide-up"
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardTwelve
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            features={[
              { id: "f1", label: "Wealth", title: "Asset Management", items: ["Portfolio Optimization", "Diversified Risk Analysis", "Exclusive Market Insights"] },
              { id: "f2", label: "Service", title: "Dedicated Concierge", items: ["24/7 Priority Assistance", "Bespoke Banking Support", "Travel Privileges"] },
              { id: "f3", label: "Access", title: "Global Banking", items: ["Multi-currency Accounts", "International Transfers", "Cross-border Planning"] },
            ]}
            title="Tailored Financial Services"
            description="Our premium banking services are designed to give you unparalleled control over your financial life."
          />
        </div>

        <div id="wealth" data-section="wealth">
          <PricingCardNine
            animationType="scale-rotate"
            textboxLayout="default"
            useInvertedBackground={false}
            plans={[
              { id: "plan-1", title: "Growth", period: "annually", price: "Custom", features: ["Financial Planning", "Basic Asset Allocation", "Quarterly Reviews"], button: { text: "Consult Today" }, imageSrc: "http://img.b2bpic.net/free-photo/alpine-hotel-hosting-winter-sports_482257-102253.jpg", imageAlt: "luxury bank interior dark mode" },
              { id: "plan-2", title: "Premier", period: "annually", price: "Custom", features: ["Holistic Wealth Management", "Dedicated Advisors", "Bespoke Tax Strategies"], button: { text: "Consult Today" }, imageSrc: "http://img.b2bpic.net/free-photo/husband-wife-deliberating-car-showroom-deciding-price-pay_482257-123988.jpg", imageAlt: "luxury bank interior dark mode" },
              { id: "plan-3", title: "Elite", period: "annually", price: "Custom", features: ["Family Office Services", "Exclusive Private Placements", "Unrestricted Global Access"], button: { text: "Consult Today" }, imageSrc: "http://img.b2bpic.net/free-photo/confident-outline-business-side-face-male_1194-3839.jpg", imageAlt: "luxury bank interior dark mode" },
            ]}
            title="Investment Tiers"
            description="Flexible plans designed to grow your wealth through strategic planning."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardFifteen
            useInvertedBackground={false}
            testimonial="The personalized service and investment insights from the Axis branch have been transformative for our family office."
            rating={5}
            author="Sarah Jenkins, Managing Director"
            avatars={[
              { src: "http://img.b2bpic.net/free-photo/positive-middle-aged-business-leader-window_1262-5388.jpg", alt: "Sarah" },
              { src: "http://img.b2bpic.net/free-photo/closeup-smiling-middle-aged-business-leader_1262-4845.jpg", alt: "Client 2" },
              { src: "http://img.b2bpic.net/free-photo/cheerful-boss-sitting-with-newspaper-table_1098-3037.jpg", alt: "Client 3" },
              { src: "http://img.b2bpic.net/free-photo/confident-senior-executive-looking-camera_1262-2374.jpg", alt: "Client 4" },
              { src: "http://img.b2bpic.net/free-photo/senior-businessman-with-arms-crossed-outside-modern-office-building_1139-1083.jpg", alt: "Client 5" },
            ]}
            ratingAnimation="blur-reveal"
            avatarsAnimation="slide-up"
          />
        </div>

        <div id="metrics" data-section="metrics">
          <MetricCardEleven
            textboxLayout="split"
            animationType="slide-up"
            useInvertedBackground={false}
            metrics={[
              { id: "m1", value: "99.9%", title: "Client Satisfaction", description: "Consistently delivered through dedicated white-glove service.", imageSrc: "http://img.b2bpic.net/free-photo/business-meeting-cafe_53876-94719.jpg" },
              { id: "m2", value: "$5B+", title: "Wealth Under Management", description: "Ensuring stability and long-term prosperity for our clientele.", imageSrc: "http://img.b2bpic.net/free-photo/cheerful-project-manager-showing-presentation-laptop-colleague-office-medium-shot-front-view-teamwork-communication-concept_74855-11609.jpg" },
            ]}
            title="Unmatched Financial Strength"
            description="Proven stability and growth, driving success for our valued clients."
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqBase
            textboxLayout="default"
            useInvertedBackground={false}
            faqs={[
              { id: "faq1", title: "How do I become a premium banking client?", content: "You can request a consultation via our website, and a Relationship Manager will reach out to facilitate the process." },
              { id: "faq2", title: "Is my wealth portfolio diversified globally?", content: "Yes, we offer specialized multi-currency accounts and global investment avenues suited for your strategic goals." },
              { id: "faq3", title: "Do you provide dedicated account support?", content: "Every premium account holder is paired with a personal Relationship Manager for round-the-clock priority assistance." },
            ]}
            title="Frequently Asked Questions"
            description="Everything you need to know about starting your premium journey with us."
            faqsAnimation="slide-up"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplitForm
            useInvertedBackground={false}
            title="Begin Your Premium Experience"
            description="Ready to redefine your banking? Schedule an exclusive consultation today."
            inputs={[
              { name: "fullName", type: "text", placeholder: "Full Name", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true },
              { name: "phone", type: "tel", placeholder: "Phone Number" },
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/african-american-person-filling-report-files-talking-receptionist-hospital-reception-counter-woman-writing-medical-form-before-checkup-appointment-with-doctor-health-center_482257-50673.jpg"
            mediaAnimation="opacity"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Axis Bank Premium"
            columns={[
              { title: "Banking", items: [{ label: "About Us", href: "#" }, { label: "Premium Services", href: "#" }] },
              { title: "Support", items: [{ label: "Contact", href: "#" }, { label: "Help Center", href: "#" }] },
              { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
