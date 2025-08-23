import React from 'react';
import { ArrowRight, Mail, User, MessageSquare, Send, Brain, Cog, ChevronLeft, ChevronRight, Video, Play, Mic, Eye, TrendingUp, Speech, Linkedin } from 'lucide-react';
import { config } from './config';

function App() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [selectedDemo, setSelectedDemo] = React.useState<typeof aiCapabilities[0] | null>(null);
  const [playingVideo, setPlayingVideo] = React.useState<number | null>(null);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch(config.contact.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: config.contact.email
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const aiCapabilities = [
    { 
      id: 0, 
      title: 'Knowledge', 
      icon: Brain, 
      description: 'AI makes sense of overwhelming information. It connects to live data, summarizes complex documents, and delivers answers instantly, acting like a tireless digital librarian.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      id: 1, 
      title: 'Language', 
      icon: MessageSquare, 
      description: 'AI reads, writes, and interprets human text with fluency. From chatbots to real-time translation, it bridges communication between people and machines seamlessly.',
      image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      id: 2, 
      title: 'Speech', 
      icon: Mic, 
      description: 'AI listens and speaks naturally. With accurate transcription, lifelike voices, and emotion detection, it makes technology more human and accessible.',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      id: 3, 
      title: 'Automation', 
      icon: Cog, 
      description: 'AI takes on repetitive work at scale. From processing documents to managing workflows, it frees people to focus on creativity, strategy, and connection.',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      id: 4, 
      title: 'Perception', 
      icon: Eye, 
      description: 'AI can see and understand the visual world. It recognizes objects, reads medical scans, and even generates new images and videos with precision.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    { 
      id: 5, 
      title: 'Prediction', 
      icon: TrendingUp, 
      description: 'AI uncovers patterns hidden in data. It forecasts demand, detects fraud, and powers recommendations, offering foresight that drives smarter decisions.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] relative overflow-hidden">
      {/* Floating Gradient Spheres */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Teal-Blue Planet - Top Left */}
        <div className="absolute -top-48 -left-48 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-200 via-blue-400 to-indigo-900 opacity-25 blur-2xl animate-float-slow shadow-2xl"></div>
        
        {/* Mars-like Planet - Top Right */}
        <div className="absolute -top-32 -right-56 w-[28rem] h-[28rem] rounded-full bg-gradient-to-bl from-red-300 via-orange-600 to-amber-900 opacity-20 blur-2xl animate-float-delayed shadow-2xl"></div>
        
        {/* Moon-like Planet - Bottom Left */}
        <div className="absolute -bottom-40 -left-52 w-80 h-80 rounded-full bg-gradient-to-tr from-slate-200 via-gray-400 to-slate-700 opacity-15 blur-2xl animate-float shadow-2xl"></div>
        
        {/* Deep Space Planet - Bottom Right */}
        <div className="absolute -bottom-44 -right-40 w-72 h-72 rounded-full bg-gradient-to-tl from-violet-600 via-purple-800 to-indigo-950 opacity-30 blur-2xl animate-float-slow shadow-2xl"></div>
        
        {/* Additional smaller planets for depth */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-rose-300 via-pink-500 to-fuchsia-800 opacity-12 blur-xl animate-float-delayed shadow-xl"></div>
        <div className="absolute top-3/4 right-1/3 w-56 h-56 rounded-full bg-gradient-to-l from-emerald-200 via-teal-600 to-cyan-900 opacity-15 blur-xl animate-float shadow-xl"></div>
        
        {/* Distant planets for more depth */}
        <div className="absolute top-1/2 left-1/6 w-32 h-32 rounded-full bg-gradient-to-br from-amber-200 via-orange-500 to-red-700 opacity-8 blur-lg animate-float-slow shadow-lg"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-gradient-to-tl from-indigo-300 via-purple-700 to-violet-950 opacity-10 blur-lg animate-float-delayed shadow-lg"></div>
        
        {/* Additional random planets for richer background */}
        <div className="absolute top-1/6 right-1/6 w-36 h-36 rounded-full bg-gradient-to-br from-lime-200 via-green-500 to-emerald-800 opacity-12 blur-xl animate-float shadow-lg"></div>
        <div className="absolute bottom-1/6 left-1/3 w-44 h-44 rounded-full bg-gradient-to-tl from-yellow-300 via-amber-600 to-orange-900 opacity-10 blur-xl animate-float-delayed shadow-lg"></div>
        <div className="absolute top-2/3 left-1/12 w-28 h-28 rounded-full bg-gradient-to-r from-purple-200 via-violet-500 to-indigo-800 opacity-8 blur-lg animate-float-slow shadow-md"></div>
        <div className="absolute bottom-1/3 right-1/12 w-52 h-52 rounded-full bg-gradient-to-bl from-pink-200 via-rose-500 to-red-800 opacity-11 blur-xl animate-float shadow-lg"></div>
        <div className="absolute top-1/8 left-2/3 w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-300 via-sky-600 to-blue-900 opacity-9 blur-md animate-float-delayed shadow-md"></div>
        <div className="absolute bottom-1/8 right-2/3 w-60 h-60 rounded-full bg-gradient-to-bl from-teal-200 via-cyan-600 to-blue-900 opacity-13 blur-2xl animate-float-slow shadow-xl"></div>
        <div className="absolute top-5/6 left-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-indigo-200 via-blue-500 to-purple-800 opacity-7 blur-sm animate-float shadow-sm"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Floating Logo */}
        <div className="fixed top-6 left-6 z-50 flex items-center">
          <img 
            src="/nova.PNG" 
            alt="Nova Logo" 
            className="h-12 md:h-16 lg:h-20 w-auto cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-2xl hover:brightness-110"
          />
        </div>

        {/* Floating Contact Us Button */}
        <div className="fixed top-6 right-6 z-50 flex items-center">
          <button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-gray-900 font-inter font-medium px-6 py-4 rounded-full border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:bg-white/90"
          >
            <span className="relative z-10 text-sm md:text-base">Contact Us</span>
            <Mail className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-150"></div>
          </button>
        </div>

        {/* Hero Headlines */}
        <section className="px-6 pt-32 md:pt-40 lg:pt-48 pb-8 md:pb-12">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-4 leading-tight">
              Don't Miss Out on the 
              <span className="block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                AI Revolution
              </span>
            </h1>
            <p className="font-inter text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
             We make it simple to explore, adopt, and grow with AI.
            </p>
          </div>
        </section>

        {/* Hero Section */}
        <section className="px-6 py-16 md:py-24 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-8">
              <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                Explore the Power of AI
              </h2>
            </div>

            {/* Horizontal Scroll Container */}
            <div 
              ref={scrollRef}
              className="overflow-x-auto scrollbar-hide scroll-smooth pt-4 pb-8"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex space-x-6 md:space-x-8" style={{ width: 'max-content' }}>
                {aiCapabilities.map((capability, index) => {
                  const IconComponent = capability.icon;
                  
                  return (
                    <div
                      key={capability.id}
                      className="group flex-shrink-0 w-72 md:w-80 lg:w-96 cursor-pointer"
                      onClick={() => setSelectedDemo(capability)}
                    >
                      {/* Card Container */}
                      <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-2 h-80 md:h-96 flex flex-col">
                        {/* Image Section */}
                        <div className="relative h-32 md:h-40 overflow-hidden flex-shrink-0">
                          <img 
                            src={capability.image} 
                            alt={capability.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                          
                          {/* Icon Overlay */}
                          <div className="absolute top-6 left-6">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
                            </div>
                          </div>
                        </div>
                        
                        {/* Content Section */}
                        <div className="p-5 md:p-6 flex-1 flex flex-col">
                          <h3 className="font-playfair text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3 group-hover:text-gray-700 transition-colors duration-300">
                            {capability.title}
                          </h3>
                          <p className="font-inter text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3 flex-1">
                            {capability.description}
                          </p>
                        </div>
                        
                        {/* Hover Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-3 mt-8">
              <button
                onClick={scrollLeft}
                className="group w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-full border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/90 flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
              </button>
              <button
                onClick={scrollRight}
                className="group w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-full border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/90 flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
              </button>
            </div>
          </div>
        </section>

        {/* Features Overview Section */}
        <section className="px-6 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
                Everything you need to succeed
              </h2>
              <p className="font-inter text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our comprehensive platform brings together all the tools and features you need to transform your digital experience and achieve your goals.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 0,
                  title: 'Knowledge',
                  icon: Brain,
                  description: 'AI makes sense of overwhelming information.',
                  technologies: ['RAG (Retrieval-Augmented Generation)', 'Semantic Search', 'Summarization', 'Knowledge Graphs']
                },
                {
                  id: 1,
                  title: 'Language',
                  icon: MessageSquare,
                  description: 'AI reads, writes, and interprets human text with fluency.',
                  technologies: ['Natural Language Generation (NLG)', 'Machine Translation', 'Sentiment Analysis', 'Text Classification']
                },
                {
                  id: 2,
                  title: 'Speech',
                  icon: Mic,
                  description: 'AI listens and speaks naturally.',
                  technologies: ['ASR (Speech-to-Text)', 'TTS (Text-to-Speech)', 'Voice Cloning', 'Speech Emotion Recognition']
                },
                {
                  id: 3,
                  title: 'Perception',
                  icon: Eye,
                  description: 'AI can see and understand the visual world.',
                  technologies: ['Image Recognition', 'OCR (Optical Character Recognition)', 'Text-to-Image', 'Text-to-Video']
                },
                {
                  id: 4,
                  title: 'Prediction',
                  icon: TrendingUp,
                  description: 'AI uncovers patterns hidden in data.',
                  technologies: ['Predictive Analytics', 'Anomaly Detection', 'Recommendation Systems', 'Risk Modeling']
                },
                {
                  id: 5,
                  title: 'Automation',
                  icon: Cog,
                  description: 'AI takes on repetitive work at scale. ',
                  technologies: ['Intelligent Document Processing', 'RPA (Robotic Process Automation)', 'AI Agents & Orchestration', 'Conversational AI']
                }
              ].map((capability, index) => {
                const IconComponent = capability.icon;
                
                return (
                  <div
                    key={capability.id}
                    className="group bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-white/20 hover:shadow-xl hover:bg-white/60 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-200 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-7 h-7 text-gray-700" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4">
                      {capability.title}
                    </h3>
                    <p className="font-inter text-gray-600 leading-relaxed">
                      {capability.description}
                    </p>
                    
                    {/* Technologies Section */}
                    <div className="mt-4">
                      <div className="space-y-2">
                        {capability.technologies.map((tech, techIndex) => (
                          <div key={techIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></div>
                            <span className="font-inter text-sm text-gray-600">
                              {tech}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Subheadline */}
            <div className="text-center mt-12 md:mt-16">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 mb-6 leading-tight">
                Reimagine what's possible with 
                <span className="italic text-gray-600"> AI</span>
              </h2>
              <p className="font-inter text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
                I'm deeply passionate about exploring and experimenting with AI. My goal is simple: to genuinely help you harness this technology to grow, succeed, and unlock new opportunities. 
              </p>

              {/* CTA Button */}
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-black text-white font-inter font-medium px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1"
              >
                <span className="relative z-10">Got something in mind, let's talk</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-150"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-full"></div>
              </button>
            </div>
          </div>
        </section>

        {/* Text-to-Video Examples Section */}
        <section className="px-6 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Speech className="w-8 h-8 md:w-10 md:h-10 text-gray-700 mr-4" />
                <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
                  Don't just take my word for it
                </h2>
              </div>
              <p className="font-inter text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Here are a few real examples of what AI can do. Transformed ideas into stunning videos!
              </p>
            </div>

            {/* Video Examples Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  title: 'Event Showcase',
                  description: 'Capture the vibrant energy of a Holi celebration in Auckland, highlighting the joyful colors, music, and dance. Showcase the cultural fusion of Indian traditions with a global audience, featuring the Mumbai Local food stall serving authentic street food. Use dynamic camera shots, slow-motion color bursts, and upbeat festival music to create an immersive experience.',
                  video: `${config.baseUri.textToVideoBucket}/mumbailocal.mp4`,
                  thumbnail: `${config.baseUri.textToVideoBucket}/mumbailocal_thumbnail.png`,
                  examples: ['Tourism', 'Public awareness', 'Government campaigns', 'Event promotions'],
                  layout: 'portrait'
                },
                {
                  title: 'Brand Marketing',
                  description: 'Produce an electrifying promotional video showcasing cutting-edge solutions. Use high-energy transitions, sharp typography, and animated graphics to highlight brand expertise, testimonials, and real-world success stories. Finish with a compelling call-to-action to boost engagement.',
                  video: `${config.baseUri.textToVideoBucket}/1shotBuilders.mp4`,
                  thumbnail: `${config.baseUri.textToVideoBucket}/1shotbuilders_thumbnail.png`,
                  examples: ['Product launches', 'Investor pitches', 'Trade shows', 'E-commerce'],
                  layout: 'portrait'
                },
                {
                  title: 'Interactive Content',
                  description: 'Bring the prehistoric era to life with an animated scene featuring dinosaurs in action. Use vibrant colors, engaging movements, and realistic sounds to create an entertaining yet educational experience. Suitable for kids, gaming content, or themed attraction promos.',
                  video: `${config.baseUri.textToVideoBucket}/dinosaurs.mp4`,
                  thumbnail: `${config.baseUri.textToVideoBucket}/dinosaur_thumbnail.png`,
                  examples: ['Kids education', 'How-to Guides', 'VR/AR experiences', 'Trailers & Teasers'],
                  layout: 'portrait'
                },
                {
                  title: 'Educational Content',
                  description: 'Create a visually immersive medical animation highlighting anatomical structures. Use a mix of 3D models, overlays, and real-world comparisons to explain complex concepts. End with practical applications and self-diagnosis techniques for enhanced learning.',
                  video: `${config.baseUri.textToVideoBucket}/medical.mp4`,
                  thumbnail: `${config.baseUri.textToVideoBucket}/medical_thumbnail.png`,
                  examples: ['Course Modules', 'Medical training', 'Concept Explainers', 'Fitness science', 'Awareness Campaigns'],
                  layout: 'portrait'
                },
                {
                  title: 'Personal Branding',
                  description: 'Craft an engaging podcast visual for influencers discussing deep and meaningful conversations. Use smooth text animations, dynamic audio waveforms, and a cinematic color palette to enhance storytelling. Perfect for thought leaders and social media engagement.',
                  video: `${config.baseUri.textToVideoBucket}/behkibatein.mp4`,
                  thumbnail: `${config.baseUri.textToVideoBucket}/behkibatein_thumbnail.png`,
                  examples: ['Podcast', 'Storytelling', 'Customer Stories', 'Lyric videos'],
                  layout: 'portrait'
                },
                {
                  title: 'News Broadcasting',
                  description: 'Create professional news broadcasts with AI anchors delivering breaking news, weather updates, and sports highlights. Perfect for media companies, corporate communications, and content creators looking to produce consistent, high-quality news content.',
                  video: `${config.baseUri.textToVideoBucket}/anchor.mp4`,
                  thumbnail: `${config.baseUri.textToVideoBucket}/anchor_thumbnail.png`,
                  examples: ['Breaking News', 'Weather Reports', 'Sports Updates', 'Viral Clips', 'Brand Yourself'],
                  layout: 'portrait'
                }
              ].map((category, index) => (
                <div
                  key={index}
                  className="group bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:shadow-2xl hover:bg-white/70 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
                >
                  <div className="flex flex-col sm:flex-row h-full">
                    {/* Content Section */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                      <h4 className="font-playfair text-xl md:text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                        {category.title}
                      </h4>
                      <div className="relative mb-6 flex-1">
                        <span className="absolute -left-2 -top-1 text-3xl font-bold text-gray-400 font-playfair">"</span>
                        <p className="font-inter text-sm md:text-base text-gray-600 leading-relaxed px-4">
                          {category.description}
                        </p>
                        <span className="absolute -right-2 -bottom-1 text-3xl font-bold text-gray-400 font-playfair">"</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.examples.map((example, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm font-inter font-medium hover:bg-gray-200 transition-colors duration-200"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Video Preview Section */}
                    <div className="p-4 md:p-6 flex justify-center items-center">
                      <div className="relative aspect-[9/16] w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px]">
                        {playingVideo === index ? (
                          // Video Player
                          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
                            <video
                              src={category.video}
                              controls
                              autoPlay
                              className="w-full h-full object-cover"
                              onEnded={() => setPlayingVideo(null)}
                            >
                              Your browser does not support the video tag.
                            </video>
                            {/* Close Button */}
                            <button
                              onClick={() => setPlayingVideo(null)}
                              className="absolute top-2 left-2 w-6 h-6 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-black/80 transition-all duration-200"
                            >
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        ) : (
                          // Thumbnail
                          <div 
                            className="relative w-full h-full rounded-xl overflow-hidden shadow-lg border border-gray-200 group-hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                            onClick={() => setPlayingVideo(index)}
                          >
                            <img
                              src={category.thumbnail}
                              alt={category.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
                                <Play className="w-5 h-5 text-gray-800 ml-0.5" />
                              </div>
                            </div>
                            {/* Video Badge */}
                            <div className="absolute top-2 right-2">
                              <div className="w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                                <Video className="w-3 h-3 text-gray-700" />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Marketing Communications - Landscape Video */}
            <div className="mt-8">
              <div className="group bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden hover:shadow-2xl hover:bg-white/70 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                <div className="flex flex-col lg:flex-row">
                  {/* Content Section */}
                  <div className="p-6 md:p-8 lg:w-2/3 flex flex-col">
                    <h4 className="font-playfair text-xl md:text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                      Marketing Communications
                    </h4>
                    <div className="relative mb-6 flex-1">
                      <span className="absolute -left-2 -top-1 text-3xl font-bold text-gray-400 font-playfair">"</span>
                      <p className="font-inter text-sm md:text-base text-gray-600 leading-relaxed px-4">
                        Small switch, big eco win — these KiwiGreen bags crushed my avocado test and ditched the plastic!
                      </p>
                      <span className="absolute -right-2 -bottom-1 text-3xl font-bold text-gray-400 font-playfair">"</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Business Reports', 'Company Updates', 'User-Generated Content ads'].map((example, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm font-inter font-medium hover:bg-gray-200 transition-colors duration-200"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Landscape Video Section */}
                  <div className="lg:w-1/3 p-4 md:p-6 flex justify-center items-center">
                    <div className="relative w-full">
                      {playingVideo === 6 ? (
                        // Video Player
                        <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
                          <video
                            src={`${config.baseUri.textToVideoBucket}/market.mp4`}
                            controls
                            autoPlay
                            className="w-full h-full object-cover"
                            onEnded={() => setPlayingVideo(null)}
                          >
                            Your browser does not support the video tag.
                          </video>
                          {/* Close Button */}
                          <button
                            onClick={() => setPlayingVideo(null)}
                            className="absolute top-2 left-2 w-6 h-6 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-black/80 transition-all duration-200"
                          >
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ) : (
                        // Thumbnail
                        <div 
                          className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-gray-200 group-hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                          onClick={() => setPlayingVideo(6)}
                        >
                          <img
                            src={`${config.baseUri.textToVideoBucket}/market_thumbnail.png`}
                            alt="Marketing Communications"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {/* Play Button Overlay */}
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200">
                              <Play className="w-5 h-5 text-gray-800 ml-0.5" />
                            </div>
                          </div>
                          {/* Video Badge */}
                          <div className="absolute top-2 right-2">
                            <div className="w-6 h-6 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                              <Video className="w-3 h-3 text-gray-700" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              {/* <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-black text-white font-inter font-medium px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1">
                <span className="relative z-10">Create Your Video</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Hover glow effect */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-150"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-full"></div>
              </button> */}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="px-6 py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="font-inter text-lg text-gray-600 leading-relaxed">
                Ready to transform your digital experience? Let's start a conversation.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-xl border border-white/20 p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-xl font-inter text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900 transition-all duration-300"
                  />
                </div>

                {/* Email Field */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-xl font-inter text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900 transition-all duration-300"
                  />
                </div>

                {/* Message Field */}
                <div className="relative">
                  <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Tell us about your project..."
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/80 border border-gray-200 rounded-xl font-inter text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900/20 focus:border-gray-900 transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <p className="text-green-800 font-inter text-sm">
                      ✅ Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-red-800 font-inter text-sm">
                      ❌ Failed to send message. Please try again or email us directly at {config.contact.email}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gray-900 to-black text-white font-inter font-medium px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0"
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  {isSubmitting ? (
                    <div className="w-5 h-5 relative z-10 animate-spin">
                      <div className="w-full h-full border-2 border-white/30 border-t-white rounded-full"></div>
                    </div>
                  ) : (
                    <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  )}
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-150"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-xl"></div>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative px-6 py-8 md:py-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            {/* Copyright - Centered */}
            <div className="flex-1 text-center mb-4 md:mb-0">
              <p className="font-inter text-sm text-gray-500">
                © 2025 Nova Nexus. All rights reserved.
              </p>
            </div>
            
            {/* LinkedIn Icon - Bottom right */}
            <div className="flex justify-center md:justify-end">
              <a 
                href="https://www.linkedin.com/in/ravi-bhatt-219a10ab/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-10 h-10 md:w-12 md:h-12 bg-white/80 backdrop-blur-sm rounded-full border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-white/90 flex items-center justify-center"
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </footer>

        {/* Apple-style Modal */}
        {selectedDemo && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedDemo(null)}
          >
            {/* Blurred Background */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl"></div>
            
            {/* Modal Content */}
            <div 
              className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-3xl border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDemo(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white/90 hover:scale-110 transition-all duration-300"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src={selectedDemo.image} 
                  alt={selectedDemo.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Icon Overlay */}
                <div className="absolute top-8 left-8">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <selectedDemo.icon className="w-8 h-8 text-gray-800" />
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 md:p-10">
                <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                  {selectedDemo.title}
                </h2>
                <p className="font-inter text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                  {selectedDemo.description}
                </p>
                
                {/* Additional Content */}
                <div className="space-y-4">
                  <h3 className="font-playfair text-xl font-semibold text-gray-900">Key Features</h3>
                  <ul className="space-y-2 font-inter text-gray-600">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      Advanced functionality with intuitive design
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      Seamless integration with existing workflows
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      Real-time updates and notifications
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gray-900 to-black text-white font-inter font-medium px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <span className="relative z-10">Learn More</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black rounded-full"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;