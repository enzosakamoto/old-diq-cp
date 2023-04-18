import Navbar from "@/components/navbar";
import styles from "@/styles/Company.module.css";

export default function Company(props: any) {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <h1>{props.name}</h1>
      </main>
    </>
  );
}
