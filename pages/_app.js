//import '../styles/globals.css';
import Header from '../components/header/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '70px' }}> 
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
