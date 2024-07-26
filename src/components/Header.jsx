import Logo from "./Logo"
import {Search} from 'lucide-react'
import FilterGroup from './FilterGroup'




export default function Header(){
    return(
        <header>
            <div className="flex justify-between " >
                <Logo></Logo>
                <FilterGroup>
                    <input type="text" className='border-2 rounded border-black mx-3 my-3'/>
                    <button className='border-2 rounded border-black px-2 py-1 ml-2 mx-3 my-3'>Pesquisar</button>
                </FilterGroup>
                <a href="" className="text-xl/[16px] text-dark-gray-2 mx-3 my-3">Cadastrar</a>
                <button href="" className="bg-[#C92071] w-[114px] h-[40px] border rounded border-[4px] border-black font-bold text-white text-[14px] ">Entrar</button>
            </div>
        </header>
    )
}