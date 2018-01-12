import React, { Component } from 'react'
import Container from '../components/Container'

// see gatsby-remark-code-repls on gatsby-config
class CodepenExample extends Component {
  componentDidMount() {
    this.codepenForm.submit()
  }

  render() {
    const { action, payload } = this.props.pathContext

    return (
      <Container>
        <h1>Redirecting to Codepen...</h1>
        <form
          style={{ paddingBottom: '50px' }}
          ref={form => {
            this.codepenForm = form
          }}
          action={action}
          method="POST"
        >
          <input type="hidden" name="data" value={payload} />

          <p>
            Not automatically redirecting?
            <br />
            <br />
            <input type="submit" value="Click here" />
          </p>
        </form>
      </Container>
    )
  }
}

export default CodepenExample
