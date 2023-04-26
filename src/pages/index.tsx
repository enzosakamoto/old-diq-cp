import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import styles from "@/styles/Home.module.css";
import engineer from "@/assets/engineer.svg";
import { companies } from "@/data/companies/companies";
import Square from "@/components/square";
import Footer from "@/components/footer";
import Head from "next/head";
import PageName from "@/components/head";

export default function Home() {
  return (
    <>
      <PageName title="DIQ-CP IMT" content="Página inicial" />
      <Navbar />
      <main className={styles.page}>
        <section className={styles.home}>
          <aside id="home" className={styles["home-texts"]}>
            <h1>DIQ-CP IMT</h1>
            <h2>PARCEIRAS</h2>
          </aside>
          <span className={styles["home-image"]}>
            <Image
              src={engineer}
              width={600}
              height={600}
              alt="Lâmpada com homem ao lado"
            ></Image>
          </span>
        </section>
        <section className={styles.companies}>
          <h2>Principais parceiras</h2>
          <div className={styles["companies-squares"]}>
            {companies.map((company, id) => {
              if (id < 6)
                return (
                  <Square
                    image={company.image}
                    name={company.name}
                    key={company.id}
                  />
                );
            })}
          </div>
          <Link href="/companies">
            <div className={styles["show-more"]}>ver mais</div>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
