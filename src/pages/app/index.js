import React from 'react'
import Link from 'gatsby-link'
import styles from "./index.module.css"
import axios from 'axios'

import Loading from './pages/loading'
import Unauthorized from './pages/unauthorized'
import Form from './pages/form'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmed: false,
      invalid: false,
      jwt: sessionStorage.getItem('jwt')
    }

    let url = 'http://localhost:52014/login'
    let token = props.location.pathname.split('/')[2]

    axios.post(url, {token}).then((response) => {
      let {jwt} = response.data
      if (!jwt) return
      this.setState({ jwt, invalid: false, confirmed: true })
      sessionStorage.setItem('jwt', jwt)
    }).catch((error) => {
      console.log(error)
      this.setState({invalid: true})
    })
  }
  render () {
    let content = this.state.confirmed ? <Form /> : <Loading />
    if (this.state.invalid) content = <Unauthorized />

    return (
      <div>{content}</div>
    )
  }
}

export default IndexPage
