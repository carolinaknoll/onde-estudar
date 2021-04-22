import React from 'react'

import { Heading } from '_atoms'
import { ComparativeTable } from '_molecules'
import { Layout } from '_templates'

import { comparativeData } from '_data/comparative'

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

      <section className={styles.comparative} id="comparative">
        <div className={styles.comparativeIntroduction}>
          <Heading type="h2" form="cursive" className={styles.homeDescriptionTextTitle}>
            Comparativo
          </Heading>

          <Heading type="h6" form="print" className={styles.homeDescriptionTextParagraph}>
            Os dados abaixo possuem o intuito de dar luz às diferenças, agrupadas em categorias de
            prós e contras, de cada um dos locais de ensino que podem ser utilizados por um aluno.
          </Heading>

          <Heading type="h6" form="print" className={styles.homeDescriptionTextParagraph}>
            Cabe a cada pai, munido do dever de conhecer bem seu filho, realizar a escolha que se
            evidenciará como a mais proveitosa, de acordo com seus critérios e objetivos familiares.
          </Heading>
        </div>

        <Heading type="h4" form="cursive" className={styles.homeDescriptionTextTitle}>
          Ensino Público
        </Heading>

        <ComparativeTable data={comparativeData.publicSchool} />
      </section>
    </Layout>
  )
}

export default Home
