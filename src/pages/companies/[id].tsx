import Navbar from "@/components/navbar";
import styles from "@/styles/Company.module.css";
import { companies } from "@/data/companies/companies";
import Image from "next/image";
import Link from "next/link";
import { CompanyEntity } from "@/shared/domain/entities/CompanyEntity";
import Footer from "@/components/footer";
import PageName from "@/components/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// interface Props {
//   company: CompanyEntity;
// }

// export const getStaticPaths = async () => {
//   const res = await fetch("@/data/companies.json/");
//   const data = await res.json();

//   const paths = data.map((company: any) => {
//     return {
//       params: { id: company.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context: any) => {
//   const id = context.params.id;
//   const res = await fetch("@/data/companies.json/" + id);
//   const data = res.json();

//   return {
//     props: { company: data },
//   };
// };

export default function Company() {
  const router = useRouter();
  const { id } = router.query;

  const company = companies.find((company) => company.id === Number(id));

  return (
    <>
      <PageName
        title={`DIQ-CP | ${company!.name}`}
        content={`Página detalhada da ${company!.name}`}
      />
      <Navbar />
      <main className={styles.page}>
        <section className={styles.company}>
          <Link href={company!.link} rel="noopener noreferrer" target="_blank">
            <aside className={styles["company-link"]}>
              <Image
                className={styles["company-image"]}
                src={company!.image}
                alt={`Logo da ${company!.name}`}
              ></Image>
            </aside>
          </Link>
          <article className={styles["company-texts"]}>
            <h1>{company!.name}</h1>
            <div className={styles["company-activities"]}>
              <h2>Principais atividades</h2>
              <span>{company!.desc}</span>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
