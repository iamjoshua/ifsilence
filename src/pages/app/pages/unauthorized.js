import React from 'react'
import Link from 'gatsby-link'
import styles from "../index.module.css"

class Unauthorized extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div className={styles.container}>
        <h1 className={styles.tagline}>That link has expired.</h1>
      </div>
    )
  }
}

export default Unauthorized
