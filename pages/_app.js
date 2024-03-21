import '../styles/globals.css';
import Copyright from "../components/home/Copyright"


function MyApp({ Component, pageProps }) {
  return (
    <>
      <div > 
        <Component {...pageProps} />
      </div>
      <Copyright/>
    </>
  );
}

export default MyApp;
