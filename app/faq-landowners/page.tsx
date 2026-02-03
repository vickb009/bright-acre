"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // <-- add framer-motion for animation

interface FAQItem {
  question: string;
  answer: string;
  image?: string;
}

// All FAQ sections and rephrased answers
const faqSections: { title: string; faqs: FAQItem[] }[] = [
  {
    title: "Leasing Process and General Questions",
    faqs: [
      {
        question: "What is the overall process for leasing my land to a solar developer?",
        answer:
          "Every solar project follows a few key steps: legal checks on your land, site studies including technical and environmental evaluations, construction, and then operations where your land generates long-term income. We handle all the heavy lifting for you.",
        image: "/images/Faq/landowner-faq.jpg"
      },
      {
        question: "How long does it take to build a solar farm?",
        answer:
          "Construction time depends on the farm size and site preparation. Small farms may take a month, while very large sites could take up to 18 months. Planning and development may add extra months before construction starts."
      },
      {
        question: "What happens after my lease expires?",
        answer:
          "Solar panels last up to 35 years, though leases are typically 20–25 years. After expiration, the solar farm can be removed at the operator’s expense, or the lease may be renewed with potential upgrades to the system."
      },
      {
        question: "What if I currently lease part of my land for farming or ranching?",
        answer:
          "You’ll need to coordinate with current tenants to wind down activities. Most developers allow several months’ notice before any changes are required."
      },
      {
        question: "Can my home be powered by the solar farm?",
        answer:
          "No, solar farms connect to the high-voltage grid and cannot directly power individual homes."
      },
      {
        question: "Is leasing my land the same as renting it?",
        answer:
          "Not exactly. Rentals are short-term, but solar leases are long-term contracts designed for electricity production, usually 20+ years."
      }
    ]
  },
  {
    title: "About Your Land",
    faqs: [
      {
        question: "What if there are buildings or structures on my land?",
        answer:
          "Developers often work around existing structures you want to keep. Unused small structures can be removed at the developer’s expense."
      },
      {
        question: "Will the solar farm have a fence?",
        answer:
          "Yes, fencing ensures safety and liability protection. You can discuss placement or appearance concerns with the developer."
      },
      {
        question: "Will my land be permanently affected?",
        answer:
          "No. Solar farms don’t use harmful chemicals or emissions. Construction impacts are temporary and mostly from equipment and vehicles."
      },
      {
        question: "Are there health risks to my family or community?",
        answer:
          "Absolutely not. Solar farms are safe and silent, producing no harmful emissions or noise."
      }
    ]
  },
  {
    title: "Working With Solar Developers",
    faqs: [
      {
        question: "What if the solar developer cannot complete the project?",
        answer:
          "This is rare. Developers usually post a bond or financial guarantee to cover costs if the project cannot be completed, ensuring your property is restored."
      }
    ]
  },
  {
    title: "Submitting and Managing Your Information",
    faqs: [
      {
        question: "How do I submit information for multiple properties?",
        answer:
          "Use a separate form for each property. Additional forms can be submitted anytime through our website."
      },
      {
        question: "Can I update information after submitting a form?",
        answer:
          "Previously submitted forms cannot be edited. Submit a new form with updated information and note that it is an update."
      },
      {
        question: "How do I remove my records from the database?",
        answer:
          "Use our contact form to request removal, and your property information will no longer be promoted to developers."
      }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "32px", fontWeight: 700, color: "var(--primary)", marginBottom: "30px" }}>
        Frequently Asked Questions
      </h1>

      {faqSections.map((section, sIndex) => (
        <div key={sIndex} style={{ marginBottom: "30px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: 600, color: "var(--secondary)", marginBottom: "15px" }}>
            {section.title}
          </h2>

          {section.faqs.map((faq, index) => {
            const globalIndex = sIndex * 100 + index;

            return (
              <div key={globalIndex} style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                marginBottom: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
              }}>
                {/* Question row */}
                <div
                  onClick={() => toggleFAQ(globalIndex)}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    padding: "15px 20px",
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "var(--text-dark)",
                    backgroundColor: "var(--background-soft)"
                  }}
                >
                  <span>{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === globalIndex ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "var(--primary)"
                    }}
                  >
                    +
                  </motion.span>
                </div>

                {/* Answer with animation */}
                <AnimatePresence initial={false}>
                  {openIndex === globalIndex && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        padding: "15px 20px",
                        fontSize: "16px",
                        lineHeight: 1.6,
                        color: "var(--text-dark)",
                        backgroundColor: "white",
                        overflow: "hidden"
                      }}
                    >
                      <p>{faq.answer}</p>
                      {faq.image && (
                        <Image
                          src={faq.image}
                          alt={faq.question}
                          width={800}
                          height={400}
                          style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "cover",
                            borderRadius: "8px",
                            marginTop: "10px"
                          }}
                        />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
