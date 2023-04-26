import Navbar from "@/components/navbar";
import styles from "@/styles/Company.module.css";
import { companies } from "@/data/companies/companies";
import Image from "next/image";
import Link from "next/link";
import { CompanyEntity } from "@/shared/domain/entities/CompanyEntity";
import Footer from "@/components/footer";
import PageName from "@/components/head";

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
  const company = companies[1];

  return (
    <>
      <PageName
        title={`DIQ-CP | ${company.name}`}
        content={`Página detalhada da ${company.name}`}
      />
      <Navbar />
      <main className={styles.page}>
        <section className={styles.company}>
          <Link href={company.link} rel="noopener noreferrer" target="_blank">
            <aside className={styles["company-link"]}>
              <Image
                className={styles["company-image"]}
                src={company.image}
                alt={`Logo da ${company.name}`}
              ></Image>
            </aside>
          </Link>
          <article className={styles["company-texts"]}>
            <h1>
              {company.name.charAt(0).toUpperCase() + company.name.slice(1)}
            </h1>
            <div className={styles["company-activities"]}>
              <h2>Principais atividades</h2>
              <span>{company.desc}</span>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

// export async function getStaticPaths() {
//   const paths = companies.map((company) => ({
//     params: { name: company.getName() },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }: any) {
//   const company = companies.find(
//     (company) => company.getName() === params.name
//   );

//   return { props: { company } };
// }
