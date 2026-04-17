import { motion, AnimatePresence } from "motion/react";
import { Shield, CreditCard, Zap, Server, ChevronRight, Menu, X, Phone, MapPin, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    image: "input_file_2.png",
    title: "Máy Giữ Xe Cầm Tay",
    subtitle: "Mobile Parking Generation",
    theme: "dark"
  },
  {
    image: "https://images.unsplash.com/photo-1590674867551-11c3a2df5dc8?auto=format&fit=crop&q=80&w=2000",
    title: "Hệ Thống Thông Minh",
    subtitle: "Quản Lý Thẻ Từ Thế Hệ Mới",
    theme: "light"
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
    <section className="relative h-[85vh] md:h-[90vh] flex items-center overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={heroSlides[currentSlide].image} 
            alt="Hero Banner" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {heroSlides[currentSlide].theme === 'light' ? (
             <div className="absolute inset-0 bg-linear-to-r from-brand-bg via-brand-bg/90 to-transparent"></div>
          ) : (
             <div className="absolute inset-0 bg-black/40"></div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="container-custom relative z-10 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className={`max-w-2xl ${heroSlides[currentSlide].theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            {currentSlide === 1 && (
              <>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider mb-6">
                  <Zap className="w-3 h-3" /> Hệ Thống Quản Lý Thẻ Từ Thế Hệ Mới
                </div>
                <h2 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
                  Giải Pháp <span className="text-brand-blue font-black">Giữ Xe</span> <br /> 
                  Tối Ưu & <span className="italic">Thông Minh</span>
                </h2>
                <p className={`text-xl mb-10 max-w-lg leading-relaxed ${heroSlides[currentSlide].theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                  Hệ thống máy giữ xe thẻ từ hiện đại dành cho siêu thị, nhà máy, chung cư. Tiết kiệm chi phí, dễ dàng triển khai, bảo mật tuyệt đối.
                </p>
              </>
            )}

            {currentSlide === 0 && (
              <div className="bg-black/20 backdrop-blur-sm p-8 md:p-12 rounded-4xl border border-white/10">
                <h2 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
                  <span className="text-orange-500">Máy Giữ Xe</span> <br /> 
                  Cầm Tay Thông Minh
                </h2>
                <p className="text-xl md:text-2xl font-bold text-orange-400 mb-6 italic tracking-tight">Mobile Parking Solution</p>
                <ul className="space-y-3 mb-8 text-slate-200 font-medium">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> Nhận dạng biển số siêu nhanh &lt; 2s</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> Chống nước, chống va đập, pin 5000mAh</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div> Quản lý doanh thu, gửi mail tự động</li>
                </ul>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#contact" className="btn-primary text-lg px-8 flex items-center justify-center gap-2 group">
                Tư Vấn Giải pháp <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#solutions" className={`${heroSlides[currentSlide].theme === 'dark' ? 'bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20' : 'btn-secondary'} text-lg px-8 py-3 rounded-xl font-semibold flex items-center justify-center transition-all`}>
                Khám Phá Dự Án
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-10 right-10 z-20 flex gap-4">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all active:scale-90"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all active:scale-90"
        >
          <ChevronRight className="w-6 h-6" />
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
    title: "Khu Công Nghiệp",
    desc: "Quản lý hàng ngàn lượt xe công nhân mỗi ca nhanh chóng, không ùn tắc.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
    icon: <Server className="w-6 h-6" />
  },
  {
    title: "Siêu Thị & TTTM",
    desc: "Tích hợp thẻ thành viên, xử lý thanh toán linh hoạt và báo cáo doanh thu.",
    image: "https://images.unsplash.com/photo-1519494140681-8917dad199ef?auto=format&fit=crop&q=80&w=800",
    icon: <CreditCard className="w-6 h-6" />
  },
  {
    title: "Bệnh Viện & Trường Học",
    desc: "Đặc thù ưu tiên và phân luồng thông minh, thẻ từ cho cán bộ nhân viên.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    icon: <Shield className="w-6 h-6" />
  }
];

export function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Giải Pháp Cho Mọi <span className="text-brand-blue uppercase tracking-tight">Quy Mô</span></h2>
          <p className="text-lg text-slate-600">Hệ thống của chúng tôi được tùy chỉnh để phù hợp với từng nhu cầu đặc thù của khách hàng từ chung cư mini đến các khu công nghệ cao rộng lớn.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {solutions.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative h-[450px] overflow-hidden rounded-3xl"
            >
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              <div className="absolute bottom-0 p-8">
                <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center text-white mb-4 shadow-xl">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 mb-0 leading-snug">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Features() {
  const steps = [
    { title: "Bền Bỉ", desc: "Phần cứng chuẩn công nghiệp, hoạt động 24/7 dưới mọi điều kiện thời tiết." },
    { title: "Nhanh Chóng", desc: "Thời gian quẹt thẻ chưa tới 1 giây, loại bỏ hoàn toàn ùn tắc giờ cao điểm." },
    { title: "Tối Ưu", desc: "Giảm 70% chi phí nhân sự vận hành so với phương pháp giữ xe thủ công." },
    { title: "An Toàn", desc: "Camera nhận diện biển số (ANPR) chính xác, cảnh báo gian lận ngay lập tức." }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container-custom flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
            Vì Sao Nhà Quản Lý <br />
            Tin Dùng <span className="text-brand-blue italic underline decoration-blue-200 underline-offset-8">SmartParking?</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="space-y-3">
                <div className="w-8 h-1 bg-brand-blue rounded-full"></div>
                <h4 className="text-xl font-extrabold text-slate-800">{step.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-4xl overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1545179605-129668160568?auto=format&fit=crop&q=80&w=1000" 
              alt="Technology" 
              className="w-full"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -z-0 -top-10 -right-10 w-full h-full bg-brand-blue/5 rounded-4xl translate-x-4 translate-y-4"></div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-blue text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full"></div>
         <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full"></div>
      </div>
      
      <div className="container-custom grid lg:grid-cols-2 gap-20 relative z-10">
        <div>
          <h2 className="text-5xl font-black mb-8 leading-tight">Nâng Cấp Hệ Thống <br /> Ngay Hôm Nay</h2>
          <p className="text-blue-100 text-lg mb-12 max-w-md">
            Đừng để quy trình giữ xe cũ kỹ làm ảnh hưởng đến trải nghiệm khách hàng và hiệu quả quản lý của bạn.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-blue-200 uppercase tracking-widest">Hotline Tư Vấn 24/7</p>
                <p className="text-2xl font-bold">09x xxx xxxx</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-blue-200 uppercase tracking-widest">Địa Chỉ Văn Phòng</p>
                <p className="text-lg font-medium">Bình Hưng, Bình Chánh, TP. HCM</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white p-10 rounded-4xl text-slate-900 shadow-2xl"
        >
          <h3 className="text-2xl font-extrabold mb-6">Yêu Cầu Khảo Sát Tận Nơi</h3>
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400">Họ & Tên</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-brand-blue outline-none transition-all" placeholder="Nguyễn Văn A" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400">Số Điện Thoại</label>
                <input type="tel" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-brand-blue outline-none transition-all" placeholder="0901234567" />
              </div>
            </div>
            <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400">Loại Hình Cần Triển Khai</label>
                <select className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:ring-2 focus:ring-brand-blue outline-none transition-all">
                  <option>Siêu Thị / TTTM</option>
                  <option>Bệnh Viện / Trường Học</option>
                  <option>Chung Cư / Căn Hộ</option>
                  <option>Nhà Máy / KCN</option>
                  <option>Khác</option>
                </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-slate-400">Ghi Chú Thêm</label>
              <textarea className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl h-24 focus:ring-2 focus:ring-brand-blue outline-none transition-all" placeholder="Mô tả sơ qua về bãi xe của bạn..."></textarea>
            </div>
            <button className="btn-primary w-full py-5 text-lg shadow-xl shadow-brand-blue/30">Gửi Yêu Cầu Báo Giá</button>
          </form>
        </motion.div>
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
