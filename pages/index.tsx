import { signIn, signOut, useSession } from 'next-auth/react';

const Home = () => {
  const { data: session } = useSession();
  // eslint-disable-next-line no-console
  console.log(session);
  return (
    <>
      <h1>Hello world</h1>
      <button onClick={() => signIn()}>Iniciar sesión</button>
      <button type='button' onClick={() => signOut()}>
        Log out
      </button>
    </>
  );
};

export default Home;
