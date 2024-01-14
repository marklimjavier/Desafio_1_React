import './App.css'
import Perritos from './components/MyCards'
import Titulo from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Titulo name="Fundacion Animales Peluditos"/>
      <section>
      <Perritos Nombre="Bentarron" raza="Salchicha" Descripcion="Un perro salchicha que baila la macarela como en los dibujos animados." Img="https://assets-global.website-files.com/63634f4a7b868a399577cf37/6408955fc5130772142667cc_nombres%20para%20perros%20salchicha.jpg"/>
      <Perritos Nombre="Manchas" raza="Dalmata" Descripcion="Una mancha por cada momento feliz, ayudalo a completarlas todas." Img="https://somosmuyperros.com/wp-content/uploads/2017/02/D%C3%A1lmata.jpg"/>
      <Perritos Nombre="Fox" raza="Pomerania" Descripcion="¿Te gustan los zorros? ¿quieres una mascota fiel? Entonces Fox es quien buscas." Img="https://www.aon.es/personales/seguro-perro-gato/wp-content/uploads/sites/2/2021/04/perro-pomerania.jpg.webp"/>
      <Perritos Nombre="Shakira" raza="yorkshire" Descripcion="La raza favorita para llevar a todas partes (por favor no llevar en bolsos o carteras que no sean especializadas para perros)." Img="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1131594569-642ad91320b43.jpg?resize=980:*"/>
      </section>
      
      <Footer/>
    </>
  )
}

export default App
