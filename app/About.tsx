import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-4">Sobre Mí</h1>
        <Image src="/mi-imagen.jpeg" alt="Mi Imagen" width={200} height={200} className="rounded-full mx-auto mb-4" />
        <p><strong>Nombre:</strong> [Tu Nombre]</p>
        <p><strong>País:</strong> [Tu País]</p>
        <p><strong>Edad:</strong> [Tu Edad]</p>
        <p><strong>Trabajo:</strong> [Tu Trabajo]</p>
        <p><strong>Profesión:</strong> [Tu Profesión]</p>
        <p className="mt-4">Soy una opción excelente para contratar porque [tu razón].</p>
      </div>
    </div>
  );
}
