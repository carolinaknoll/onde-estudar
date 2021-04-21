import React from 'react'

import { Heading } from '_atoms'
import { Layout } from '_templates'

import styles from './styles.module.css'

const Home = () => {
  return (
    <Layout>
      <section className={styles.home} id="home">
        <div className={styles.homeDescription}>
          <div className={styles.homeDescriptionText}>
            <Heading type="h2" form="cursive" className={styles.homeDescriptionTextTitle}>
              Onde estudar?
            </Heading>

            <Heading type="h6" form="print" className={styles.homeDescriptionTextParagraph}>
              Com a pandemia do novo Coronavirus, muitos pais estão mantendo seus filhos em casa
              tendo aulas online em frente às telas.
            </Heading>
            <Heading type="h6" form="print" className={styles.homeDescriptionTextParagraph}>
              Outros, sequer estão tendo aulas, ou com as aulas presenciais, antes costumeiras,
              impossibilitadas.
            </Heading>
            <Heading type="h6" form="print" className={styles.homeDescriptionTextParagraph}>
              Com a crescente preocupação em evitar que nossos filhos percam ainda mais tempo, seja
              entre uma máscara e outra ou entre aulas em vídeo e apresentações, qual o melhor
              ambiente para colocá-los?
            </Heading>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
