import React from 'react'
import PropTypes from 'prop-types'

import { Heading, Text } from '_atoms'

import styles from './styles.module.css'

const ComparativeTable = ({ data }) => {
  console.log('file: index.js ~ line 9 ~ ComparativeTable ~ data', data)
  return (
    <div className={styles.comparativeTable}>
      {data.factors.map((item, index) => (
        <div key={`factor-${index}`}>
          <Heading type="h5" form="print" className={styles.comparativeTableTitle}>
            {item.title}
          </Heading>

          <div className={styles.comparativeTableContent}>
            <div className={styles.comparativeTablePros}>
              {item.topics.pros.map((pro, index) => (
                <div key={`topic-pro-${index}`}>
                  <Text size="20">+ {pro}</Text>
                </div>
              ))}
            </div>

            <div className={styles.comparativeTableCons}>
              {item.topics.cons.map((con, index) => (
                <div key={`topic-con-${index}`}>
                  <Text size="20">- {con}</Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

ComparativeTable.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default ComparativeTable
