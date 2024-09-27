import { ListItem, UnorderedList } from "@chakra-ui/react"
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa"
import { IoLocationSharp } from "react-icons/io5"
import { Link } from "react-router-dom"
import clases from '../footer/footer.module.css'




function Footer() {

   
    return (
        <div className={clases.footer}>
            <div>
                <h3 style={{display: 'flex', flexDirection: 'row'}}>Navegacion <FaLocationArrow/></h3> 
                <UnorderedList fontSize={12} >
                    <ListItem><Link to={'/'} >Inicio</Link></ListItem>
                    <ListItem><Link to={'/'} >Aberturas</Link></ListItem>
                    <ListItem><Link to={'/'} >Impresiones 3D</Link></ListItem>                    
                    <ListItem><Link to={'/'} >Interior</Link></ListItem>                    
                    <ListItem><Link to={'/'} >Alfombras</Link></ListItem>                    
                </UnorderedList>
            </div>
            <div><h3 style={{display: 'flex', flexDirection: 'row'}}>Contactos <FaPhoneAlt/></h3> 
                <UnorderedList fontSize={12} >
                    <ListItem><Link to={'/'} >cel: 3516254315</Link></ListItem>
                    <ListItem><Link to={'/'} >email: atelier@gmail.com</Link></ListItem>                 
                </UnorderedList>
            </div>
            <div> <h3 style={{display: 'flex', flexDirection: 'row'}}>Ubicacion <IoLocationSharp/></h3> 
                <UnorderedList fontSize={12}>
                    <ListItem><Link to={'https://maps.app.goo.gl/pZqzcWiEutqYtdSq6'}><p> Donato Alva  5233 </p></Link> </ListItem>
                    <ListItem><Link to={'https://maps.app.goo.gl/pZqzcWiEutqYtdSq6'}><p> Recta Martinolli  1358 </p></Link> </ListItem>
                    <ListItem><Link to={'https://maps.app.goo.gl/pZqzcWiEutqYtdSq6'}><p> Ricardo Rojas  6047 </p></Link> </ListItem>
                </UnorderedList>
            </div>
            
        </div>
    )
}



export default Footer