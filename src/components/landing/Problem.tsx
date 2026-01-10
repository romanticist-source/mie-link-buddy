import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HelpCircle, Eye, EyeOff, Users } from "lucide-react";

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      icon: EyeOff,
      title: "見えない疲労",
      description:
        "身体的な疲労や不調は、本人にしか分からないことが多く、適切な休息のタイミングを逃してしまいがちです。",
    },
    {
      icon: HelpCircle,
      title: "助けを求めにくい",
      description:
        "ヘルプマークがあっても、「今」助けが必要かどうかは周囲には分かりません。声をかけるのを躊躇してしまうことも。",
    },
    {
      icon: Users,
      title: "介助者との連携",
      description:
        "家族や介助者と離れていると、リアルタイムで体調を共有することが難しく、不安を感じることがあります。",
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
          <span className="text-coral font-medium tracking-wider text-sm">PROBLEM</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
            見えない困難を、見える支え合いへ
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            身体障害や内部疾患を抱える方々が日常生活で直面する課題。
            それは、周囲からは見えにくく、理解されにくいものです。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className="group relative bg-background rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <problem.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-foreground font-medium">
            <span className="text-coral font-display font-bold">ミエリンク</span>は、
            これらの課題を解決するために生まれました。
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
