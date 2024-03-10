import Header from '../components/header/Header';
import '../styles/globals.css';


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
