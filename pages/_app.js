import LayoutPage from "@/components/layout"
// import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/styles/custom.css";
import "@/styles/theme.min.css";

export default function App({ Component, pageProps }) {
   const getLayout = Component.getLayout || ((page) => page);
  // return(
  // <LayoutPage>
  //  <Component {...pageProps} />
  // </LayoutPage> 
  // )
  return getLayout(<Component {...pageProps} />);
}
