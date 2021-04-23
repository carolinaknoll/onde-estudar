export const comparativeData = [
  {
    type: 'publicSchool',
    title: 'Ensino Público',
    description: 'Descrição',
    factors: [
      {
        type: 'infrastructure',
        title: 'Estrutura física e Localização',
        description: 'Descrição',
        topics: {
          pros: [
            'Possui salas de aula equipadas com carteiras, ventiladores ou ar-condicionados e uma lousa.',
            'Possui um espaço aberto para socialização dos alunos nos momentos vagos, como recreios e períodos pré e pós aulas.',
            'Geralmente é possível encontrar um colégio público municipal, estadual ou militar próximo à casa.',
          ],
          cons: [
            'A estrutura física, incluindo encanamentos e elétrica, pode não ser adequada e levar a acidentes ou problemas de saúde.',
            'Dada a larga idade dos prédios escolares, goteiras e infiltrações são comuns nas salas e quadras, prejudicando a aula nestes locais.',
            'Os colégios mais próximos de casa podem apresentar problemas estruturais.',
          ],
        },
      },
      {
        type: 'costs',
        title: 'Custos, Mensalidades e Materiais',
        description: 'Descrição',
        topics: {
          pros: [
            'É gratuito ou possui taxas pequenas e vinculadas a algum objetivo específico, como passeios.',
            'Permite que os únicos custos sejam com o transporte diário entre escola e casa e materiais escolares de uso individual.',
            'Oferece uniforme, apostilas e lanches ou refeições diárias gratuitamente.',
            'Não possui mensalidade ou custos anuais significativos.',
          ],
          cons: [
            'Os materiais oferecidos podem já ter sido utilizados por outros alunos ou estar desatualizados.',
            'Os lanches oferecidos, quando há, podem estar próximos de vencer ou ser de qualidade duvidosa.',
            'Os uniformes podem não ser do tamanho correto para o aluno.',
          ],
        },
      },
      {
        type: 'faculty',
        title: 'Corpo Docente',
        description: 'Descrição',
        topics: {
          pros: [
            'Possui um grupo de professores formados em suas áreas de conhecimento disponíveis para a condução das aulas.',
          ],
          cons: [
            'Os professores podem ter tido uma formação deficitária ou com didática ruim, tornando-os incapazes de liderar a sala de aula e promover um ambiente seguro onde ofensas e violências não são toleradas.',
            'Os professores podem passar uma perspectiva ideologizada ou opinionada sobre conteúdos que deveriam ser expostos de forma neutra ou com perspectivas contrastantes.',
            'Os professores podem faltar, por motivos de saúde ou pessoais, dificultando a reposição da aula depois.',
            'Greves anuais são regulares e, embora os motivos sejam nobres, acabam afetando o aprendizado dos alunos.',
          ],
        },
      },
      {
        type: 'parentalCommitment',
        title: 'Empenho por parte dos pais',
        description: 'Descrição',
        topics: {
          pros: [
            'Não é necessário que os pais conheçam de forma aprofundada o conteúdo estudado ou conduzam as aulas para os filhos.',
            'Ambos os pais poderão trabalhar e exercer sua profissão ao mesmo tempo em que os filhos estejam na escola.',
          ],
          cons: [
            'Cabe aos pais o papel de monitoramento e revisão de aprendizado e desempenho dos filhos, o que comumente é esquecido ou deixado de lado frente às obrigações cotidianas.',
            'A não valorização dos estudos, leitura e cultura por parte dos pais pode gerar um impacto de desinteresse e falta de disciplina para os filhos.',
          ],
        },
      },
      {
        type: 'teachingMethod',
        title: 'Método de Ensino e Tratamento Personalizado',
        description: 'Descrição',
        topics: {
          pros: [
            'Em sua grande maioria, seguem a metodologia tradicional sócio-construtivista, onde as aulas requerem materiais simples e se dão através do uso de apostilas, cadernos e vídeos ocasionais.',
          ],
          cons: [
            'O método dificulta a alfabetização, pois inicia já grande, com sílabas, palavras e frases, ao invés de começar pequeno, partindo de sons e letras.',
            'As turmas geralmente são maiores, diminuindo o tempo para gerenciar a individualidade e dificuldades de cada aluno, que caso não sejam sanadas, acabarão sendo levadas aos anos seguintes.',
            'O método pode se tornar repetitivo e causar nos alunos um desinteresse pelo conhecimento além da escola.',
          ],
        },
      },
      {
        type: 'schoolRoutines',
        title: 'Rotina Escolar e Socialização',
        description: 'Descrição',
        topics: {
          pros: [
            'Basta ao aluno frequentar as aulas, realizar os exercícios e provas e ter um bom desempenho de modo geral.',
            'O ambiente escolar permite que o aluno conviva com outros alunos de sua idade ou idade próxima, facilitando aprendizados de diferentes culturas e modos de vida diferentes do que se tem em casa, conversas e amizades.',
          ],
          cons: [
            'A socialização com colegas de gostos ou rotinas diferentes ao da família pode levar ao desenvolvimento de vícios, maus hábitos e situações delicadas de saúde causadas pelo estresse.',
          ],
        },
      },
      {
        type: 'values',
        title: 'Valores',
        description: 'Descrição',
        topics: {
          pros: [
            'De modo geral, colégios públicos não permitem o uso de bonés ou sapatos abertos como sandálias ou havaianas em sala de aula, e exigem o uso do uniforme.',
          ],
          cons: [
            'Os valores são exercidos de forma fraca ou inexistente, limitando-se a regras de disciplina e convivência.',
          ],
        },
      },
    ],
  },
]

/*
  corpo docente,
  custos, mensalidades e materiais,
  empenho dos pais,
  estrutura física e localização,
  método de ensino e tratamento personalizado,
  rotina escolar e socialização,
  valores,
*/
