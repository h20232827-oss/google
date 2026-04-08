import { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import ChatInterface from './components/ChatInterface';
import { GraduationCap, Sparkles, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [currentImage, setCurrentImage] = useState<{ data: string, mimeType: string } | null>(null);

  const handleImageUpload = (data: string, mimeType: string) => {
    setCurrentImage({ data, mimeType });
  };

  const handleClearImage = () => {
    setCurrentImage(null);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <header className="max-w-4xl w-full mb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 mb-2"
        >
          <div className="bg-primary/10 p-2 rounded-xl">
            <GraduationCap className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Socratic Math Tutor
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg italic"
        >
          "The secret of change is to focus all of your energy not on fighting the old, but on building the new."
        </motion.p>
      </header>

      <main className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Upload Problem
            </h2>
            <ImageUploader onImageUpload={handleImageUpload} onClear={handleClearImage} />
          </section>

          <section className="bg-primary/5 p-4 rounded-xl border border-primary/10">
            <h3 className="font-medium text-sm mb-2 flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary" />
              Tutor's Tip
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Don't worry if you're stuck! We'll take it one step at a time. 
              Try to explain your thinking as we go—it helps me understand how to best guide you.
            </p>
          </section>
        </div>

        <div className="lg:col-span-8">
          <ChatInterface initialImage={currentImage} />
        </div>
      </main>

      <footer className="max-w-4xl w-full mt-12 pt-8 border-t text-center text-muted-foreground text-xs">
        <p>© 2026 Socratic Math Tutor. Built with patience and Gemini AI.</p>
      </footer>
    </div>
  );
}
