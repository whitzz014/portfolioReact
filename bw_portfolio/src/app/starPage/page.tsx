import Image from "next/image";
import jimHalpert from '../assets/jimHalpert.jpg';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="firstPage text-shadow">
      <div className="nameplace">
        <h1 className="text-5xl font-black">Brock Whitson</h1>
        <p>Software Developer</p>
      </div>
      
      <Image alt="Brock Whitson" src={jimHalpert}  />
    </main>
  );
}
