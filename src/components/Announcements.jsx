import React, { useState, useEffect, useRef } from "react";
import { Trash2, ImagePlus } from "lucide-react";
import { ImageUploader } from "./imageUploader";
import { ImageDisplay } from "./imageDisplay";

const CLOUD_NAME = "dsccvgunt"; // Cambia esto
const UPLOAD_PRESET = "cencosudsignage"; // Cambia esto

export const Announcements = ({ isAdmin = false }) => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fileInputRef = useRef(null);

  // Recuperar imágenes de localStorage al cargar la página
  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem("galleryImagesPersonas")) || [];
    if (Array.isArray(storedImages)) {
      setImages(storedImages);
    } else {
      console.warn("Las imágenes almacenadas no son un array válido:", storedImages);
    }
  }, []);

  // Guardar imágenes en localStorage cada vez que cambien
  useEffect(() => {
    if (images.length > 0) {
      localStorage.setItem("galleryImagesPersonas", JSON.stringify(images));
    }
  }, [images]);

  // Cambiar automáticamente las imágenes cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(images.length, 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  // Subir una nueva imagen a Cloudinary
  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("folder", "Personas"); // Especifica la carpeta

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setImages((prev) => [...prev, { url: data.secure_url }]);
    } catch (error) {
      console.error("Error al subir la imagen a Cloudinary:", error);
    }
  };

  // Eliminar una imagen seleccionada
  const handleDelete = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  // Manejar clic en el botón de subir archivo
  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="h-full bg-white rounded-lg relative flex flex-col group">
      {images.length > 0 ? (
        <div className="flex-1 relative">
          {/* Mostrar imagen actual */}
          <ImageDisplay src={images[currentIndex]?.url} alt={`Gráfico ${currentIndex + 1}`} />

          {/* Botones para administrador */}
          {isAdmin && (
            <>
              {/* Botón para eliminar */}
              <button
                onClick={() => handleDelete(currentIndex)}
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Trash2 className="w-5 h-5 text-red-600" />
              </button>

              {/* Botón para subir gráfico */}
              <button
                onClick={handleClickUpload}
                className="absolute top-2 right-14 bg-sky-600 hover:bg-sky-700 text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
              >
                <ImagePlus className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <p className="text-gray-500 text-lg">No hay gráficos disponibles</p>
          {isAdmin && (
            <button
              onClick={handleClickUpload}
              className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <ImagePlus className="w-5 h-5" />
              Subir Gráfico
            </button>
          )}
        </div>
      )}

      {/* Componente de subida */}
      <ImageUploader onUpload={handleFileUpload} ref={fileInputRef} />
    </div>
  );
};
