
//components
import Navbar from "../Components/Navbar"
import Headerr from "../Components/Header"

export default function NotasAlumno(){
    return(
        <div>
            <Headerr/>
            <Navbar 
                first="Publicaciones"
                firstLink="/publicacion" 
                second="Actividades"
                secondLink="/actividad"
                third="Examen"
                thirdLink="/"
                fourth="Notificaciones"
                fourthLink="/notificacion"
                fifth="Notas"
                fifthLink="/notasalumno"
            />
        </div>
    )
}