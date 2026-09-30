/**
 * Portfolio i18n: auto-detect browser language + small toggle.
 * English content is source of truth; Arabic via dictionary.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-lang";
  var ATTR_SRC = "data-i18n-src";
  var ATTR_ATTR = "data-i18n-attr-src";

  var AR = {
    "MOHAMED ATYAA": "محمد عطية",
    "Financial Accountant": "محاسب مالي",
    "Home": "الرئيسية",
    "About": "نبذة",
    "Skills": "المهارات",
    "Experience": "الخبرة",
    "Education": "التعليم",
    "Contact": "تواصل",
    "Let’s Talk": "لنتحدث",
    "Let's Talk": "لنتحدث",
    "Tanta, El-Gharbia, Egypt": "طنطا، الغربية، مصر",
    "MOHAMED": "محمد",
    "ABD-ELKADER ALI ATYAA": "عبد القادر علي عطية",
    "Financial & Inventory Accountant": "محاسب مالي ومخزون",
    "Driving Financial Accuracy, Inventory Control & Strategic Cash Management.":
      "دقة مالية، رقابة على المخزون، وإدارة نقدية استراتيجية.",
    "View Resume": "عرض السيرة",
    "Contact Me": "تواصل معي",
    "Connect": "تواصل",
    "Currently": "حالياً",
    "Inventory Accountant": "محاسب مخزون",
    "EL BANNA GROUP Egypt": "مجموعة البنا — مصر",
    "Active": "نشط",
    "ERP Accuracy": "دقة نظام ERP",
    "SKUs Managed": "صنف مُدار",
    "Years Experience": "سنوات خبرة",
    "3+": "٣+",
    "Finance & inventory": "مالية ومخزون",
    "Multi-warehouse": "مستودعات متعددة",
    "Oracle inventory": "مخزون أوراكل",
    "Variance Reduced": "انخفاض الفروقات",
    "Stock discrepancies": "فروقات المخزون",
    "Scroll": "تمرير",
    "About Me": "نبذة عني",
    "Precision in every": "دقة في كل",
    "figure.": "رقم.",
    "Detail-oriented, analytical Financial & Inventory Accountant with over 3 years of hands-on experience specializing in cash management, inventory control, cost monitoring, and financial reporting. Proven expertise in Oracle ERP systems and large-scale financial reconciliation within major groups. Solid track record of safeguarding company assets, reducing inventory variances, and accelerating month-end close cycles. Adept at collaborating with cross-functional teams to streamline treasury operations and optimize working capital.":
      "محاسب مالي ومخزون دقيق وتحليلي بخبرة عملية تزيد عن ٣ سنوات، متخصص في إدارة النقدية ورقابة المخزون ومتابعة التكاليف والتقارير المالية. خبرة مثبتة في أنظمة Oracle ERP والتسويات المالية واسعة النطاق داخل مجموعات كبرى. سجل قوي في حماية أصول الشركة وتقليل فروقات المخزون وتسريع إغلاق نهاية الشهر. بارع في التعاون مع الفرق متعددة التخصصات لتبسيط عمليات الخزانة وتحسين رأس المال العامل.",
    "Cash Management": "إدارة النقدية",
    "Inventory Control": "رقابة المخزون",
    "Oracle ERP": "Oracle ERP",
    "Cost Monitoring": "متابعة التكاليف",
    "Financial Reporting": "التقارير المالية",
    "Reconciliation": "التسويات",
    "Month-End Close": "إغلاق نهاية الشهر",
    "Working Capital": "رأس المال العامل",
    "Location": "الموقع",
    "Phone": "الهاتف",
    "Email": "البريد",
    "LinkedIn": "لينكدإن",
    "View Full Resume": "عرض السيرة كاملة",
    "Available for on-site & hybrid roles across Egypt":
      "متاح لفرص حضورية وهجينة في أنحاء مصر",
    "Mohamed Abd-Elkader": "محمد عبد القادر",
    "Ali Atyaa": "علي عطية",
    "Est. 2022": "منذ ٢٠٢٣",
    "Years of": "سنوات من",
    "Capabilities": "القدرات",
    "Technical & analytical": "مهارات تقنية",
    "skill set": "وتحليلية",
    "A measured breakdown of the accounting disciplines, control frameworks and systems I use daily to keep ledgers accurate and inventory tightly governed.":
      "تفصيل واضح لتخصصات المحاسبة وأطر الرقابة والأنظمة التي أستخدمها يومياً للحفاظ على دقة الدفاتر وإحكام الرقابة على المخزون.",
    "Core Accounting": "المحاسبة الأساسية",
    "Ledgers, cost & treasury": "الدفاتر والتكاليف والخزانة",
    "Financial Accounting": "المحاسبة المالية",
    "Cost Accounting": "محاسبة التكاليف",
    "General Ledger": "دفتر الأستاذ العام",
    "Inventory & Control": "المخزون والرقابة",
    "Stock integrity & governance": "سلامة المخزون والحوكمة",
    "Variance Analysis": "تحليل الفروقات",
    "FIFO & Weighted Average": "الوارد أولاً والمتوسط المرجح",
    "Stock Optimization": "تحسين المخزون",
    "Internal Controls": "الرقابة الداخلية",
    "Asset Protection": "حماية الأصول",
    "Risk Evaluation": "تقييم المخاطر",
    "Systems": "الأنظمة",
    "ERP & reporting tools": "أدوات ERP والتقارير",
    "Advanced Excel": "إكسل متقدم",
    "Odoo ERP": "Odoo ERP",
    "Languages": "اللغات",
    "Business communication": "التواصل المهني",
    "Arabic": "العربية",
    "English": "الإنجليزية",
    "Career Path": "المسار المهني",
    "Professional": "الخبرة",
    "experience": "المهنية",
    "Three years of progressive responsibility inside one of Egypt's major trading groups — moving from treasury operations into full inventory accounting ownership.":
      "ثلاث سنوات من المسؤولية المتدرجة داخل إحدى كبرى مجموعات التجارة في مصر — من عمليات الخزانة إلى تولي محاسبة المخزون بالكامل.",
    "Present": "حتى الآن",
    "May 2025 – Present": "مايو ٢٠٢٥ – حتى الآن",
    "Own end-to-end inventory accounting across a multi-warehouse operation, protecting asset value through disciplined counts, reconciliation and Oracle ERP control.":
      "أتولى محاسبة المخزون من البداية للنهاية عبر تشغيل متعدد المستودعات، مع حماية قيمة الأصول عبر الجرد المنضبط والتسويات والرقابة عبر Oracle ERP.",
    "Manage 1,500+ SKUs": "إدارة أكثر من ١٬٥٠٠ صنف",
    "Reduced discrepancies by 18%": "تخفيض الفروقات بنسبة ١٨٪",
    "99.8% Oracle ERP inventory accuracy": "دقة مخزون ٩٩٫٨٪ على Oracle ERP",
    "Reduced holding costs by 12%": "تخفيض تكاليف الاحتفاظ بنسبة ١٢٪",
    "Audited GRNs and GINs": "مراجعة إشعارات الاستلام والصرف",
    "Optimized stock levels": "تحسين مستويات المخزون",
    "Cash Accountant": "محاسب نقدية",
    "Jan 2023 – Apr 2025": "مايو ٢٠٢٣ – مايو ٢٠٢٥",
    "Directed daily treasury and cash operations, strengthening internal controls and compressing the month-end close for a high-volume group environment.":
      "أدرت عمليات الخزانة والنقدية اليومية، وعزّزت الرقابة الداخلية وقصّرت دورة إغلاق نهاية الشهر في بيئة مجموعة عالية الحجم.",
    "Managed high-volume cash operations": "إدارة عمليات نقدية عالية الحجم",
    "100% compliance": "امتثال ١٠٠٪",
    "Reduced month-end closing by 2 days": "تقليص إغلاق نهاية الشهر بيومين",
    "Built cash flow reports": "إعداد تقارير التدفق النقدي",
    "Zero treasury errors": "صفر أخطاء في الخزانة",
    "Accountant (Public Practice)": "محاسب (ممارسة عامة)",
    "Assets For Accounting & Auditing — Giza, Egypt":
      "أصول للمحاسبة والمراجعة — الجيزة، مصر",
    "Built two full years of foundational public-practice experience across statutory auditing, corporate tax return support and client-side financial statements.":
      "بنيت سنتين كاملتين من الخبرة الأساسية في الممارسة العامة عبر المراجعة القانونية ودعم الإقرارات الضريبية والقوائم المالية للعملاء.",
    "Statutory auditing & tax return support": "المراجعة القانونية ودعم الإقرارات الضريبية",
    "Bookkeeping per Egyptian Accounting Standards":
      "مسك الدفاتر وفق المعايير المحاسبية المصرية",
    "Multi-bank cash & ledger reconciliations": "تسويات نقدية ودفترية متعددة البنوك",
    "Evaluated internal financial control compliance":
      "تقييم الالتزام بالرقابة المالية الداخلية",
    "Summarized audit pathways for senior legal auditors":
      "تلخيص مسارات التدقيق للمراجعين القانونيين الأقدم",
    "Career started 2023 · Tanta, Egypt": "بداية المسار ٢٠٢٣ · طنطا، مصر",
    "Credentials": "المؤهلات",
    "Education &": "التعليم",
    "certifications": "والشهادات",
    "Academic grounding in accounting combined with ongoing professional certification in management accounting.":
      "أساس أكاديمي في المحاسبة مع شهادة مهنية مستمرة في المحاسبة الإدارية.",
    "University Degree": "الدرجة الجامعية",
    "Bachelor of Commerce in Accounting – English Section":
      "بكالوريوس تجارة — محاسبة — القسم الإنجليزي",
    "Tanta University – Egypt": "جامعة طنطا — مصر",
    "Graduated": "التخرج",
    "Grade": "التقدير",
    "Very Good": "جيد",
    "Section": "القسم",
    "Studied the full accounting curriculum in English — financial accounting, cost & managerial accounting, auditing, taxation and corporate finance — building the technical base applied daily across ERP-driven reporting cycles.":
      "درست منهج المحاسبة الكامل بالإنجليزية — المحاسبة المالية ومحاسبة التكاليف والإدارية والمراجعة والضرائب والتمويل — لبناء الأساس التقني المطبق يومياً في دورات التقارير المعتمدة على ERP.",
    "In Progress": "قيد الإنجاز",
    "CMA Candidate": "مرشح CMA",
    "IMA — Institute of Management Accountants":
      "IMA — معهد المحاسبين الإداريين",
    "Certified": "معتمد",
    "Professional Financial Accountant": "محاسب مالي محترف",
    "DOCUMENTED LEARNING": "تعلّم موثّق",
    "Certificates & supporting documents": "الشهادات والمستندات الداعمة",
    "A clear view of the certificates supporting my academic background and professional accounting development.":
      "عرض واضح للشهادات التي تدعم خلفيتي الأكاديمية وتطوري المهني في المحاسبة.",
    "CERTIFICATE 01": "شهادة ٠١",
    "CERTIFICATE 02": "شهادة ٠٢",
    "CERTIFICATE 03": "شهادة ٠٣",
    "CERTIFICATE 04": "شهادة ٠٤",
    "CERTIFICATE 05": "شهادة ٠٥",
    "CERTIFICATE 06": "شهادة ٠٦",
    "CERTIFICATE 07": "شهادة ٠٧",
    "Professional Financial Accountant (PFA)":
      "محاسب مالي محترف (PFA)",
    "Tanta University — Academic Computing Center":
      "جامعة طنطا — مركز الحساب العلمي",
    "Certificate of Achievement in Professional Financial Accounting covering Bookkeeping, Peachtree, Excel Accounting and QuickBooks.":
      "شهادة إنجاز في المحاسبة المالية المحترفة تشمل مسك الدفاتر وPeachtree ومحاسبة إكسل وQuickBooks.",
    "Open Professional Financial Accountant (PFA) certificate":
      "فتح شهادة محاسب مالي محترف (PFA)",
    "Certified Management Accountant (CMA Part I)":
      "محاسب إداري معتمد (CMA الجزء الأول)",
    "Egyptian Science House": "بيت العلوم المصري",
    "Professional management accounting training completed with an Excellent grade.":
      "تدريب محاسبة إدارية مهني أُكمل بتقدير ممتاز.",
    "July 2025": "يوليو ٢٠٢٥",
    "July 2026": "يوليو ٢٠٢٦",
    "Supporting document": "مستند داعم",
    "Certified Management Accountant — CMA Part I":
      "محاسب إداري معتمد — CMA الجزء الأول",
    "Board of Professional Studies": "مجلس الدراسات المهنية",
    "American Board of Professional Studies (ABPS)":
      "المجلس الأمريكي للدراسات المهنية (ABPS)",
    "Diploma training certificate documenting participation in the CMA Part I programme.":
      "شهادة تدريب دبلوم توثق المشاركة في برنامج CMA الجزء الأول.",
    "Accounting Experience Certificate": "شهادة خبرة محاسبية",
    "Assets Accountant Office": "مكتب أصول للمحاسبة",
    "Assets For Accounting & Auditing (Ahmed Mohamed Soliman Office)":
      "أصول للمحاسبة والمراجعة (مكتب أحمد محمد سليمان)",
    "Professional certificate documenting practical accounting experience and responsibilities.":
      "شهادة مهنية توثق الخبرة المحاسبية العملية والمسؤوليات.",
    "Odoo Accounting Diploma": "دبلوم محاسبة أودو",
    "Diploma training focused on accounting workflows and professional Odoo practice.":
      "تدريب دبلوم يركز على سير العمل المحاسبي وممارسة أودو المهنية.",
    "Odoo Accounting Training Certificate": "شهادة تدريب محاسبة أودو",
    "Completed 15 hours of Odoo Accounting training with an Excellent result.":
      "إكمال ١٥ ساعة تدريب محاسبة أودو بنتيجة ممتازة.",
    "May–July 2025": "مايو–يوليو ٢٠٢٥",
    "Accounting Training Certificate": "شهادة تدريب محاسبي",
    "Professional accounting training": "تدريب محاسبي مهني",
    "Supporting certificate included as part of the professional accounting portfolio.":
      "شهادة داعمة ضمن ملف المحاسبة المهني.",
    "Get In Touch": "تواصل معي",
    "Let's build accurate": "لنبنِ أنظمة مالية",
    "financial systems": "دقيقة",
    "Available for finance, treasury and inventory accounting roles. Send a message and I'll get back to you promptly.":
      "متاح لفرص المحاسبة المالية والخزانة والمخزون. أرسل رسالة وسأرد عليك سريعاً.",
    "Sun – Thu · 9:00 – 18:00 EET": "الأحد – الخميس · ٩:٠٠ – ١٨:٠٠ بتوقيت مصر",
    "Replies within 24 hours": "الرد خلال ٢٤ ساعة",
    "Professional network": "شبكة مهنية",
    "Open to relocation": "منفتح على الانتقال",
    "Full Name": "الاسم الكامل",
    "Message": "الرسالة",
    "Send Message": "إرسال الرسالة",
    "Currently open to opportunities": "متاح حالياً للفرص",
    "Mohamed Abd-Elkader Ali Atyaa": "محمد عبد القادر علي عطية",
    "Navigate": "التنقل",
    "Direct": "مباشر",
    ". All rights reserved.": ". جميع الحقوق محفوظة.",
    "Back to top": "العودة للأعلى",
    "Toggle menu": "فتح القائمة",
    "Scroll to about": "الانتقال إلى النبذة",
    "Your full name": "اسمك الكامل",
    "you@company.com": "you@company.com",
    "Tell me about the role, project or opportunity…":
      "أخبرني عن الدور أو المشروع أو الفرصة…",
    "Certificate preview": "معاينة الشهادة",
    "Close preview": "إغلاق المعاينة",
    "Click to enlarge": "اضغط للتكبير",
    "Open Certified Management Accountant (CMA Part I) certificate":
      "فتح شهادة محاسب إداري معتمد (CMA الجزء الأول)",
    "Open Certified Management Accountant — CMA Part I certificate":
      "فتح شهادة محاسب إداري معتمد — CMA الجزء الأول",
    "Open Accounting Experience Certificate certificate":
      "فتح شهادة الخبرة المحاسبية",
    "Open Odoo Accounting Diploma certificate": "فتح دبلوم محاسبة أودو",
    "Open Odoo Accounting Training Certificate certificate":
      "فتح شهادة تدريب محاسبة أودو",
    "Open Accounting Training Certificate certificate":
      "فتح شهادة التدريب المحاسبي",
    "Mohamed Abd-Elkader Ali Atyaa — professional portrait":
      "محمد عبد القادر علي عطية — صورة شخصية مهنية",
    "Dark office desk with financial reports, laptop and calculator":
      "مكتب بتقارير مالية وحاسوب وآلة حاسبة",
    "Mohamed Abd-Elkader Atyaa — Financial & Inventory Accountant":
      "محمد عبد القادر عطية — محاسب مالي ومخزون"
  };

  var ATTRS = ["aria-label", "title", "alt", "placeholder"];

  function detectLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "ar" || saved === "en") return saved;
    } catch (e) {}
    var langs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || "en"];
    for (var i = 0; i < langs.length; i++) {
      if (String(langs[i]).toLowerCase().indexOf("ar") === 0) return "ar";
    }
    return "en";
  }

  function ensureFonts() {
    if (document.getElementById("i18n-ar-font")) return;
    var link = document.createElement("link");
    link.id = "i18n-ar-font";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap";
    document.head.appendChild(link);
  }

  function ensureStyles() {
    if (document.getElementById("i18n-styles")) return;
    var style = document.createElement("style");
    style.id = "i18n-styles";
    style.textContent =
      "html[lang='ar'] body," +
      "html[lang='ar'] body *{" +
      "font-family:'Cairo',var(--font-display,Poppins,Inter,sans-serif)!important;" +
      "}" +
      "html[lang='ar']{direction:rtl;}" +
      "html[lang='en']{direction:ltr;}" +
      "#i18n-lang-toggle{" +
      "position:fixed;z-index:10000;bottom:20px;inset-inline-end:20px;" +
      "min-width:44px;min-height:44px;padding:8px 12px;" +
      "border:1px solid rgba(30,144,255,.45);border-radius:999px;" +
      "background:rgba(8,13,21,.88);color:#e8f1ff;" +
      "font-size:12px;font-weight:700;letter-spacing:.04em;" +
      "cursor:pointer;backdrop-filter:blur(10px);" +
      "box-shadow:0 10px 30px rgba(0,0,0,.35);" +
      "transition:border-color .2s ease,background .2s ease,transform .2s ease;" +
      "}" +
      "#i18n-lang-toggle:hover,#i18n-lang-toggle:focus-visible{" +
      "border-color:#5eb0ff;background:rgba(30,144,255,.22);outline:none;" +
      "transform:translateY(-1px);" +
      "}" +
      "html[lang='ar'] .education-certificate-image-button:after{" +
      "content:'اضغط للتكبير'!important;" +
      "}" +
      "html[lang='ar'] .education-certificate-row," +
      "html[lang='ar'] .education-certificates-heading{" +
      "direction:rtl;" +
      "}" +
      "html[lang='ar'] .education-certificate-image-button{" +
      "border-right:0;border-left:1px solid rgba(35,41,54,.95);text-align:right;" +
      "}" +
      "html[lang='ar'] .education-certificate-row.is-reversed .education-certificate-image-button{" +
      "border-left:0;border-right:1px solid rgba(35,41,54,.95);" +
      "}" +
      "@media(max-width:800px){" +
      "html[lang='ar'] .education-certificate-image-button," +
      "html[lang='ar'] .education-certificate-row.is-reversed .education-certificate-image-button{" +
      "border-left:0;border-right:0;border-bottom:1px solid rgba(35,41,54,.95);" +
      "}" +
      "}";
    document.head.appendChild(style);
  }

  function ensureToggle(lang) {
    var btn = document.getElementById("i18n-lang-toggle");
    if (!btn) {
      btn = document.createElement("button");
      btn.id = "i18n-lang-toggle";
      btn.type = "button";
      btn.addEventListener("click", function () {
        var next = document.documentElement.getAttribute("lang") === "ar" ? "en" : "ar";
        try {
          localStorage.setItem(STORAGE_KEY, next);
        } catch (e) {}
        applyLang(next);
      });
      document.body.appendChild(btn);
    }
    var label = lang === "ar" ? "EN" : "عربي";
    var aria = lang === "ar" ? "Switch to English" : "التبديل إلى العربية";
    var tip = lang === "ar" ? "English" : "العربية";
    if (btn.textContent !== label) btn.textContent = label;
    if (btn.getAttribute("aria-label") !== aria) btn.setAttribute("aria-label", aria);
    if (btn.title !== tip) btn.title = tip;
  }

  function translateText(value, lang) {
    if (value == null) return value;
    var raw = String(value);
    var key = raw.trim();
    if (!key) return raw;
    if (lang === "en") return raw;
    if (Object.prototype.hasOwnProperty.call(AR, key)) {
      var lead = raw.match(/^\s*/)[0];
      var trail = raw.match(/\s*$/)[0];
      return lead + AR[key] + trail;
    }
    return raw;
  }

  function processTextNode(node, lang) {
    if (!node || node.nodeType !== 3) return;
    var parent = node.parentElement;
    if (parent && (parent.id === "i18n-lang-toggle" || parent.closest("#i18n-lang-toggle"))) return;
    if (parent && /^(SCRIPT|STYLE|NOSCRIPT|CODE|PRE)$/i.test(parent.tagName)) return;

    var current = node.nodeValue;
    if (current == null) return;
    var trimmed = current.trim();

    // React may reset text to English — refresh stored source when we see a known EN key
    if (trimmed && Object.prototype.hasOwnProperty.call(AR, trimmed)) {
      node._i18nSrc = current;
    }
    if (node._i18nSrc == null) {
      node._i18nSrc = current;
    }

    var next = translateText(node._i18nSrc, lang);
    if (node.nodeValue !== next) node.nodeValue = next;
  }

  function processElementAttrs(el, lang) {
    if (!el || el.nodeType !== 1) return;
    if (el.id === "i18n-lang-toggle") return;

    for (var i = 0; i < ATTRS.length; i++) {
      var name = ATTRS[i];
      if (!el.hasAttribute(name)) continue;
      var storeKey = ATTR_ATTR + "-" + name;
      if (!el.hasAttribute(storeKey)) {
        el.setAttribute(storeKey, el.getAttribute(name));
      }
      var src = el.getAttribute(storeKey);
      el.setAttribute(name, translateText(src, lang));
    }
  }

  function walk(root, lang) {
    if (!root) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var node;
    while ((node = walker.nextNode())) {
      processTextNode(node, lang);
    }
    if (root.nodeType === 1) {
      processElementAttrs(root, lang);
      var all = root.querySelectorAll("*");
      for (var i = 0; i < all.length; i++) processElementAttrs(all[i], lang);
    }
  }

  var applying = false;

  function applyLang(lang) {
    if (applying) return;
    applying = true;
    try {
      ensureFonts();
      ensureStyles();
      document.documentElement.setAttribute("lang", lang);
      document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
      if (document.title) {
        if (!document.documentElement.getAttribute("data-i18n-title")) {
          document.documentElement.setAttribute("data-i18n-title", document.title);
        }
        document.title = translateText(
          document.documentElement.getAttribute("data-i18n-title"),
          lang
        );
      }
      walk(document.body, lang);
      ensureToggle(lang);
    } finally {
      applying = false;
    }
  }

  function boot() {
    ensureFonts();
    ensureStyles();
    var lang = detectLang();
    applyLang(lang);

    var scheduled = null;
    var observer = new MutationObserver(function () {
      if (applying) return;
      if (scheduled) cancelAnimationFrame(scheduled);
      scheduled = requestAnimationFrame(function () {
        scheduled = null;
        applyLang(detectLang());
      });
    });
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  // Re-apply after late certificate mount / React hydrate
  var tries = 0;
  var timer = setInterval(function () {
    applyLang(detectLang());
    if (++tries > 40) clearInterval(timer);
  }, 250);
})();
