import { X } from "lucide-react";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  caption?: string;
}

export function LightboxModal({ isOpen, onClose, imageUrl, caption }: LightboxModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-[#292929] bg-[#101010]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white hover:bg-black transition-colors"
          aria-label="Close image preview"
        >
          <X className="h-5 w-5" />
        </button>

        <img
          src={imageUrl}
          alt={caption || "Expanded image preview"}
          className="max-h-[80vh] w-auto object-contain mx-auto"
        />

        {caption && (
          <div className="border-t border-[#292929] bg-[#050505] p-4 text-center text-xs text-[#A4A4A4]">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
}
