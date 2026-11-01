import { Notice } from '@/components/Bits';
import GalleryGrid from '@/components/GalleryGrid';
export const metadata = { title: 'Gallery | Luxury & Exotic Cars from Partner Dealerships', description: 'Photos of luxury and exotic cars from Senate Autos’ verified partner dealerships in Nigeria. These cars belong to partner dealerships, not Senate Autos.', alternates: { canonical: '/gallery/' } };
const G = [
  ['showroom-lineup-1', 'Lamborghini Huracán, Mercedes-AMG SL and Ferrari Purosangue in a partner showroom', 720, 1280],
  ['cullinan-urus', 'Rolls-Royce Cullinan beside a white Lamborghini Urus', 720, 1280],
  ['maybach', 'Black Mercedes S-Class at a partner dealership', 720, 1280],
  ['ferrari-sl', 'Ferrari Purosangue and Mercedes-AMG SL 63 in a showroom', 720, 1280],
  ['sports-car', 'Black Audi R8 on an Abuja bridge at sunset', 720, 1280],
  ['yard-lineup', 'Lamborghini Urus, Mercedes-AMG E63 and Porsche Cayenne at a dealership yard', 720, 1280],
  ['ornament', 'Rolls-Royce Spirit of Ecstasy ornament and grille', 720, 1280],
  ['huracan', 'White Lamborghini Huracán Spyder front', 720, 1280],
  ['showroom-1', 'Rolls-Royce Cullinan and green electric sedan in a showroom', 878, 1560],
  ['luxury-coupe', 'Black Rolls-Royce coupe with carbon bonnet at a partner dealership', 720, 1280],
  ['urus', 'White Lamborghini Urus front in a partner showroom', 720, 1280],
  ['gle-street', 'Black Mercedes-AMG GLE Coupe parked in Nigeria', 720, 1080],
  ['cullinan-wheel', 'Rolls-Royce Cullinan wheel and fender', 720, 1280],
  ['mansion-fleet', 'Mercedes S-Class and BMW 4 Series at a partner dealer compound', 720, 1190],
  ['huracan-rear', 'White Lamborghini Huracán Spyder rear', 720, 1280],
  ['electric-sedan', 'Silver electric sedan in a marble-floor showroom', 720, 1280],
  ['showroom-lineup-3', 'Mercedes-AMG SL and Ferrari in a partner showroom', 720, 1280],
  ['night-yard', 'Yellow Lamborghini Urus, Mercedes-AMG G-Class and AMG GT at night', 720, 1280],
  ['carport-lexus', 'Mercedes-AMG GT 4-Door and Lexus LX under a carport', 720, 1280],
  ['g-wagon-ghost', 'Mercedes-AMG G-Class and white Rolls-Royce at a partner dealer', 720, 1160],
  ['merc-door', 'Mercedes-Benz at night with door-projected logo', 720, 1280],
];
export default function Gallery() {
  return (<section style={{ paddingTop: 140 }}><div className="wrap">
    <h1 style={{ marginBottom: 24 }}>Gallery</h1>
    <Notice />
    <p style={{ margin: '24px 0' }}>Tap a photo to enlarge it.</p>
    <video className="reel" controls muted playsInline preload="none" poster="/images/showroom-lineup-1.jpeg" aria-label="Showreel of luxury cars at partner dealerships"><source src="/showreel.mp4" type="video/mp4" /></video>
    <GalleryGrid items={G} />
  </div></section>);
}
