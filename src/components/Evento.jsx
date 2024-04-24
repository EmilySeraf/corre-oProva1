import React from "react"

export default function Evento({titulo, descricao, horario, local}){
    return( 
        <div className="sessao">
                    <div className="evento">
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <p>{horario}</p>
                <p>{local}</p>
        </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1bnRJ5ijYshA40ATFzSVQaNkQwdNewjCLwW4Q0EdI7Q&s" alt="" />
        </div>
    )
}
