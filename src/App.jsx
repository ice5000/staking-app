import Staking from "./components/Staking";
import Postion from "./components/Postion";
import Footer from "./components/Footer";



const App = () => {


  return (
    <div className="min-h-screen flex">
      <div className="space-y-16 lg:space-x-8 mx-auto w-full px-2 mt-6">
        <Staking />
        <Postion />
        <Footer />
      </div>
    </div>
  );
};

export default App;
