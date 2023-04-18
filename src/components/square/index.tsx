import Image from "next/image";
import styles from "@/styles/Square.module.css";
import Link from "next/link";

export default function Square(company: any) {
  return (
    <>
      <Link href={`/companies/${company.name}`}>
        <div className={styles.square}>
          <Image
            className={styles.image}
            src={company.image}
            alt={`Logo da ${company.name}`}
          ></Image>
        </div>
      </Link>
    </>
  );
}
