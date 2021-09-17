/* eslint-disable no-useless-concat */
import React,{useState} from 'react'
import styles from './navbar.module.css'

function NavBar() {
    const menu=["Men","Women","Kids","Customise","Sale","SNKRS"]
    const [toggle, settoggle] = useState(false)
    function toggleNav() {
        settoggle(!toggle)        
    }
    return (
        <nav className={styles.navbar} >
            <div className={styles.logo}>
                <img src="assets/nike.png" height="45" alt="Load"/>
            </div>


            <div className={styles.menu}>
                <ul className={styles.menu}>
                    {
                        menu.map((item)=>{
                            return <li className={styles.item}>
                                        <a href="none">{item}</a> 
                                    </li>
                        })
                    }
                </ul>
            </div>

            <div className={styles.navContent}>
                <div className={styles.inputWithIcon}>
                    <i className={"fas fa-search"} style={{color:'black'}} aria-hidden="true"></i>
                    <input type="text" placeholder="search" onFocus={()=>{
                        
                    }}></input>
                </div>

                <div  className={styles.sidenav} style={{width:toggle?'250px':'0px'}} >
                <i class="far fa-window-close" onClick={()=>toggleNav()}></i>                
                <a href=" ">Men</a>
                <a href=" ">Women</a>
                <a href=" ">Kids</a>
                <a href=" ">Customise</a>
                <a href=" ">Sale</a>
                <a href=" ">SNKRS</a>

                </div>

                <i className={"far fa-heart"+' '+styles.icon} ></i>
                <i className={"fas fa-shopping-bag"+' '+styles.icon}></i>
                <div className={styles.navmenu}>
                <i className="fas fa-bars" onClick={()=>toggleNav()}></i>
                </div>
                
            </div>            
        </nav>
    )
}

export default NavBar
