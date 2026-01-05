import { motion } from "framer-motion";
import { ShieldCheck, Server, Lock, BrainCircuit, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";

const securityFeatures = [
  {
    icon: Server,
    title: "SOC 2 Compliant Infrastructure",
    description: "Hosted on AWS/GCP regions that maintain ISO 27001 and SOC 2 Type II certifications. We stand on the shoulders of giants."
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Data is encrypted in transit via TLS 1.3 and at rest using AES-256. Sensitive tokens and keys are stored in dedicated secrets managers."
  },
  {
    icon: BrainCircuit,
    title: "Proprietary Data Isolation",
    description: "We do not train public or foundation models on your private data. Your trade secrets and vendor relationships remain strictly confidential."
  },
  {
    icon: Activity,
    title: "Daily Backups",
    description: "Point-in-time recovery and automated daily backups ensure your financial history is never lost, even in catastrophic events."
  }
];

const SecurityPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Shield Icon with Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 relative inline-block"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-150" />
            <div className="relative bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl shadow-xl">
              <ShieldCheck className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6"
          >
            Security at Sanyya
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            We treat your scientific and financial data with the same rigor you apply to your research. 
            Security is not an afterthought; it is our foundation.
          </motion.p>
        </div>
      </section>
      
      {/* Security Grid */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg shrink-0">
                    <feature.icon className="w-6 h-6 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Responsible Disclosure */}
      <section className="py-16 px-6 border-t border-slate-100">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold text-slate-900 mb-3">
              Responsible Disclosure
            </h2>
            <p className="text-slate-600">
              Found a vulnerability? Please report it to{" "}
              <a 
                href="mailto:security@sanyya.com" 
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                security@sanyya.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SecurityPage;
