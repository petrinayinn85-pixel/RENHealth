import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Leaf, 
  Clock, 
  Heart, 
  ShoppingBag, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronLeft,
  Star,
  Coffee,
  Moon,
  Sun,
  Droplets
} from 'lucide-react';

// --- Types ---

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'confinement' | 'tea';
  features?: string[];
}

// --- Constants ---

const LOGOS = {
  motherhoodChoice: "https://picsum.photos/seed/award/200/200",
  lyc: "https://picsum.photos/seed/lyc/200/200",
  cozzi: "https://picsum.photos/seed/cozzi/200/200",
  itsHerbs: "https://picsum.photos/seed/herbs/200/200",
  motherhood: "https://picsum.photos/seed/mom/200/200",
  kelabmama: "https://picsum.photos/seed/mama/200/200",
  gracie: "https://picsum.photos/seed/gracie/200/200",
  byond: "https://picsum.photos/seed/byond/200/200",
};

const CONFINEMENT_PACKAGES: Product[] = [
  {
    id: 'conf-14',
    name: '14-Day Essentials',
    description: 'A focused recovery package for the initial healing phase.',
    price: 'RM 888',
    image: 'https://picsum.photos/seed/herb14/800/1000',
    category: 'confinement',
    features: ['Uterus Recovery', 'Blood Replenishment', 'Basic Vitality Boost']
  },
  {
    id: 'conf-28',
    name: '28-Day Signature',
    description: 'Our most popular choice for comprehensive postpartum restoration.',
    price: 'RM 1,688',
    image: 'https://picsum.photos/seed/herb28/800/1000',
    category: 'confinement',
    features: ['Full Body Restoration', 'Lactation Support', 'Hormonal Balance', 'Immunity Strengthening']
  },
  {
    id: 'conf-56',
    name: '56-Day Premium',
    description: 'The ultimate care package for long-term health and deep rejuvenation.',
    price: 'RM 2,488',
    image: 'https://picsum.photos/seed/herb56/800/1000',
    category: 'confinement',
    features: ['Deep Tissue Repair', 'Bone & Joint Health', 'Premium Herbal Grade', 'Extended Wellness Support']
  }
];

const MISCARRIAGE_PACKAGE: Product = {
  id: 'conf-7',
  name: '7-Day Recovery',
  description: 'Specialized care for miscarriage recovery and gentle body restoration.',
  price: 'RM 488',
  image: '/miscarriage.jpg',
  category: 'confinement',
  features: ['Gentle Uterus Care', 'Emotional Balance Support', 'Basic Vitality Replenishment']
};

