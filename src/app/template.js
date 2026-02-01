'use client';

import { motion } from 'framer-motion';

export default function Template({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
                duration: 0.4,
                ease: [0.645, 0.045, 0.355, 1.000] // "Cubic-Bezier" optimized for smoothness
            }}
            style={{ width: '100%', height: '100%' }}
        >
            {children}
        </motion.div>
    );
}
