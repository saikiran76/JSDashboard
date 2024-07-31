import '../App.css';
import { Inter } from 'next/font/google';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import store from '../util/store';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Provider store={store}>
      <main className={inter.className}>
        <div className="flex flex-col md:flex-row gap-[3.5rem]">
          <Sidebar />
          <div className="flex flex-col w-full md:w-[calc(100%-15.5rem)] ml-0 md:ml-[12rem]">
            <Header path={router.pathname} />
            <Component {...pageProps} />
          </div>
        </div>
      </main>
    </Provider>
  );
}