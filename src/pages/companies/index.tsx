import Footer from "@/components/footer";
import PageName from "@/components/head";
import Navbar from "@/components/navbar";
import Square from "@/components/square";
import { companies } from "@/data/companies/companies";
import styles from "@/styles/Companies.module.css";
import { useState } from "react";
import nodata from "@/assets/nodata.svg";
import Image from "next/image";

export default function CompaniesPage() {
  const [search, setSearch] = useState("");
  return (
    <>
      <PageName
        title="DIQ-CP | PARCEIRAS"
        content="Página das parceiras do IMT"
      />
      <Navbar />
      <main className={styles.page}>
        <h1>Todas as parceiras</h1>
        <input
          type="text"
          placeholder="Pesquisar..."
          onChange={(event) => {
            setSearch(event.target.value.toLowerCase());
          }}
        />
        <section className={styles["companies-squares"]}>
          {search === "" ? (
            companies.map((company, id) => {
              return (
                <Square
                  image={company.image}
                  name={company.name}
                  id={company.id}
                  key={company.id}
                />
              );
            })
          ) : companies.filter((company) =>
              company.name.toLowerCase().includes(search)
            ).length !== 0 ? (
            companies
              .filter((company) => company.name.toLowerCase().includes(search))
              .map((companySearch) => {
                return (
                  <Square
                    image={companySearch.image}
                    name={companySearch.name}
                    id={companySearch.id}
                    key={companySearch.id}
                  />
                );
              })
          ) : (
            <>
              <article className={styles["companies-error"]}>
                <span>Não foi possível encontrar!</span>
                <span>Verifique o nome da empresa.</span>
                <Image src={nodata} width={300} height={300} alt="Erro" />
              </article>
            </>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
