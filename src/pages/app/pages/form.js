import React from 'react'
import Link from 'gatsby-link'
import styles from "../index.module.css"

class Form extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div className={styles.container}>
        <h1 className={styles.tagline}>You're special now</h1>
      </div>
    )
  }
}

export default Form
