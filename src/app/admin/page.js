export default function AdminDashboard() {
    return (
        <main style={{ backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
            <nav style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>Dar Al Arafa Admin</span>
                <span>Admin User</span>
            </nav>

            <div className="container" style={{ padding: '2rem 1rem' }}>
                <h1 className="heading-lg" style={{ marginBottom: '2rem' }}>Dashboard</h1>

                <div className="grid-3" style={{ marginBottom: '2rem' }}>
                    <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)' }}>12</div>
                        <div style={{ opacity: 0.7 }}>New Quotes</div>
                    </div>
                    <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--secondary)' }}>5</div>
                        <div style={{ opacity: 0.7 }}>Pending Orders</div>
                    </div>
                    <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', fontWeight: 700, color: '#10B981' }}>28</div>
                        <div style={{ opacity: 0.7 }}>Completed Projects</div>
                    </div>
                </div>

                <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid #eee', fontWeight: 600 }}>Recent Inquiries</div>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead style={{ backgroundColor: '#f9fafb', textAlign: 'left' }}>
                            <tr>
                                <th style={{ padding: '1rem', fontSize: '0.875rem' }}>Date</th>
                                <th style={{ padding: '1rem', fontSize: '0.875rem' }}>Client</th>
                                <th style={{ padding: '1rem', fontSize: '0.875rem' }}>Service</th>
                                <th style={{ padding: '1rem', fontSize: '0.875rem' }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Mock Data */}
                            <tr style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: '1rem' }}>Oct 24</td>
                                <td style={{ padding: '1rem' }}>Acme Corp</td>
                                <td style={{ padding: '1rem' }}>Printing</td>
                                <td style={{ padding: '1rem' }}><span style={{ backgroundColor: '#FEF3C7', color: '#D97706', padding: '0.25rem 0.5rem', borderRadius: '999px', fontSize: '0.75rem' }}>Pending</span></td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: '1rem' }}>Oct 23</td>
                                <td style={{ padding: '1rem' }}>Global Tech</td>
                                <td style={{ padding: '1rem' }}>Graphic Design</td>
                                <td style={{ padding: '1rem' }}><span style={{ backgroundColor: '#D1FAE5', color: '#059669', padding: '0.25rem 0.5rem', borderRadius: '999px', fontSize: '0.75rem' }}>Completed</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}
