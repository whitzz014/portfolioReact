import Image from "next/image";
import brockWhitson from '../assets/brockWhitson.jpg';


export default function AboutPage() {


    return (
        <main className="p-24 text-center about">
            <Image className="headshot"
                src={brockWhitson}
                alt="Brock Whitson Headshot"
            />

            <p className="aboutMe">
            I'm Brock Whitson. I'm about to graduate from St. Clair College's Mobile Application Development program. I'm also a professional baseball player. 
            I have a solid background in Java, Swift, PHP, etc.
            </p>

        </main>
    );
  }
  