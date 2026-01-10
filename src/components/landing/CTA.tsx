import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from "lucide-react";
import logo from "@/assets/mielink-logo-vertical.jpeg";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-coral/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-rose-light/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-card rounded-3xl shadow-card p-12 md:p-16 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <img src={logo} alt="ミエリンク" className="h-32 object-contain" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            あなたの「見えない」を、<br />
            <span className="text-coral">見える支え合い</span>に変えよう
          </h2>

          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
            ミエリンクは現在開発中です。
            事前登録いただいた方には、リリース時に優先してお知らせいたします。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-hover transition-all text-lg px-10 group"
            >
              事前登録する
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-coral/30 text-coral-dark hover:bg-coral/5 text-lg px-10"
            >
              <Heart className="mr-2 w-5 h-5" />
              開発を支援する
            </Button>
          </div>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              対応予定: Android / Pixel Watch (iOS版は今後検討中)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
