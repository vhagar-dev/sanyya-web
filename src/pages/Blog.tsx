import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SanyyaLogo from "@/components/SanyyaLogo";
import phantomBurnCover from "@/assets/phantom-burn-cover.png";
import rdParadoxCover from "@/assets/rd-paradox-cover.png";
import threeWayMatchCover from "@/assets/3way-match-cover.png";
const blogPosts = [
  {
    id: "phantom-burn",
    title: "The Phantom Burn That Kills Hardware Startups",
    excerpt:
      "I spent 10 years in Operations. Here is why the standard way of managing spend is broken, and why you shouldn't wait until Series B to fix it.",
    date: "December 6, 2025",
    readTime: "8 min read",
    category: "Founder's Note",
  },
  {
    id: "3-way-match-guide",
    title: "The Anatomy of a Transaction: A Founder's Guide to the 3-Way Match",
    excerpt:
      "Why you failed due diligence: A deep dive into the hidden mechanics of PO compliance, 3-way matching, and why spreadsheets fail after your Series A.",
    date: "December 6, 2025",
    readTime: "6 min read",
    category: "Insights",
  },
  {
    id: "1",
    title: "The R&D Spend Paradox: Why the World's Most Innovative Teams Are Stuck with the Oldest Tools",
    excerpt:
      "We live in a golden age of scientific acceleration, yet financial tools are stuck in the past. Discover why we built Sanyya to bridge the gap between R&D innovation and financial control.",
    date: "December 4, 2025",
    readTime: "5 min read",
    category: "Founder's Note",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 mesh-gradient" />

        {/* Floating Orbs */}
        <div className="absolute top-20 -left-32 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute top-32 right-0 w-72 h-72 bg-violet-400/15 rounded-full blur-3xl" />

        {/* Financial Grid */}
        <div className="absolute inset-0 financial-grid pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Insights & <span className="gradient-text-aurora">Updates</span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Thoughts on intelligent finance, semantic reconciliation, and the future of R&D procurement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="pt-16 pb-12 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-50 to-blue-50 text-violet-700 border border-violet-200/50 text-sm font-medium">
              <Sparkles className="w-3.5 h-3.5 text-violet-500" />
              Latest
            </span>
          </motion.div>

          {/* Featured Post - First Post */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to={`/blog/${blogPosts[0].id}`} className="block group">
              <div className="glass-card p-8 md:p-12 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                  <div className="lg:w-2/5">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/50 shadow-lg">
                      <img 
                        src={phantomBurnCover} 
                        alt="Phantom Burn illustration" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                    </div>
                  </div>

                  <div className="lg:w-3/5">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-violet-100 to-cyan-100 text-violet-700 border border-violet-200/50 mb-4">
                      {blogPosts[0].category}
                    </span>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight tracking-tight group-hover:text-cyan-600 transition-colors duration-300">
                      {blogPosts[0].title}
                    </h2>

                    <p className="mt-5 text-slate-600 text-lg leading-relaxed">{blogPosts[0].excerpt}</p>

                    <div className="mt-6 flex flex-wrap items-center gap-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {blogPosts[0].date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          {blogPosts[0].readTime}
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 group-hover:gap-3 transition-all duration-300">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        </div>
      </section>

      {/* Other Posts Grid */}
      {blogPosts.length > 1 && (
        <section className="pb-24 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold text-foreground">More Articles</h3>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.slice(1).map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <Link to={`/blog/${post.id}`} className="block group h-full">
                    <div className="glass-card p-6 md:p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-emerald-500 to-blue-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Cover Image */}
                      <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-5 border border-slate-200/50">
                        <img 
                          src={post.id === "1" ? rdParadoxCover : post.id === "3-way-match-guide" ? threeWayMatchCover : phantomBurnCover} 
                          alt={post.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                      </div>

                      <span className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                        post.category === "Insights" 
                          ? "bg-gradient-to-r from-emerald-100 to-cyan-100 text-emerald-700 border border-emerald-200/50"
                          : "bg-gradient-to-r from-violet-100 to-cyan-100 text-violet-700 border border-violet-200/50"
                      }`}>
                        {post.category}
                      </span>

                      <h2 className="text-xl md:text-2xl font-bold text-foreground leading-tight tracking-tight group-hover:text-cyan-600 transition-colors duration-300">
                        {post.title}
                      </h2>

                      <p className="mt-4 text-slate-600 leading-relaxed flex-grow">{post.excerpt}</p>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>

                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 group-hover:gap-3 transition-all duration-300">
                          Read
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coming Soon Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="glass-card max-w-2xl mx-auto p-10 md:p-14">
              <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/25">
                <Sparkles className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                More Insights Coming Soon
              </h3>

              <p className="mt-4 text-slate-600 max-w-md mx-auto leading-relaxed">
                We're crafting more articles on intelligent finance, R&D operations, and the future of procurement. Stay
                tuned.
              </p>

              <Link
                to="/#pioneer"
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-semibold shadow-lg shadow-slate-900/15 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 shine-effect"
              >
                Join the Pioneer Program
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
