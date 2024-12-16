import "./App.css";
import { Announcements } from "./components/Announcements";
import { GraphicsGallery } from "./components/GraphicsGallery";
import { Header } from "./components/Header";
import { HumanResource } from "./components/HumanResource";

function App() {
  const isAdmin = true;

  return (
    <div className="h-screen flex flex-col bg-gradient-to-r from-sky-500 to-indigo-500">
      <img
        src="https://res.cloudinary.com/dsccvgunt/image/upload/v1734324012/Cencosud-Logo.wine_wybp5f.webp"
        className="w-36 absolute bottom-0 left-0 z-40 rounded-xl m-4 shadow-xl"
      />
      <Header />
      <div className="flex-1 flex gap-4 px-2 pb-2">
        {/* ---------------------------BLOQUE GRAFICOS---------------------------------------*/}
        <div className="w-[70%] shadow-lg ">
          <GraphicsGallery isAdmin={isAdmin} />
        </div>
        {/* ---------------------------BLOQUE RRHH Y ANUNCIOS---------------------------------------*/}
        <div className="w-[30%] shadow-lg">
          <div className="h-[80%] pb-4">
            <HumanResource isAdmin={isAdmin} />
          </div>
          <div className="h-[20%]">
            <Announcements />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
