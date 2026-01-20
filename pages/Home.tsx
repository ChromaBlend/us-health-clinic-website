
import React from 'react';
import { Icons } from '../components/Icons';
import { Button, SectionHeading, SectionSub, Accordion } from '../components/UI';
import { Testimonial } from '../types';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/Animations';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PathToHealth } from '../components/PathToHealth';
import { WhyMembership } from '../components/WhyMembership';
import { Membership } from '../components/Membership';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn className="relative z-10" direction="up" delay={0.2} force>
            <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-[1.1] mb-8 tracking-tight">
              Your body isn't <span className="italic text-teal-700 relative inline-block">
                failing
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
              </span> you. <br />
              It's trying to tell you something.
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-light">
              One blood draw. 100+ biomarkers. A doctor who finally connects the dots between your symptoms and your science.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <Button to="/subscribe">Join today</Button>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-900 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className="bg-teal-100 text-teal-700 rounded-full p-0.5"><Icons.Check className="w-3 h-3" /></div>
                HSA/FSA eligible
              </div>
            </div>
          </FadeIn>
          <FadeIn className="relative" direction="left" delay={0.4}>
            <img
              src="/images/home-hero.avif"
              alt="Doctor consulting patient"
              className="rounded-[2rem] object-cover object-top w-full h-[600px] transition-all duration-700 ease-in-out"
            />
          </FadeIn>
        </div>

        {/* Feature Bar */}
        <StaggerContainer className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200/60 pt-12" delayChildren={0.6}>
          {[
            { title: "Nationwide Access", desc: "Over 2,000+ partner labs near you.", icon: <Icons.Activity /> },
            { title: "15-Minute Visits", desc: "Book online, skip the line.", icon: <Icons.Clock /> },
            { title: "Digital-First Results", desc: "Secure insights in ~5 days.", icon: <Icons.Smartphone /> }
          ].map((feature, i) => (
            <StaggerItem key={i} className="flex gap-5 items-start p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300">
              <div className="text-teal-700 p-3 bg-teal-50 rounded-xl">{feature.icon}</div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">{feature.title}</h4>
                <p className="text-gray-500 mt-1 leading-relaxed">{feature.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

const Methodology = () => (
  <section className="py-32 bg-white" id="how-it-works">
    <div className="max-w-7xl mx-auto px-6">
      <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-20">
        <div className="max-w-2xl">
          <span className="text-teal-700 font-semibold tracking-widest text-xs uppercase mb-4 block">The Methodology</span>
          <SectionHeading align="left">You're not tired. <span className="italic text-gray-400 block mt-2">You're misinformed.</span></SectionHeading>
          <p className="text-xl text-gray-600 mt-6 font-light">Your biology deserves clarity. Not guesswork.</p>
        </div>
        <Button to="/subscribe" variant="secondary" className="mt-8 md:mt-0">Join Today</Button>
      </FadeIn>

      <StaggerContainer className="grid md:grid-cols-3 gap-12">
        {[
          { step: "01 / Connect the Dots", title: "Test your whole body", desc: "Specialists treat symptoms. We treat systems. Your hormones, gut, and heart don't work in isolation—neither should your doctor." },
          { step: "02 / Optimization", title: "Redefining Healthy", desc: "\"Normal\" is the average of a sick population. We don't compare you to the average; we optimize you for peak performance." },
          { step: "03 / Prevention", title: "Proactive, Not Reactive", desc: "Traditional medicine waits for a diagnosis. We spot the smoke before the fire starts, reversing risks years in advance." }
        ].map((item, i) => (
          <StaggerItem key={i} className="group cursor-default p-6 -ml-6 rounded-2xl hover:bg-gray-50 transition-colors duration-500">
            <div className="h-0.5 w-full bg-gray-200 group-hover:bg-teal-700 transition-colors duration-500 mb-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-0 bg-teal-700 group-hover:w-full transition-all duration-1000 ease-out"></div>
            </div>
            <span className="text-teal-700 font-bold text-xs tracking-wider uppercase block mb-3">{item.step}</span>
            <h3 className="text-3xl font-serif text-gray-900 mb-4">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed font-light">{item.desc}</p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

const Biomarkers = () => (
  <section className="py-24 bg-white" id="what-we-test">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <FadeIn>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">It starts with 100+ labs</h2>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-20 leading-relaxed">
          From heart health to hormone balance, our comprehensive test panels detect early signs of over 1,000 conditions.
        </p>
      </FadeIn>

      <StaggerContainer className="flex flex-wrap justify-center gap-x-8 gap-y-12 md:gap-x-16 md:gap-y-16 mb-16">
        {[
          { name: "Heart Health", icon: <Icons.Heart /> },
          { name: "Thyroid", icon: <Icons.Activity /> },
          { name: "Nutrients", icon: <Icons.Droplet /> },
          { name: "Genetics", icon: <Icons.Dna /> },
          { name: "Blood Sugar", icon: <Icons.Droplet /> },
          { name: "Hormones", icon: <Icons.Zap /> },
          { name: "Inflammation", icon: <Icons.Activity /> },
        ].map((marker, i) => (
          <StaggerItem key={i} className="flex flex-col items-center gap-4 group w-32">
            <div className="w-24 h-24 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-teal-700 group-hover:text-teal-700 transition-colors duration-300 bg-white">
              {React.cloneElement(marker.icon as React.ReactElement<any>, { size: 32, strokeWidth: 1.5 })}
            </div>
            <span className="text-gray-700 font-medium text-lg whitespace-nowrap">{marker.name}</span>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn delay={0.4}>
        <Button to="/what-we-test" className="!bg-teal-900 hover:!bg-teal-800 text-white px-8 py-4 text-lg rounded-full">Explore All Biomarkers</Button>
      </FadeIn>
    </div>
  </section>
);

const Discovery = () => (
  <section className="py-32 bg-teal-900 text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-[120px]"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
      <FadeIn>
        <h2 className="text-4xl md:text-6xl font-serif font-medium mb-8 leading-tight">
          Most people discover something <br className="hidden md:block" /> no doctor ever found.
        </h2>
        <p className="text-teal-100/80 text-xl mb-16 max-w-2xl mx-auto font-light">
          Standard physicals check about 15 markers. We check over 100. The difference is life-changing.
        </p>
      </FadeIn>

      <StaggerContainer className="grid md:grid-cols-3 gap-8 mt-16 text-center">
        {[
          { val: "63%", desc: "Find early insulin resistance or diabetes risk." },
          { val: "44%", desc: "Uncover hidden cardiovascular risks." },
          { val: "70%", desc: "Implement changes that slow biological aging." }
        ].map((stat, i) => (
          <StaggerItem key={i} className="p-8 border border-teal-700/50 rounded-[2rem] bg-teal-800/20 backdrop-blur hover:bg-teal-800/40 transition-colors">
            <div className="text-7xl font-serif mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-teal-200/50">{stat.val}</div>
            <p className="text-teal-50 text-lg">{stat.desc}</p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);



const Testimonials = () => {
  const reviews: Testimonial[] = [
    { name: "Ainsley J.", age: 42, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop", quote: "I felt tired for years, but USHC was the first to dig deeper. They connected my mood and fatigue, finally giving me the personalized biological answers." },
    { name: "Imanix S.", age: 45, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop", quote: "They didn't just blame me for my weight. USHC provided an optimized supplement protocol based on my unique biology." },
    { name: "Dorion B.", age: 51, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop", quote: "My doctor listened and supported me—they didn't dismiss my concerns. The personalized plan evolves as my body changes." }
  ];

  return (
    <section className="py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn><SectionHeading>You are not alone in this.</SectionHeading></FadeIn>
        <StaggerContainer className="grid md:grid-cols-3 gap-8 mt-20">
          {reviews.map((r, i) => (
            <StaggerItem key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-teal-50">
              <div className="flex items-center gap-4 mb-8">
                <img src={r.image} alt={r.name} className="w-14 h-14 rounded-full object-cover ring-4 ring-gray-50" />
                <div>
                  <span className="font-bold text-gray-900 block">{r.name}</span>
                  <span className="text-sm text-gray-500">Age {r.age}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-8 italic text-lg leading-relaxed">"{r.quote}"</p>
              <div className="flex text-yellow-400 gap-1">
                {[...Array(5)].map((_, j) => <Icons.Heart key={j} size={16} fill="currentColor" className={j < 5 ? "text-teal-700" : "text-gray-300"} />)}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};




const Partners = () => (
  <section className="py-24 bg-white border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <FadeIn>
        <h4 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-12">We partner with experts you can trust</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-start">
          {[
            { src: "/images/partners/QuestDiagnostics.png", alt: "Quest Diagnostics", label: "Nationwide testing" },
            { src: "/images/partners/LegitScriptCertified.png", alt: "LegitScript Certified", label: "LegitScript-Certified pharmacy" },
            { src: "/images/partners/Fullscript.png", alt: "Fullscript", label: "Supplements and labs" },
            { src: "/images/partners/3x4Genetics.png", alt: "3x4 Genetics", label: "Genetic test kit" },
            { src: "/images/partners/getlabs.png", alt: "GetLabs", label: "At home lab collections" }
          ].map((partner, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="w-full rounded-full p-2 md:p-3 bg-white">
                <div className="w-full h-20 rounded-full flex items-center justify-center bg-white hover:shadow-sm transition-shadow duration-300">
                  <img src={partner.src} alt={partner.alt} className="max-h-10 w-auto object-contain" />
                </div>
              </div>
              <span className="text-sm font-bold text-gray-400 text-center leading-tight">{partner.label}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  </section>
);

const FAQ = () => (
  <section className="py-32 bg-white">
    <div className="max-w-3xl mx-auto px-6">
      <FadeIn><SectionHeading>FAQs</SectionHeading></FadeIn>
      <StaggerContainer className="mt-12">
        {[
          { q: "Why should I choose this annual health test?", a: "Our doctor-led annual test checks 100+ important health markers to give you a full body health picture, catching hidden issues early." },
          { q: "What happens after I sign up?", a: "We help you schedule testing near you, doctors review your results, and we guide you on what it means for your health." },
          { q: "Do I really need a full body test every year?", a: "Yes — annual full-body testing is a smart health routine. It helps you stay ahead of health changes." },
          { q: "Can I use HSA or FSA?", a: "Yes. US Health Clinic is HSA/FSA eligible. You can request an itemized receipt from our support team." }
        ].map((item, i) => (
          <StaggerItem key={i}>
            <Accordion title={item.q} content={item.a} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

const ClaritySection = () => (
  <section className="py-32 bg-cream text-center">
    <div className="max-w-4xl mx-auto px-6">
      <FadeIn>
        <h2 className="text-4xl md:text-6xl font-serif text-teal-900 mb-8">
          Clarity is the <span className="italic text-teal-600">beginning of healing</span>.
        </h2>
        <div className="flex flex-col items-center gap-4">
          <Button to="/subscribe">Join Today</Button>
          <span className="text-sm text-gray-500">30-day money-back guarantee.</span>
        </div>
      </FadeIn>
    </div>
  </section>
);

const Home = () => {
  return (
    <main>
      <Hero />
      <Methodology />
      <Biomarkers />
      <Discovery />
      <PathToHealth />
      <Testimonials />
      <Partners />
      <Membership />
      <WhyMembership />
      <FAQ />
      <ClaritySection />
    </main>
  );
};

export default Home;
