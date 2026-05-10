import React from 'react'
import "./Form.css";

const Form =() => {
  return (

    <div className="contact__container">
        <div className="contact__text">
            <h1>Apoyame</h1>
      <p>Estoy aprendiendo y practicando, apoyame con ideas para realizarlas y poder agregar a mi portafolio</p>
    </div>
    <div className='form-content'>
        <h2>Contactame!</h2>

        
        <form action="https://formsubmit.co/angel.rico247@gmail.com" method="POST" className='formulario'>
            <label htmlFor="name">Nombre</label>
            <input type="text" name='name' id='name' />

            <label htmlFor="email">Correo Electronico</label>
            <input type="text" name='email' id='email' />

            <label htmlFor="subject">Asunto</label>
            <input type="text" name='subject' id='subject' />

            <label htmlFor="coments">Comentarios</label>
            <textarea name="coments" id="coments" cols="30" rows="5"></textarea>
            
            
            <input className='btn' type="submit" name='submit' id='enviar' value="Enviar" />

            <input type="hidden" name='_next' value="http://localhost:3000/" />

            <input type="hidden" name='_captcha' value="false" />
        </form>
    </div>
    </div>
  )
}

export default Form