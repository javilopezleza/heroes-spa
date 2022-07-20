import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from '../../src/router/PrivateRoute';



describe('Pruebas en <PrivateRoutes />', () => {

    test('debe mostrar el children si esta logeado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Juan carlos'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>

            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta privada')).toBeTruthy()

    });


})