import React from 'react';
import NavigationBar from './components/NavigationBar';
import AlimentosFrescos from './components/Pages/AlimentosFrescos/AlimentosFrescos';
import ArticulosElectronicos from './components/Pages/ArticulosElectronicos/ArticulosElectronicos';
import ArticulosLimpieza from './components/Pages/ArticulosLimpieza/ArticulosLimpieza';
import ArticulosParaMascotas from './components/Pages/ArticulosParaMascotas/ArticulosParaMascotas';
import Bebidas from './components/Pages/Bebidas/Bebidas';
import Golosinas from './components/Pages/Golosinas/Golosinas';
import Panaderia from './components/Pages/Panaderia/Panaderia';
import ProductosEnvasados from './components/Pages/ProductosEnvasados/ProductosEnvasados';
import SobreNosotros from './components/Pages/SobreNosotros';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <div>
          <NavigationBar />
        </div>
        <main className='container'>
          <Routes>
            <Route path='/' element={
              <section className='container'>
                <div className='row'>
                  <article className='col-md-6'>
                    <Carousel id="1">
                    </Carousel>
                  </article>
                  <article className='col-md-6'>
                    <Carousel id="2">
                    </Carousel>
                  </article>
                </div>
              </section>
            } />
            <Route path='/AlimentosFrescos' element={<AlimentosFrescos />} />
            <Route path='/Bebidas' element={<Bebidas />} />
            <Route path='/ProductosEnvasados' element={<ProductosEnvasados />} />
            <Route path='/Panaderia' element={<Panaderia />} />
            <Route path='/Golosinas' element={<Golosinas />} />
            <Route path='/ArticulosLimpieza' element={<ArticulosLimpieza />} />
            <Route path='/ArticulosMascotas' element={<ArticulosParaMascotas />} />
            <Route path='/ArticulosElectronicos' element={<ArticulosElectronicos />} />
            <Route path='/SobreNosotros' element={<SobreNosotros />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  )
}

export default App;