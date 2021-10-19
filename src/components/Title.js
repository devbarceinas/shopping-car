import { Component } from "react"

const styles = {
  title: {
    marginBottom: '15px'
  }
}

class Title extends Component {
  render() {
    return (
      <h1 style={styles.title}>{this.props.title}</h1>
    )
  }
}

export default Title