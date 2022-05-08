import Layout from '../components/layout/Layout.component'
import '../styles/globals.css'
import '../components/layout/Layout.style.css'

function MyApp({ Component, pageProps }) {
  return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
  );
}

export default MyApp
