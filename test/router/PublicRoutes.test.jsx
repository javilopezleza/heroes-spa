import { render, screen } from "@testing-library/react"
import { useContext } from "react"
import { AuthContext } from "../../src/auth"
import { PublicRoutes } from "../../src/router/PublicRoutes"

describe('pruebas en <PublicRoutes />', () => {

    test('debe mostrar el children si no esta logeado', () => {

        const contextValue={
            logged:false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoutes />
            </AuthContext.Provider>
        )

    })

})