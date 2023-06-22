
import AsideNav from "@/components/AsideNav"
import AsideContent from "@/components/AsideContent"
import './App.scss'
import Header from "@/components/Header"
import ProductCard from "@/components/ProductCard"
import { useCallback, useState } from "react"
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd"
import productListData from "./dummyData"

function App() {
  const [asideNavIsOpen, setAsideNavIsOpen] = useState(false);
  const [productList, setProductList] = useState(productListData);


  const handleDragEnd = useCallback((result: any) => {
    if (!result.destination) return;

    const clonedList = [...productList];
    const [draggedItem] = clonedList.splice(result.source.index, 1);
    clonedList.splice(result.destination.index, 0, draggedItem);

    setProductList(clonedList)
  }, [productList])


  return (
    <div className="app-wrapper">
      <AsideNav isOpen={asideNavIsOpen} />
      <section className="app-container">
        <div>
          <Header asideNavIsOpen={asideNavIsOpen} toggleAsideNav={setAsideNavIsOpen} />
        </div>
        <div className="app-main">
          <DragDropContext autoScrollerOptions={{ maxPixelScroll: 25 }} onDragEnd={handleDragEnd}>
            <Droppable droppableId="ProductGrid">
              {(provided) => (
                <main
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {
                    productList.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                          <ProductCard
                            name={item.name}
                            price={item.price}
                            url={item.url}
                            img={item.img}
                            color={item.color}
                            id={item.id}
                            providedDnd={provided}
                            liked={item.liked}
                          />
                        )}
                      </Draggable>
                    ))
                  }
                  {provided.placeholder}
                </main>
              )}
            </Droppable>
          </DragDropContext>
          <aside>
            <AsideContent />
          </aside>
        </div>
      </section>
    </div>
  )
}

export default App
