import Cabecalho from "../components/Cabecalho";
import Link from "next/link"

export default function Home() { 
    return (
        <div>
        <Link href="/">voltar</Link>
        <Cabecalho nome="mateus" idade={123} ehLegal={true}/>
        </div>
    )
}