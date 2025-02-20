"use client"

import { useState, useCallback } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SectionContainer } from "@/components/ui/section-container"
import { SectionHeader } from "@/components/ui/section-header"

export default function TermsPage() {
  const [language, setLanguage] = useState<"ja" | "en">("ja")

  const toggleLanguage = useCallback(() => {
    setLanguage((prevLang) => (prevLang === "ja" ? "en" : "ja"))
  }, [])

  const navigationItems = [{ text: language === "ja" ? "ホーム" : "Home", href: "/" }]

  const termsContent = {
    ja: {
      title: "利用規約",
      content: [
        {
          title: "1. はじめに",
          text: "この利用規約（以下、「本規約」といいます。）は、LOCALHOUSE（以下、「当社」といいます。）がこのウェブサイト上で提供するサービス（以下、「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下、「ユーザー」といいます。）には、本規約に従って、本サービスをご利用いただきます。",
        },
        {
          title: "2. 利用登録",
          text: "登録希望者が当社の定める方法によって利用登録を申請し、当社がこれを承認することによって、利用登録が完了するものとします。",
        },
        {
          title: "3. ユーザーIDおよびパスワードの管理",
          text: "ユーザーは、自己の責任において、本サービスのユーザーIDおよびパスワードを適切に管理するものとします。",
        },
        {
          title: "4. 禁止事項",
          text: "ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。\n法令または公序良俗に違反する行為\n犯罪行為に関連する行為\n当社、本サービスの他のユーザー、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為\n当社のサービスの運営を妨害するおそれのある行為\n他のユーザーに関する個人情報等を収集または蓄積する行為\n不正アクセスをし、またはこれを試みる行為\n他のユーザーに成りすます行為\n当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為\nその他、当社が不適切と判断する行為",
        },
        {
          title: "5. 本サービスの提供の停止等",
          text: "当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。\n本サービスにかかるコンピュータシステムの保守点検または更新を行う場合\n地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合\nコンピュータまたは通信回線等が事故により停止した場合\nその他、当社が本サービスの提供が困難と判断した場合",
        },
        {
          title: "6. 利用制限および登録抹消",
          text: "当社は、ユーザーが以下のいずれかに該当する場合には、事前の通知なく、ユーザーに対して、本サービスの全部もしくは一部の利用を制限し、またはユーザーとしての登録を抹消することができるものとします。\n本規約のいずれかの条項に違反した場合\n登録事項に虚偽の事実があることが判明した場合\n料金等の支払債務の不履行があった場合\n当社からの連絡に対し、一定期間返答がない場合\n本サービスについて、最終の利用から一定期間利用がない場合\nその他、当社が本サービスの利用を適当でないと判断した場合",
        },
        {
          title: "7. 保証の否認および免責事項",
          text: "当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。",
        },
        {
          title: "8. サービス内容の変更等",
          text: "当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。",
        },
        {
          title: "9. 利用規約の変更",
          text: "当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。",
        },
        {
          title: "10. 個人情報の取扱い",
          text: "当社は、本サービスの利用によって取得する個人情報については、当社「プライバシーポリシー」に従い適切に取り扱うものとします。",
        },
        {
          title: "11. 通知または連絡",
          text: "ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。当社は、ユーザーから、当社が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。",
        },
        {
          title: "12. 権利義務の譲渡の禁止",
          text: "ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。",
        },
        {
          title: "13. 準拠法・裁判管轄",
          text: "本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。",
        },
      ],
    },
    en: {
      title: "Terms of Service",
      content: [
        {
          title: "1. Introduction",
          text: "These Terms of Service (hereinafter referred to as the 'Terms') stipulate the terms of use for the services (hereinafter referred to as the 'Service') provided by LOCALHOUSE (hereinafter referred to as 'the Company') on this website. All registered users (hereinafter referred to as 'Users') shall use the Service in accordance with these Terms.",
        },
        {
          title: "2. User Registration",
          text: "User registration shall be completed when an applicant applies for user registration by the method prescribed by the Company, and the Company approves this.",
        },
        {
          title: "3. Management of User ID and Password",
          text: "Users shall appropriately manage their User ID and password for the Service at their own responsibility.",
        },
        {
          title: "4. Prohibited Matters",
          text: "In using the Service, users must not engage in the following acts:\nActs that violate laws or public order and morals\nActs related to criminal activity\nActs that destroy or interfere with the functions of the Company's, other users' of the Service, or third parties' servers or networks\nActs that may interfere with the operation of the Company's services\nActs of collecting or storing personal information about other users\nActs of unauthorized access or attempts to do so\nActs of impersonating other users\nActs of directly or indirectly providing benefits to antisocial forces in connection with the Company's services\nOther acts that the Company deems inappropriate",
        },
        {
          title: "5. Suspension of Service Provision, etc.",
          text: "The Company may suspend or interrupt the provision of all or part of the Service without prior notice to the user if it determines that any of the following reasons exist:\nWhen performing maintenance or updates of the computer system related to the Service\nWhen the provision of the Service becomes difficult due to force majeure such as earthquakes, lightning strikes, fires, power outages, or natural disasters\nWhen computers or communication lines are stopped due to accidents\nOther cases where the Company determines that the provision of the Service is difficult",
        },
        {
          title: "6. Usage Restrictions and Registration Cancellation",
          text: "If a user falls under any of the following items, the Company may restrict the user from using all or part of the Service or cancel the user's registration without prior notice:\nWhen violating any provision of these Terms\nWhen it is found that there is a false fact in the registered information\nWhen there is a default in payment obligations such as fees\nWhen there is no response to contact from the Company for a certain period\nWhen there is no use of the Service for a certain period from the last use\nOther cases where the Company deems that the use of the Service is not appropriate",
        },
        {
          title: "7. Disclaimer of Warranty and Disclaimer",
          text: "The Company does not expressly or implicitly warrant that the Service is free from factual or legal defects (including defects, errors, or bugs related to safety, reliability, accuracy, completeness, validity, suitability for a particular purpose, security, etc., and infringement of rights).",
        },
        {
          title: "8. Changes to Service Content, etc.",
          text: "The Company may change the content of the Service or discontinue the provision of the Service without notifying the user, and shall not be liable for any damages incurred by the user as a result.",
        },
        {
          title: "9. Changes to the Terms of Service",
          text: "The Company may change these Terms at any time without notifying the user if it deems necessary. If the user starts using the Service after the change of these Terms, the user shall be deemed to have agreed to the changed Terms.",
        },
        {
          title: "10. Handling of Personal Information",
          text: "The Company shall appropriately handle personal information acquired through the use of the Service in accordance with the Company's 'Privacy Policy'.",
        },
        {
          title: "11. Notice or Contact",
          text: "Notifications or communications between the user and the Company shall be made by the method specified by the Company. Unless the user submits a change notification according to the method separately specified by the Company, the Company shall deem the currently registered contact information to be valid and notify or contact the contact information, and these shall be deemed to have reached the user at the time of transmission.",
        },
        {
          title: "12. Prohibition of Transfer of Rights and Obligations",
          text: "The user may not transfer the status on the usage agreement or transfer or pledge the rights or obligations based on these Terms to a third party without the prior written consent of the Company.",
        },
        {
          title: "13. Governing Law and Jurisdiction",
          text: "These Terms shall be governed by Japanese law in its interpretation. In the event of a dispute regarding the Service, the court having jurisdiction over the location of the Company's head office shall be the exclusive agreement jurisdictional court.",
        },
      ],
    },
  }

  const footerSections = [
    {
      title: "LOCALHOUSE",
      content:
        language === "ja"
          ? "〒577-0804\n大阪府東大阪市中小阪3-10-13"
          : "3-10-13 Nakanosaka, Higashiosaka, Osaka 577-0804",
    },
    {
      title: language === "ja" ? "お問い合わせ" : "Contact",
      items: [
        { text: "X: @localhouse_", href: "https://x.com/localhouse_" },
        { text: "Instagram: @localhouse.jp", href: "https://instagram.com/localhouse.jp" },
      ],
    },
    {
      title: language === "ja" ? "リンク" : "Links",
      items: navigationItems,
    },
    {
      title: language === "ja" ? "法的情報" : "Legal Information",
      items: [
        { text: language === "ja" ? "利用規約" : "Terms of Service", href: "/terms" },
        { text: language === "ja" ? "プライバシーポリシー" : "Privacy Policy", href: "/privacy" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header
        logo="LOCALHOUSE"
        items={navigationItems}
        action={language === "ja" ? "見学予約" : "Book a Visit"}
        onLanguageToggle={toggleLanguage}
      />
      <main className="flex-grow">
        <SectionContainer>
          <SectionHeader title={termsContent[language].title} />
          <div className="prose prose-invert max-w-none">
            {termsContent[language].content.map((section, index) => (
              <div key={index}>
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </main>
      <Footer sections={footerSections} copyright={`© ${new Date().getFullYear()} LOCALHOUSE. All rights reserved.`} />
    </div>
  )
}

