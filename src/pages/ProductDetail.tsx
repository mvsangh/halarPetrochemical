import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Zap,
  Award,
  Globe,
} from "lucide-react";

import SEO from "@/components/SEO";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { products } from "./Products";

/* -------------------------------- animations -------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

/* ----------------------------------------------------------------------------- */

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const product = products.find((p) => p.slug === slug);
  if (!product) return <Navigate to="/products" replace />;

  const currentIndex = products.findIndex((p) => p.slug === slug);
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
  const nextProduct =
    currentIndex < products.length - 1 ? products[currentIndex + 1] : null;

  const relatedProducts = products
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <Layout>
      <SEO
        title={`${product.name} - Petrochemical Products`}
        description={product.fullDescription.slice(0, 155)}
        keywords={`${product.name}, petrochemical, industrial chemicals`}
      />

      {/* Hero Section */}
      <section
        className="relative flex items-center min-h-[60vh] md:min-h-[70vh] pt-28 pb-16"
        style={{
          backgroundImage: product.backgroundImage
            ? `url(${product.backgroundImage})`
            : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="container-custom relative z-10">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
              { label: product.name },
            ]}
            dark={true}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="w-16 h-16 rounded-xl bg-white/90 flex items-center justify-center text-accent mb-6">
              {product.icon}
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {product.name}
            </h1>

            <p className="text-lg text-white/90">{product.description}</p>
          </motion.div>
        </div>
      </section>

      {/* ============================= MAIN CONTENT ============================ */}

      <section className="section-padding bg-background">
        <div className="container-custom grid lg:grid-cols-3 gap-12">
          {/* ============================= LEFT ============================= */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <ScrollReveal>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-3xl font-display font-bold mb-4">
                  Product Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {product.fullDescription}
                </p>
              </div>
            </ScrollReveal>

            {/* Product DNA */}
            <ScrollReveal>
              <div className="border-l border-border pl-8 space-y-10">
                {[
                  {
                    title: "Purity Grade",
                    desc: "High chemical purity ensures consistent industrial performance.",
                  },
                  {
                    title: "Thermal Stability",
                    desc: "Maintains structure under extreme temperatures.",
                  },
                  {
                    title: "Processing Ease",
                    desc: "Compatible with multiple industrial workflows.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="relative"
                  >
                    <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-accent" />
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* Applications */}
            <ScrollReveal>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-display font-semibold mb-6">
                  Industrial Applications
                </h3>

                <ul className="grid md:grid-cols-2 gap-5">
                  {product.uses.map((use, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ scale: 1.03 }}
                      className="relative overflow-hidden rounded-xl border border-border bg-secondary/30 p-5"
                    >
                      <CheckCircle className="w-6 h-6 text-accent mb-2" />
                      <p className="font-medium">{use}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>


            {/* Prev / Next */}
            <div className="flex justify-between border-t pt-8">
              {prevProduct ? (
                <Link to={prevProduct.href} className="flex gap-3 items-center">
                  <ArrowLeft className="w-5 h-5" />
                  <span>{prevProduct.name}</span>
                </Link>
              ) : (
                <div />
              )}

              {nextProduct && (
                <Link to={nextProduct.href} className="flex gap-3 items-center">
                  <span>{nextProduct.name}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>

          {/* ============================= SIDEBAR ============================= */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              {/* CTA */}
              <div className="rounded-2xl p-8 text-white bg-gradient-to-br from-accent to-pink-600">
                <h3 className="text-xl font-bold mb-3">Need this product?</h3>
                <p className="text-sm text-white/90 mb-6">
                  Get pricing & technical details instantly.
                </p>
                <Link
                  to="/contact"
                  className="block text-center bg-white text-accent font-semibold py-3 rounded-lg"
                >
                  Request Quote
                </Link>
              </div>

              {/* Related */}
              <div className="bg-card border rounded-2xl p-6">
                <h4 className="font-bold mb-4">Related Products</h4>
                <div className="space-y-3">
                  {relatedProducts.map((p) => (
                    <Link
                      key={p.slug}
                      to={p.href}
                      className="flex items-center gap-3 hover:text-accent"
                    >
                      <span className="w-8 h-8 flex items-center justify-center bg-accent/20 rounded">
                        {p.icon}
                      </span>
                      {p.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Floating CTA */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="fixed bottom-6 right-6 hidden lg:block z-50"
      >
        <Link
          to="/contact"
          className="bg-accent text-white px-6 py-4 rounded-full shadow-lg hover:scale-105 transition"
        >
          Get Pricing →
        </Link>
      </motion.div>
    </Layout>
  );
};

export default ProductDetail;
