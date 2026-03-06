import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-20">
      {/* Hero Section */}
      <div className="bg-white pt-32 pb-16 px-6 border-b border-slate-200 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-60 -ml-20 -mt-20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-6 leading-tight">
            Get in <span className="text-green-600">Touch</span> with Us
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about a scheme or need help with our AI tools? Our team is here to support you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 grid lg:grid-cols-3 gap-8">
        {/* Contact Info Cards */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex items-start gap-5">
            <div className="bg-green-600 p-4 rounded-2xl text-white shadow-lg shadow-green-200">
              <Mail size={24} />
            </div>
            <div>
              <h4 className="text-lg font-black text-slate-800 uppercase tracking-tighter mb-1">Email Us</h4>
              <p className="text-slate-500 text-sm">support@krishicare.com</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex items-start gap-5">
            <div className="bg-slate-900 p-4 rounded-2xl text-white shadow-lg">
              <Phone size={24} />
            </div>
            <div>
              <h4 className="text-lg font-black text-slate-800 uppercase tracking-tighter mb-1">Call Us</h4>
              <p className="text-slate-500 text-sm">1800-180-1551 (Toll Free)</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex items-start gap-5">
            <div className="bg-green-500 p-4 rounded-2xl text-white shadow-lg shadow-green-200">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="text-lg font-black text-slate-800 uppercase tracking-tighter mb-1">Location</h4>
              <p className="text-slate-500 text-sm leading-relaxed">OUAT Campus, Siripur,<br/>Bhubaneswar, Odisha 751003</p>
            </div>
          </div>

          <div className="bg-slate-900 p-8 rounded-[2rem] text-white shadow-xl flex items-start gap-5">
            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md">
              <Clock size={24} className="text-green-400" />
            </div>
            <div>
              <h4 className="text-lg font-black uppercase tracking-tighter mb-1">Support Hours</h4>
              <p className="text-slate-300 text-sm">Mon - Sat: 9 AM - 6 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50">
          <h3 className="text-3xl font-black text-slate-800 mb-8 tracking-tight">Send a <span className="text-green-600">Message</span></h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-2">Subject</label>
              <input 
                type="text" 
                placeholder="How can we help?" 
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-2">Message</label>
              <textarea 
                rows="5" 
                placeholder="Write your message here..." 
                className="w-full px-6 py-4 rounded-3xl bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-green-600 transition-all shadow-xl shadow-slate-900/10 active:scale-[0.98]"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;