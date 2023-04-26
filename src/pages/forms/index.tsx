import Footer from "@/components/footer";
import PageName from "@/components/head";
import Navbar from "@/components/navbar";
import styles from "@/styles/Forms.module.css";
import Link from "next/link";

export default function Forms() {
  return (
    <>
      <PageName
        title="DIQ-CP | Formulário"
        content="Página de formulário para se tornar um parceiro do IMT"
      />
      <Navbar />
      <main className={styles.page}>
        <section className={styles["initial-texts"]}>
          <h1>Formulário</h1>
          <p>Deseja se tornar um parceiro do IMT?</p>
          <p>Entre em contato conosco</p>
        </section>
        <section className={styles.forms}>
          <article className={styles["forms-inputs"]}>
            <div className={styles["forms-input"]}>
              <label htmlFor="">Nome</label>
              <input type="text" />
            </div>
            <div className={styles["forms-input"]}>
              <label htmlFor="">Empresa</label>
              <input type="text" />
            </div>
            <div className={styles["forms-input"]}>
              <label htmlFor="">Telefone</label>
              <input type="text" />
            </div>
            <div className={styles["forms-input"]}>
              <label htmlFor="">E-mail</label>
              <input type="text" />
            </div>
          </article>
          <article className={styles["forms-big-input"]}>
            <label htmlFor="">Conte-nos um pouco sobre a empresa</label>
            <input type="text" />
          </article>
        </section>
        <Link href="/companies">
          <div className={styles["button"]}>enviar</div>
        </Link>
      </main>
      <Footer />
    </>
  );
}
