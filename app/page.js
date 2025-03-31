import Image from 'next/image';
import { sanityClient } from '../lib/sanity';

const query = `*[_type == "homePage"]{
  title,
  tag,
  "imageUrl": image.asset->url
}`;

export default async function HomePage() {
  const homepageData = await sanityClient.fetch(query);

  const getImageByTag = (tag) =>
    homepageData.find((img) => img.tag === tag)?.imageUrl;

  const heroImageUrl = getImageByTag('hero');
  const logoImageUrl = getImageByTag('logo');
  const searchImageUrl = getImageByTag('search');
  const transcriptImageUrl = getImageByTag('transcript');
  const metadataImageUrl = getImageByTag('metadata');
  const micImageUrl = getImageByTag('mic');
  const climbImageUrl = getImageByTag('climb');
  const appleImageUrl = getImageByTag('apple');
  const spotifyImageUrl = getImageByTag('spotify');
  const girlImageUrl = getImageByTag('girl');

  return (
    <main className="w-full">
      {/* Nav Section */}
      <section className="w-full bg-[#FFF8F0] h-16 flex items-center justify-between px-6 sm:px-10">
        {/* Left side: Logo + Title */}
        <div className="flex items-center space-x-2">
          {logoImageUrl && (
            <Image
              src={logoImageUrl}
              alt="Podrank logo"
              width={40}
              height={40}
              className="h-auto w-auto"
            />
          )}
          <span className="text-xl font-semibold">
            <span style={{ color: '#372B47' }}>Pod</span>
            <span style={{ color: '#C18521' }}>Rank</span>
          </span>
        </div>

        {/* Right side: Nav links */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-[#372B47] text-[16px] font-semibold hover:text-[#C18521] font-[Montserrat]"
          >
            About Us
          </a>
          <a
            href="#services"
            className="text-[#372B47] text-[16px] font-semibold hover:text-[#C18521] font-[Montserrat]"
          >
            Services
          </a>
          <a
            href="#audit"
            className="text-[#372B47] text-[16px] font-semibold hover:text-[#C18521] font-[Montserrat]"
          >
            SEO Audit
          </a>
          <a
            href="#contact"
            className="text-[#372B47] text-[16px] font-semibold hover:text-[#C18521] font-[Montserrat]"
          >
            Contact
          </a>
        </nav>
      </section>

      <div>
        <section className="relative w-full h-[750px]">
          {/* Hero image */}
          {heroImageUrl && (
            <Image
              src={heroImageUrl}
              alt="Hero Image"
              fill
              className="object-cover"
              priority
            />
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />

          {/* Text and CTA overlay */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-20 gap-4 text-white">
            <div className="overflow-hidden">
              <p className="text-xs font-regular font-montserrat tracking-widest rise-from-bottom">
                Podcast SEO Optimisation
              </p>
            </div>
            <div className="overflow-hidden">
              <h1 className="text-4xl sm:text-6xl font-extrabold font-poppins rise-from-bottom">
                Grow Your Audience
              </h1>
            </div>

            <button
              className="mt-4 bg-[#8669AD] text-white tracking-wider transition-colors duration-900 hover:bg-white hover:text-black cursor-pointer"
              style={{
                width: '326px',
                height: '57px',
                borderRadius: '15px',
                fontWeight: '500',
                fontSize: '20px',
              }}
            >
              Start Growing Today
            </button>
          </div>
        </section>
      </div>
      <div>
        <section className="bg-gradient-to-b from-[#372B47] to-[#8669AD]">
          <div className="flex flex-col items-center justify-center py-20 text-white px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
              Reach More Listeners
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-center max-w-2xl">
              At Podrank SEO, we specialise in elevating your Podcast’s search
              engine rankings. Our tailored strategies ensure your Podcast
              attracts the organic traffic it deserves.
            </p>
          </div>

          <div className="px-6 pb-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Image 1 */}
            <div className="relative flex flex-col items-center text-center group cursor-pointer">
              <div className="w-full max-w-[283px] aspect-square overflow-hidden rounded-lg relative">
                {/* Image */}
                <Image
                  src={searchImageUrl}
                  alt="Image 1"
                  width={283}
                  height={283}
                  className="object-cover rounded-lg"
                />

                {/* Overlay background (slides down) */}
                <div
                  className="absolute inset-0 bg-white bg-opacity-70 transition-transform duration-1000 transform group-hover:translate-y-full"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                ></div>

                {/* Text overlay (stays centered, fades out only) */}
                <p
                  className="absolute inset-0 flex items-center justify-center text-[#372B47] font-montserrat font-semibold text-lg sm:text-xl md:text-2xl
             opacity-100 transition-opacity  group-hover:opacity-0 duration-[1000ms] pointer-events-none"
                >
                  Search Visibility
                </p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative flex flex-col items-center text-center group cursor-pointer">
              <div className="w-full max-w-[283px] aspect-square overflow-hidden rounded-lg relative">
                {/* Image */}
                <Image
                  src={transcriptImageUrl}
                  alt="Image 2"
                  width={283}
                  height={283}
                  className="object-cover rounded-lg"
                />

                {/* Overlay background (slides down) */}
                <div
                  className="absolute inset-0 bg-white bg-opacity-70 transition-transform duration-1000 transform group-hover:translate-y-full"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                ></div>

                {/* Text overlay (stays centered, fades out only) */}
                <p
                  className="absolute inset-0 flex items-center justify-center text-[#372B47] font-montserrat font-semibold text-lg sm:text-xl md:text-2xl
             opacity-100 transition-opacity  group-hover:opacity-0 duration-[1000ms] pointer-events-none"
                >
                  Transcrition And Show Notes
                </p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative flex flex-col items-center text-center group cursor-pointer">
              <div className="w-full max-w-[283px] aspect-square overflow-hidden rounded-lg relative">
                {/* Image */}
                <Image
                  src={metadataImageUrl}
                  alt="Image 3"
                  width={283}
                  height={283}
                  className="object-cover rounded-lg"
                />

                {/* Overlay background (slides down) */}
                <div
                  className="absolute inset-0 bg-white bg-opacity-70 transition-transform duration-1000 transform group-hover:translate-y-full"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
                ></div>

                {/* Text overlay (stays centered, fades out only) */}
                <p
                  className="absolute inset-0 flex items-center justify-center text-[#372B47] font-montserrat font-semibold text-lg sm:text-xl md:text-2xl
             opacity-100 transition-opacity  group-hover:opacity-0 duration-[1000ms] pointer-events-none"
                >
                  Optimising Metadata
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FFF8F0] py-20 px-6 relative">
          {/* Title */}
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold font-montserrat text-[#372B47] mb-16">
            What our customers have said...
          </h2>

          {/* Grid layout 2x2: left col = left-aligned, right col = right-aligned */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-24 relative z-10">
            {/* Left Column */}
            <div className="space-y-16">
              {/* Testimonial 1 */}
              <div className="text-left space-y-4 max-w-[350px] font-montserrat">
                <div className="flex gap-1 text-[#C18521] text-xl">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="italic text-lg text-[#372B47]">
                  &quot;Podrank SEO transformed our online presence. Their
                  expertise led to a significant increase in our website traffic
                  and conversions.&quot;
                </p>
                <p className="font-semibold mb-0 text-[#372B47]">Jane Doe</p>
                <p className="text-[#372B47] text-xs">
                  Marketing Director, Mystery Pod
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="text-left space-y-4 max-w-[350px] font-montserrat">
                <div className="flex gap-1 text-[#C18521] text-xl">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="italic text-lg text-[#372B47]">
                  &quot;Professional, effective, and fast! My podcast gained
                  traction in weeks thanks to their SEO expertise. Highly
                  recommend!&quot;
                </p>
                <p className="font-semibold mb-0 text-[#372B47]">
                  Barry Simpson
                </p>
                <p className="text-[#372B47] text-xs">
                  Marketing Director, PodFinder
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col items-end space-y-16">
              {/* Testimonial 3 */}
              <div className="text-right space-y-4 max-w-[350px] font-montserrat">
                <div className="flex justify-end gap-1 text-[#C18521] text-xl">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="italic text-lg text-[#372B47]">
                  &quot;This SEO podcast service skyrocketed my rankings on
                  Apple and Spotify! More listeners, better
                  visibility—absolutely worth it!&quot;
                </p>
                <p className="font-semibold mb-0 text-[#372B47]">
                  Timothy Garbrant
                </p>
                <p className="text-[#372B47] text-xs">
                  Sales Director, DuckCast
                </p>
              </div>

              {/* Testimonial 4 */}
              <div className="text-right space-y-4 max-w-[350px] font-montserrat">
                <div className="flex justify-end gap-1 text-[#C18521] text-xl">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <p className="italic text-lg font-light text-[#372B47]">
                  &quot;I would recommend PodRank to anyone looking to boost
                  their presence in the Podcast industry. Working with Michael
                  and his team has be...&quot;
                </p>
                <p className="font-semibold mb-0 text-[#372B47]">Simon Smith</p>
                <p className="text-[#372B47] text-xs">
                  Sales Executive, MorningPod
                </p>
              </div>
            </div>
          </div>

          {/* Faint background image in center */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0 pt-40">
            <Image
              src={micImageUrl}
              alt="Microphone"
              width={600}
              height={600}
              className="opacity-10  hidden md:block"
            />
          </div>
        </section>

        <section className="bg-[#372B47] text-white py-24 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE */}
            <div className="space-y-6">
              <p className="text-sm font-montserrat uppercase tracking-widest text-[#C18521]">
                Benefits
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins">
                Climb the Podcast Rankings
              </h2>
              <p className="text-base sm:text-lg font-montserrat text-white leading-relaxed">
                Experience increased online visibility and higher search
                rankings. Our tailored SEO strategies drive targeted traffic to
                your website, enhancing your brand's reach and engagement. Boost
                your visibility on Apple and Spotify Podcast charts.
              </p>

              {/* Button */}
              <button className="mt-4 bg-[#C18521] text-white px-8 py-3 rounded-[15px] text-base font-semibold transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">
                Start Growing
              </button>
            </div>

            {/* RIGHT SIDE - IMAGE GRID */}
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-[15px]">
                <Image
                  src={climbImageUrl}
                  alt="Benefit 1"
                  width={283}
                  height={283}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="aspect-square overflow-hidden rounded-[15px]">
                <Image
                  src={appleImageUrl}
                  alt="Benefit 2"
                  width={283}
                  height={283}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="aspect-square overflow-hidden rounded-[15px]">
                <Image
                  src={spotifyImageUrl}
                  alt="Benefit 3"
                  width={283}
                  height={283}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="aspect-square overflow-hidden rounded-[15px]">
                <Image
                  src={girlImageUrl}
                  alt="Benefit 4"
                  width={283}
                  height={283}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#FFF8F0] px-6 py-16 text-[#372B47]">
          <div className="max-w-7xl mx-auto">
            {/* Logo */}
            <div className="mb-12 flex items-center space-x-4">
              <Image
                src={logoImageUrl}
                alt="Benefit 4"
                width={50} // or a smaller size than 283
                height={50}
                className=""
              />
              <h2 className="text-2xl font-bold font-montserrat flex">
                <span className="text-[#372B47]">Pod</span>
                <span className="text-[#C18521]">Rank</span>
              </h2>
            </div>

            {/* Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#D9D9D9] pt-12 md:flex md:gap-12">
              {/* Column 1 */}
              <div className="flex-1 space-y-4">
                <h3 className="uppercase font-bold tracking-wider text-sm">
                  Company
                </h3>
                <ul className="space-y-2 text-sm font-light">
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Team</li>
                  <li>Contact</li>
                </ul>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:block w-px bg-[#D9D9D9]"></div>

              {/* Column 2 */}
              <div className="flex-1 space-y-4">
                <h3 className="uppercase font-bold tracking-wider text-sm">
                  Services
                </h3>
                <ul className="space-y-2 text-sm font-light">
                  <li>SEO Audit</li>
                  <li>Content Strategy</li>
                  <li>Podcast Transcripts</li>
                  <li>Analytics</li>
                </ul>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:block w-px bg-[#D9D9D9]"></div>

              {/* Column 3 */}
              <div className="flex-1 space-y-4">
                <h3 className="uppercase font-bold tracking-wider text-sm">
                  Resources
                </h3>
                <ul className="space-y-2 text-sm font-light">
                  <li>Blog</li>
                  <li>Help Center</li>
                  <li>Guides</li>
                  <li>Webinars</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
