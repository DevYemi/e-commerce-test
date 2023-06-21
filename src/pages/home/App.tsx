
import AsideNav from "@/components/AsideNav"
import AsideContent from "@/components/AsideContent"
import './App.scss'
import Header from "@/components/Header"
import ProductCard from "@/components/ProductCard"

function App() {

  return (
    <div className="app-wrapper">
      <AsideNav />
      <section className="app-container">
        <div>
          <Header />
        </div>
        <div className="app-main">
          <main>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </main>
          <aside>
            <AsideContent />
          </aside>
        </div>
      </section>
    </div>
  )
}

export default App
