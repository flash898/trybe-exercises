import React from 'react';
import './Forms.css';
import estados from './States'

class Forms extends React.Component {
  constructor() {
    super()

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      curriculo: '',
      cargo: '',
      description: '',
      confirmar: false,
      options: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleBlur({ target }) {
    let { name, value } = target;
    if(name === 'cidade') value = value.match(/^\d/) ? '' : value;

    this.setState({ 
      [name]: value
    });
  }

  handleChange({ target }) {
    const { name } = target;
    let value = target.type === 'checkbox' ? target.checked : target.value;

    if(name === 'nome') value = value.toUpperCase();
    if(name === 'endereco') value = value.replace(/[^\w\s]/gi, '')
    this.setState({
      [name]: value,
    });
  }

  handleMouseOver() {
    alert('Preencha com cuidado')
  }

  render() {
    return(
      <div>
        <h1>Meu Formulário 2.0</h1>
        <form>
          <fieldset>
            <label>
              Nome: 
              <input 
                value={this.state.value}
                onChange={this.handleChange}
                name="nome"
                type="text"
                maxLength="40"
                required
              />
            </label>
            <label>
              E-mail: 
              <input
               value={this.state.email}
               onChange={this.handleChange}
               name="email"
               type="email"
               maxLength="50"
               required
              />
            </label>
            <label>
              CPF:
              <input
                name="cpf"
                type="text"
                maxLength="11"
                value={this.state.cpf}
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              Endereço: 
              <input
               value={this.state.endereco}
               onChange={this.handleChange}
               name="endereco"
               type="text"
               maxLength="200"
               required
              />
            </label>
            <label>
              Cidade:
              <input
                name="cidade"
                type="text"
                required
                value={this.state.cidade}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
            </label>
            <label>
              Estado:
              <select
                value={this.state.estado}
                onChange={this.handleChange}
                name="estado"
                type="combobox"
                required
              >
                {estados.map((estado, key) => (
                  <option key={ key }>{ estado }</option>
                ))}
              </select>
            </label>
            <label name="tipo" value={this.state.tipo} onChange={this.handleChange} required >
              Tipo: 
              <label><input type="radio" id="casa" name="casa" value="casa"/> Casa </label>
              <label><input type="radio" id="apartamento" name="casa" value="apartamento"/> Apartamento </label>
            </label>
          </fieldset>
          
          <fieldset>
            Curriculo 
            <textarea
              name="curriculo"
              maxLength="1000"
              value={this.state.curriculo}
              onChange={this.handleChange}
              required
            />
            Cargo
            <textarea 
              name="cargo"
              maxLength="40"
              value={this.state.cargo}
              onChange={this.handleChange}
              onMouseOver={this.handleMouseOver}
              required
            />
            Descrição do Cargo
            <input 
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
              maxLength="500"
              required
            />
          </fieldset>
        </form>
      </div>);
  }
}

export default Forms;