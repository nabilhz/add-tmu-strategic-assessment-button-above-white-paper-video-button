import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";

interface TMUIRESPopupProps {
  isOpen: boolean;
  onClose: () => void;
  content: {
    title: string;
    description: string;
    documentationLink: string;
    videoLink: string;
    additionalLinks: string;
  };
}

export default function TMUIRESPopup({
  isOpen,
  onClose,
  content,
}: TMUIRESPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl"
        style={{ backgroundColor: "#0a1628" }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-[#FFC300] transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <h2
            className="text-3xl font-bold mb-6 pr-8"
            style={{ color: "#FFC300" }}
          >
            {content.title}
          </h2>

          {/* Description */}
          <div className="text-white text-base leading-relaxed mb-8 whitespace-pre-line">
            {content.description}
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">
              Resources:
            </h3>

            <div className="space-y-3">
              {/* Documentation Link */}
              <Button
                asChild
                className="w-full justify-start text-white font-medium"
                style={{
                  background:
                    "linear-gradient(135deg, #009B3A 0%, #FFC300 100%)",
                }}
              >
                <a
                  href={content.documentationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Documentation
                </a>
              </Button>

              {/* Video Link */}
              <Button
                asChild
                className="w-full justify-start text-white font-medium"
                style={{
                  background:
                    "linear-gradient(135deg, #009B3A 0%, #FFC300 100%)",
                }}
              >
                <a
                  href={content.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Video
                </a>
              </Button>

              {/* Additional Links */}
              <Button
                asChild
                className="w-full justify-start text-white font-medium"
                style={{
                  background:
                    "linear-gradient(135deg, #009B3A 0%, #FFC300 100%)",
                }}
              >
                <a
                  href={content.additionalLinks}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Links
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
