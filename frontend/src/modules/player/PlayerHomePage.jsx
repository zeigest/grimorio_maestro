import React from "react";

function PlayerHomePage({user,mainCharacter}){

    const displayName = 
    user?.profile?.firstName ||
    user?.username|| 
    "Dummy";

    return(
        <main>
            <header>
                <h1>¡Bienvenido, {displayName}! </h1>
            </header>
            <section>
                <h2>Personaje:</h2>
                {mainCharacter ? (
                    <div>
                        <p><strong>Nombre:</strong> {mainCharacter.charName}</p>
                        <p>
                            <strong>Clase:</strong> {mainCharacter.charBasicStats.class}{" "}
                            <strong>Nivel:</strong> {mainCharacter.charBasicStats.level}
                         </p>
                        <p><strong>Raza: </strong>{mainCharacter.charBasicStats.race}</p>
                    </div>
                ):(<p>Sin personaje principal asignado</p>)}
            </section>

            <section>
                <h2>Resumen del clan: </h2>
                <p>PartySummary</p>
            </section>
            <section>
                <h2>Shorcuts</h2>
                <p>PlayerShorcuts</p>
            </section>
        </main>
    )
}

export default PlayerHomePage;