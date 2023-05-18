import Navbar from '@/components/navbar';
import styles from '@/styles/Company.module.css';
import { companies } from '@/data/companies/companies';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';
import PageName from '@/components/head';
import { useRouter } from 'next/router';
import error from '@/assets/error.svg';

export default function Company() {
  const router = useRouter();
  const { id } = router.query;

  const company = companies.find((company) => company.id === Number(id));

  return (
    <>
      <PageName
        title={`DIQ-CP | ${company?.name}`}
        content={`Página detalhada da ${company?.name}`}
      />
      <Navbar />
      <main className={styles.page}>
        <section className={styles.company}>
          <Link
            href={company?.link ?? '/'}
            rel="noopener noreferrer"
            target={company?.link === '/' ? '' : '_blank'}
          >
            <aside className={styles['company-link']}>
              <Image
                className={styles['company-image']}
                src={company?.image ?? error}
                alt={`Logo da ${company?.name}`}
              ></Image>
            </aside>
          </Link>
          <article className={styles['company-texts']}>
            <h1>{company?.name}</h1>
            <div className={styles['company-activities']}>
              <h2>Segmento de atuação</h2>
              {company?.desc ? (
                <span>{company?.desc}</span>
              ) : (
                <span>Não informado</span>
              )}
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
