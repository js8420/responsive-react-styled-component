import clients from "../../assets/clients.jpg";
import security from "../../assets/security.jpg";
import teamwork from "../../assets/teamwork.jpg";
import server from "../../assets/servers.jpg";
import topClients from "../../assets/topClients.png";

export const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const data = [
  {
    image: clients,
    title: "What our clients say",
    description:
      "Our clients happily stay with our services for more several years now. See real reviews from our clients.",
  },
  {
    image: security,
    title: "Our security",
    description:
      "Learn more about our security systems to make sure your data is always safe",
  },
  {
    image: teamwork,
    title: "Our Team",
    description:
      "Our team consists of the best experts in the industry, learn about them",
  },
  {
    image: server,
    title: "Our servers",
    description: "Find more about hardware and software used for your service",
  },
  {
    image: topClients,
    title: "Our top clients",
    description: "We have provided services to top clients in tech industry",
  },
];
