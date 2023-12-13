import React from "react";

function SobreNosotros() {
    return (
        <div className="container mt-5 mb-5">
            <h1 className="text-center mb-4">Sobre Nosotros</h1>

            <div className="row">
                <div className="col-md-6">
                    <h5>Nombre del autor:</h5>
                    <p>Ronaldo Elvin Yupanqui Salinas</p>

                    <h5>Cédula de Identidad:</h5>
                    <p>10954343</p>

                    <h5>Matrícula Universitaria:</h5>
                    <p>1845208</p>

                    <h5>Super Mercado Patito:</h5>
                    <p>Fundación: ¡Claro! La inauguración del Supermercado Patito fue el 15 de junio de 1998. Fue un día lleno de celebraciones, descuentos especiales y eventos para toda la comunidad. Desde entonces, se ha convertido en un referente local por su compromiso con la calidad y la atención al cliente.</p>

                    <h5>Historia:</h5>
                    <p>
                        En 1998, nació el Supermercado Patito en Colinas del Sur. Con solo unos cuantos estantes de productos frescos y un equipo dedicado, pronto se convirtió en el lugar favorito de la comunidad para abastecerse de alimentos de calidad y encontrar artículos esenciales.
                    </p>
                    <p>
                        El secreto detrás del éxito del Supermercado Patito radica en su compromiso inquebrantable con la calidad, la atención personalizada y un ambiente familiar que hace que cada cliente se sienta parte de la familia Patito.
                    </p>
                    <p>
                        Desde entonces, el Supermercado Patito ha crecido, pero su esencia sigue siendo la misma: brindar productos frescos y esenciales con una sonrisa.
                    </p>
                </div>

                <div className="col-md-6">
                    <h5>Vídeo:</h5>
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/dfKJW5i8C30?si=jvWxxo9xiwRM5v18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SobreNosotros