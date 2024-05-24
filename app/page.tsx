
import Image from "next/image";
import Navbar from "./Navbar";


export default function Home() {
  return  (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('/IMAGE4.jpg')` }}>
      <Navbar />
      <div className="relative z-8 p-6 text-white">
      <div className="p-8">
        <h1>Bienvenido a mi página principal</h1>
        </div>
        
        <p className="mt-4 text-lg">
          
        </p>
      </div>
           
    </div>
  );
 
  
 }
 
 