"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="w-full max-w-6xl mx-auto px-4 sm:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Get In Touch</SectionHeading>
      <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
        Have a project in mind or want to discuss opportunities? I'd love to hear from you.
      </p>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Contact Info */}
        <motion.div 
          className="lg:col-span-2 space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
            <h3 className="text-xl font-bold text-white mb-6">Let's Connect</h3>
            
            <div className="space-y-5">
              <a 
                href="mailto:asam.engen8385@gmail.com" 
                className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all group"
              >
                <div className="p-3 bg-indigo-500/20 rounded-lg group-hover:bg-indigo-500/30 transition-colors">
                  <FaEnvelope className="text-indigo-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium">asam.engen8385@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-xl">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <FaMapMarkerAlt className="text-purple-400 text-xl" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-medium">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-700/50">
              <p className="text-gray-400 text-sm mb-4">Find me on social media</p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/mohamed-asam-733768203/" 
                  target="_blank"
                  className="p-3 bg-slate-700/50 rounded-xl text-gray-400 hover:text-blue-400 hover:bg-slate-700 transition-all"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a 
                  href="https://github.com/Asam8385" 
                  target="_blank"
                  className="p-3 bg-slate-700/50 rounded-xl text-gray-400 hover:text-white hover:bg-slate-700 transition-all"
                >
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8">
            <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
            
            <form
              className="space-y-5"
              action={async (formData) => {
                const { data, error } = await sendEmail(formData);

                if (error) {
                  toast.error(error);
                  return;
                }

                toast.success("Email sent successfully!");
              }}
            >
              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                <input
                  className="w-full h-14 px-5 rounded-xl bg-slate-700/50 border border-slate-600/50 text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none"
                  name="senderEmail"
                  type="email"
                  required
                  maxLength={500}
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Message</label>
                <textarea
                  className="w-full h-40 rounded-xl bg-slate-700/50 border border-slate-600/50 text-white placeholder-gray-500 p-5 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none outline-none"
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  required
                  maxLength={5000}
                />
              </div>
              
              <SubmitBtn />
            </form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
