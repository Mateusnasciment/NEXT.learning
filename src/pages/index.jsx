export default function Início () {
  const titulo = <h1> titulo no jsx</h1>

  function subtitulo() {
    
    return <h2>{"função dentro da função".TopUpperCase()}</h2>
  }
  return (
    <div> 
        {titulo}
        {subtitulo}
        <p>
          {JSON.stringify({nome: 'Mateus', idade: 23})}
        </p>
    </div>
    )
}
