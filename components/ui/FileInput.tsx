import React, { forwardRef, useState } from "react";
import { LuUpload, LuX, LuImage } from "react-icons/lu";

export interface FileInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  helperText?: string;
  accept?: string;
  maxSize?: number; // in MB
  preview?: boolean;
  onFileSelect?: (file: File | null) => void;
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  ({
    className = "",
    label,
    error,
    helperText,
    accept = "image/*",
    maxSize = 5,
    preview = true,
    onFileSelect,
    ...props
  }, ref) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0] || null;

      if (file) {
        // Check file size
        if (file.size > maxSize * 1024 * 1024) {
          alert(`Le fichier est trop volumineux. Taille maximale : ${maxSize}MB`);
          return;
        }

        setSelectedFile(file);
        onFileSelect?.(file);

        // Create preview for images
        if (preview && file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setPreviewUrl(e.target?.result as string);
          };
          reader.readAsDataURL(file);
        }
      } else {
        setSelectedFile(null);
        setPreviewUrl(null);
        onFileSelect?.(null);
      }
    };

    const removeFile = () => {
      setSelectedFile(null);
      setPreviewUrl(null);
      onFileSelect?.(null);
      if (ref && 'current' in ref && ref.current) {
        ref.current.value = '';
      }
    };

    const baseClasses = "w-full px-4 py-8 bg-white border-2 border-dashed border-zinc-300 rounded-lg text-sm outline-none hover:border-zinc-400 focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 transition-all font-['Google_Sans'] text-center cursor-pointer";
    const errorClasses = error ? "border-red-300 hover:border-red-400 focus:border-red-500 focus:ring-red-100" : "";
    const combinedClasses = `${baseClasses} ${errorClasses} ${className}`.trim();

    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-zinc-700 font-['Google_Sans']">
            {label}
          </label>
        )}

        {/* Preview */}
        {preview && previewUrl && (
          <div className="relative mb-4">
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-32 object-cover rounded-lg border border-zinc-200"
            />
            <button
              type="button"
              onClick={removeFile}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              <LuX className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* File info */}
        {selectedFile && !previewUrl && (
          <div className="flex items-center justify-between p-3 bg-zinc-50 border border-zinc-200 rounded-lg mb-4">
            <div className="flex items-center gap-3">
              <LuImage className="w-5 h-5 text-zinc-400" />
              <div>
                <p className="text-sm font-medium text-zinc-900 font-['Google_Sans']">
                  {selectedFile.name}
                </p>
                <p className="text-xs text-zinc-500">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={removeFile}
              className="text-zinc-400 hover:text-zinc-600 transition-colors"
            >
              <LuX className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Upload area */}
        <div className={combinedClasses}>
          <input
            type="file"
            accept={accept}
            className="hidden"
            ref={ref}
            onChange={handleFileChange}
            {...props}
          />
          <div className="flex flex-col items-center gap-3">
            <LuUpload className="w-8 h-8 text-zinc-400" />
            <div>
              <p className="text-sm font-medium text-zinc-900 font-['Google_Sans']">
                Cliquez pour sélectionner un fichier
              </p>
              <p className="text-xs text-zinc-500 mt-1">
                {accept === "image/*" ? "PNG, JPG, GIF jusqu'à" : "Fichiers jusqu'à"} {maxSize}MB
              </p>
            </div>
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-600 font-['Google_Sans']">{error}</p>
        )}
        {helperText && !error && (
          <p className="text-sm text-zinc-500 font-['Google_Sans']">{helperText}</p>
        )}
      </div>
    );
  }
);

FileInput.displayName = "FileInput";

export { FileInput };