import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";

interface IoMPopupSection {
  title: string;
  content: string;
}

interface IoMPopupContent {
  mainTitle: string;
  mainContent: string;
  sections: IoMPopupSection[];
  popupColor: string;
  titleColor: string;
  contentColor: string;
  sectionTitleColor: string;
  sectionContentColor: string;
}

interface IoMPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  content: IoMPopupContent | null;
}

export default function IoMPopup({
  open,
  onOpenChange,
  content,
}: IoMPopupProps) {
  if (!content) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-4xl max-h-[90vh] p-0 border-none"
        style={{ backgroundColor: content.popupColor }}
      >
        <div className="relative">
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-6 w-6" style={{ color: content.contentColor }} />
            <span className="sr-only">Close</span>
          </button>

          <ScrollArea className="max-h-[85vh] p-8">
            <DialogHeader className="mb-6">
              <DialogTitle
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ color: content.titleColor }}
              >
                {content.mainTitle}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              <DialogDescription
                className="text-base md:text-lg leading-relaxed whitespace-pre-line"
                style={{ color: content.contentColor }}
              >
                {content.mainContent}
              </DialogDescription>

              {content.sections.map((section) => (
                <div key={section.title} className="space-y-3">
                  <h3
                    className="text-xl md:text-2xl font-semibold"
                    style={{ color: content.sectionTitleColor }}
                  >
                    {section.title}
                  </h3>
                  <p
                    className="text-base md:text-lg leading-relaxed whitespace-pre-line"
                    style={{ color: content.sectionContentColor }}
                  >
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
