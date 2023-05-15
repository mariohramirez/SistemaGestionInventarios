import React from 'react'
import Login from '@components/Login'
import Inventario from '@components/Inventario'
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {

    const { data: session } = useSession();
    // eslint-disable-next-line no-console
    console.log(session);
    return (
        <>
            <main>
                <Login></Login>
            </main>

            {/* <>
                <h1>Hello world</h1>
                <button onClick={() => signIn()}>Iniciar sesión</button>
                <button type='button' onClick={() => signOut()}>
                    Log out
                </button>
            </> */}
        </>
    )
}


