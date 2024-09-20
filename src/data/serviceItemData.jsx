const blackBtn = (
  <svg
    className="cursor-pointer"
    xmlns="http://www.w3.org/2000/svg"
    width="41"
    height="41"
    viewBox="0 0 41 41"
    fill="none"
  >
    <circle cx="20.5" cy="20.5" r="20.5" fill="black" />
    <path
      d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
      fill="#B9FF66"
    />
  </svg>
);

const whiteBtn = (
  <svg
    className="cursor-pointer"
    xmlns="http://www.w3.org/2000/svg"
    width="41"
    height="42"
    viewBox="0 0 41 42"
    fill="none"
  >
    <circle cx="20.5" cy="20.9707" r="20.5" fill="white" />
    <path
      d="M11.25 25.1717C10.5326 25.5859 10.2867 26.5033 10.701 27.2207C11.1152 27.9381 12.0326 28.184 12.75 27.7697L11.25 25.1717ZM30.7694 16.8589C30.9838 16.0587 30.5089 15.2362 29.7087 15.0218L16.6687 11.5278C15.8685 11.3133 15.046 11.7882 14.8316 12.5884C14.6172 13.3886 15.0921 14.2111 15.8923 14.4255L27.4834 17.5314L24.3776 29.1225C24.1631 29.9227 24.638 30.7452 25.4382 30.9596C26.2384 31.174 27.0609 30.6991 27.2753 29.8989L30.7694 16.8589ZM12.75 27.7697L30.0705 17.7697L28.5705 15.1717L11.25 25.1717L12.75 27.7697Z"
      fill="black"
    />
  </svg>
);

export const serviceItemObj = [
  {
    id: 1,
    textTop: "Search engine",
    textUnder:
      "Rank higher on search engines and attract more organic traffic to your website with our proven SEO strategies. We help you get discovered by the right audience at the right time.",
    textBackground: "neonGreen",
    background: "lightGray",
    btn: blackBtn,
    serviceImg: `${import.meta.env.BASE_URL}/magnifier.png`,
    moreColor: "black",
    decorationColor: "neonGreen",
    path: "/search-engine-optimization",
  },
  {
    id: 2,
    textTop: "PPC advertising",
    textUnder:
      "Drive targeted traffic instantly with PPC advertising. Our specialists create high-converting campaigns that ensure you only pay when potential customers engage with your ads, maximizing your ROI.",
    textBackground: "white",
    background: "neonGreen",
    btn: blackBtn,
    serviceImg: `${import.meta.env.BASE_URL}/browser.png`,
    moreColor: "black",
    decorationColor: "darkGray",
    path: "/browser-based-services",
  },
  {
    id: 3,
    textTop: "SMM",
    textUnder:
      "Boost your brand awareness and engage with your audience across all major social media platforms. We craft customized strategies to create meaningful connections, drive conversions, and increase your online visibility.",
    textBackground: "white",
    background: "darkGray",
    btn: whiteBtn,
    serviceImg: `${import.meta.env.BASE_URL}/smile.png`,
    moreColor: "white",
    decorationColor: "lightGray",
    path: "/social-media-marketing",
  },
  {
    id: 4,
    textTop: "Email Marketing",
    textUnder:
      "Engage and retain your customers with personalized email campaigns. From crafting compelling newsletters to managing automated drip campaigns, we ensure your brand stays top of mind and converts leads into loyal customers.",
    textBackground: "neonGreen",
    background: "lightGray",
    btn: blackBtn,
    serviceImg: `${import.meta.env.BASE_URL}/email.png`,
    moreColor: "black",
    decorationColor: "neonGreen",
    path: "/email-marketing",
  },
  {
    id: 5,
    textTop: "Content Creation",
    textUnder:
      "Content is king. Our team of talented writers and creators produce engaging, SEO-optimized content that drives traffic, builds trust, and positions your brand as an industry leader. From blogs to social media posts, we’ve got you covered.",
    textBackground: "white",
    background: "neonGreen",
    btn: blackBtn,
    serviceImg: `${import.meta.env.BASE_URL}/content.png`,
    moreColor: "black",
    decorationColor: "darkGray",
    path: "/content-creation",
  },
  {
    id: 6,
    textTop: "Analytics",
    textUnder:
      "Gain valuable insights into your marketing efforts with our advanced analytics and performance tracking. We provide detailed reports on key metrics, allowing you to measure success, identify growth opportunities, and make data-driven decisions that optimize your marketing strategies for better results. Let the data guide your next move!",
    textBackground: "white",
    background: "darkGray",
    btn: whiteBtn,
    serviceImg: `${import.meta.env.BASE_URL}/analytics.png`,
    moreColor: "white",
    decorationColor: "lightGray",
    path: "/analytics",
  },
];
