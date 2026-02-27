export type Language = 'en' | 'zh';

export const translations = {
  en: {
    nav: {
      confinement: "Confinement",
      teas: "Herbal Teas",
      story: "Our Story",
      contact: "Contact",
      shop: "Shop Now"
    },
    hero: {
      badge: "Modern Herbal Wisdom",
      award: "Best Postnatal Recovery Essential",
      title1: "Prioritize Your",
      title2: "Wellness",
      title3: "Effortlessly.",
      desc: "REN Health brings premium traditional herbs to the modern woman's doorstep. Recognized as the Motherhood Choice Award for Best Postnatal Recovery Essential.",
      ctaPrimary: "Explore Packages",
      ctaSecondary: "Our Story",
      testimonial: "The most convenient confinement care I've experienced.",
      author: "Sarah L."
    },
    features: [
      { title: "Premium Herbs", desc: "Sourced from the finest growers, ensuring maximum potency." },
      { title: "Time-Saving", desc: "Pre-measured and ready-to-brew for your busy schedule." },
      { title: "Female Focused", desc: "Tailored specifically for women's unique physiological needs." }
    ],
    confinement: {
      label: "Postnatal Restoration",
      title: "Confinement Packages",
      desc: "Traditional recovery made modern. Choose the duration that fits your healing journey.",
      addToCart: "Add to Cart",
      packages: [
        {
          name: '14-Day Essentials',
          desc: 'A focused recovery package for the initial healing phase.',
          features: ['Uterus Recovery', 'Blood Replenishment', 'Basic Vitality Boost']
        },
        {
          name: '28-Day Signature',
          desc: 'Our most popular choice for comprehensive postpartum restoration.',
          features: ['Full Body Restoration', 'Lactation Support', 'Hormonal Balance', 'Immunity Strengthening']
        },
        {
          name: '56-Day Premium',
          desc: 'The ultimate care package for long-term health and deep rejuvenation.',
          features: ['Deep Tissue Repair', 'Bone & Joint Health', 'Premium Herbal Grade', 'Extended Wellness Support']
        }
      ]
    },
    miscarriage: {
      label: "Specialized Care",
      title: "Miscarriage Recovery",
      desc: "We understand that recovery is both physical and emotional. Our 7-day specialized package provides gentle, nourishing support to help your body heal and restore its natural balance during this sensitive time.",
      pkgName: "7-Day Recovery",
      features: ['Gentle Uterus Care', 'Emotional Balance Support', 'Basic Vitality Replenishment'],
      addToCart: "Add to Cart"
    },
    teas: {
      label: "Daily Rituals",
      title: "Herbal Tea Series",
      desc: "Daily wellness in every sip. Functional blends for the modern lifestyle.",
      viewFull: "View Full Collection",
      items: [
        { name: 'Dampness Removing Tea', desc: 'Balance your body and reduce bloating naturally.' },
        { name: 'Red Date Longan Tea', desc: 'Classic nourishment for blood health and vitality.' }
      ]
    },
    about: {
      label: "Our Heart & Heritage",
      title1: "A Love Letter to",
      title2: "Every Woman",
      p1: "We believe that when a woman is well, her whole world thrives. But we also know the quiet weight you carry—the busy mornings, the sleepless nights, and the countless ways you put others first.",
      p2: "REN Health was born from a simple, heartfelt wish: to make it easier for you to care for yourself. We've bridged the gap between ancient healing and your modern life.",
      quote: "Every one of our formulas is thoughtfully crafted in collaboration with the expert TCM specialists from itsHerbs.com, ensuring that you receive the purest, most effective support for your unique journey.",
      expert: "TCM specialists from itsHerbs.com",
      footer: "Because prioritizing your health isn't a luxury—it's an act of love for yourself and everyone who depends on you.",
      statValue: "5k+",
      statLabel: "Mothers Helped",
      feature1Title: "100% Natural",
      feature1Desc: "Pure Ingredients",
      feature2Title: "Expert Formulated",
      feature2Desc: "TCM Specialists"
    },
    testimonials: {
      label: "Kind Words",
      title: "What Our Mothers Say",
      items: [
        { name: "Sarah Lim", role: "Mother of two", content: "The 28-day confinement package was a lifesaver. The herbs were so easy to prepare, and I felt my energy returning much faster than my first pregnancy." },
        { name: "Aishah Rahman", role: "New Mother", content: "I love the Herbal Tea series! It's my daily ritual now. The Red Date Longan tea is so soothing and tastes amazing. Highly recommend to all busy moms." },
        { name: "Jessica Wong", role: "Professional", content: "Convenience without compromising quality. REN Health truly understands the needs of modern women. The packaging is beautiful and the instructions are clear." }
      ]
    },
    partners: {
      label: "Trusted Ecosystem",
      title: "Our Partners & Credentials",
      centresLabel: "Supporting Premier Confinement Centres",
      awardTitle: "Motherhood Choice Award",
      awardDesc: "Proudly recognized as the Best Postnatal Recovery Essential. This award reflects our commitment to quality and the trust thousands of mothers place in REN Health.",
      awardHighlight: "Best Postnatal Recovery Essential",
      verified: "Verified Excellence",
      strategic: "Strategic Partners",
      collab: "Collaborating with industry leaders to bring the best wellness resources to every woman."
    },
    contact: {
      label: "Get In Touch",
      title: "Contact Us",
      desc: "Have questions about our packages or need a personalized recommendation? We're here to help.",
      form: {
        name: "Name *",
        namePlaceholder: "Your full name",
        email: "Email *",
        emailPlaceholder: "Your email address",
        help: "Help Needed",
        message: "Message *",
        messagePlaceholder: "How can we support you today?",
        submit: "Submit Inquiry",
        services: [
          "Confinement Packages",
          "Herbal Tea Series",
          "Miscarriage Recovery",
          "Confinement Centre"
        ]
      }
    },
    footer: {
      desc: "Empowering women to prioritize their wellness through convenient, high-quality herbal solutions.",
      shop: "Shop",
      shopLinks: ["Confinement Packages", "Herbal Tea Series", "Gift Sets", "New Arrivals"],
      support: "Support",
      supportLinks: ["Shipping Info", "Returns & Exchanges", "FAQ", "Contact Us"],
      newsletter: "Newsletter",
      newsletterDesc: "Join our community for wellness tips and exclusive offers.",
      emailPlaceholder: "Email address",
      join: "Join",
      rights: "© 2024 REN HEALTH. ALL RIGHTS RESERVED.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  zh: {
    nav: {
      confinement: "坐月子套餐",
      teas: "草本茶系列",
      story: "品牌故事",
      contact: "联系我们",
      shop: "立即购买"
    },
    hero: {
      badge: "现代草本智慧",
      award: "最佳产后修复必备品",
      title1: "轻松呵护",
      title2: "您的健康",
      title3: "从这里开始。",
      desc: "REN Health 为现代女性提供优质的传统草本。荣获 Motherhood Choice Award 最佳产后修复必备品奖项。",
      ctaPrimary: "探索套餐",
      ctaSecondary: "品牌故事",
      testimonial: "这是我体验过最方便的坐月子护理。",
      author: "Sarah L."
    },
    features: [
      { title: "优质草本", desc: "源自最优秀的种植者，确保最高效力。" },
      { title: "节省时间", desc: "预先计量，即冲即饮，适合忙碌的您。" },
      { title: "专注女性", desc: "专为女性独特的生理需求量身定制。" }
    ],
    confinement: {
      label: "产后修复",
      title: "坐月子套餐",
      desc: "传统修复，现代呈现。选择适合您康复旅程的周期。",
      addToCart: "加入购物车",
      packages: [
        {
          name: '14天基础套餐',
          desc: '针对初期愈合阶段的专注修复套餐。',
          features: ['子宫修复', '补血养气', '基础活力提升']
        },
        {
          name: '28天经典套餐',
          desc: '我们最受欢迎的全面产后修复选择。',
          features: ['全身机能恢复', '催乳支持', '荷尔蒙平衡', '增强免疫力']
        },
        {
          name: '56天至尊套餐',
          desc: '长期健康和深度修复的终极护理套餐。',
          features: ['深层组织修复', '骨骼与关节健康', '顶级药材等级', '长期健康支持']
        }
      ]
    },
    miscarriage: {
      label: "专业护理",
      title: "小产修复",
      desc: "我们深知康复不仅是身体上的，也是情感上的。我们的7天专业套餐提供温和、滋养的支持，帮助您的身体在这个敏感时期恢复自然平衡。",
      pkgName: "7天修复套餐",
      features: ['温和子宫护理', '情绪平衡支持', '基础活力补充'],
      addToCart: "加入购物车"
    },
    teas: {
      label: "每日仪式",
      title: "草本茶系列",
      desc: "每一口都是每日的健康。适合现代生活方式的功能性调配茶。",
      viewFull: "查看完整系列",
      items: [
        { name: '祛湿调理茶', desc: '自然平衡身体，减少浮肿。' },
        { name: '红枣龙眼茶', desc: '补血养颜、提升活力的经典滋补。' }
      ]
    },
    about: {
      label: "我们的初心与传承",
      title1: "致每一位女性的",
      title2: "情书",
      p1: "我们相信，当一位女性健康时，她的整个世界都会随之繁荣。但我们也知道您肩负的无声重担——忙碌的早晨、失眠的夜晚，以及无数次将他人置于首位的时刻。",
      p2: "REN Health 源于一个简单而真挚的愿望：让您更容易照顾自己。我们架起了古代疗愈与现代生活之间的桥梁。",
      quote: "我们的每一个配方都是与 itsHerbs.com 的专业中医专家合作精心打造的，确保您在独特的旅程中获得最纯净、最有效的支持。",
      expert: "itsHerbs.com 的中医专家",
      footer: "因为优先考虑您的健康不是一种奢侈——这是对自己以及所有依赖您的人的一种爱的表现。",
      statValue: "5000+",
      statLabel: "已帮助的母亲",
      feature1Title: "100% 天然",
      feature1Desc: "纯净成分",
      feature2Title: "专家配方",
      feature2Desc: "中医专家"
    },
    testimonials: {
      label: "妈妈们的评价",
      title: "我们的口碑",
      items: [
        { name: "Sarah Lim", role: "两个孩子的母亲", content: "28天的坐月子套餐真是救星。草药准备起来非常简单，我感觉精力恢复得比第一胎快得多。" },
        { name: "Aishah Rahman", role: "新手妈妈", content: "我非常喜欢草本茶系列！现在它成了我的每日仪式。红枣龙眼茶非常舒缓，味道也很好。强烈推荐给所有忙碌的妈妈。" },
        { name: "Jessica Wong", role: "职场女性", content: "不牺牲品质的便利。REN Health 真正了解现代女性的需求。包装精美，说明也很清晰。" }
      ]
    },
    partners: {
      label: "值得信赖的生态系统",
      title: "我们的合作伙伴与资质",
      centresLabel: "支持顶级月子中心",
      awardTitle: "Motherhood Choice Award",
      awardDesc: "荣幸地被评为最佳产后修复必备品。这一奖项反映了我们对品质的承诺，以及成千上万母亲对 REN Health 的信任。",
      awardHighlight: "最佳产后修复必备品",
      verified: "卓越验证",
      strategic: "战略合作伙伴",
      collab: "与行业领导者合作，为每位女性带来最佳的健康资源。"
    },
    contact: {
      label: "联系我们",
      title: "咨询与建议",
      desc: "对我们的套餐有疑问或需要个性化建议？我们随时为您提供帮助。",
      form: {
        name: "姓名 *",
        namePlaceholder: "您的全名",
        email: "电子邮箱 *",
        emailPlaceholder: "您的电子邮箱地址",
        help: "需要哪些帮助",
        message: "留言 *",
        messagePlaceholder: "今天我们能为您提供什么支持？",
        submit: "提交咨询",
        services: [
          "坐月子套餐",
          "草本茶系列",
          "小产修复",
          "月子中心合作"
        ]
      }
    },
    footer: {
      desc: "通过便捷、优质的草本解决方案，赋能女性优先关注自身健康。",
      shop: "商店",
      shopLinks: ["坐月子套餐", "草本茶系列", "礼盒系列", "新品上市"],
      support: "支持",
      supportLinks: ["配送信息", "退换货政策", "常见问题", "联系我们"],
      newsletter: "资讯订阅",
      newsletterDesc: "加入我们的社区，获取健康贴士和专属优惠。",
      emailPlaceholder: "电子邮箱地址",
      join: "加入",
      rights: "© 2024 REN HEALTH. 版权所有。",
      privacy: "隐私政策",
      terms: "服务条款"
    }
  }
};
