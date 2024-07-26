import {Search} from 'lucide-react'
import Header from "./Header"
import Footer from "./Footer"


export default function Layout({children}){
    return(
        <>
        
           <Header>
                
           </Header>

            <div>
                {children}
            </div>

            <Footer>
                <h1>Esse e meu Footer</h1>
            </Footer>
        
        </>

    )
}