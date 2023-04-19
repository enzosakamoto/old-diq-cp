import Navbar from "@/components/navbar";
import styles from "@/styles/Company.module.css";
import { useRouter } from "next/router";
import { companies } from "@/data/companies/companies";
import Image from "next/image";
import Link from "next/link";

export default function Company() {
  const router = useRouter();
  const companyName = router.query.company;
  const companyData = companies.find((item) => item.getName() === companyName);
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <Link href={companyData!.getLink()}>
          <Image
            src={companyData!.getImage()}
            alt={`Logo da ${companyData?.getName()}`}
          ></Image>
        </Link>
        <aside className={styles["company-texts"]}>
          <h1>{companyData!.getName()}</h1>
          <span>{companyData!.getDesc()}</span>
        </aside>
      </main>
    </>
  );
}
