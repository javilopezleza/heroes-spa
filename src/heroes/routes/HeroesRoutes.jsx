import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from "react-router-dom"
import { MarvelPage, DcPage, SearchPage, HeroPage } from '../pages'




export const HeroesRoutes = () => {
    return (
        <>

            <Navbar />

            <div className='container'>

                <Routes>
                    <Route path="/heroes-spa/marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />

                    <Route path="/heroes-spa/search" element={<SearchPage />} />
                    <Route path="/heores-spa/hero/:id" element={<HeroPage />} />

                    <Route path="/heroes-spa" element={<Navigate to="/marvel" />} />

                </Routes>

            </div>

        </>
    )
}
