import { motion, AnimatePresence } from "motion/react";
import { Shield, CreditCard, Zap, Server, ChevronRight, Menu, X, Phone, MapPin, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    image: "input_file_2.png",
    title: "Máy Giữ Xe Cầm Tay",
    subtitle: "Công Nghệ Di Động Mới",
    theme: "dark"
  },
  {
    image: "https://images.unsplash.com/photo-1590674867551-11c3a2df5dc8?auto=format&fit=crop&q=80&w=2000",
    title: "Hệ Thống Thông Minh",
    subtitle: "Quản Lý Thẻ Từ Thế Hệ Mới",
    theme: "light"
  },
  {
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=2000",
    title: "Thiết Bị Giữ Xe",
    subtitle: "Cung Cấp Thiết Bị Trọn Gói",
    theme: "dark"
  }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="glass-header sticky top-0 z-50">
      <div className="container-custom py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="input_file_1.png" alt="KL Logo" className="w-12 h-12 object-contain" referrerPolicy="no-referrer" />
          <div>
            <h1 className="text-xl font-extrabold text-brand-blue leading-none">MÁY GIỮ XE</h1>
            <p className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase leading-none mt-1">Thông Minh</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#solutions" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Giải Pháp</a>
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Tính Năng</a>
          <a href="#about" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Về Chúng Tôi</a>
          <a href="#contact" className="btn-primary py-2 text-sm">Liên Hệ Ngay</a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 p-4 space-y-4 shadow-xl"
        >
          <a href="#solutions" className="block text-lg font-medium text-slate-700" onClick={() => setIsOpen(false)}>Giải Pháp</a>
          <a href="#features" className="block text-lg font-medium text-slate-700" onClick={() => setIsOpen(false)}>Tính Năng</a>
          <a href="#about" className="block text-lg font-medium text-slate-700" onClick={() => setIsOpen(false)}>Về Chúng Tôi</a>
          <a href="#contact" className="btn-primary block text-center" onClick={() => setIsOpen(false)}>Bắt Đầu Tư Vấn</a>
        </motion.div>
      )}
    </header>
  );
}

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden bg-slate-900 border-b border-white/10">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          {/* Slide 0: Tech Blue Background (No Image) */}
          {currentSlide === 0 && (
            <>
              <div className="absolute inset-0 bg-linear-to-br from-[#0f172a] via-brand-blue to-[#1e293b]"></div>
              <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            </>
          )}

          {/* Slide 1: Sophisticated Tech White Background (No Image) */}
          {currentSlide === 1 && (
            <>
              <div className="absolute inset-0 bg-linear-to-br from-white via-slate-50 to-blue-50/30"></div>
              {/* Subtle Tech Grid */}
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#1261A6 1px, transparent 1px), linear-gradient(90deg, #1261A6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              {/* Tech Accent Circles */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </>
          )}

          {/* Slide 2: Professional Equipment Dark Background (No Image) */}
          {currentSlide === 2 && (
            <>
              <div className="absolute inset-0 bg-linear-to-br from-[#020617] via-[#1e293b] to-[#0f172a]"></div>
              {/* Circuit Pattern lines */}
              <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
              <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="container-custom relative z-10 w-full pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className={`max-w-xl ${heroSlides[currentSlide].theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            {/* Unified Content Structure */}
            <div className={`inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wider mb-4 
              ${heroSlides[currentSlide].theme === 'dark' ? 'bg-white/10 border-white/20 text-blue-200' : 'bg-brand-blue/10 border-brand-blue/20 text-brand-blue'}`}>
              <Zap className="w-3 h-3" /> {heroSlides[currentSlide].subtitle}
            </div>

            {currentSlide === 0 ? (
              <>
                <h2 className="text-4xl md:text-5xl font-black leading-[1.1] mb-4">
                  Máy Giữ Xe <span className="text-orange-500 uppercase">Cầm Tay</span> <br /> 
                  Thông Minh <span className="italic font-light">Linh Hoạt</span>
                </h2>
                <p className={`text-base mb-6 max-w-md leading-relaxed ${heroSlides[currentSlide].theme === 'dark' ? 'text-slate-200' : 'text-slate-600'}`}>
                  Giải pháp di động tối ưu với khả năng nhận dạng biển số nhanh, chống va đập, pin bền bỉ. Quản lý bãi xe mọi lúc mọi nơi.
                </p>
              </>
            ) : currentSlide === 1 ? (
              <>
                <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1] mb-4">
                  Giải Pháp <span className="text-brand-blue font-black">Giữ Xe</span> <br /> 
                  Tối Ưu & <span className="italic">Thông Minh</span>
                </h2>
                <p className={`text-base mb-6 max-w-md leading-relaxed ${heroSlides[currentSlide].theme === 'dark' ? 'text-slate-200' : 'text-slate-600'}`}>
                  Hệ thống máy giữ xe hiện đại dành cho siêu thị, nhà máy, chung cư. Tiết kiệm chi phí vận hành, bảo mật tuyệt đối.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-4xl md:text-5xl font-black leading-[1.1] mb-4 uppercase">
                  Thiết Bị <span className="text-blue-400">Giữ Xe</span> <br /> 
                  Trọn Gói & <span className="italic font-light text-slate-400">Chuyên Nghiệp</span>
                </h2>
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                  {["Tủ giữ xe", "Thẻ từ", "Đầu đọc thẻ", "Barie", "Camera", "V.v..."].map((item, idx) => (
                    <span key={idx} className="flex items-center gap-1.5 text-slate-300 text-sm font-medium">
                       <Shield className="w-3.5 h-3.5 text-brand-blue" /> {item}
                    </span>
                  ))}
                </div>
              </>
            )}
            
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <a href="#contact" className="btn-primary text-base px-6 py-3 flex items-center justify-center gap-2 group shadow-xl shadow-brand-blue/20">
                Liên Hệ Tư Vấn <Phone className="w-4 h-4" />
              </a>
              <a href="#solutions" className={`${heroSlides[currentSlide].theme === 'dark' ? 'bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20' : 'btn-secondary'} text-base px-6 py-3 rounded-xl font-semibold flex items-center justify-center transition-all`}>
                Khám Phá Giải Pháp
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-6 right-6 z-20 flex gap-3">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all active:scale-90"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all active:scale-90"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, i) => (
          <button 
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${currentSlide === i ? 'w-8 bg-brand-blue' : 'w-2 bg-white/50'}`}
          ></button>
        ))}
      </div>
    </section>
  );
}

const solutions = [
  {
    title: "Gói Tiết Kiệm 2024",
    desc: "1 Máy 2 Làn - Phù hợp bãi xe < 5.000 lượt/ngày. Chi phí thấp nhất, lắp đặt nhanh, thu hồi vốn nhanh.",
    image: "https://images.unsplash.com/photo-1545179605-129668160568?auto=format&fit=crop&q=80&w=800",
    icon: <Zap className="w-6 h-6" />,
    tag: "Bán Chạy"
  },
  {
    title: "Chung Cư & Trường Học",
    desc: "Thiết kế riêng cho bãi xe máy & ô tô nội khu. Xử lý nhanh, trích xuất dữ liệu dễ dàng.",
    image: "https://images.unsplash.com/photo-1590674867551-11c3a2df5dc8?auto=format&fit=crop&q=80&w=800",
    icon: <Shield className="w-6 h-6" />
  },
  {
    title: "Siêu Thị & Nhà Máy",
    desc: "Phù hợp lưu lượng lớn, linh hoạt đảo chiều lối ra/vào phục vụ cao điểm. Bảo mật tuyệt đối.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    icon: <Server className="w-6 h-6" />
  }
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase">Giải Pháp <span className="text-brand-blue tracking-tight">Thông Minh 2024</span></h2>
          <p className="text-lg text-slate-600 mb-8 italic">"Cung cấp riêng lẻ phần mềm cũng như thiết bị khách cần nhằm tối ưu chi phí"</p>
          <div className="flex flex-wrap justify-center gap-4">
             <div className="bg-brand-blue/5 border border-brand-blue/10 px-4 py-2 rounded-lg text-sm font-bold text-brand-blue">
                TẦN SUẤT: {"<"} 5.000 LƯỢT/NGÀY
             </div>
             <div className="bg-orange-500/5 border border-orange-500/10 px-4 py-2 rounded-lg text-sm font-bold text-orange-600">
                GÓI TIẾT KIỆM CHI PHÍ THẤP NHẤT
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left mb-20">
          {solutions.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative h-[480px] overflow-hidden rounded-3xl shadow-xl shadow-slate-200"
            >
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
              
              {/* @ts-ignore */}
              {item.tag && (
                <div className="absolute top-6 right-6 bg-orange-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest z-10 shadow-lg animate-pulse">
                   {/* @ts-ignore */}
                   {item.tag}
                </div>
              )}

              <div className="absolute bottom-0 p-8">
                <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center text-white mb-4 shadow-xl border border-white/20">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tight">{item.title}</h3>
                <p className="text-slate-200 mb-0 leading-relaxed text-sm opacity-90">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advantages Row based on image */}
        <div className="bg-slate-50 rounded-4xl p-8 md:p-12 border border-slate-200">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
               <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase leading-tight">Ưu Điểm <br/><span className="text-brand-blue">Vượt Trội</span></h3>
               <p className="text-slate-600 text-sm">Hệ thống được thiết kế để mang lại hiệu quả kinh tế cao nhất cho chủ đầu tư.</p>
            </div>
            <div className="lg:w-2/3 grid md:grid-cols-2 gap-6">
               {[
                 { title: "Tối Ưu Chi Phí", content: "Giá siêu rẻ, sử dụng nhân lực ít, lắp đặt dễ dàng, thu hồi vốn nhanh chóng." },
                 { title: "Xử Lý Thông Minh", content: "Đáp ứng mọi yêu cầu cơ bản, xử lý nhanh, trích xuất dữ liệu tức thì khi cần." },
                 { title: "Linh Hoạt Cao", content: "Dễ dàng đảo chiều lối ra/vào để phục vụ trong giờ cao điểm cho siêu thị, nhà máy." },
                 { title: "Tương Thích Rộng", content: "Phù hợp cho bãi xe chung cư, bệnh viện, trường học, quán cafe, phòng gym..." }
               ].map((benefit, idx) => (
                 <div key={idx} className="flex gap-4">
                   <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 text-base mb-1">{benefit.title}</h4>
                     <p className="text-slate-600 text-xs leading-relaxed">{benefit.content}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-10 bg-brand-blue text-white overflow-hidden relative">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Liên Hệ <span className="text-blue-200">Ngay</span></h2>
            <p className="text-blue-100 text-sm max-w-md">
              Nâng cấp hệ thống bãi xe của bạn với chi phí tối ưu nhất.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <a href="tel:0986991505" className="group flex items-center gap-3">
              <div className="w-12 h-12 bg-white text-brand-blue rounded-xl flex items-center justify-center shadow-lg group-hover:bg-blue-50 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[9px] font-bold text-blue-200 uppercase tracking-widest leading-none mb-1">Hotline 24/7 (gặp Khải)</p>
                <p className="text-xl font-black">0986.991.505</p>
              </div>
            </a>

            <div className="hidden lg:block w-px h-10 bg-white/20"></div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur border border-white/20 rounded-xl flex items-center justify-center shadow-md">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-[9px] font-bold text-blue-200 uppercase tracking-widest leading-none mb-1">Địa Chỉ</p>
                <p className="text-base font-bold">Bình Hưng, Bình Chánh, HCM</p>
              </div>
            </div>

            <a href="tel:0986991505" className="px-6 py-3 bg-white text-brand-blue rounded-lg font-black text-sm hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 shadow-md uppercase tracking-wider">
              Gọi tư vấn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 py-20 text-slate-400 border-t border-slate-800">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6 text-white">
              <img src="input_file_1.png" alt="KL Logo" className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
              <span className="text-2xl font-black tracking-tight uppercase">MÁY GIỮ XE <span className="text-brand-blue">THÔNG MINH</span></span>
            </div>
            <p className="max-w-md leading-relaxed">
              Chúng tôi tự hào là đơn vị tiên phong trong lĩnh vực cung cấp giải pháp bãi xe thông minh tại Việt Nam. Cam kết mang đến hệ thống ổn định, hiện đại với chi phí hợp lý nhất.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Liên Kết</h4>
            <ul className="space-y-4 text-sm">
               <li><a href="#" className="hover:text-white transition-colors">Trang Chủ</a></li>
               <li><a href="#solutions" className="hover:text-white transition-colors">Giải Pháp</a></li>
               <li><a href="#features" className="hover:text-white transition-colors">Tính Năng</a></li>
               <li><a href="#contact" className="hover:text-white transition-colors">Liên Hệ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Pháp Lý</h4>
            <ul className="space-y-4 text-sm">
               <li><a href="#" className="hover:text-white transition-colors">Chính Sách Bảo Mật</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Điều Khoản Sử Dụng</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Chính Sách Bảo Hành</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest">
           <p>© 2024 MÁY GIỮ XE THÔNG MINH. ALL RIGHTS RESERVED.</p>
           <p>THÀNH PHỐ HỒ CHÍ MINH, VIỆT NAM</p>
        </div>
      </div>
    </footer>
  );
}
