//Header.jsx -> Main Navigation (nav)
export const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Movies & Shows",
    href: "/movies",
  },
  {
    label: "Support",
    href: "/support",
  },
  {
    label: "Subscriptions",
    href: "/subscriptions",
  },
]

// Footer.jsx -> Footer
export const footerMenuItems = [
  {
    title: "Home",
    links: ["Categories", "Devices", "Pricing", "FAQ"],
    href: "/",
  },
  {
    title: "Movies",
    links: ["Genres", "Trending", "New Release", "Popular"],
    href: "/movies",
  },
  {
    title: "Shows",
    links: ["Genres", "Trending", "New Release", "Popular"],
    href: "/movies",
  },
  {
    title: "Support",
    links: ["Contact Us"],
    href: "/support",
  },
  {
    title: "Subscription",
    links: ["Plans", "Features"],
    href: "/subscriptions",
  },
  {
    title: "Connect With Us",
    href: "/",
    socialLinks: [
      {
        label: "Facebook",
        iconName: "facebook",
        href: "https://www.facebook.com/",
      },
      {
        label: "Twitter",
        iconName: "twitter",
        href: "https://twitter.com/",
      },
      {
        label: "LinkedIn",
        iconName: "linked-in",
        href: "https://www.linkedin.com/",
      },
    ],
  },
]

export const footerExtraLinks = [
  {
    label: "Terms of Use",
    href: "/",
  },
  {
    label: "Privacy Policy",
    href: "/",
  },
  {
    label: "Cookie Policy",
    href: "/",
  },
]
