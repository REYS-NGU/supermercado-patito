import React from 'react';

function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Contacto</h5>
                        <p>Dirección: Calle Principal #123</p>
                        <p>Teléfono: 123-456-7890</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Enlaces</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="text-light">Inicio</a></li>
                            <li><a href="#productos" className="text-light">Productos</a></li>
                            <li><a href="#ofertas" className="text-light">Ofertas</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Redes Sociales</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://facebook.com" className="text-light">Facebook</a></li>
                            <li><a href="https://twitter.com" className="text-light">Twitter</a></li>
                            <li><a href="https://instagram.com" className="text-light">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center py-3">
                <p>&copy; {new Date().getFullYear()} Supermercado Patito. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
