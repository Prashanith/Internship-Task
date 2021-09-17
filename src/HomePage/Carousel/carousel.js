/* eslint-disable no-useless-concat */
import {useState,useEffect} from 'react'
import styles from './carousel.module.css'

function Carousel({list}) {
    const [current, setcurrent] = useState(0);
    
       
    function change() {
        
        setInterval(() => {
            if(current===list.length-1){
                setcurrent(0);
            }
            else{
                setcurrent(current+1);
            }
        }, 2000);
    }
     
   
    useEffect(() => {
        change()
                  
    }, )

    return (
        <nav className={styles.carouselBar}>
            <div className="dkk">       
                <p className={styles.tag}>{list[0].title}</p>
                <p className={styles.tag}>{list[0].content}</p>                                            
            </div>                  
        </nav>
        
    )
}


export default Carousel;
