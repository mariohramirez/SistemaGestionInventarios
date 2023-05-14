import { signIn, signOut } from 'next-auth/react';

const Home = () => (
  <>
    <h1>Hello world</h1>
    <button onClick={() => signIn()}>Iniciar sesión</button>
    <button type='button' onClick={() => signOut()}>
      Log out
    </button>
  </>
);

export default Home;
