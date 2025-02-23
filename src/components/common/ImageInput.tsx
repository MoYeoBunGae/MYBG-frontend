import { useState } from 'react';
import CameraIcon from '@/assets/icons/camera.svg?react';
import CloseIcon from '@/assets/icons/close.svg?react';

interface ImageInputProps {
  variant?: 'only' | 'multiple';
  onChange: (files: File[]) => void;
}

const ImageInput = ({ variant = 'only', onChange }: ImageInputProps) => {
  const [images, SetImages] = useState<File[]>([]);

  const handleUploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    const updatedImages = variant === 'only' ? [files[0]] : [...images, ...files];

    SetImages(updatedImages);
    if (onChange) {
      onChange(updatedImages);
    }
  };

  const handleRemoveImg = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    e.preventDefault();

    const updatedImages = images.filter((_, i) => i !== index);
    SetImages(updatedImages);

    if (onChange) {
      onChange(updatedImages);
    }
  };

  return (
    <div>
      {variant === 'only' ? (
        <label htmlFor="img">
          <div className="relative aspect-square rounded-md border border-lightgray overflow-hidden cursor-pointer">
            {images.length > 0 && images[0] instanceof File && (
              <img
                src={URL.createObjectURL(images[0])}
                alt="커버 사진 미리보기"
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute bottom-3 right-3 grid place-content-center size-8 p-1 rounded-full bg-radial from-primary to-sub text-white">
              {images.length > 0 ? (
                <CloseIcon className="size-5" onClick={(e) => handleRemoveImg(e, 0)} />
              ) : (
                <CameraIcon />
              )}
            </div>
          </div>
        </label>
      ) : (
        <div className="flex gap-2 overflow-x-auto">
          <label
            htmlFor="img"
            className="grid place-content-center h-20 aspect-square rounded-md bg-background border-[0.5px] border-lightgray cursor-pointer"
          >
            <CameraIcon className="size-8 text-darkgray" />
          </label>
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex-none max-w-30 h-20 rounded-md border-[0.5px] border-lightgray overflow-hidden"
            >
              <button
                className="absolute top-1 right-1 p-0.5 rounded-full bg-primary"
                onClick={(e) => handleRemoveImg(e, index)}
              >
                <CloseIcon className="size-2.5 text-white" />
              </button>
              <img
                src={URL.createObjectURL(image)}
                alt={`이미지 ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
      <input
        id="img"
        type="file"
        accept="image/*"
        onChange={handleUploadImg}
        className="hidden"
        multiple={variant === 'multiple'}
      />
    </div>
  );
};

export default ImageInput;
