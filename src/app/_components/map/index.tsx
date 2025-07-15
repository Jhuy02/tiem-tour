import Image from "next/image";
import Link from "next/link";

export default function Map() {
    return (
        <section className="relative w-full">
            <Image className="absolute top-0 left-0 right-0 w-full h-[65.10163rem]" src={'/home/map/bg-section.webp'} alt="" width={1600} height={1041} />
            <h2 className="font-dvnLuckiestGuy text-[2.75rem] text-tittleGreen leading-[1.3]">Tiềm Tours delivers exciting trips while promoting local culture, ensuring unforgettable experiences for travelers.</h2>
            <Link href="/" className="rounded-[3.125rem] flex ">
                <p className="text-white text-[1.125rem] font-dvnLuckiestGuy leading-[1.2]">About TIỀM</p>
                <Image src={'/home/map/icon-arrow.webp'} alt="" width={40} height={40} />
            </Link>
        </section>
    )
}
