import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './style.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/7620822?s=460&u=eac1ea8e25105011104b0e8f1f91750d1318e81e&v=4" alt="Ricardo Souza" />
                <div>
                    <strong>Ricardo Souza</strong>
                    <span>Quimica</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.<br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 690,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp Icon" />
                            Entre em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem