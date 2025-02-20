export interface NavigationItem {
  text: string
  href: string
}

export interface HeroData {
  badge: string
  heading: string[]
  description: string
  buttons: {
    text: string
    icon: string
  }[]
}

export interface Feature {
  title: string
  description: string
  icon: string
}

export interface Member {
  name: string
  role: string
  affiliation: string
  image: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
}

export interface GalleryImage {
  src: string
  alt: string
  caption: string
  description: string
}

export interface Sponsor {
  logoAlt: string
}

export interface IndividualSupporter {
  name: string
  link?: string
}

export interface PricingPlan {
  name: string
  price: string
  features: string[]
  button: string
}

export interface AccessLocation {
  name: string
  address: string
  nearest: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface CTAData {
  title: string
  description: string
  buttons: {
    text: string
    icon: string
  }[]
}

export interface FooterSection {
  title: string
  content?: string
  items?: {
    text: string
    href?: string
  }[]
}

export interface PageData {
  navigation: {
    logo: string
    items: NavigationItem[]
    action: string
  }
  hero: HeroData
  features: Feature[]
  members: {
    title: string
    core: Member[]
    testimonials: Testimonial[]
  }
  gallery: {
    title: string
    images: GalleryImage[]
  }
  sponsors: {
    title: string
    operation: {
      title: string
      name: string
      details: string[]
    }
    goldSponsors: Sponsor[]
    individualSupporters: IndividualSupporter[]
    supportCallToAction: {
      text: string
      button: string
    }
  }
  pricing: {
    title: string
    plan: PricingPlan
    notes: string[]
  }
  access: {
    title: string
    location: AccessLocation
    notes: string[]
  }
  faq: {
    title: string
    items: FAQItem[]
  }
  cta: CTAData
  footer: {
    sections: FooterSection[]
    copyright: string
  }
}

