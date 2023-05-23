import Footer from '@/components/footer';
import PageName from '@/components/head';
import Navbar from '@/components/navbar';
import { sendContactForm } from '@/lib/api';
import styles from '@/styles/Forms.module.css';
import Link from 'next/link';
import { ChangeEvent, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Forms, Relations } from './interfaces';

export default function Forms() {
  const [forms, setForms] = useState<Forms>({
    name: '',
    company: '',
    phone: '',
    email: '',
    relations: [],
    about: ''
  });

  const [relations, setRelations] = useState<Relations>({
    tcc: false,
    icc: false,
    ca: false,
    pam: false,
    pae: false,
    smile: false,
    pat: false,
    hacka: false,
    pe: false,
    desc: false,
    cons: false,
    pa: false,
    trei: false,
    sol: false,
    cal: false,
    dev: false,
    prot: false
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

  function handleChecked(event: ChangeEvent<HTMLInputElement>) {
    const { name, checked } = event.target;
    setRelations({ ...relations, [name]: checked });
    console.log(relations);
  }

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
    Object.keys(relations).forEach((key) => {
      if (relations[key as keyof typeof relations]) {
        if (key === 'tcc')
          forms.relations.push('Trabalho de Conclusão de Curso');
        else if (key === 'icc')
          forms.relations.push('Iniciação Científica e Tecnológica');
        else if (key === 'ca') forms.relations.push('Concursos Acadêmicos');
        else if (key === 'pam')
          forms.relations.push('Pesquisa aplicada - Edital Mauá');
        else if (key === 'pae') forms.relations.push('PAE');
        else if (key === 'smile') forms.relations.push('SMILE');
        else if (key === 'pat')
          forms.relations.push('Patrocínios com contrapartida');
        else if (key === 'hacka') forms.relations.push('Hackathon');
        else if (key === 'pe') forms.relations.push('Programa de estágio');
        else if (key === 'desc')
          forms.relations.push('Descontos nos cursos de pós-graduação');
        else if (key === 'cons') forms.relations.push('Consultorias');
        else if (key === 'pa') forms.relations.push('Pesquisa aplicada');
        else if (key === 'trei') forms.relations.push('Treinamentos');
        else if (key === 'sol')
          forms.relations.push('Soluções em ensaios e simulações');
        else if (key === 'cal')
          forms.relations.push('Calibração de instrumentos');
        else if (key === 'dev')
          forms.relations.push(
            'Desenvolvimento de projetos de produtos ou serviços'
          );
        else if (key === 'prot') forms.relations.push('Prototipagem rápida');
      }
    });
    setLoading(true);
    try {
      await sendContactForm(forms);
      setForms({
        name: '',
        company: '',
        phone: '',
        email: '',
        relations: [],
        about: ''
      });
      setRelations({
        tcc: false,
        icc: false,
        ca: false,
        pam: false,
        pae: false,
        smile: false,
        pat: false,
        hacka: false,
        pe: false,
        desc: false,
        cons: false,
        pa: false,
        trei: false,
        sol: false,
        cal: false,
        dev: false,
        prot: false
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
            <div className={styles['forms-checkboxes-info']}>
              <p>Quais serão as formas de relacionamento?</p>
              <Link
                href="https://maua.br/solucoes"
                rel="noopener noreferrer"
                target="_blank"
              >
                ?
              </Link>
            </div>
            <div className={styles['checkboxes-texts']}>
              <div className={styles['checkboxes-texts-div']}>
                <p>Educacional</p>
                <div className={styles.checkboxes}>
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      name="tcc"
                      checked={relations.tcc}
                      onChange={handleChecked}
                    />
                    Trabalhos de conclusão de curso
                  </label>
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      name="icc"
                      checked={relations.icc}
                      onChange={handleChecked}
                    />
                    Iniciação científica e tecnológica
                  </label>
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      name="ca"
                      checked={relations.ca}
                      onChange={handleChecked}
                    />
                    Concursos acadêmicos
                  </label>
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      name="pam"
                      checked={relations.pam}
                      onChange={handleChecked}
                    />
                    Pesquisa aplicada - Edital Mauá
                  </label>
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      name="pae"
                      checked={relations.pae}
                      onChange={handleChecked}
                    />
                    PAE (Projetos e Atividades Especiais)
                  </label>
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      name="smile"
                      checked={relations.smile}
                      onChange={handleChecked}
                    />
                    SMILE (Semana Mauá de Inovação, Liderança e
                    Empreendedorismo)
                  </label>
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      name="pat"
                      checked={relations.pat}
                      onChange={handleChecked}
                    />
                    Patrocínios com contrapartida
                  </label>
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      name="hacka"
                      checked={relations.hacka}
                      onChange={handleChecked}
                    />
                    Hackathons
                  </label>
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      name="pe"
                      checked={relations.pe}
                      onChange={handleChecked}
                    />
                    Programa de estágio
                  </label>
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      name="desc"
                      checked={relations.desc}
                      onChange={handleChecked}
                    />
                    Descontos nos cursos de pós-graduação
                  </label>
                </div>
              </div>
              <div className={styles['checkboxes-texts-div']}>
                <p>Empresarial</p>
                <div className={styles.checkboxes}>
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      name="cons"
                      checked={relations.cons}
                      onChange={handleChecked}
                    />
                    Consultorias
                  </label>
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      name="pa"
                      checked={relations.pa}
                      onChange={handleChecked}
                    />
                    Pesquisa aplicada
                  </label>
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      name="trei"
                      checked={relations.trei}
                      onChange={handleChecked}
                    />
                    Treinamentos
                  </label>
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      name="sol"
                      checked={relations.sol}
                      onChange={handleChecked}
                    />
                    Soluções em ensaios e simulações
                  </label>
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      name="cal"
                      checked={relations.cal}
                      onChange={handleChecked}
                    />
                    Calibração de instrumentos
                  </label>
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      name="dev"
                      checked={relations.dev}
                      onChange={handleChecked}
                    />
                    Desenvolvimento de projetos de produtos ou serviços
                  </label>
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      name="prot"
                      checked={relations.prot}
                      onChange={handleChecked}
                    />
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
            Object.values(relations).includes(true) === false ||
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
