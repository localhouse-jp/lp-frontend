"use client"

import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Access } from "@/components/sections/access"
import { BlogSection } from "@/components/sections/blog-section"
import { Calendar } from "@/components/sections/calendar"
import { CTA } from "@/components/sections/cta"
import { FAQ } from "@/components/sections/faq"
import { Features } from "@/components/sections/features"
import { Gallery } from "@/components/sections/gallery"
import { Hero } from "@/components/sections/hero"
import { Members } from "@/components/sections/members"
import { NewsSection } from "@/components/sections/news-section"
import { Pricing } from "@/components/sections/pricing"
import { Sponsors } from "@/components/sections/sponsors"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export default function Page() {
  const [language, setLanguage] = useState<"ja" | "en">("ja")

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "ja" ? "en" : "ja"))
  }

  const navigationItems = [
    { text: language === "ja" ? "LOCALHOUSEとは" : "About LOCALHOUSE", href: "#about" },
    { text: language === "ja" ? "特徴" : "Features", href: "#features" },
    { text: language === "ja" ? "メンバー" : "Members", href: "#members" },
    { text: language === "ja" ? "ギャラリー" : "Gallery", href: "#gallery" },
    { text: language === "ja" ? "スポンサー" : "Sponsors", href: "#sponsors" },
    { text: language === "ja" ? "料金" : "Pricing", href: "#pricing" },
    { text: language === "ja" ? "アクセス" : "Access", href: "#access" },
    { text: language === "ja" ? "FAQ" : "FAQ", href: "#faq" },
  ]

  const heroData = {
    badge: language === "ja" ? "24時間365日オープン" : "Open 24/7",
    heading:
      language === "ja"
        ? ["学生エンジニアの", "創造力を解き放つ", "コミュニティスペース"]
        : ["Unleash the", "Creativity of", "Student Engineers"],
    description:
      language === "ja"
        ? "LOCALHOUSEは、アイデアを形にする場所。ソフトウェアからハードウェアまで、あらゆる創造を形にするコミュニティスペース。"
        : "LOCALHOUSE is where ideas come to life. From software to hardware, we support every form of creativity.",
    buttons: [
      { text: language === "ja" ? "見学予約" : "Book a Visit", icon: "ChevronRight" },
      { text: language === "ja" ? "参加申し込み" : "Join Now", icon: "Users" },
    ],
  }

  const featuresData = [
    {
      title: language === "ja" ? "充実の開発環境" : "Advanced Development Environment",
      description:
        language === "ja"
          ? "デュアルディスプレイ完備の開発環境。ゲーミングPC, 4Kモニターを利用可能"
          : "Equipped with dual displays, gaming PCs, and 4K monitors for optimal coding.",
      icon: "Code",
    },
    {
      title: language === "ja" ? "ハードウェア開発" : "Hardware Development",
      description:
        language === "ja"
          ? "Raspberry Pi, Arduino等の開発機材完備。3Dプリンターも利用可能"
          : "Supplied with equipment like Raspberry Pi, Arduino, and 3D printers for hardware projects.",
      icon: "Cpu",
    },
    {
      title: language === "ja" ? "自由に使えるサーバー" : "Free-to-use Server",
      description:
        language === "ja"
          ? "サーバーを勉強したいけどクラウド料金が払えない学生でも無制限に遊べるサーバーをご用意しています"
          : "We provide unlimited server access for students who want to learn about servers but can't afford cloud fees.",
      icon: "Network",
    },
    {
      title: language === "ja" ? "活発なコミュニティ" : "Vibrant Community",
      description:
        language === "ja"
          ? "学生エンジニア同士で刺激し合い、共に成長できる環境"
          : "A space where student engineers inspire and grow with each other.",
      icon: "Users",
    },
    {
      title: language === "ja" ? "定期イベント開催" : "Regular Events",
      description:
        language === "ja"
          ? "週次もくもく会、月次ハッカソン、LT大会などコミュニティイベントを開催"
          : "Weekly coding sessions, monthly hackathons, and tech talks are held regularly.",
      icon: "Calendar",
    },
    {
      title: language === "ja" ? "24時間利用可能" : "24/7 Access",
      description:
        language === "ja"
          ? "いつでも利用可能。仮眠スペース、シャワー、フリードリンク完備"
          : "Always accessible with nap spaces, showers, and free drinks available.",
      icon: "Coffee",
    },
  ]

  const membersData = {
    title: language === "ja" ? "メンバー" : "Members",
    core: [
      {
        name: "廣瀬悠人",
        role: language === "ja" ? "代表" : "CEO",
        affiliation: language === "ja" ? "近畿大学情報学部B1" : "Kindai University, School of Information, Year 1",
        image: "/placeholder.svg",
      },
      {
        name: "xpadev",
        role: language === "ja" ? "メンバー" : "Member",
        affiliation: language === "ja" ? "近畿大学情報学部B1" : "Kindai University, School of Information, Year 1",
        image: "/placeholder.svg",
      },
      {
        name: "シュレスタアロク",
        role: language === "ja" ? "メンバー" : "Member",
        affiliation: language === "ja" ? "大阪工業大学M2" : "Osaka Institute of Technology, M2",
        image: "/placeholder.svg",
      },
      {
        name: "Nova",
        role: language === "ja" ? "メンバー" : "Member",
        affiliation: language === "ja" ? "近畿大学情報学部B1" : "Kindai University, School of Information, Year 1",
        image: "/placeholder.svg",
      },
      {
        name: "しお",
        role: language === "ja" ? "メンバー" : "Member",
        affiliation: language === "ja" ? "近畿大学情報学部B2" : "Kindai University, School of Information, Year 2",
        image: "/placeholder.svg",
      },
    ],
    testimonials: [
      {
        quote:
          language === "ja"
            ? "24時間、思いついたときにすぐ開発できるのが最高です。アイデアが浮かんだ瞬間にコードを書けるから、モチベーションを保ったまま形にできます。"
            : "It's amazing to be able to develop instantly, 24 hours a day. When an idea strikes, you can start coding immediately, keeping your motivation high.",
        author: "廣瀬悠人",
        role: language === "ja" ? "大学1年生" : "Undergraduate, Year 1",
      },
      {
        quote:
          language === "ja"
            ? "研究がめっちゃ捗りました。最新の機材や環境がそろっているので、深夜でも実験や開発を進められます。"
            : "My research progressed tremendously. With the latest equipment and environment, I could continue experiments and development even late at night.",
        author: "シュレスタアロク",
        role: language === "ja" ? "大学院生" : "Graduate Student",
      },
    ],
  }

  const galleryImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_G2A6075_2-dEM5zZSWobeVKdNadW8GrEw9IoxZyO.jpeg",
      alt: language === "ja" ? "開発環境" : "Development Environment",
      caption: language === "ja" ? "充実した開発環境" : "State-of-the-art development environment",
      description:
        language === "ja" ? "最新のデバイスと快適な作業スペース" : "Latest devices and comfortable workspace",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_G2A6052_light-asLNl2k2JqtNU6cPHQzieYO8z9JB75.jpeg",
      alt: language === "ja" ? "プレゼンテーション" : "Presentation",
      caption: language === "ja" ? "定期的な勉強会" : "Regular study sessions",
      description:
        language === "ja"
          ? "知識共有とスキルアップの機会"
          : "Opportunities for knowledge sharing and skill improvement",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1181aa.jpg-TAwjx1mETa4iGqbQTxxzTpTofwugJ1.jpeg",
      alt: language === "ja" ? "ミーティングルーム" : "Meeting Room",
      caption: language === "ja" ? "ミーティングルーム" : "Meeting Room",
      description: language === "ja" ? "プライベートな空間で集中できる環境" : "A private space for focused discussions",
    },
  ]

  const sponsorsData = {
    title: language === "ja" ? "スポンサー" : "Sponsors",
    operation: {
      title: language === "ja" ? "運営" : "Operations",
      name: "STARTHYPE, Inc.",
      details:
        language === "ja"
          ? ["代表取締役 廣瀬悠人", "近畿大学情報学部在学中"]
          : ["CEO: Yuto Hirose", "Student at Kindai University, School of Information"],
    },
    goldSponsors: [{ logoAlt: language === "ja" ? "タスキホールディングス" : "TASUKI Holdings Inc." }],
    individualSupporters: [
      { name: "HIROSSY", link: "https://x.com/hirossy" },
      { name: "ひろせファーム", link: "http://hirose-f.com/" },
      { name: language === "ja" ? "加藤 翔" : "Sho Kato" },
    ],
    supportCallToAction: {
      text: language === "ja" ? "LOCALHOUSEの活動を支援する" : "Support LOCALHOUSE",
      button: language === "ja" ? "支援する" : "Support",
    },
  }

  const pricingData = {
    title: language === "ja" ? "料金プラン" : "Pricing Plans",
    plan: {
      name: language === "ja" ? "学生メンバーシップ" : "Student Membership",
      price: "¥0 /月",
      features:
        language === "ja"
          ? ["24時間365日利用可能", "全設備・機材の利用", "コミュニティイベント参加", "メンタリングサービス"]
          : [
            "Access 24/7",
            "Full access to equipment and facilities",
            "Participation in community events",
            "Mentoring services",
          ],
      button: language === "ja" ? "参加申し込み" : "Join Now",
    },
    notes:
      language === "ja"
        ? ["※ スポンサー企業の支援により、学生は無料（学生証の提示が必要）"]
        : ["※ Free for students upon valid student ID verification, supported by sponsors."],
  }

  const accessData = {
    title: language === "ja" ? "アクセス" : "Access",
    location: {
      name: "LOCALHOUSE",
      address:
        language === "ja"
          ? "〒577-0804 大阪府東大阪市中小阪3-10-13"
          : "3-10-13 Nakanosaka, Higashiosaka, Osaka 577-0804",
      nearest:
        language === "ja"
          ? "近鉄奈良線 八戸ノ里駅 徒歩12分"
          : "12-min walk from Hachidenosato Station on Kintetsu Nara Line",
    },
    notes:
      language === "ja"
        ? ["駐輪場は場合により2台まで対応可能", "駐車場はありません。公共交通機関をご利用ください。"]
        : [
          "Limited bicycle parking available (up to 2 bikes, depending on circumstances)",
          "No car parking available. Please use public transportation.",
        ],
  }

  const faqData = {
    title: language === "ja" ? "よくある質問" : "Frequently Asked Questions",
    items: [
      {
        question:
          language === "ja" ? "24時間利用時のセキュリティは大丈夫ですか？" : "Is security adequate for 24/7 access?",
        answer:
          language === "ja"
            ? "セキュリティカメラと電子錠で、緊急時の連絡体制も整備しています。"
            : "We have security cameras and electronic locks with emergency contact systems in place.",
      },
      {
        question: language === "ja" ? "機材の予約は必要ですか？" : "Do I need to book equipment?",
        answer:
          language === "ja"
            ? "一部の特殊な機材は予約制ですが、基本設備は予約不要です。"
            : "Some specialized equipment requires booking, but most facilities are available without reservation.",
      },
      {
        question: language === "ja" ? "非会員でも利用できますか？" : "Can non-members use the facilities?",
        answer:
          language === "ja"
            ? "イベントやワークショップなど、一部プログラムは非会員でも参加可能です。"
            : "Some events and workshops are open to non-members.",
      },
      {
        question: language === "ja" ? "学生は本当に無料ですか？" : "Is it really free for students?",
        answer:
          language === "ja"
            ? "はい。学生証の確認を行います。"
            : "Yes, free for students upon verification of student ID.",
      },
      {
        question:
          language === "ja" ? "一般の方や短期利用は可能ですか？" : "Is short-term use available for non-students?",
        answer:
          language === "ja"
            ? "申し訳ありませんが、一般の方の利用はご遠慮いただいておりますが、短期利用やハッカソンなどのイベントでのご利用は歓迎しております。"
            : "Unfortunately, short-term or non-student usage is not available.",
      },
    ],
  }

  const ctaData = {
    title: language === "ja" ? "あなたの創造力を解き放とう" : "Unleash Your Creativity",
    description:
      language === "ja"
        ? "LOCALHOUSEで、アイデアを現実に。24時間365日、仲間たちがあなたを待っています。"
        : "Bring your ideas to life at LOCALHOUSE. We're open 24/7 and ready to welcome you.",
    buttons: [
      { text: language === "ja" ? "参加申し込み" : "Join Now", icon: "ChevronRight" },
      { text: language === "ja" ? "見学予約" : "Book a Visit", icon: "Calendar" },
    ],
  }

  const footerSections = [
    {
      title: "LOCALHOUSE",
      content:
        language === "ja"
          ? "大阪府東大阪市中小阪3-10-13, 〒577-0804"
          : "3-10-13 Nakanosaka, Higashiosaka, Osaka, 577-0804",
    },
    {
      title: language === "ja" ? "お問い合わせ" : "Contact",
      content:
        "info@localhouse.jp | Twitter: @localhouse_ | Discord: " +
        (language === "ja" ? "コミュニティに参加" : "Join our Discord community"),
    },
    {
      title: language === "ja" ? "リンク" : "Links",
      items: [
        ...navigationItems,
        { text: language === "ja" ? "利用規約" : "Terms of Service", href: "/terms" },
        { text: language === "ja" ? "プライバシーポリシー" : "Privacy Policy", href: "/privacy" },
      ],
    },
  ]

  return (
    <AnimatePresence>
      <motion.div
        className="min-h-screen bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header
          logo="LOCALHOUSE"
          items={navigationItems}
          action={language === "ja" ? "見学予約" : "Book a Visit"}
          onLanguageToggle={toggleLanguage}
        />
        <main>
          <Hero data={heroData} />
          <Calendar />
          <Features
            title={navigationItems.find((item) => item.href === "#features")?.text || ""}
            features={featuresData}
          />
          <Members
            title={membersData.title}
            members={membersData.core}
            testimonials={membersData.testimonials}
            language={language}
          />
          <Gallery title={language === "ja" ? "ギャラリー" : "Gallery"} images={galleryImages} />
          <NewsSection />
          <BlogSection />
          <Sponsors
            title={sponsorsData.title}
            operation={sponsorsData.operation}
            goldSponsors={sponsorsData.goldSponsors}
            individualSupporters={sponsorsData.individualSupporters}
            supportCallToAction={sponsorsData.supportCallToAction}
          />
          <Pricing title={pricingData.title} plan={pricingData.plan} notes={pricingData.notes} />
          <Access title={accessData.title} location={accessData.location} notes={accessData.notes} />
          <FAQ title={faqData.title} items={faqData.items} />
          <CTA title={ctaData.title} description={ctaData.description} buttons={ctaData.buttons} />
        </main>
        <Footer
          sections={footerSections}
          copyright={`© ${new Date().getFullYear()} LOCALHOUSE. All rights reserved.`}
        />
      </motion.div>
    </AnimatePresence>
  )
}

