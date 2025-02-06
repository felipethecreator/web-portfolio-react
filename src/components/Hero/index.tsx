import './style.css'

function Hero() {
    return (
        <div className='heroContainer'>
            <div className='heroPersonalInfos'>
                <h1 className='heroName'>Felipe Rodrigues</h1>
                <h2 className='heroCargo'>Dev Full-Stack</h2>
            </div>
            <hr/>
            <p className='heroText'>
                Desafio a lógica para criar soluções que não apenas funcionam, mas também encantam.
                Como desenvolvedor Full Stack, minha missão é construir pontes entre ideias e realidade,
                um pixel de cada vez. 🚀💻✨
            </p>
        </div>
    )
}

export default Hero