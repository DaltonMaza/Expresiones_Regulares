import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

        <title>Validador</title>
      </head>

      <body className={inter.className}>
        <div className='container-fluid'>
          <header>
            <NavBar/>
          </header>

          <section className='container'>
            {children}
          </section>

          <footer>
          </footer>
        </div>
      </body>
    </html>
  );
}
