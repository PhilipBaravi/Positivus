import {
  MagnifyingGlassIcon,
  ChartBarIcon,
  LinkIcon,
  PresentationChartLineIcon,
  GlobeAltIcon,
  ComputerDesktopIcon,
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

export const servicePageObj = [
  {
    path: "/search-engine-optimization",
    servicePageName: "Search Engine",
    servicePageNameBg: "Optimization",
    servicePageDescription:
      "Boost your online visibility and attract more organic traffic with our proven SEO strategies.",
    serviceInfoName: "Rank higher on search engines",
    serviceInfoDescription:
      "We help you get discovered by the right audience and improve your online presence through cutting-edge SEO techniques and data-driven strategies.",
    servicePageImg: `${import.meta.env.BASE_URL}assets/seo.jpg`,
    servicePageFeatures: [
      {
        icon: MagnifyingGlassIcon,
        title: "Keyword Research",
        description:
          "We identify the most relevant and high-performing keywords for your business to target.",
      },
      {
        icon: ChartBarIcon,
        title: "On-Page Optimization",
        description:
          "We optimize your website's content and structure to improve its search engine rankings.",
      },
      {
        icon: LinkIcon,
        title: "Link Building",
        description:
          "We develop strategies to acquire high-quality backlinks to boost your website's authority.",
      },
      {
        icon: PresentationChartLineIcon,
        title: "Performance Tracking",
        description:
          "We monitor your website's performance and provide regular reports on your SEO progress.",
      },
    ],
  },
  {
    path: "/browser-based-services",
    servicePageName: "Browser",
    servicePageNameBg: "Services",
    servicePageDescription:
      "Enhance user experiences with powerful, cross-browser compatible solutions tailored to meet your business needs.",
    serviceInfoName: "Cross-browser compatibility",
    serviceInfoDescription:
      "We ensure your applications perform smoothly across different browsers and platforms, optimizing speed and usability.",
    servicePageImg: `${import.meta.env.BASE_URL}assets/advertising.jpg`,
    servicePageFeatures: [
      {
        icon: GlobeAltIcon,
        title: "Browser Testing",
        description:
          "Thorough testing to ensure seamless performance across all major browsers.",
      },
      {
        icon: ChartBarIcon,
        title: "Performance Optimization",
        description:
          "We ensure your web applications load fast and run efficiently.",
      },
      {
        icon: LinkIcon,
        title: "API Integration",
        description:
          "Efficiently integrate third-party APIs to extend functionality.",
      },
      {
        icon: PresentationChartLineIcon,
        title: "Analytics & Reporting",
        description:
          "Monitor and analyze browser-based performance metrics regularly.",
      },
    ],
  },
  {
    path: "/social-media-marketing",
    servicePageName: "Social Media",
    servicePageNameBg: "Marketing",
    servicePageDescription:
      "Grow your brand through targeted social media campaigns that engage and convert.",
    serviceInfoName: "Expand your online presence",
    serviceInfoDescription:
      "We craft tailored social media strategies that connect your brand with your audience, driving engagement and building loyalty.",
    servicePageImg: `${import.meta.env.BASE_URL}assets/management.jpg`,
    servicePageFeatures: [
      {
        icon: ChatBubbleBottomCenterTextIcon,
        title: "Engagement Strategies",
        description:
          "Maximize engagement with curated content designed to resonate with your audience.",
      },
      {
        icon: PresentationChartLineIcon,
        title: "Performance Monitoring",
        description:
          "Track social media metrics to optimize content and boost conversions.",
      },
      {
        icon: LinkIcon,
        title: "Influencer Collaborations",
        description:
          "Collaborate with influencers to expand your reach and build credibility.",
      },
      {
        icon: ChartBarIcon,
        title: "Targeted Ads",
        description:
          "Leverage data-driven targeting to reach the right audience with social media ads.",
      },
    ],
  },
  {
    path: "/email-marketing",
    servicePageName: "Email",
    servicePageNameBg: "Marketing",
    servicePageDescription:
      "Engage your audience with personalized email campaigns that drive conversions and build customer loyalty.",
    serviceInfoName: "Personalized email campaigns",
    serviceInfoDescription:
      "Our team crafts tailored email campaigns to keep your customers informed and engaged, turning leads into loyal customers.",
    servicePageImg: `${import.meta.env.BASE_URL}assets/email.jpg`,
    servicePageFeatures: [
      {
        icon: EnvelopeIcon,
        title: "Campaign Management",
        description:
          "Manage all aspects of email campaigns from content creation to delivery.",
      },
      {
        icon: ChartBarIcon,
        title: "Analytics & Reporting",
        description:
          "Track open rates, click-through rates, and conversions to optimize your campaigns.",
      },
      {
        icon: LinkIcon,
        title: "Automation",
        description:
          "Automate email workflows to send the right message at the right time.",
      },
      {
        icon: PresentationChartLineIcon,
        title: "A/B Testing",
        description:
          "Test different email formats to see what resonates best with your audience.",
      },
    ],
  },
  {
    path: "/content-creation",
    servicePageName: "Content",
    servicePageNameBg: "Creation",
    servicePageDescription:
      "Create compelling content that engages your audience and builds your brand authority.",
    serviceInfoName: "Engaging content",
    serviceInfoDescription:
      "Our team of skilled writers and content creators produce high-quality, SEO-optimized content tailored to your brand.",
    servicePageImg: `${import.meta.env.BASE_URL}assets/content.jpg`,
    servicePageFeatures: [
      {
        icon: PencilIcon,
        title: "Blog Writing",
        description:
          "Create in-depth blog posts to establish your brand as a thought leader.",
      },
      {
        icon: PresentationChartLineIcon,
        title: "SEO Optimization",
        description:
          "Ensure all content is optimized for search engines to improve visibility.",
      },
      {
        icon: ChartBarIcon,
        title: "Content Strategy",
        description:
          "Develop a strategic content calendar to keep your audience engaged.",
      },
      {
        icon: LinkIcon,
        title: "Multi-platform Publishing",
        description:
          "Publish content across multiple channels including social media, blogs, and newsletters.",
      },
    ],
  },
  {
    path: "/analytics",
    servicePageName: "Analytics",
    servicePageNameBg: "Services",
    servicePageDescription:
      "Leverage data to make informed decisions and optimize your marketing strategies for better results.",
    serviceInfoName: "Data-driven insights",
    serviceInfoDescription:
      "Our analytics services provide you with the data and insights you need to measure success and identify growth opportunities.",
    servicePageImg: `${import.meta.env.BASE_URL}assets/analytics.jpg`,
    servicePageFeatures: [
      {
        icon: ComputerDesktopIcon,
        title: "Dashboard Setup",
        description:
          "Create intuitive dashboards that display key performance metrics at a glance.",
      },
      {
        icon: ChartBarIcon,
        title: "Data Analysis",
        description:
          "Analyze data from various sources to identify trends and opportunities.",
      },
      {
        icon: PresentationChartLineIcon,
        title: "Reporting",
        description:
          "Generate comprehensive reports to keep stakeholders informed.",
      },
      {
        icon: LinkIcon,
        title: "Tracking & Measurement",
        description:
          "Ensure all campaigns are tracked accurately and performance is measured effectively.",
      },
    ],
  },
];
