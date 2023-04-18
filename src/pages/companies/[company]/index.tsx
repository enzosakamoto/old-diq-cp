import Navbar from "@/components/navbar";
import styles from "@/styles/Company.module.css";
import { useRouter } from "next/router";
import { companies } from "@/data/companies/companies";
import Image from "next/image";

export default function Company() {
  const router = useRouter();
  const company = router.query.company;
  const companyData = companies.find(
    (companyData) => companyData.name === company
  );
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <Image
          src={companyData?.image}
          alt={`Logo da ${companyData?.name}`}
        ></Image>
        <aside className={styles["company-texts"]}>
          <h1>{companyData?.name}</h1>
          <span>{companyData?.desc}</span>
        </aside>
      </main>
    </>
  );
}
