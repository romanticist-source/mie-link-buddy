import { motion } from "framer-motion";
import { Watch, Smartphone, Heart, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/mielink-logo.jpeg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-coral-light/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-light/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-peach/40 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 pt-24 pb-16">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-16"
        >
          <img src={logo} alt="ミエリンク" className="h-12 object-contain" />
          <div className="flex gap-4">
            <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
              機能紹介
            </Button>
            <Button variant="ghost" className="text-foreground/80 hover:text-foreground">
              使い方
            </Button>
            <Button className="bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-hover transition-shadow">
              事前登録
            </Button>
          </div>
        </motion.nav>

        {/* Main hero content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-coral-dark font-medium tracking-wider"
              >
                誰もが快適に暮らせる社会のために
              </motion.p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                支え合いのための
                <br />
                <span className="text-coral">体調可視化</span>アプリ
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              日々の疲労と体調を数値化して共有。家族や介助者と繋がり、
              離れていても安心できる毎日を支えます。
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-hover transition-all text-lg px-8"
              >
                事前登録する
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-coral/30 text-coral-dark hover:bg-coral/5 text-lg px-8"
              >
                詳しく見る
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground bg-card/50 rounded-full px-3 py-1.5">
                <Smartphone className="w-4 h-4 text-coral" />
                <span className="text-xs">iOS</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground bg-card/50 rounded-full px-3 py-1.5">
                <Smartphone className="w-4 h-4 text-coral" />
                <span className="text-xs">Android</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground bg-card/50 rounded-full px-3 py-1.5">
                <Watch className="w-4 h-4 text-coral" />
                <span className="text-xs">watchOS</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground bg-card/50 rounded-full px-3 py-1.5">
                <Watch className="w-4 h-4 text-coral" />
                <span className="text-xs">Wear OS</span>
              </div>
            </div>
          </motion.div>

          {/* Device mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Main phone mockup */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-96 bg-card rounded-[2.5rem] shadow-card border-8 border-foreground/10 overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-b from-coral/10 to-rose-light/20 p-4 flex flex-col items-center justify-center">
                  <Heart className="w-16 h-16 text-coral mb-4 animate-pulse-soft" />
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">今日の体調</p>
                    <p className="text-2xl font-bold text-coral">良好</p>
                  </div>
                </div>
              </motion.div>

              {/* Watch mockup */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute left-4 top-1/4 w-24 h-28 bg-card rounded-2xl shadow-card border-4 border-foreground/10 overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-b from-peach to-rose-light/30 p-2 flex flex-col items-center justify-center">
                  <Watch className="w-8 h-8 text-coral mb-1" />
                  <p className="text-[10px] text-muted-foreground">心拍数</p>
                  <p className="text-lg font-bold text-coral-dark">72 bpm</p>
                </div>
              </motion.div>

              {/* Card preview mockup */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="absolute right-4 bottom-1/4 w-40 bg-card rounded-xl shadow-card p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-coral/20 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">体調カード</p>
                    <p className="text-[10px] text-muted-foreground mt-1">周囲への共有が簡単に</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground"
          >
            <span className="text-sm mb-2">スクロール</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
