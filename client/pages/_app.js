import '../App.css'
import { Inter } from 'next/font/google'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import store from '../util/store'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
    const router = useRouter();
  
    return (
        <Provider store={store}>
            <main className={inter.className}>
                <div className="flex gap-2">
                <Sidebar />
                <div className="flex flex-col w-[83%]">
                    <Header path={router.pathname} />
                    <Component {...pageProps} />
                </div>
                </div>
            </main>
      </Provider>
    )
}