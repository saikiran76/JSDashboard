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
        <div className="flex gap-[0.6rem]">
          <Sidebar />
          <div className="flex w-[86%] flex-col ml-[2rem] md:ml-[13rem]">
            <Header path={router.pathname} />
            <Component {...pageProps} />
          </div>
        </div>
      </main>
    </Provider>
  );
}
