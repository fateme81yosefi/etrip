import { Header2 } from "../header2/header/Header2";
import Navbar from "../navbar/Navbar";
import CardList from "../product/CardList";

function Home(props) {
  return (
    <div>
      <Header2 />
      <Navbar />
      <CardList/>
    </div>
  );
}
export default Home;
