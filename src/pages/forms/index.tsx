import Footer from "@/components/footer";
import PageName from "@/components/head";
import Navbar from "@/components/navbar";
import { sendContactForm } from "@/lib/api";
import styles from "@/styles/Forms.module.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Forms() {
  const [forms, setForms] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    about: "",
  });
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [companyError, setCompanyError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    if (forms.name === "") setNameError(false);
    else if (Number(forms.name)) setNameError(true);
    else setNameError(false);
  }, [forms.name]);

  useEffect(() => {
    if (forms.company === "") setCompanyError(false);
    else if (Number(forms.company)) setCompanyError(true);
    else setCompanyError(false);
  }, [forms.company]);

  useEffect(() => {
    if (forms.phone === "") setPhoneError(false);
    else if (forms.phone.length < 10 || forms.phone.length > 11)
      setPhoneError(true);
    else if (!Number(forms.phone)) setPhoneError(true);
    else setPhoneError(false);
  }, [forms.phone]);

  useEffect(() => {
    if (forms.email === "") setEmailError(false);
    else if (Number(forms.email)) setEmailError(true);
    else if (!forms.email.includes("@")) setEmailError(true);
    else if (!forms.email.includes(".")) setEmailError(true);
    else if (
      forms.email.includes(" ") ||
      forms.email.includes(",") ||
      forms.email.includes("!") ||
      forms.email.includes("#") ||
      forms.email.includes("$") ||
      forms.email.includes("%") ||
      forms.email.includes("&") ||
      forms.email.includes("*") ||
      forms.email.includes("(") ||
      forms.email.includes(")")
    )
      setEmailError(true);
    else setEmailError(false);
  }, [forms.email]);

  function handleWarning() {
    toast.warn("Verifique os campos em vermelho do formulário!", {
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

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    try {
      await sendContactForm(forms);
      setForms({
        name: "",
        company: "",
        phone: "",
        email: "",
        about: "",
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
      setLoading(false);
    } catch (error: any) {
      toast.error("Falha ao enviar o e-mail! Tente novamente.", {
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
      setLoading(false);
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
              <label htmlFor="name">Nome</label>
              <label htmlFor="company">Empresa</label>
              <label htmlFor="phone">Telefone</label>
              <label htmlFor="email">E-mail</label>
            </div>
            <div className={styles["forms-input"]}>
              <input
                className={nameError ? styles["input-error"] : styles.input}
                type="text"
                value={forms.name}
                onChange={(event) =>
                  setForms({ ...forms, name: event.target.value })
                }
              />
              <input
                className={companyError ? styles["input-error"] : styles.input}
                type="text"
                value={forms.company}
                onChange={(event) =>
                  setForms({ ...forms, company: event.target.value })
                }
              />
              <input
                className={phoneError ? styles["input-error"] : styles.input}
                type="text"
                value={forms.phone}
                placeholder="(DDD + número). Ex: 11999999999"
                onChange={(event) => {
                  setForms({ ...forms, phone: event.target.value });
                }}
              />
              <input
                className={emailError ? styles["input-error"] : styles.input}
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
          onClick={
            nameError || companyError || phoneError || emailError
              ? handleWarning
              : handleSubmit
          }
          className={styles.button}
          disabled={
            !forms.name ||
            !forms.phone ||
            !forms.email ||
            !forms.company ||
            !forms.about ||
            loading
          }
        >
          {loading ? "enviando..." : "enviar"}
        </button>
        <ToastContainer />
      </main>
      <Footer />
    </>
  );
}
