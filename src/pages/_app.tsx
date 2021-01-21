import theme from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/dist/next-server/lib/router/router'

import GlobalStyle from '../styles/global'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
