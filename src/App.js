import CardFree from "./components/CardFree";
import CardStandard from "./components/CardStandard";
import CardPro from "./components/CardPro";

function App() {
  return (
    <div className="flex justify-center items-center lg:w-full lg:h-screen">
      <section className="grid grid-rows lg:grid-cols-3 lg:gap-10 gap-8 p-10">
        <CardFree />
        <CardStandard />
        <CardPro />
      </section>
    </div>
  );
}

export default App;
