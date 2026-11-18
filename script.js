
const translations = {
  id: {
    navHome: "Beranda",
    navAbout: "Tentang Kami",
    navServices: "Layanan",
    navWhy: "Keunggulan",
    navContact: "Kontak",
    heroTag: "TRUST • PROFESSIONAL • EXCELLENCE",
    heroTitle: 'Your Trusted Partner<br><span>For Business Growth</span>',
    heroDesc: "Solusi konsultasi profesional untuk membantu bisnis Anda berkembang, berinovasi, dan mencapai kesuksesan jangka panjang.",
    heroButton: "Jelajahi Layanan",
    contactButton: "Hubungi Kami",
    aboutLabel: "TENTANG PERUSAHAAN",
    aboutTitle: 'Membangun Kepercayaan,<br>Menciptakan <span class="gold">Kesuksesan.</span>',
    aboutDesc: "PT. Jiaxin Consultant hadir sebagai mitra profesional yang berkomitmen memberikan solusi konsultasi, pendampingan, dan layanan bisnis berkualitas. Kami mengutamakan integritas, profesionalisme, serta hubungan jangka panjang dengan setiap klien.",
    aboutLink: "Kenali Kami Lebih Dekat →",
    serviceLabel: "APA YANG KAMI LAKUKAN",
    serviceTitle: "Layanan Profesional Kami",
    serviceDesc: "Memberikan solusi yang tepat untuk kebutuhan bisnis Anda.",
    service1: "Konsultasi Bisnis",
    service1Desc: "Pendampingan dan strategi untuk mengembangkan potensi bisnis secara berkelanjutan.",
    service2: "Manajemen Perusahaan",
    service2Desc: "Solusi pengelolaan dan peningkatan efektivitas operasional perusahaan.",
    service3: "Konsultasi Investasi",
    service3Desc: "Informasi dan pendampingan perencanaan pengembangan peluang investasi.",
    service4: "Business Development",
    service4Desc: "Mendukung pengembangan jaringan, kemitraan, dan peluang pertumbuhan bisnis.",
    whyLabel: "MENGAPA MEMILIH KAMI",
    whyTitle: "Standar Profesional<br>Untuk Masa Depan.",
    why1: "Profesional",
    why1Desc: "Mengutamakan kualitas dan tanggung jawab.",
    why2: "Terpercaya",
    why2Desc: "Membangun hubungan berdasarkan integritas.",
    why3: "Berorientasi Solusi",
    why3Desc: "Fokus pada kebutuhan dan tujuan klien.",
    contactLabel: "MARI TERHUBUNG",
    contactTitle: "Mari Bangun<br>Kesuksesan Bersama.",
    contactDesc: "Hubungi tim kami untuk mendapatkan informasi lebih lanjut mengenai layanan perusahaan.",
    formTitle: "Kirim Pesan",
    formName: "Nama Lengkap",
    formEmail: "Email",
    formMessage: "Pesan",
    formButton: "Kirim Pesan →",
    footerText: "Your Trusted Partner for Business Growth."
  },

  zh: {
    navHome: "首页",
    navAbout: "关于我们",
    navServices: "服务项目",
    navWhy: "我们的优势",
    navContact: "联系我们",
    heroTag: "信任 • 专业 • 卓越",
    heroTitle: '您值得信赖的合作伙伴<br><span>助力企业成长</span>',
    heroDesc: "我们提供专业的咨询解决方案，帮助您的企业发展、创新并实现长期成功。",
    heroButton: "了解我们的服务",
    contactButton: "联系我们",
    aboutLabel: "关于公司",
    aboutTitle: '建立信任，<br>创造<span class="gold">成功。</span>',
    aboutDesc: "PT. Jiaxin Consultant 致力于提供专业的咨询、业务指导和高品质商业服务。我们重视诚信、专业精神以及与每一位客户建立长期合作关系。",
    aboutLink: "进一步了解我们 →",
    serviceLabel: "我们的业务",
    serviceTitle: "专业服务项目",
    serviceDesc: "为您的企业需求提供合适的解决方案。",
    service1: "商业咨询",
    service1Desc: "提供指导和策略，帮助企业实现可持续发展。",
    service2: "企业管理",
    service2Desc: "提供企业管理及运营效率提升解决方案。",
    service3: "投资咨询",
    service3Desc: "提供投资机会规划及相关咨询服务。",
    service4: "业务发展",
    service4Desc: "支持企业拓展网络、合作伙伴及商业机会。",
    whyLabel: "为什么选择我们",
    whyTitle: "专业标准<br>成就美好未来。",
    why1: "专业",
    why1Desc: "始终注重服务质量与责任。",
    why2: "值得信赖",
    why2Desc: "以诚信为基础建立合作关系。",
    why3: "解决方案导向",
    why3Desc: "专注于客户的需求与目标。",
    contactLabel: "联系我们",
    contactTitle: "携手共创<br>美好未来。",
    contactDesc: "欢迎联系我们，了解更多公司服务信息。",
    formTitle: "发送信息",
    formName: "姓名",
    formEmail: "电子邮箱",
    formMessage: "留言内容",
    formButton: "发送信息 →",
    footerText: "您值得信赖的企业成长合作伙伴。"
  }
};

let currentLanguage = "id";

document.getElementById("langToggle").addEventListener("click", () => {
  currentLanguage = currentLanguage === "id" ? "zh" : "id";

  document.querySelectorAll("[data-id]").forEach(element => {
    const key = element.dataset.id;
    element.innerHTML =
      translations[currentLanguage][key] || element.innerHTML;
  });

  document.getElementById("langToggle").textContent =
    currentLanguage === "id" ? "中文" : "ID";
});

// Menu HP
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

// Tahun otomatis
document.getElementById("year").textContent =
  new Date().getFullYear();

// Form kontak
document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Mohon lengkapi semua data.");
    return;
  }

  const subject = encodeURIComponent("Website Inquiry - Jiaxin Consultant");
  const body = encodeURIComponent(
    `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`
  );

  window.location.href =
    `mailto:info@jiaxinconsultant.com?subject=${subject}&body=${body}`;
});
