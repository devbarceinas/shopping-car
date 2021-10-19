import { Component } from "react"
import BubbleAlert from './BubbleAlert'
import DetalleCarro from './DetalleCarro'

const styles = {
  carro: {
    backgroundColor: '#359A2C',
    color: '#fff',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer'
  },
  bubble: {
    position: 'relative',
    left: 14,
    top: -20,
  }
}

class Carro extends Component {
  render() {
    const { carro, isCar, showCar } = this.props
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
    return (
      <div>
        <span style={styles.bubble}>
          {
            cantidad !== 0
              ? (<BubbleAlert value={cantidad} />)
              : null
          }
        </span>
        <button onClick={showCar} style={styles.carro}>
          Carro
        </button>
        {isCar ? <DetalleCarro carro={carro} /> : null}
      </div>
    )
  }
}

export default Carro