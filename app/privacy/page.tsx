"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SectionContainer } from "@/components/ui/section-container"
import { SectionHeader } from "@/components/ui/section-header"
import { useState, useCallback } from "react"

export default function PrivacyPage() {
  const [language, setLanguage] = useState<"ja" | "en">("ja")

  const toggleLanguage = useCallback(() => {
    setLanguage((prevLang) => (prevLang === "ja" ? "en" : "ja"))
  }, [])

  const navigationItems = [{ text: language === "ja" ? "ホーム" : "Home", href: "/" }]

  const privacyContent = {
    ja: {
      title: "プライバシーポリシー",
      content: [
        {
          title: "1. 個人情報の定義",
          text: "「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。",
        },
        {
          title: "2. 個人情報の収集方法",
          text: "当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号、運転免許証番号などの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、当社の提携先（情報提供元、広告主、広告配信先などを含みます。以下、｢提携先｣といいます。）などから収集することがあります。",
        },
        {
          title: "3. 個人情報を収集・利用する目的",
          text: "当社が個人情報を収集・利用する目的は、以下のとおりです。\n\n1. 当社サービスの提供・運営のため\n2. ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）\n3. ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため\n4. メンテナンス、重要なお知らせなど必要に応じたご連絡のため\n5. 利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため\n6. ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため\n7. 有料サービスにおいて、ユーザーに利用料金を請求するため\n8. 上記の利用目的に付随する目的",
        },
        {
          title: "4. 個人情報の第三者提供",
          text: "当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。\n\n1. 人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき\n2. 公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき\n3. 国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき\n4. 予め次の事項を告知あるいは公表し、かつ当社が個人情報保護委員会に届出をしたとき\n   1. 利用目的に第三者への提供を含むこと\n   2. 第三者に提供されるデータの項目\n   3. 第三者への提供の手段または方法\n   4. 本人の求めに応じて個人情報の第三者への提供を停止すること\n   5. 本人の求めを受け付ける方法",
        },
        {
          title: "5. 個人情報の開示",
          text: "当社は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。なお、個人情報の開示に際しては、1件あたり1,000円の手数料を申し受けます。\n\n1. 本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合\n2. 当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合\n3. その他法令に違反することとなる場合",
        },
        {
          title: "6. 個人情報の訂正および削除",
          text: "当社は、本人から個人情報の訂正、追加または削除（以下、「訂正等」といいます。）を求められた場合には、遅滞なく必要な調査を行い、その結果に基づき、個人情報の訂正等を行い、その旨を本人に通知します。",
        },
        {
          title: "7. 個人情報の利用停止等",
          text: "当社は、本人から、個人情報が、利用目的の範囲を超えて取り扱われているという理由、または不正の手段により取得されたものであるという理由により、その利用の停止または消去（以下、「利用停止等」といいます。）を求められた場合には、遅滞なく必要な調査を行い、その結果に基づき、個人情報の利用停止等を行い、その旨を本人に通知します。",
        },
        {
          title: "8. プライバシーポリシーの変更",
          text: "本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。",
        },
        {
          title: "9. お問い合わせ窓口",
          text: "本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。\n\n住所：〒577-0804 大阪府東大阪市中小阪3-10-13\nLOCALHOUSE\n担当部署：個人情報保護管理部門\nEメールアドレス：info@localhouse.jp",
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      content: [
        {
          title: "1. Definition of Personal Information",
          text: "'Personal information' refers to 'personal information' as defined in the Act on the Protection of Personal Information, and is information about a living individual which can identify the specific individual by name, date of birth, address, phone number, contact information, or other description contained in such information, or which can identify the specific individual through easy reference to other information.",
        },
        {
          title: "2. Collection Method of Personal Information",
          text: "We may ask users to provide personal information such as name, date of birth, address, phone number, email address, bank account number, credit card number, driver's license number, etc. when they register for our services. We may also collect information about users, including personal information, transaction records, and payment information, from our partners (including information providers, advertisers, ad delivery destinations, etc., hereinafter referred to as 'partners').",
        },
        {
          title: "3. Purpose of Collecting and Using Personal Information",
          text: "We collect and use personal information for the following purposes:\n\n1. To provide and operate our services\n2. To respond to inquiries from users (including identity verification)\n3. To send emails about new features, updates, campaigns, etc. of the services being used by the user, and to inform about other services provided by our company\n4. To contact users when necessary, such as for maintenance or important notices\n5. To identify users who violate the terms of service or who intend to use the services for improper or unjust purposes, and to refuse their use\n6. To allow users to view, change, or delete their registration information, and to view their usage status\n7. To charge users for paid services\n8. For purposes incidental to the above usage purposes",
        },
        {
          title: "4. Provision of Personal Information to Third Parties",
          text: "We will not provide personal information to third parties without the prior consent of the user, except in the following cases. However, this does not apply in cases permitted by the Act on the Protection of Personal Information and other laws and regulations.\n\n1. When it is necessary for the protection of a person's life, body, or property, and it is difficult to obtain the consent of the individual\n2. When it is particularly necessary for improving public health or promoting the sound growth of children, and it is difficult to obtain the consent of the individual\n3. When it is necessary to cooperate with a national government organ, a local government, or an individual or entity entrusted by either a national government organ or local government to execute affairs prescribed by laws and regulations, and obtaining the consent of the individual might impede the execution of such affairs\n4. When the following matters have been announced or publicly announced in advance, and we have notified the Personal Information Protection Commission\n   1. The purpose of use includes provision to a third party\n   2. The items of data provided to the third party\n   3. The means or method of provision to the third party\n   4. The fact that provision of personal information to a third party will be stopped at the request of the individual\n   5. The method of accepting the individual's request",
        },
        {
          title: "5. Disclosure of Personal Information",
          text: "When we are requested to disclose personal information by the individual, we will do so without delay. However, we may decide not to disclose all or part of the information if disclosing it falls under any of the following cases, and we will notify the individual of this decision without delay. Please note that a fee of 1,000 yen per case will be charged for the disclosure of personal information.\n\n1. When there is a risk of harming the life, body, property, or other rights and interests of the individual or a third party\n2. When there is a risk of significantly hindering the proper execution of our business\n3. When it would violate other laws and regulations",
        },
        {
          title: "6. Correction and Deletion of Personal Information",
          text: "If we are requested by an individual to correct, add, or delete their personal information (hereinafter referred to as 'correction, etc.'), we will conduct the necessary investigation without delay and, based on the results, make the correction, etc. of the personal information and notify the individual of this action.",
        },
        {
          title: "7. Suspension of Use of Personal Information",
          text: "If we are requested by an individual to suspend or erase the use of personal information (hereinafter referred to as 'suspension of use, etc.') on the grounds that the information is being handled beyond the scope of the purpose of use or that it was obtained by fraudulent means, we will conduct the necessary investigation without delay. Based on the results, we will suspend the use, etc. of the personal information and notify the individual of this action.",
        },
        {
          title: "8. Changes to the Privacy Policy",
          text: "The contents of this policy may be changed without notice to users, except for matters stipulated by laws and regulations or matters otherwise specified in this policy. Unless otherwise specified by us, the changed Privacy Policy will take effect when posted on this website.",
        },
        {
          title: "9. Contact Information",
          text: "For inquiries regarding this policy, please contact:\n\nAddress: 3-10-13 Nakanosaka, Higashiosaka-shi, Osaka 577-0804\nLOCALHOUSE\nDepartment in charge: Personal Information Protection Management Department\nEmail address: info@localhouse.jp",
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
          <SectionHeader title={privacyContent[language].title} />
          <div className="prose prose-invert max-w-none">
            {privacyContent[language].content.map((section, index) => (
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

