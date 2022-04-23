import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import '../components/layout/Layout.css'

function MyApp({ Component, pageProps }) {
  return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
  );
}

export default MyApp
