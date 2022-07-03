import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Chicken feed stream" />
        <p className="description"></p>

        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/_4mQOW_M8UM?autoplay=1"
            title="Chicken Feed Test Cam"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen

            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
          </iframe>
        </div>
      </main>

      <Footer />
      <style jsx>{`
        .video-container {
          height: 720px;
          width: 1280px; 
          position: relative;
        }

        @media (max-width: 1440px) {
          .video-container {
            height: 360px;
            width: 640px; 
          }
        }
        @media (max-width: 720px) {
          .video-container {
            height: 240px;
            width: 426px; 
          }
        }
        @media (max-width: 440px) {
          .video-container {
            height: 180px;
            width: 320px; 
          }
        }
      `}</style>
    </div>
  )
}
