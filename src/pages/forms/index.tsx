import Footer from "@/components/footer";
import PageName from "@/components/head";
import Navbar from "@/components/navbar";
import { sendContactForm } from "@/lib/api";
import styles from "@/styles/Forms.module.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Forms() {
  const [forms, setForms] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    about: "",
    isLoading: false,
  });

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setForms((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      await sendContactForm(forms);
      setForms({
        name: "",
        company: "",
        phone: "",
        email: "",
        about: "",
        isLoading: false,
      });
      toast.success("Email enviado com sucesso", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: {
          fontSize: "4.5rem",
        },
      });
    } catch (error: any) {
      setForms((prev) => ({
        ...prev,
        isLoading: false,
      }));
      toast.error("Falha ao enviar o e-mail!", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: {
          fontSize: "4.5rem",
        },
      });
    }
  };

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
                value={forms.name}
                onChange={(event) =>
                  setForms({ ...forms, name: event.target.value })
                }
                required
              />
              <input
                type="text"
                value={forms.company}
                onChange={(event) =>
                  setForms({ ...forms, company: event.target.value })
                }
              />
              <input
                type="text"
                value={forms.phone}
                placeholder="(xx) xxxxx-xxxx"
                onChange={(event) =>
                  setForms({ ...forms, phone: event.target.value })
                }
              />
              <input
                type="text"
                value={forms.email}
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
              value={forms.about}
              onChange={(event) =>
                setForms({ ...forms, about: event.target.value })
              }
            ></textarea>
          </article>
        </section>
        <button
          onClick={handleSubmit}
          className={styles.button}
          disabled={
            !forms.name ||
            !forms.phone ||
            !forms.email ||
            !forms.company ||
            !forms.about ||
            forms.isLoading
          }
        >
          enviar
        </button>
        <ToastContainer />
      </main>
      <Footer />
    </>
  );
}
