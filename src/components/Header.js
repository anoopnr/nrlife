import nr_image from '../image/nr_image.jpg'
import Menu from './Menu'

const Header=()=>{
    return(
        <div>
            <table className="headTable">
                <tr>
                    <td className="logoHead">                        
                        <img src={nr_image} className="myImage"></img>
                    </td>
                    <td><div className="siteHead">NRLIFE</div></td>
                    <td className="logoHead">
                        <Menu/>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Header