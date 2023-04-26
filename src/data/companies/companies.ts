import sadia from "@/assets/sadia.svg";
import uber from "@/assets/uber.svg";
import volks from "@/assets/volks.svg";
import intel from "@/assets/intel.svg";
import matlab from "@/assets/matlab.svg";
import geogebra from "@/assets/geogebra.svg";
import casio from "@/assets/casio.svg";
import santander from "@/assets/santander.svg";
import solid from "@/assets/solid.svg";
import error from "@/assets/error.svg";
import { CompanyEntity } from "@/shared/domain/entities/CompanyEntity";

export const companies = [
  {
    id: 1,
    name: "Sadia",
    image: sadia,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mattis ante, id pellentesque risus. Phasellus id imperdiet neque. Fusce est sapien, tristique auctor rhoncus nec, aliquet vel ligula.",
    link: "https://www.sadia.com.br/",
  },
  {
    id: 2,
    name: "Uber",
    image: uber,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mattis ante, id pellentesque risus. Phasellus id imperdiet neque. Fusce est sapien, tristique auctor rhoncus nec, aliquet vel ligula.",
    link: "https://www.uber.com/br/pt-br/",
  },
  {
    id: 3,
    name: "Volks",
    image: volks,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mattis ante, id pellentesque risus. Phasellus id imperdiet neque. Fusce est sapien, tristique auctor rhoncus nec, aliquet vel ligula.",
    link: "https://www.vw.com.br/pt.html",
  },
  {
    id: 4,
    name: "Intel",
    image: intel,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mattis ante, id pellentesque risus. Phasellus id imperdiet neque. Fusce est sapien, tristique auctor rhoncus nec, aliquet vel ligula.",
    link: "https://www.sadia.com.br/",
  },
  {
    id: 5,
    name: "Matlab",
    image: matlab,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mattis ante, id pellentesque risus. Phasellus id imperdiet neque. Fusce est sapien, tristique auctor rhoncus nec, aliquet vel ligula.",
    link: "https://www.uber.com/br/pt-br/",
  },
  {
    id: 6,
    name: "Geogebra",
    image: geogebra,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mattis ante, id pellentesque risus. Phasellus id imperdiet neque. Fusce est sapien, tristique auctor rhoncus nec, aliquet vel ligula.",
    link: "https://www.vw.com.br/pt.html",
  },
  {
    id: 7,
    name: "Casio",
    image: casio,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mattis ante, id pellentesque risus. Phasellus id imperdiet neque. Fusce est sapien, tristique auctor rhoncus nec, aliquet vel ligula.",
    link: "https://www.vw.com.br/pt.html",
  },
  {
    id: 8,
    name: "Santander",
    image: santander,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mattis ante, id pellentesque risus. Phasellus id imperdiet neque. Fusce est sapien, tristique auctor rhoncus nec, aliquet vel ligula.",
    link: "https://www.vw.com.br/pt.html",
  },
  {
    id: 9,
    name: "SolidWorks",
    image: solid,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mattis ante, id pellentesque risus. Phasellus id imperdiet neque. Fusce est sapien, tristique auctor rhoncus nec, aliquet vel ligula.",
    link: "https://www.vw.com.br/pt.html",
  },
];

// export const companies: CompanyEntity[] = [
//   new CompanyEntity(
//     "sadia",
//     sadia,
//     "Sadia is a company that produces food products.",
//     "https://www.sadia.com.br/"
//   ),
//   new CompanyEntity(
//     "uber",
//     uber,
//     "Uber is a company of car services.",
//     "https://www.uber.com/br/pt-br/"
//   ),
//   new CompanyEntity(
//     "volks",
//     volks,
//     "Volks is a company that produces cars.",
//     "https://www.vw.com.br/pt.html"
//   ),
// ];
