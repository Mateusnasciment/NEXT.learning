import Link from "next/link"

//import "../styles/Produto.module.css"

export default function Home() {
  return (
    <div>
      <h1>
        <p>
          <Link href='/exemplo'>
            <a className="button">button vermelho </a>
          </Link>
          <p />
          <strong>Início</strong>
        </p>
      </h1>
    </div>
  )
}
