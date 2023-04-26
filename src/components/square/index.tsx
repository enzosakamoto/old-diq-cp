import Image from "next/image";
import styles from "@/styles/Square.module.css";
import Link from "next/link";

export default function Square({ name, image }: any) {
  return (
    <>
      <Link href={"/companies/uber"}>
        <div className={styles.square}>
          <Image
            className={styles.image}
            src={image}
            // width={300}
            // height={335}
            alt={`Logo da ${name}`}
          ></Image>
        </div>
      </Link>
    </>
  );
}
