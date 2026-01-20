import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Watch } from "lucide-react";
import appLogin from "@/assets/app-login.png";
import appHome from "@/assets/app-home.png";
import appShare from "@/assets/app-share.png";
import appCaregiver from "@/assets/app-caregiver.png";

const AppScreenshots = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const screenshots = [
    {
      image: appLogin,
      title: "ログイン画面",
      description: "シンプルで使いやすいログイン",
    },
    {
      image: appHome,
      title: "ホーム画面",
      description: "体調データを一目で確認",
    },
    {
      image: appShare,
      title: "共有機能",
      description: "体調カードで周囲に伝える",
    },
    {
      image: appCaregiver,
      title: "介助者連携",
      description: "家族・介助者と繋がる",
    },
  ];

  const platforms = [
    { icon: Smartphone, name: "iOS", label: "iPhone対応" },
    { icon: Smartphone, name: "Android", label: "Android対応" },
    { icon: Watch, name: "watchOS", label: "Apple Watch対応" },
    { icon: Watch, name: "Wear OS", label: "Wear OS対応" },
  ];

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-coral/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-rose-light/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-coral font-medium tracking-wider text-sm">APP PREVIEW</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
            アプリの画面
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            直感的なインターフェースで、誰でも簡単に体調管理と共有ができます。
          </p>
        </motion.div>

        {/* Platform badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index + 0.3 }}
              className="flex items-center gap-2 bg-card rounded-full px-5 py-2.5 shadow-soft border border-border/50"
            >
              <div className="w-8 h-8 rounded-full bg-coral/10 flex items-center justify-center">
                <platform.icon className="w-4 h-4 text-coral" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-foreground">{platform.name}</p>
                <p className="text-xs text-muted-foreground">{platform.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Screenshots grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * index + 0.4 }}
              className="group relative"
            >
              {/* Phone frame */}
              <div className="relative mx-auto max-w-[200px] lg:max-w-[240px]">
                <div className="relative bg-foreground/5 rounded-[2rem] p-2 shadow-card transition-all duration-300 group-hover:shadow-hover group-hover:-translate-y-2">
                  {/* Screen */}
                  <div className="relative overflow-hidden rounded-[1.5rem] bg-white aspect-[9/19]">
                    <img
                      src={screenshot.image}
                      alt={screenshot.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground/10 rounded-full" />
                </div>
              </div>

              {/* Label */}
              <div className="mt-4 text-center">
                <h3 className="font-display font-bold text-foreground">
                  {screenshot.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {screenshot.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;
