import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Watch, Smartphone, Share2, Users } from "lucide-react";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Watch,
      step: "01",
      title: "ウォッチを装着",
      description: "スマートウォッチを装着するだけ。自動でセンサーデータを取得します。",
      badgePosition: { left: "225px", top: "-12px" },
    },
    {
      icon: Smartphone,
      step: "02",
      title: "体調カードを作成",
      description: "あなたの状況や必要なサポートを体調カードにまとめます。",
      badgePosition: { left: "232px", top: "-15px" },
    },
    {
      icon: Share2,
      step: "03",
      title: "周囲と共有",
      description: "必要な時にリンクやBluetoothでカードを共有。助けを求めやすくなります。",
      badgePosition: { left: "232px", top: "-15px" },
    },
    {
      icon: Users,
      step: "04",
      title: "家族と繋がる",
      description: "介助者や家族にリアルタイムで体調を共有。安心の見守りを実現。",
      badgePosition: { left: "232px", top: "-15px" },
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-coral font-medium tracking-wider text-sm">HOW IT WORKS</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
            簡単4ステップで始める
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            複雑な設定は不要。装着してアプリを開くだけで、
            すぐに体調管理を始められます。
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-coral/20 via-coral to-coral/20 -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-primary shadow-soft flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Step number badge */}
                <div 
                  className="absolute w-8 h-8 rounded-full bg-card border-2 border-coral flex items-center justify-center"
                  style={{ left: step.badgePosition.left, top: step.badgePosition.top }}
                >
                  <span className="text-xs font-bold text-coral">{step.step}</span>
                </div>

                <h3 className="text-lg font-display font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
