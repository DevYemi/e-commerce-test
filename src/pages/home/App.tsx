
import AsideNav from "@/components/AsideNav"
import AsideContent from "@/components/AsideContent"
import './App.scss'
import Header from "@/components/Header"
import ProductCard from "@/components/ProductCard"
import { useState } from "react"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

function App() {
  const [asideNavIsOpen, setAsideNavIsOpen] = useState(false);


  return (
    <div className="app-wrapper">
      <AsideNav isOpen={asideNavIsOpen} />
      <section className="app-container">
        <div>
          <Header asideNavIsOpen={asideNavIsOpen} toggleAsideNav={setAsideNavIsOpen} />
        </div>
        <div className="app-main">
          <main>
            <ProductCard
              name="Serena Faux Mink Lashes"
              price="4,800"
              url="adeyanjuadeyrmi.com"
              img="/src/assets/wizkid.jpg"
            />
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
