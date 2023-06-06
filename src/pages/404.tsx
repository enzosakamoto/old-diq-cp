import Footer from '@/components/footer'
import PageName from '@/components/head'
import Navbar from '@/components/navbar'
import styles from '@/styles/FourOhFour.module.css'
import Image from 'next/image'
import fourohfour from '@/assets/fourohfour.svg'

export default function FourOhFour() {
  return (
    <>
      <PageName title="DIQ-CP | 404" content="Página não encontrada" />
      <Navbar />
      <main className={styles.page}>
        <h1>Página não encontrada!</h1>
        <Image
          className={styles.image}
          src={fourohfour}
          width={400}
          height={400}
          alt="Erro 404"
        />
      </main>
      <Footer />
    </>
  )
}
