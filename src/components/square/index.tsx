import Image from "next/image";
import styles from "@/styles/Square.module.css";
import Link from "next/link";

export default function Square({ name, image, id }: any) {
  return (
    <>
      <Link href={`/companies/${id}`}>
        <div className={styles.square}>
          <Image
            className={styles.image}
            src={image}
            alt={`Logo da ${name}`}
          ></Image>
        </div>
      </Link>
    </>
  );
}
