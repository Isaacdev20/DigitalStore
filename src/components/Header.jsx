
export default function Header({children, className}){
    return(
        <header className={className}>
            <div  className=" flex flex-row">
                <img src="/public/download.png" alt="fotoDaLogo" className="w-[253px] h-[44px]" />
                {children}
            </div>
        </header>
    )
}