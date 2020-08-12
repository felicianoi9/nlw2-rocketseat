import React from "react";
import "./styles.css";
import whatsappIcon from "../../Assets/images/icons/whatsapp.svg";

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/24903908?s=460&u=b3be4cdae294bfee336b15189042d1c87b377999&v=4" alt="Rogério Feliciano"/>
                <div>
                    <strong>Rogério Feliciano</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Apaixonado por tecnologia, Matemática, ensino de Matemática.
                <br/><br/>
                Sempre pronto para ensinar e aprender. 
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;