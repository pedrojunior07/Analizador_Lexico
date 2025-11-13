import React, { useState, useRef } from 'react';

interface ImageUploadProps {
  onImageSelect: (imageUrl: string) => void;
  isAnalyzing: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelect, isAnalyzing }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      processFile(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      setPreview(imageUrl);
      onImageSelect(imageUrl);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
          transition-all duration-300 ease-in-out
          ${isDragging 
            ? 'border-green-500 bg-green-50' 
            : 'border-gray-300 hover:border-green-400 bg-white'
          }
          ${isAnalyzing ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
          disabled={isAnalyzing}
        />
        
        {preview ? (
          <div className="space-y-4">
            <img
              src={preview}
              alt="Preview"
              className="max-h-64 mx-auto rounded-lg shadow-lg"
            />
            {!isAnalyzing && (
              <p className="text-sm text-gray-600">
                Clique ou arraste outra imagem para substituir
              </p>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-6xl">📸</div>
            <div>
              <p className="text-lg font-semibold text-gray-700">
                Arraste uma imagem aqui
              </p>
              <p className="text-sm text-gray-500 mt-2">
                ou clique para selecionar um arquivo
              </p>
            </div>
            <p className="text-xs text-gray-400">
              Formatos suportados: JPG, PNG, GIF
            </p>
          </div>
        )}
        
        {isAnalyzing && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 rounded-lg">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
              <p className="mt-4 text-gray-700 font-semibold">Analisando imagem...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
