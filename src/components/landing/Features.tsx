import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Activity,
  Share2,
  Bell,
  Users,
  Map,
  BarChart3,
} from "lucide-react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Activity,
      title: "体調の可視化",
      description:
        "スマートウォッチのセンサーで心拍数や活動量を取得。日々の体調をグラフで確認し、セルフマネジメントに活用できます。",
      color: "bg-coral",
    },
    {
      icon: Share2,
      title: "体調カード共有",
      description:
        "疾患・障害の情報、今日の体調、必要なサポートをカードにまとめ、リンクやBluetoothで周囲に共有できます。",
      color: "bg-rose",
    },
    {
      icon: Bell,
      title: "リアルタイム通知",
      description:
        "センサー値が異常を検知すると自動でアラート。介助者や家族への通知も設定可能です。",
      color: "bg-secondary",
    },
    {
      icon: Users,
      title: "介助者連携",
      description:
        "家族や介助者とリアルタイムで体調データを共有。離れていても安心を届けます。",
      color: "bg-coral-light",
    },
    {
      icon: Map,
      title: "位置共有",
      description:
        "マップで現在地を共有。外出時も家族が見守ることができ、緊急時の対応をサポートします。",
      color: "bg-rose-light",
    },
    {
      icon: BarChart3,
      title: "休息サポート",
      description:
        "体調データと行動スケジュールから、最適な休息タイミングを提案。疲労の蓄積を防ぎます。",
      color: "bg-peach",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-coral font-medium tracking-wider text-sm">FEATURES</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-4 mb-6">
            ミエリンクができること
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            スマートウォッチとスマートフォンを連携させ、
            あなたの体調管理と周囲とのコミュニケーションをサポートします。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden"
            >
              {/* Background accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${feature.color} opacity-10 rounded-bl-[100px] transition-all duration-300 group-hover:opacity-20`} />
              
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-5`}>
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
