import Image from "next/image";
import styles from "@/styles/Square.module.css";
import Link from "next/link";

export default function Square(company: any) {
  return (
    <>
      <Link href={`/company/${company.name}`}>
        <div className={styles.square}>
          <Image
            className={styles.image}
            src={company.image}
            alt={company.name}
          ></Image>
        </div>
      </Link>
    </>
  );
}
