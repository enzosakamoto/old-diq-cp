import sadia from "@/assets/sadia.svg";
import uber from "@/assets/uber.svg";
import volks from "@/assets/volks.svg";
import error from "@/assets/error.svg";
import { CompanyEntity } from "@/shared/domain/entities/CompanyEntity";

// export const companies = [
//     {name: "Sadia", image: sadia, desc: "Sadia is a company that produces food products."},
//     {name: "Uber", image: uber, desc: "Uber is a company that produces food products."},
//     {name: "Volks", image: volks, desc: "Volks is a company that produces food products."},
//     {name: "Sadia", image: sadia, desc: "Sadia is a company that produces food products."},
//     {name: "Uber", image: uber, desc: "Uber is a company that produces food products."},
//     {name: "Volks", image: volks, desc: "Volks is a company that produces food products."},
//     {name: "Sadia", image: sadia, desc: "Sadia is a company that produces food products."},
//     {name: "Uber", image: uber, desc: "Uber is a company that produces food products."},
//     {name: "Volks", image: volks, desc: "Volks is a company that produces food products."},
//     {name: "Sadia", image: sadia, desc: "Sadia is a company that produces food products."},
//     {name: "Uber", image: uber, desc: "Uber is a company that produces food products."},
//     {name: "Volks", image: volks, desc: "Volks is a company that produces food products."},
// ]

export const companies: CompanyEntity[] = [
  new CompanyEntity(
    "sadia",
    sadia,
    "Sadia is a company that produces food products.",
    "https://www.sadia.com.br/"
  ),
  new CompanyEntity(
    "uber",
    uber,
    "Uber is a company of car services.",
    "https://www.uber.com/br/pt-br/"
  ),
  new CompanyEntity(
    "volks",
    volks,
    "Volks is a company that produces cars.",
    "https://www.vw.com.br/pt.html"
  ),
];