const TEA_SERIES: Product[] = [
  {
    id: 'tea-liver',
    name: 'Liver Detox Flower Tea',
    description: 'Refresh and cleanse your system from daily stressors.',
    price: 'RM 45',
    image: 'https://picsum.photos/seed/tea-liver/800/800',
    category: 'tea'
  },
  {
    id: 'tea-sleep',
    name: 'Sleep & Relax Flower Tea',
    description: 'Unwind with calming botanicals for a restful night.',
    price: 'RM 45',
    image: 'https://picsum.photos/seed/tea-sleep/800/800',
    category: 'tea'
  },
  {
    id: 'tea-damp',
    name: 'Dampness Removing Tea',
    description: 'Balance your body and reduce bloating naturally.',
    price: 'RM 48',
    image: 'https://picsum.photos/seed/tea-damp/800/800',
    category: 'tea'
  },
  {
    id: 'tea-date',
    name: 'Red Date Longan Tea',
    description: 'Classic nourishment for blood health and vitality.',
    price: 'RM 42',
    image: 'https://picsum.photos/seed/tea-date/800/800',
    category: 'tea'
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Lim",
    role: "Mother of two",
    content: "The 28-day confinement package was a lifesaver. The herbs were so easy to prepare, and I felt my energy returning much faster than my first pregnancy.",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    id: 2,
    name: "Aishah Rahman",
    role: "New Mother",
    content: "I love the Herbal Tea series! It's my daily ritual now. The Red Date Longan tea is so soothing and tastes amazing. Highly recommend to all busy moms.",
    image: "https://picsum.photos/seed/aishah/100/100"
  },
  {
    id: 3,
    name: "Jessica Wong",
    role: "Professional",
    content: "Convenience without compromising quality. REN Health truly understands the needs of modern women. The packaging is beautiful and the instructions are clear.",
    image: "https://picsum.photos/seed/jessica/100/100"
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-ren-cream/80 backdrop-blur-md border-b border-ren-pink-rose/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-sans text-3xl font-light tracking-tight text-ren-ink">rén</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#confinement" className="text-sm font-medium hover:text-ren-pink-rose transition-colors uppercase tracking-widest">Confinement</a>
            <a href="#teas" className="text-sm font-medium hover:text-ren-pink-rose transition-colors uppercase tracking-widest">Herbal Teas</a>
            <a href="#about" className="text-sm font-medium hover:text-ren-pink-rose transition-colors uppercase tracking-widest">Our Story</a>
            <a href="#contact" className="text-sm font-medium hover:text-ren-pink-rose transition-colors uppercase tracking-widest">Contact</a>
            <button className="bg-ren-pink-rose text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all">
              Shop Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-ren-cream border-b border-ren-pink-rose/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <a href="#confinement" onClick={() => setIsOpen(false)} className="block text-lg font-serif">Confinement Care</a>
              <a href="#teas" onClick={() => setIsOpen(false)} className="block text-lg font-serif">Herbal Tea Series</a>
              <a href="#about" onClick={() => setIsOpen(false)} className="block text-lg font-serif">Our Story</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="block text-lg font-serif">Contact Us</a>
              <button className="w-full bg-ren-pink-rose text-white py-3 rounded-full font-medium">Shop Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/wellness/1920/1080?blur=2" 
          className="w-full h-full object-cover opacity-20"
          alt="Wellness Background"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block px-4 py-1 rounded-full border border-ren-pink-rose/30 text-ren-pink-rose text-xs font-semibold tracking-widest uppercase">
                Modern Herbal Wisdom
              </span>
              <div className="flex items-center gap-2 bg-ren-pink-rose/10 px-3 py-1 rounded-full border border-ren-pink-rose/20">
                <img 
                  src={LOGOS.motherhoodChoice} 
                  className="w-4 h-4 rounded-full object-contain bg-white" 
                  alt="Award"
                  referrerPolicy="no-referrer"
                />
                <span className="text-[10px] font-bold text-ren-pink-rose uppercase tracking-tighter">Best Postnatal Recovery Essential</span>
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8 text-ren-ink">
              Prioritize Your <br />
              <span className="italic text-ren-pink-rose">Wellness</span>, <br />
              Effortlessly.
            </h1>
            <p className="text-lg text-ren-ink/70 max-w-md mb-10 leading-relaxed">
              REN Health brings premium traditional herbs to the modern woman's doorstep. Recognized as the <span className="font-semibold text-ren-pink-rose">Motherhood Choice Award</span> for Best Postnatal Recovery Essential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-ren-pink-rose text-white px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-opacity-90 transition-all shadow-lg shadow-ren-pink-rose/20">
                Explore Packages
              </button>
              <button className="border border-ren-pink-rose text-ren-pink-rose px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-ren-pink-rose hover:text-white transition-all">
                Our Story
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.instagram.com/reel/DHx5jUlTfwI/embed/" 
                className="w-full h-full border-none"
                scrolling="no"
                allowTransparency={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-[200px]">
              <div className="flex items-center gap-2 text-ren-pink-muted mb-2">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <p className="text-xs font-medium italic">"The most convenient confinement care I've experienced."</p>
              <p className="text-[10px] uppercase tracking-widest mt-2 opacity-50">— Sarah L.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const items = [
    { icon: <Leaf className="text-ren-pink-rose" />, title: "Premium Herbs", desc: "Sourced from the finest growers, ensuring maximum potency." },
    { icon: <Clock className="text-ren-pink-rose" />, title: "Time-Saving", desc: "Pre-measured and ready-to-brew for your busy schedule." },
    { icon: <Heart className="text-ren-pink-rose" />, title: "Female Focused", desc: "Tailored specifically for women's unique physiological needs." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-ren-cream rounded-full flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
              <p className="text-ren-ink/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ConfinementSection = () => {
  return (
    <section id="confinement" className="py-24 bg-ren-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif mb-4">Confinement Packages</h2>
          <p className="text-ren-ink/60 max-w-xl mx-auto">Traditional recovery made modern. Choose the duration that fits your healing journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CONFINEMENT_PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-ren-pink-rose/5"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={pkg.image} className="w-full h-full object-cover" alt={pkg.name} referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif mb-2">{pkg.name}</h3>
                <p className="text-ren-ink/60 text-sm mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features?.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-ren-pink-rose font-medium">
                      <ChevronRight size={14} /> {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-6 border-t border-ren-pink-rose/10">
                  <span className="text-xl font-serif text-ren-pink-muted">{pkg.price}</span>
                  <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ren-pink-rose hover:text-ren-pink-muted transition-colors">
                    Add to Cart <ShoppingBag size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-24 bg-ren-pink-rose/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-ren-pink-muted font-bold uppercase tracking-widest text-[10px] mb-4 block">Kind Words</span>
          <h2 className="text-4xl font-serif">What Our Mothers Say</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute w-full text-center px-8 md:px-20"
              >
                <div className="mb-8 flex justify-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img 
                      src={TESTIMONIALS[currentIndex].image} 
                      alt={TESTIMONIALS[currentIndex].name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <p className="text-xl md:text-2xl font-serif italic text-ren-ink/80 mb-8 leading-relaxed">
                  "{TESTIMONIALS[currentIndex].content}"
                </p>
                <div>
                  <h4 className="text-lg font-bold text-ren-pink-rose">{TESTIMONIALS[currentIndex].name}</h4>
                  <p className="text-xs uppercase tracking-widest text-ren-ink/40 font-semibold">{TESTIMONIALS[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-8 mt-12">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-ren-pink-rose/20 flex items-center justify-center text-ren-pink-rose hover:bg-ren-pink-rose hover:text-white transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === i ? 'w-8 bg-ren-pink-muted' : 'bg-ren-pink-rose/20'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-ren-pink-rose/20 flex items-center justify-center text-ren-pink-rose hover:bg-ren-pink-rose hover:text-white transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const MiscarriageSection = () => {
  return (
    <section id="miscarriage" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="text-ren-pink-muted font-bold uppercase tracking-widest text-xs mb-4 block">Specialized Care</span>
            <h2 className="text-5xl font-serif mb-6">Miscarriage Recovery</h2>
            <p className="text-ren-ink/60 mb-8 leading-relaxed">
              We understand that recovery is both physical and emotional. Our 7-day specialized package provides gentle, nourishing support to help your body heal and restore its natural balance during this sensitive time.
            </p>
            <div className="bg-ren-cream p-8 rounded-[32px] border border-ren-pink-rose/5">
              <h3 className="text-2xl font-serif mb-4">{MISCARRIAGE_PACKAGE.name}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {MISCARRIAGE_PACKAGE.features?.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-ren-pink-rose">
                    <Heart size={14} className="text-ren-pink-muted" /> {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-6 border-t border-ren-pink-rose/10">
                <span className="text-2xl font-serif text-ren-pink-muted">{MISCARRIAGE_PACKAGE.price}</span>
                <button className="bg-ren-pink-rose text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all">
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src={MISCARRIAGE_PACKAGE.image} 
                className="w-full h-full object-cover"
                alt="Miscarriage Recovery Care"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TeaSection = () => {
  return (
    <section id="teas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-5xl font-serif mb-4">Herbal Tea Series</h2>
            <p className="text-ren-ink/60 max-w-md">Daily wellness in every sip. Functional blends for the modern lifestyle.</p>
          </div>
          <button className="text-ren-pink-rose font-bold uppercase tracking-widest text-sm border-b-2 border-ren-pink-rose pb-1 hover:text-ren-pink-muted hover:border-ren-pink-muted transition-all">
            View Full Collection
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEA_SERIES.map((tea, idx) => (
            <motion.div
              key={tea.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-3xl overflow-hidden mb-6 relative">
                <img 
                  src={tea.image} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={tea.name} 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-ren-pink-rose/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-lg font-serif mb-1 group-hover:text-ren-pink-muted transition-colors">{tea.name}</h4>
              <p className="text-ren-ink/50 text-xs mb-3 line-clamp-1">{tea.description}</p>
              <span className="text-sm font-medium text-ren-pink-rose">{tea.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-ren-pink-rose/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-ren-pink-muted/10 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Vertical Rail & Image */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="flex gap-8 items-start">
              {/* Vertical Rail Text */}
              <div className="hidden sm:block pt-12">
                <span className="rail-text text-[10px] font-bold uppercase tracking-[0.4em] text-ren-pink-rose/40 whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  ESTABLISHED 2024 • HERITAGE & HEART
                </span>
              </div>
              
              <div className="relative flex-1">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="rounded-[60px] overflow-hidden aspect-[4/5] shadow-2xl relative z-10"
                >
                  <img 
                    src="/OurStory.jpg" 
                    className="w-full h-full object-cover"
                    alt="Our Story"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-ren-pink-rose/10 mix-blend-multiply" />
                </motion.div>
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-8 -right-8 bg-ren-pink-rose text-white p-8 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-xl z-20 border-4 border-white"
                >
                  <span className="text-2xl font-serif leading-none">5k+</span>
                  <span className="text-[8px] uppercase tracking-widest font-bold mt-1">Mothers Helped</span>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-ren-pink-rose/30" />
                <span className="text-ren-pink-rose font-bold uppercase tracking-[0.2em] text-[10px]">Our Heart & Heritage</span>
              </div>
              
              <h2 className="text-6xl md:text-7xl font-serif mb-10 leading-[0.9] text-ren-ink">
                A Love Letter to <br />
                <span className="italic text-ren-pink-rose font-light">Every Woman</span>
              </h2>
              
              <div className="space-y-8 text-lg text-ren-ink/70 leading-relaxed max-w-2xl">
                <p>
                  We believe that when a woman is well, her whole world thrives. But we also know the quiet weight you carry—the busy mornings, the sleepless nights, and the countless ways you put others first.
                </p>
                <p>
                  REN Health was born from a simple, heartfelt wish: to make it easier for you to care for yourself. We've bridged the gap between ancient healing and your modern life.
                </p>
                
                <div className="relative py-10 my-12">
                  <div className="absolute inset-0 bg-ren-cream/50 rounded-[40px] -rotate-1" />
                  <div className="relative px-10">
                    <Star className="text-ren-pink-rose mb-6" size={24} fill="currentColor" />
                    <p className="text-xl font-serif italic text-ren-ink leading-relaxed">
                      "Every one of our formulas is thoughtfully crafted in collaboration with the expert <span className="text-ren-pink-rose font-bold not-italic">TCM specialists from itsHerbs.com</span>, ensuring that you receive the purest, most effective support for your unique journey."
                    </p>
                  </div>
                </div>

                <p className="font-serif italic text-2xl text-ren-ink/90">
                  Because prioritizing your health isn't a luxury—it's an act of love for yourself and everyone who depends on you.
                </p>
              </div>

              <div className="mt-16 pt-12 border-t border-ren-pink-rose/10 flex flex-wrap gap-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-ren-pink-rose/10 flex items-center justify-center">
                    <Leaf className="text-ren-pink-rose" size={20} />
                  </div>
                  <div>
                    <span className="block text-xl font-serif text-ren-ink">100% Natural</span>
                    <span className="text-[10px] uppercase tracking-widest text-ren-ink/40 font-bold">Pure Ingredients</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-ren-pink-rose/10 flex items-center justify-center">
                    <Heart className="text-ren-pink-rose" size={20} />
                  </div>
                  <div>
                    <span className="block text-xl font-serif text-ren-ink">TCM Expertly</span>
                    <span className="text-[10px] uppercase tracking-widest text-ren-ink/40 font-bold">Formulated Support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-ren-pink-rose/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <span className="font-sans text-3xl font-light tracking-tight text-ren-ink mb-6 block">rén</span>
            <p className="text-ren-ink/60 text-sm leading-relaxed mb-6">
              Empowering women to prioritize their wellness through convenient, high-quality herbal solutions.
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 rounded-full border border-ren-pink-rose/20 flex items-center justify-center text-ren-pink-rose hover:bg-ren-pink-rose hover:text-white transition-all cursor-pointer">
                <Heart size={14} />
              </div>
              <div className="w-8 h-8 rounded-full border border-ren-pink-rose/20 flex items-center justify-center text-ren-pink-rose hover:bg-ren-pink-rose hover:text-white transition-all cursor-pointer">
                <Leaf size={14} />
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-6">Shop</h5>
            <ul className="space-y-4 text-sm text-ren-ink/60">
              <li><a href="#" className="hover:text-ren-pink-muted transition-colors">Confinement Packages</a></li>
              <li><a href="#" className="hover:text-ren-pink-muted transition-colors">Herbal Tea Series</a></li>
              <li><a href="#" className="hover:text-ren-pink-muted transition-colors">Gift Sets</a></li>
              <li><a href="#" className="hover:text-ren-pink-muted transition-colors">New Arrivals</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-6">Support</h5>
            <ul className="space-y-4 text-sm text-ren-ink/60">
              <li><a href="#" className="hover:text-ren-pink-muted transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-ren-pink-muted transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-ren-pink-muted transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-ren-pink-muted transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-6">Newsletter</h5>
            <p className="text-sm text-ren-ink/60 mb-6">Join our community for wellness tips and exclusive offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-ren-cream border-none rounded-l-full px-4 py-2 text-sm w-full focus:ring-1 focus:ring-ren-pink-rose outline-none"
              />
              <button className="bg-ren-pink-rose text-white px-6 py-2 rounded-r-full text-sm font-medium">Join</button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-ren-pink-rose/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-ren-ink/40">
            © 2024 REN HEALTH. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6 text-[10px] uppercase tracking-widest text-ren-ink/40">
            <a href="#" className="hover:text-ren-pink-rose transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-ren-pink-rose transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const PartnersSection = () => {
  const centres = [
    { name: "Cozzi Confinement Centre", image: LOGOS.cozzi },
    { name: "LYC Confinement Centre", image: LOGOS.lyc },
    { name: "Byond28 Confinement Centre", image: LOGOS.byond },
    { name: "Gracie Confinement Centre", image: LOGOS.gracie }
  ];
  const partners = [
    { name: "itsHerbs", image: LOGOS.itsHerbs },
    { name: "Motherhood.com.my", image: LOGOS.motherhood },
    { name: "Kelabmama.com", image: LOGOS.kelabmama }
  ];

  return (
    <section className="py-20 bg-ren-cream/50 border-y border-ren-pink-rose/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.2em] text-ren-pink-rose font-bold mb-4 block">Trusted Ecosystem</span>
          <h2 className="text-3xl font-serif">Our Partners & Credentials</h2>
        </div>
        
        <div className="mb-16">
          <p className="text-center text-xs uppercase tracking-widest text-ren-ink/40 mb-10">Supporting Premier Confinement Centres</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {centres.map((centre, i) => (
              <div key={i} className="flex flex-col items-center gap-3 group">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-ren-pink-rose/10 bg-white p-2 group-hover:border-ren-pink-muted/30 transition-colors">
                  <img 
                    src={centre.image} 
                    className="w-full h-full object-contain" 
                    alt={centre.name}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-ren-pink-rose text-center max-w-[100px] leading-tight">{centre.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-10 rounded-[40px] shadow-sm border border-ren-pink-rose/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-ren-pink-muted/5 rounded-bl-full -mr-16 -mt-16 group-hover:bg-ren-pink-muted/10 transition-colors" />
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-ren-pink-muted/10 p-2 rounded-2xl flex-shrink-0 bg-white">
                <img 
                  src={LOGOS.motherhoodChoice} 
                  className="w-full h-full object-contain" 
                  alt="Motherhood Choice Award"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-2xl font-serif">Motherhood Choice Award</h3>
                <div className="flex items-center gap-1 text-ren-pink-muted mt-1">
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                </div>
              </div>
            </div>
            <p className="text-ren-ink/60 text-sm leading-relaxed mb-6">
              Proudly recognized as the <span className="font-bold text-ren-ink">Best Postnatal Recovery Essential</span>. This award reflects our commitment to quality and the trust thousands of mothers place in REN Health.
            </p>
            <div className="flex items-center gap-2 text-ren-pink-muted font-bold text-[10px] uppercase tracking-widest">
              <span>Verified Excellence</span>
              <div className="h-[1px] w-12 bg-ren-pink-muted/30" />
            </div>
          </div>

          <div className="space-y-10">
            <p className="text-xs uppercase tracking-widest text-ren-ink/40">Strategic Partners</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {partners.map((partner, i) => (
                <div key={i} className="flex flex-col items-center gap-4 group cursor-pointer">
                  <div className="w-full aspect-video bg-white rounded-2xl border border-ren-pink-rose/10 flex items-center justify-center p-4 group-hover:border-ren-pink-muted/30 transition-all group-hover:shadow-lg group-hover:shadow-ren-pink-rose/5">
                    <img 
                      src={partner.image} 
                      className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity" 
                      alt={partner.name}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-ren-pink-rose uppercase tracking-widest group-hover:text-ren-pink-muted transition-colors">{partner.name}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-ren-ink/50 italic leading-relaxed">
              Collaborating with industry leaders to bring the best wellness resources to every woman.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    services: [] as string[]
  });

  const servicesOptions = [
    "Confinement Packages",
    "Herbal Tea Series",
    "Miscarriage Recovery",
    "Confinement Centre"
  ];

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.message || !formData.email) {
      alert("Please fill in all required fields (Name, Email, and Message).");
      return;
    }

    const whatsappNumber = "60124238768"; // Updated WhatsApp number
    const servicesText = formData.services.length > 0 ? formData.services.join(", ") : "None selected";
    
    const text = `NEW INQUIRY
Name: ${formData.name}
Email: ${formData.email}
Services: ${servicesText}
Message: ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-ren-cream/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-ren-pink-muted font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Get In Touch</span>
          <h2 className="text-5xl font-serif mb-6">Contact Us</h2>
          <p className="text-ren-ink/60">Have questions about our packages or need a personalized recommendation? We're here to help.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-ren-pink-rose/5">
          <div className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-ren-pink-rose mb-2">Name *</label>
              <input 
                type="text" 
                required
                className="w-full bg-ren-cream/50 border-none rounded-2xl px-6 py-4 outline-none focus:ring-1 focus:ring-ren-pink-rose transition-all"
                placeholder="Your full name"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-ren-pink-rose mb-2">Email *</label>
              <input 
                type="email" 
                required
                className="w-full bg-ren-cream/50 border-none rounded-2xl px-6 py-4 outline-none focus:ring-1 focus:ring-ren-pink-rose transition-all"
                placeholder="Your email address"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-ren-pink-rose mb-4">Help Needed</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {servicesOptions.map(service => (
                  <label key={service} className="flex items-center gap-3 cursor-pointer group">
                    <div 
                      onClick={() => handleServiceChange(service)}
                      className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                        formData.services.includes(service) 
                          ? 'bg-ren-pink-rose border-ren-pink-rose text-white' 
                          : 'border-ren-pink-rose/20 group-hover:border-ren-pink-rose/40'
                      }`}
                    >
                      {formData.services.includes(service) && <Leaf size={14} />}
                    </div>
                    <span className="text-sm text-ren-ink/70">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-ren-pink-rose mb-2">Message *</label>
              <textarea 
                required
                rows={4}
                className="w-full bg-ren-cream/50 border-none rounded-2xl px-6 py-4 outline-none focus:ring-1 focus:ring-ren-pink-rose transition-all resize-none"
                placeholder="How can we support you today?"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-ren-pink-rose text-white py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-opacity-90 transition-all shadow-lg shadow-ren-pink-rose/20 flex items-center justify-center gap-3"
            >
              Submit to WhatsApp <Heart size={18} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-ren-pink-rose/20">
      <Navbar />
      <main>
        <Hero />
        <PartnersSection />
        <Features />
        <ConfinementSection />
        <TestimonialsSection />
        <MiscarriageSection />
        <TeaSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
