"use client";

import { useState } from 'react';
import { LayoutGroup, motion } from 'framer-motion';
import ReedemKey from '../components/manageKeys';
import Profile from '../components/profile';
import Manage from '../components/manageUsers';
import Aside from '../components/aside';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('profile');

  return (
    <div className="flex">
      <Aside setActiveSection={setActiveSection} />
      <main className="ml-60 w-full">
        <LayoutGroup>
          {activeSection === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Profile />
            </motion.div>
          )}
          {activeSection === 'manage' && (
            <motion.div
              key="manage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Manage />
            </motion.div>
          )}
          {activeSection === 'reedemKey' && (
            <motion.div
              key="reedemKey"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ReedemKey />
            </motion.div>
          )}
        </LayoutGroup>
      </main>
    </div>
  );
}

export default Dashboard;
