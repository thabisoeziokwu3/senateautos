import Link from 'next/link';
export const metadata = { title: 'Page not found', robots: { index: false } };
export default function NotFound() {
  return (<section style={{ paddingTop: 160, minHeight: '80vh' }}><div className="wrap">
    <h1 style={{ marginBottom: 16 }}>Page not found</h1>
    <p>That page does not exist. Head back and keep exploring.</p>
    <p style={{ marginTop: 24 }}><Link className="btn solid" href="/">Back to home</Link></p>
  </div></section>);
}
