import Navbar from "@/components/navbar";
import styles from "@/styles/Company.module.css";
import { companies } from "@/data/companies/companies";
import Image from "next/image";
import Link from "next/link";
import { CompanyEntity } from "@/shared/domain/entities/CompanyEntity";

interface Props {
  company: CompanyEntity;
}

export default function Company({ company }: Props) {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <Link
          href={company!.getLink()}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src={company!.getImage()}
            alt={`Logo da ${company?.getName()}`}
          ></Image>
        </Link>
        <article className={styles["company-texts"]}>
          <h1>
            {company!.getName().charAt(0).toUpperCase() +
              company!.getName().slice(1)}
          </h1>
          <span>{company!.getDesc()}</span>
        </article>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const paths = companies.map((company) => ({
    params: { name: company.getName() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const company = companies.find(
    (company) => company.getName() === params.name
  );

  return { props: { company } };
}
