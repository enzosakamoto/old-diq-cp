import Footer from '@/components/footer';
import PageName from '@/components/head';
import Navbar from '@/components/navbar';
import { sendContactForm } from '@/lib/api';
import styles from '@/styles/Forms.module.css';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Forms() {
  const [forms, setForms] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    about: ''
  });
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [companyError, setCompanyError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [aboutError, setAboutError] = useState(false);

  useEffect(() => {
    const expression_name = /^[A-Za-zÀ-ÿ\s']+$/;
    if (forms.name === '') setNameError(false);
    else if (!expression_name.test(forms.name)) setNameError(true);
    else setNameError(false);
  }, [forms.name]);

  useEffect(() => {
    const expression_company = /^[A-Za-zÀ-ÿ0-9\s]+$/;
    if (forms.company === '') setCompanyError(false);
    else if (!expression_company.test(forms.company)) setCompanyError(true);
    else if (Number(forms.company)) setCompanyError(true);
    else setCompanyError(false);
  }, [forms.company]);

  useEffect(() => {
    const expression_phone = /^[1-9]{2}\d{8,9}$/;
    if (forms.phone === '') setPhoneError(false);
    else if (!expression_phone.test(forms.phone)) setPhoneError(true);
    else setPhoneError(false);
  }, [forms.phone]);

  useEffect(() => {
    const expression_email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (forms.email === '') setEmailError(false);
    else if (!expression_email.test(forms.email)) setEmailError(true);
    else setEmailError(false);
  }, [forms.email]);

  useEffect(() => {
    if (forms.about === '') setAboutError(false);
    else if (forms.about.length < 50) setAboutError(true);
    else setAboutError(false);
  }, [forms.about]);

  function handleNotify(text: string, option: number) {
    if (option === 1) {
      return toast.success(text, {
        position: 'top-center',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        style: {
          fontSize: '4.5rem'
        }
      });
    } else if (option === 0) {
      return toast.warn(text, {
        position: 'top-center',
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        style: {
          fontSize: '4.5rem'
        }
      });
    }
  }

  function handleWarning() {
    toast.warn('Verifique os campos em vermelho do formulário!', {
      position: 'top-center',
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      style: {
        fontSize: '4.5rem'
      }
    });
  }

  async function handleSubmit() {
    if (nameError || companyError || phoneError || emailError || aboutError) {
      handleWarning();
      return;
    }
    setLoading(true);
    try {
      await sendContactForm(forms);
      setForms({
        name: '',
        company: '',
        phone: '',
        email: '',
        about: ''
      });
      handleNotify('E-mail enviado com sucesso!', 1);
      setLoading(false);
    } catch (error) {
      handleNotify('Falha ao enviar o e-mail! Tente novamente.', 0);
      setLoading(false);
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
        <section className={styles['initial-texts']}>
          <h1>Formulário</h1>
          <p>Deseja se tornar um parceiro do IMT?</p>
          <p>Entre em contato conosco</p>
        </section>
        <section className={styles.forms}>
          <article className={styles['forms-inputs']}>
            <div className={styles['forms-row']}>
              <label htmlFor="name">Nome</label>
              <input
                className={nameError ? styles['input-error'] : styles.input}
                type="text"
                value={forms.name}
                onChange={(event) =>
                  setForms({ ...forms, name: event.target.value })
                }
              />
            </div>
            <div className={styles['forms-row']}>
              <label htmlFor="company">Empresa</label>
              <input
                className={companyError ? styles['input-error'] : styles.input}
                type="text"
                value={forms.company}
                onChange={(event) =>
                  setForms({ ...forms, company: event.target.value })
                }
              />
            </div>
            <div className={styles['forms-row']}>
              <label htmlFor="phone">Telefone</label>
              <input
                className={phoneError ? styles['input-error'] : styles.input}
                type="text"
                value={forms.phone}
                placeholder="(DDD + número). Ex: 11999999999"
                onChange={(event) => {
                  setForms({ ...forms, phone: event.target.value });
                }}
              />
            </div>
            <div className={styles['forms-row']}>
              <label htmlFor="email">E-mail</label>
              <input
                className={emailError ? styles['input-error'] : styles.input}
                type="text"
                value={forms.email}
                placeholder="exemplo@exemplo.com"
                onChange={(event) =>
                  setForms({ ...forms, email: event.target.value })
                }
              />
            </div>
          </article>
          <div className={styles['forms-checkboxes']}>
            <p>Quais são os serviços prestados?</p>
            <div className={styles['checkboxes-texts']}>
              <div className={styles['checkboxes-texts-div']}>
                <p>Educacional</p>
                <div className={styles.checkboxes}>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Trabalhos de Conclusão de Curso
                  </label>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Iniciação Científica e Tecnológica
                  </label>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Concursos Acadêmicos
                  </label>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Pesquisa aplicada - Edital Mauá
                  </label>
                  <label htmlFor="">
                    <input type="checkbox" />
                    PAE (Projetos e Atividades Especiais)
                  </label>
                  <label htmlFor="">
                    <input type="checkbox" />
                    SMILE (Semana Mauá de Inovação, Liderança e
                    Empreendedorismo)
                  </label>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Patrocínios com contrapartida
                  </label>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Hackathons
                  </label>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Programa de estágio
                  </label>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Descontos nos cursos de pós-graduação
                  </label>
                </div>
              </div>
              <div className={styles['checkboxes-texts-div']}>
                <p>Empresarial</p>
                <div className={styles.checkboxes}>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Consultorias
                  </label>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Pesquisa aplicada
                  </label>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Treinamentos
                  </label>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Soluções em ensaios e simulações
                  </label>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Calibração de instrumentos
                  </label>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Desenvolvimento de projetos de produtos ou serviços
                  </label>
                  <label htmlFor="">
                    <input type="checkbox" />
                    Prototipagem rápida
                  </label>
                </div>
              </div>
            </div>
          </div>
          <article className={styles['forms-big-input']}>
            <div>
              <label htmlFor="">Conte-nos um pouco sobre a empresa</label>
              <textarea
                placeholder="Mínimo de 50 caracteres..."
                className={
                  aboutError ? styles['big-input-error'] : styles['big-input']
                }
                value={forms.about}
                onChange={(event) =>
                  setForms({ ...forms, about: event.target.value })
                }
              ></textarea>
            </div>
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
            loading
          }
        >
          {loading ? 'enviando...' : 'enviar'}
        </button>
        <ToastContainer />
      </main>
      <Footer />
    </>
  );
}
