"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminDashboard() {
    const [data, setData] = useState({ services: {}, portfolio: [] });
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('portfolio'); // 'portfolio' or 'services'
    const [saving, setSaving] = useState(false);
    const router = useRouter();

    useEffect(() => {
        fetch('/api/content')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const handleSave = async () => {
        setSaving(true);
        const res = await fetch('/api/content', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        setSaving(false);
        if (res.ok) alert('Changes Saved!');
        else alert('Error saving changes.');
    };

    // --- Helpers for Portfolio ---
    const addPortfolioItem = () => {
        const newItem = {
            id: Date.now(),
            title: "New Project",
            category: "Graphic Design",
            image: "/assets/p-brand.jpg"
        };
        setData(prev => ({
            ...prev,
            portfolio: [newItem, ...prev.portfolio]
        }));
    };

    // Auto-save helper
    const saveToBackend = async (newData) => {
        setSaving(true);
        try {
            const res = await fetch('/api/content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newData),
            });
            if (!res.ok) throw new Error("Failed to save");
            setSaving(false);
            return true;
        } catch (error) {
            console.error(error);
            alert("Error saving data");
            setSaving(false);
            return false;
        }
    };

    const updatePortfolioItem = (id, field, value) => {
        setData(prev => ({
            ...prev,
            portfolio: prev.portfolio.map(item => item.id === id ? { ...item, [field]: value } : item)
        }));
    };

    const deletePortfolioItem = async (id) => {
        if (!confirm("Are you sure you want to delete this item?")) return;

        // Calculate new state
        const newPortfolio = data.portfolio.filter(item => item.id !== id);
        const newData = { ...data, portfolio: newPortfolio };

        // Update UI immediately (Optimistic)
        setData(newData);

        // Save to backend
        await saveToBackend(newData);
    };

    const handleImageUpload = async (e, itemId) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            setSaving(true);
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            });
            const uploadData = await res.json();

            if (uploadData.success) {
                // Update state AND save to DB immediately
                const newPortfolio = data.portfolio.map(item =>
                    item.id === itemId ? { ...item, image: uploadData.url } : item
                );
                const newData = { ...data, portfolio: newPortfolio };

                setData(newData);
                saveToBackend(newData); // Auto-save after upload
            } else {
                alert("Upload failed");
                setSaving(false);
            }
        } catch (err) {
            console.error(err);
            alert("Upload error");
            setSaving(false);
        }
    };

    if (loading) return <div style={{ color: 'white', padding: '2rem' }}>Loading Admin...</div>;

    return (
        <div style={{ minHeight: '100vh', background: '#0f1f3d', color: 'white' }}>
            {/* Header */}
            <header style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Admin Dashboard</h1>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link href="/" target="_blank" style={{ color: 'var(--secondary)' }}>View Site ↗</Link>
                    <button onClick={handleSave} disabled={saving} className="btn btn-primary">
                        {saving ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </header>

            <div className="container" style={{ padding: '2rem 1rem' }}>
                {/* Tabs */}
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                    <button
                        onClick={() => setActiveTab('portfolio')}
                        style={{
                            padding: '0.75rem 1.5rem',
                            background: activeTab === 'portfolio' ? 'var(--secondary)' : 'rgba(255,255,255,0.1)',
                            color: activeTab === 'portfolio' ? 'black' : 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 600,
                            cursor: 'pointer'
                        }}>
                        Portfolio
                    </button>
                    {/* Services editing can be complex due to object structure, focusing on Portfolio first as it's a list */}
                    <button
                        onClick={() => alert("Service editing is locked for safety. Edit portfolio first.")}
                        style={{
                            padding: '0.75rem 1.5rem',
                            background: 'rgba(255,255,255,0.05)',
                            color: 'rgba(255,255,255,0.5)',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: 600,
                            cursor: 'not-allowed'
                        }}>
                        Services (Coming Soon)
                    </button>
                </div>

                {/* Portfolio Editor */}
                {activeTab === 'portfolio' && (
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <h2>Manage Portfolio</h2>
                            <button onClick={addPortfolioItem} style={{ background: '#22c55e', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}>+ Add Item</button>
                        </div>

                        <div style={{ overflowX: 'auto', background: 'rgba(0,0,0,0.2)', borderRadius: '12px', padding: '1rem' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white' }}>
                                <thead>
                                    <tr style={{ background: 'rgba(255,255,255,0.05)', textAlign: 'left' }}>
                                        <th style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Image</th>
                                        <th style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Title</th>
                                        <th style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Category</th>
                                        <th style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.portfolio.map(item => (
                                        <tr key={item.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                            <td style={{ padding: '0.75rem' }}>
                                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '80px' }}>
                                                    <div style={{ width: '60px', height: '60px', position: 'relative', borderRadius: '6px', overflow: 'hidden', background: '#333' }}>
                                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                                        <img src={item.image} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                    </div>
                                                    <label style={{
                                                        fontSize: '0.7rem',
                                                        textAlign: 'center',
                                                        background: 'rgba(255,255,255,0.1)',
                                                        padding: '2px 4px',
                                                        borderRadius: '4px',
                                                        cursor: 'pointer',
                                                        border: '1px solid rgba(255,255,255,0.2)'
                                                    }}>
                                                        Change
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            style={{ display: 'none' }}
                                                            onChange={(e) => handleImageUpload(e, item.id)}
                                                        />
                                                    </label>
                                                </div>
                                            </td>
                                            <td style={{ padding: '0.75rem' }}>
                                                <input
                                                    value={item.title}
                                                    onChange={(e) => updatePortfolioItem(item.id, 'title', e.target.value)}
                                                    style={{ width: '100%', padding: '0.5rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }}
                                                />
                                            </td>
                                            <td style={{ padding: '0.75rem' }}>
                                                <input
                                                    value={item.category}
                                                    onChange={(e) => updatePortfolioItem(item.id, 'category', e.target.value)}
                                                    style={{ width: '100%', padding: '0.5rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '4px' }}
                                                />
                                            </td>
                                            <td style={{ padding: '0.75rem' }}>
                                                <button onClick={() => deletePortfolioItem(item.id)} style={{ padding: '0.5rem 1rem', background: 'rgba(239, 68, 68, 0.2)', color: '#ef4444', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
