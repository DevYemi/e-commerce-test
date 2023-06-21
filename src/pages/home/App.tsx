
import AsideNav from "@/components/AsideNav"
import AsideContent from "@/components/AsideContent"
import './App.scss'
import Header from "@/components/Header"

function App() {

  return (
    <div className="app-wrapper">
      <AsideNav />
      <section className="app-container">
        <Header />
        <section >
          <main>

          </main>
          <AsideContent />
        </section>
      </section>
    </div>
  )
}

export default App
