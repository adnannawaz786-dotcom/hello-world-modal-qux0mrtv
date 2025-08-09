import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import { motion } from 'framer-motion';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hello World
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              onClick={openModal}
              className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Click Me
            </Button>
          </motion.div>
        </motion.div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center text-gray-800 mb-4">
                Panthera
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Majestic Lion"
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="text-gray-700 leading-relaxed space-y-3">
                <p className="font-semibold text-lg text-gray-800">
                  Definition of Panthera:
                </p>
                <p>
                  <strong>Panthera</strong> is a genus within the family Felidae that comprises the largest wild cats, commonly known as the "big cats." This genus includes four extant species: lions (Panthera leo), tigers (Panthera tigris), leopards (Panthera pardus), and jaguars (Panthera onca).
                </p>
                <p>
                  These magnificent predators are characterized by their ability to roar, which is made possible by a specialized larynx structure. They are apex predators found across various continents and play crucial ecological roles in their respective ecosystems.
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
}