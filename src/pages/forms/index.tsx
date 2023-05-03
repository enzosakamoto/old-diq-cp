import Footer from "@/components/footer";
import PageName from "@/components/head";
import Navbar from "@/components/navbar";
import styles from "@/styles/Forms.module.css";
import { useState } from "react";

export default function Forms() {
  const [forms, setForms] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    about: "",
  });

  function handleSubmit(event: any) {
    let validation = true;
    event.preventDefault();
    Object.values(forms).forEach((value) => {
      if (value === "" || value === undefined) validation = false;
    });
    if (!validation) alert("Preencha todos os campos");
    else {
      alert("Email enviado!");
      console.table(forms);
    }
  }

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
            <div className={styles["forms-label"]}>
              <label htmlFor="">Nome</label>
              <label htmlFor="">Empresa</label>
              <label htmlFor="">Telefone</label>
              <label htmlFor="">E-mail</label>
            </div>
            <div className={styles["forms-input"]}>
              <input
                type="text"
                onChange={(event) =>
                  setForms({ ...forms, name: event.target.value })
                }
              />
              <input
                type="text"
                onChange={(event) =>
                  setForms({ ...forms, company: event.target.value })
                }
              />
              <input
                type="text"
                placeholder="(xx) xxxxx-xxxx"
                onChange={(event) =>
                  setForms({ ...forms, phone: event.target.value })
                }
              />
              <input
                type="text"
                placeholder="exemplo@exemplo.com"
                onChange={(event) =>
                  setForms({ ...forms, email: event.target.value })
                }
              />
            </div>
          </article>
          <article className={styles["forms-big-input"]}>
            <label htmlFor="">Conte-nos um pouco sobre a empresa</label>
            <textarea
              onChange={(event) =>
                setForms({ ...forms, about: event.target.value })
              }
            ></textarea>
          </article>
        </section>
        <div onClick={handleSubmit} className={styles.button}>
          enviar
        </div>
      </main>
      <Footer />
    </>
  );
}
