import Navbar from "./component/navbar.jsx"
import Footer from "./component/footer.jsx"
import Card from "./component/card.jsx"
function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className="mulcards">
    <Card title ="card1" description = "This is the first card1"></Card>
    <Card title = "card2" description="This is the first card2"></Card>
    <Card title = "card3" description="This is the first card3"></Card>
    <Card title = "card4" description="This is the first card4"></Card>
    </div>
    <Footer></Footer>
    </>
  )
}
export default App
