import React from 'react';
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
// import img from '../imgs/busca_de_prestador_preview_rev_1.png'

// import { useState } from 'react';

Modal.setAppElement("#root");

const TelaHome = () => {

    // const [modalIsOpen, setIsOpen] = useState(false);
  
    // function openModal() {
    //   setIsOpen(true);
    // } 
     
    // function closeModal() {
    //   setIsOpen(false);
    // }

    return (
        <div>
    <header id="container">
        <div id="title">           
            <Link to='#'><h1>Indique Alguém</h1></Link>
        </div>

        <div >
            <nav>
                <ul>
                    <Link to='#'><li>Início</li></Link>
                    <Link to='#'><li>Serviços</li></Link>
                    <Link to='sobre.ejs'><li>Sobre</li></Link>
                    <Link to='#'><li>Contato</li></Link>
                    <button><li>Crie sua Conta</li></button>
                </ul>
            </nav>
        </div>
    </header>

   <main>
                <h2>Está buscando um prestador de serviço<span> para sua casa ou empresa?</span></h2>
                <h2>Aqui você encontra os melhores prestadores de serviços</h2>
                <h2>A Indique Alguém vai te conectar a profissionais das mais diversas áreas</h2>
                    <form>
                        <div id="inline">
                            <select required id="prestador" name="select"  className="select-prestador" >
                                <option value=" " disabled selected>Prestador</option>
                                <option value="Advogado">Advogado</option>
                                <option value="Encanador">Encanador</option>
                                <option value="Pedreiro">Pedreiro</option>
                                <option value="Pintor">Pintor</option>
                            </select> 
                            <select id="cidades" name="select" className="select-prestador">
                                <option value=" " disabled selected>Onde?</option>
                                <option value="Bayeux">Bayeux</option>
                                <option value="Cabedelo">Cabedelo</option>
                                <option value="Conde">Conde</option>
                                <option value="Joao Pessoa">João Pessoa</option>
                            </select> 
                            <input type="submit" value="Buscar  >"/>
                        </div>
                    </form>
            <img className="img" src="./" alt="busca_de_prestador"/>
    </main>
            {/* <form action="#">
                <div className="data">
                    <label>E-mail</label>
                    <input type="email" required placeholder="Digite seu Email" />
                </div>
                <div className="data">
                    <label>Senha</label>
                    <input type="password" required placeholder="Digite sua Senha" />
                </div>
                <div className="forgot-pass">
                    <Link to='#'>Esqueceu a senha?</Link>
                <div className="botton">
                    <button className="show-btn">Entrar</button>
                </div>
            </div>
        </form> */}
          </div>
)}


export default TelaHome;













  /* //  <div id="modal-cadastro" className="modal-container">
    //     <div className="modal">
    //         <button className="fechar">x</button>
    //         <h2 className="mainText">BEM-VINDO AO</h2>
    //         <h2 className="mainText2">INDIQUE ALGUÉM!</h2>
    //         <input type="checkbox" id="show">
    //         <Link to='cliente' className="show-btn1">Cadastre-se</Link>
    //         </input>
    //     </div>
    //     </div> */








