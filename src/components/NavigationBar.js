import React from 'react';
import Patito from "../assets/Patito.png";
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <div className="navbar navbar-expand-lg bg-dark text-light py-4">
            <div className="container">
                <Link className="navbar-brand text-light" to="/">
                    <img
                        src={Patito}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                    Supermercado Patito
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">

                            <Link className="nav-link text-light text-secondary" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Productos
                            </a>
                            <ul className="dropdown-menu bg-dark">
                                <li><Link className="dropdown-item text-secondary" to="/AlimentosFrescos">Alimentos Frescos</Link></li>
                                <li><Link className="dropdown-item text-secondary" to="/Bebidas">Bebidas</Link></li>
                                <li><Link className="dropdown-item text-secondary" to="/ProductosEnvasados">Productos Envasados</Link></li>
                                <li><Link className="dropdown-item text-secondary" to="/Panaderia">Panaderia y Reposteria</Link></li>
                                <li><Link className="dropdown-item text-secondary" to="/Golosinas">Golosinas</Link></li>
                                <li><Link className="dropdown-item text-secondary" to="/ArticulosLimpieza">Articulos De Limpieza</Link></li>
                                <li><Link className="dropdown-item text-secondary" to="/ArticulosMascotas">Articulos Para Mascotas</Link></li>
                                <li><Link className="dropdown-item text-secondary" to="/ArticulosElectronicos">Articulos Electronicos</Link></li>
                                <li><Link className="dropdown-item text-secondary" to="/SobreNosotros">Sobre Nosotros</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <input className="form-control me-sm-2" type="text" placeholder="Buscar" />
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default NavigationBar;
