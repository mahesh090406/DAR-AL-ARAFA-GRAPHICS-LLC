"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
        }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    // Helper to split text for animation
    const splitText = (text) => {
        return text.split(" ").map((word, i) => (
            <motion.span
                key={i}
                style={{ display: "inline-block", marginRight: "0.25em" }}
                variants={wordVariants}
            >
                {word}
            </motion.span>
        ));
    };

    return (
        <section style={{
            position: 'relative',
            minHeight: '90vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '100px',
            color: 'white',
            // Background handled globally/via AnimatedBackground
        }}>
            <div className="container" style={{ position: 'relative', width: '100%' }}>
                <motion.div
                    style={{ maxWidth: '800px' }}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants}>
                        <span style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            backgroundColor: 'rgba(212, 175, 55, 0.1)',
                            color: '#F2C94C',
                            borderRadius: '50px',
                            fontWeight: 600,
                            marginBottom: '1.5rem',
                            backdropFilter: 'blur(5px)',
                            border: '1px solid rgba(212, 175, 55, 0.3)'
                        }}>
                            ✨ #1 Graphic Design & Printing Agency
                        </span>
                    </motion.div>

                    <motion.h1 className="heading-xl" style={{
                        color: 'white',
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        lineHeight: 1.1,
                        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                    }}>
                        {/* Line 1 */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '0.2em' }}>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                style={{ display: 'flex', flexWrap: 'wrap' }}
                            >
                                {splitText("Elevate Your Brand With")}
                            </motion.div>
                        </div>

                        {/* Line 2 */}
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <span style={{ color: 'var(--secondary)', display: 'inline-block' }}>
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    style={{ display: 'flex', flexWrap: 'wrap' }}
                                >
                                    {splitText("Premium Print & Design.")}
                                </motion.div>
                            </span>
                        </div>
                    </motion.h1>

                    <motion.p variants={itemVariants} style={{
                        fontSize: '1.25rem',
                        maxWidth: '600px',
                        marginBottom: '2.5rem',
                        opacity: 0.95,
                        lineHeight: 1.6,
                        color: '#F8FAFC',
                        textShadow: '0 1px 4px rgba(0,0,0,0.6)'
                    }}>
                        From concept to finished product, we provide end-to-end creative solutions for corporate clients who demand excellence.
                    </motion.p>

                    <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <Link href="/quote" className="btn btn-primary" style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)', border: 'none' }}>
                            Start Project
                        </Link>
                        <Link href="/portfolio" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
                            View Our Work
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

        </section>
    );
}
