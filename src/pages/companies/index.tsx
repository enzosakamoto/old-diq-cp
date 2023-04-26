import Footer from "@/components/footer";
import PageName from "@/components/head";
import Navbar from "@/components/navbar";
import Square from "@/components/square";
import { companies } from "@/data/companies/companies";
import styles from "@/styles/Companies.module.css";
import Link from "next/link";

export default function CompaniesPage() {
  return (
    <>
      <PageName
        title="DIQ-CP | PARCEIRAS"
        content="Página das parceiras do IMT"
      />
      <Navbar />
      <main className={styles.page}>
        <h1>Todas as parceiras</h1>
        <section className={styles["companies-squares"]}>
          {companies.map((company, id) => {
            return (
              <Square
                image={company.image}
                name={company.name}
                key={company.id}
              />
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
