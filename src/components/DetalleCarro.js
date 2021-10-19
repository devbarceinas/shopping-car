import { Component } from 'react'

const styles = {
  detallesCarro: {
    backgroundColor: '#fff',
    position: 'absolute',
    marginTop: '30px',
    boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
    borderRadius: '5px',
    width: '300px',
    right: '30px'
  },
  ul: {
    margin: '0',
    padding: '0'
  },
  producto: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 20px',
    borderBottom: '1px solid #aaa'
  }
}

class DetalleCarro extends Component {
  render() {
    const { carro } = this.props
    return (
      <div style={styles.detallesCarro}>
        <ul style={styles.ul}>
          {
            carro.map(x => (
              <li key={x.name} style={styles.producto}>
                <img src={x.img} alt={x.name} width='50' height='32' />
                {x.name} <span>{x.cantidad}</span>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default DetalleCarro