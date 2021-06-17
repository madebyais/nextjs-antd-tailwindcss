import Document, { Html, Head, Main, NextScript } from 'next/document'

class _Document extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' integrity='sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw==' crossOrigin='anonymous' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default _Document