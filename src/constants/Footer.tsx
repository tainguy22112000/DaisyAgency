import { Basketball, BehanceIcon, DiscordIcon, FacebookIcon, InstagramIcon, Logo, TwitterIcon } from '~/assets/icon'

export const footerInfo = [{
    title: <Logo/>,
    info: [
      "Adress: 12 Pham Van Hai, Ward 12, Tan Binh, HCMC",
      "Email: info@company.com.vn",
      "Working time: 8:00am - 5:30pm (Mon - Sat)",
      "Contact: (+84)123456789 "
    ],
    link: '/'
  }, {
    title: "About Us",
    info: [
      "Introduce",
      "Why choose us",
      "Our culture",
      "Process"
    ],
    link: '/about'
  }, {
    title: "Solutions & Services",
    info: [
      "IT system administration",
      "Infrastructure - network solutions",
      "System maintenance",
      "Server & Storage Solutions",
      "Information security & safety solutions",
      "Data center solutions"
    ],
    link: '/solution'
  }, {
    title: "Customer Service",
    info: [
      "Introduce",
      "Privacy policy",
      "Contact",
      "Support 24/7: (+84)123456789"
    ],
    link: '/contact'
  }];
  
export const contactIcons = [
    <FacebookIcon/>,
    <InstagramIcon/>,
    <TwitterIcon/>,
    <DiscordIcon/>,
    <BehanceIcon/>,
    <Basketball/>
  ]