import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import styles from "@/styles/Home.module.css";
import engineer from "@/assets/engineer.svg";
import { companies } from "@/data/companies/companies";
import Square from "@/components/square";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <section className={styles.home}>
          <aside id="home" className={styles["home-texts"]}>
            <h1>DIQ-CP IMT</h1>
            <h2>PARCERIAS</h2>
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
              return (
                <Square
                  image={company.getImage()}
                  name={company.getName()}
                  key={id}
                />
              );
            })}
          </div>
          <Link href="/companies">
            <div className={styles["show-more"]}>ver mais</div>
          </Link>
        </section>
      </main>
    </>
  );
}
