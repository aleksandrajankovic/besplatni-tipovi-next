import Head from 'next/head';
import StoreWrapper from '../redux/storewrapper';
import Footer from '../components/Footer';
import Header from '../components/Header';
import "./App.css"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';



export const metadata = {
  title: 'Besplatni tipovi',
};

export default function RootLayout({ children }) {
  return (
    <StoreWrapper>

    <html lang="en">
    <Head>
          <link rel="icon" href="/favicon.png" />
        </Head>
      <body>
        <header>
          <Header />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
    </StoreWrapper>
  );
}