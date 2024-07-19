import Header from "./Header"
import Footer from "./Footer"


export default function Layout({children}){
    return(
        <>
        
           <Header>
                <h1>Esse e o header</h1>
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