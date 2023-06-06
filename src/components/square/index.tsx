import Image, { StaticImageData } from 'next/image'
import styles from '@/styles/Square.module.css'
import Link from 'next/link'

type SquareProps = {
  name: string
  image: StaticImageData
  id: string
}

export default function Square({ name, image, id }: SquareProps) {
  return (
    <>
      <Link href={`/companies/${id}`}>
        <div className={styles.square}>
          <Image
            className={styles.image}
            src={image}
            alt={`Logo da ${name}`}
          ></Image>
        </div>
      </Link>
    </>
  )
}
