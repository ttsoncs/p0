import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import WorkExperience from "@/components/work-experience"
import FloatingMenu from "@/components/floating-menu"

export default function Home() {
  return (
    <>
      <FloatingMenu />
      <main className="min-h-screen bg-black text-white px-6 sm:px-8 md:px-12 lg:px-24 py-8 sm:py-12 md:py-16 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div id="about" className="pt-16 md:pt-20 grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-6 md:space-y-8 order-2 md:order-1">
            <div className="space-y-1">
              <h1 className="text-3xl md:text-4xl font-bold">Son Trinh</h1>
              <h2 className="text-xl md:text-2xl">C + + Engineer</h2>
            </div>

            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded"></div>
                <span className="text-sm md:text-base">Flexa</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-[#7557FF] rounded flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
                    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 3.5L18 9v6l-6 3-6-3V9l6-3.5z" />
                  </svg>
                </div>
                <span className="text-sm md:text-base">Pitch</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 md:w-6 md:h-6 grid grid-cols-2 grid-rows-2 gap-0.5">
                  <div className="bg-[#F25022]"></div>
                  <div className="bg-[#7FBA00]"></div>
                  <div className="bg-[#00A4EF]"></div>
                  <div className="bg-[#FFB900]"></div>
                </div>
                <span className="text-sm md:text-base">Microsoft</span>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 text-gray-300 text-sm md:text-base">
              <p>
                Hello there! My name is Julius and I'm a Product Designer at{" "}
                <span className="text-white font-medium">Flexa</span>, living in Berlin. I grew up on the internet and
                love computers and software.
              </p>

              <p>
                In my 10 years of experience I have designed User Interfaces and experiences, planned, supported, and
                implemented features and roadmaps, and led cross-functional teams at companies like{" "}
                <span className="text-white font-medium">Pitch</span>,{" "}
                <span className="text-white font-medium">Microsoft</span>, and{" "}
                <span className="text-white font-medium">Native Instruments</span>.
              </p>

              <p>P.S The video on the right is outdated and I am no longer looking for a new role.</p>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-3">
              <Link
                href="#"
                className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-black border border-gray-800 rounded-full hover:bg-gray-900 transition-colors text-sm md:text-base"
              >
                <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                <span>Email</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-black border border-gray-800 rounded-full hover:bg-gray-900 transition-colors text-sm md:text-base"
              >
                <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                <span>Twitter</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-black border border-gray-800 rounded-full hover:bg-gray-900 transition-colors text-sm md:text-base"
              >
                <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                <span>LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-black border border-gray-800 rounded-full hover:bg-gray-900 transition-colors text-sm md:text-base"
              >
                <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4" />
                <span>CV / Resume</span>
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-full border-2 border-gray-700 overflow-hidden">
                <Image
                  src="https://sjc.microlink.io/z7Ow-KBi_J9VF7GScbVO7-XvAJRUqhBsQjpWhaaXEuN2m2avnE177nndOM6OQOshJo26WahKgl-ykST99_JUdw.jpeg"
                  alt="Profile picture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center cursor-pointer">
                  <div className="w-0 h-0 border-t-6 sm:border-t-8 border-t-transparent border-l-9 sm:border-l-12 border-l-black border-b-6 sm:border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 text-center italic text-xs md:text-sm text-gray-400 w-36 md:w-48 transform rotate-6">
                (I am no longer looking for a job but keeping this video up)
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience Sections */}
        <div id="experience" className="mt-16 sm:mt-24 md:mt-32 space-y-16 sm:space-y-20 md:space-y-24">
          {/* Pitch */}
          <WorkExperience
            logo={
              <div className="w-10 h-10 md:w-12 md:h-12 bg-[#7557FF] rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 3.5L18 9v6l-6 3-6-3V9l6-3.5z" />
                </svg>
              </div>
            }
            company="Pitch"
            period="2018 - 2024"
            title="Presentation software for fast-moving teams"
            description="Pitch is a presentation tool that helps people create visually stunning presentations, together, in the browser. I joined the company in 2018 as one of the first designers."
          >
            <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-3 md:space-y-4">
                <h4 className="text-lg md:text-xl font-medium">My Role</h4>
                <p className="text-sm md:text-base text-gray-300">
                  As a Senior Product Designer, I led the design of key features and collaborated with cross-functional
                  teams to deliver a cohesive product experience. I was responsible for the design system, user
                  research, and mentoring junior designers.
                </p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <h4 className="text-lg md:text-xl font-medium">Key Achievements</h4>
                <ul className="text-sm md:text-base text-gray-300 space-y-1.5 md:space-y-2">
                  <li>• Redesigned the presentation editor, improving user satisfaction by 35%</li>
                  <li>• Created the component library and design system used across the product</li>
                  <li>• Led the design for the collaboration features, a key differentiator for Pitch</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Pitch project screenshot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Pitch project screenshot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative sm:col-span-2 md:col-span-1">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Pitch project screenshot"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </WorkExperience>

          {/* Microsoft */}
          <WorkExperience
            logo={
              <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                <div className="w-8 h-8 md:w-10 md:h-10 grid grid-cols-2 grid-rows-2 gap-0.5">
                  <div className="bg-[#F25022]"></div>
                  <div className="bg-[#7FBA00]"></div>
                  <div className="bg-[#00A4EF]"></div>
                  <div className="bg-[#FFB900]"></div>
                </div>
              </div>
            }
            company="Microsoft"
            period="2016 - 2018"
            title="Designing for millions of users worldwide"
            description="At Microsoft, I worked on the design of productivity tools and enterprise software solutions that are used by millions of people around the world."
          >
            <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-3 md:space-y-4">
                <h4 className="text-lg md:text-xl font-medium">My Role</h4>
                <p className="text-sm md:text-base text-gray-300">
                  As a Product Designer on the Office team, I contributed to the design of key features across the
                  Office suite, with a focus on improving user experience and accessibility.
                </p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <h4 className="text-lg md:text-xl font-medium">Key Achievements</h4>
                <ul className="text-sm md:text-base text-gray-300 space-y-1.5 md:space-y-2">
                  <li>• Redesigned key workflows in Excel, improving task completion rates by 22%</li>
                  <li>• Contributed to the Fluent Design System implementation across Office products</li>
                  <li>• Led accessibility improvements that increased compliance with WCAG standards</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Microsoft project screenshot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Microsoft project screenshot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative sm:col-span-2 md:col-span-1">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Microsoft project screenshot"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </WorkExperience>

          {/* Native Instruments */}
          <WorkExperience
            logo={
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base md:text-lg">NI</span>
              </div>
            }
            company="Native Instruments"
            period="2014 - 2016"
            title="Creating tools for music producers and DJs"
            description="Native Instruments develops software and hardware for music production and DJing. I worked on the design of music production software and hardware interfaces."
          >
            <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-3 md:space-y-4">
                <h4 className="text-lg md:text-xl font-medium">My Role</h4>
                <p className="text-sm md:text-base text-gray-300">
                  As a UI/UX Designer, I was responsible for designing interfaces for music production software and
                  hardware controllers, ensuring they were intuitive and efficient for creative professionals.
                </p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <h4 className="text-lg md:text-xl font-medium">Key Achievements</h4>
                <ul className="text-sm md:text-base text-gray-300 space-y-1.5 md:space-y-2">
                  <li>• Redesigned the Maschine software interface, improving workflow for music producers</li>
                  <li>
                    • Created UI specifications for hardware controllers, bridging the gap between software and hardware
                  </li>
                  <li>• Developed a consistent design language across the product portfolio</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Native Instruments project screenshot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Native Instruments project screenshot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative sm:col-span-2 md:col-span-1">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Native Instruments project screenshot"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </WorkExperience>

          {/* Flexa (Current) */}
          <WorkExperience
            logo={
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base md:text-lg">F</span>
              </div>
            }
            company="Flexa"
            period="2024 - Present"
            title="Reimagining flexible work for the modern workforce"
            description="Flexa is a platform that connects professionals with flexible work opportunities. I'm currently leading the design team, focusing on creating intuitive and efficient experiences for both employers and job seekers."
          >
            <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-3 md:space-y-4">
                <h4 className="text-lg md:text-xl font-medium">My Role</h4>
                <p className="text-sm md:text-base text-gray-300">
                  As the Lead Product Designer, I'm responsible for the overall design direction of the platform,
                  managing the design team, and collaborating with product and engineering to deliver a cohesive user
                  experience.
                </p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <h4 className="text-lg md:text-xl font-medium">Current Focus</h4>
                <ul className="text-sm md:text-base text-gray-300 space-y-1.5 md:space-y-2">
                  <li>• Redesigning the job search experience to better match candidates with opportunities</li>
                  <li>• Building a scalable design system to support rapid product development</li>
                  <li>• Implementing user research processes to inform product decisions</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Flexa project screenshot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Flexa project screenshot"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative sm:col-span-2 md:col-span-1">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Flexa project screenshot"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </WorkExperience>
        </div>

        {/* Skills Section */}
        <div id="skills" className="mt-16 sm:mt-24 md:mt-32">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Skills & Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-lg md:text-xl font-medium">Design</h4>
              <ul className="text-sm md:text-base text-gray-300 space-y-1.5 md:space-y-2">
                <li>• User Interface Design</li>
                <li>• User Experience Design</li>
                <li>• Design Systems</li>
                <li>• Interaction Design</li>
                <li>• Visual Design</li>
                <li>• Prototyping</li>
              </ul>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-lg md:text-xl font-medium">Tools</h4>
              <ul className="text-sm md:text-base text-gray-300 space-y-1.5 md:space-y-2">
                <li>• Figma</li>
                <li>• Sketch</li>
                <li>• Adobe Creative Suite</li>
                <li>• Framer</li>
                <li>• Principle</li>
                <li>• HTML/CSS/JS</li>
              </ul>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-lg md:text-xl font-medium">Leadership</h4>
              <ul className="text-sm md:text-base text-gray-300 space-y-1.5 md:space-y-2">
                <li>• Team Management</li>
                <li>• Design Strategy</li>
                <li>• Cross-functional Collaboration</li>
                <li>• Mentoring</li>
                <li>• Product Strategy</li>
                <li>• Stakeholder Management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div id="education" className="mt-16 sm:mt-24 md:mt-32">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Education</h3>
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-1 md:space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h4 className="text-lg md:text-xl font-medium">University of Design, Berlin</h4>
                <div className="px-3 py-1 bg-black border border-gray-800 rounded-full text-xs md:text-sm mt-1 sm:mt-0 w-fit">
                  2010 - 2014
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-300">Bachelor of Arts in Digital Media Design</p>
            </div>
            <div className="space-y-1 md:space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h4 className="text-lg md:text-xl font-medium">Design Academy Online</h4>
                <div className="px-3 py-1 bg-black border border-gray-800 rounded-full text-xs md:text-sm mt-1 sm:mt-0 w-fit">
                  2016
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-300">Certificate in User Experience Design</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 sm:mt-24 md:mt-32 pt-6 md:pt-8 border-t border-gray-800 pb-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="text-sm md:text-base text-gray-400">
              © {new Date().getFullYear()} Julius Gehrig. All rights reserved.
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                Email
              </Link>
              <Link href="#" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors">
                LinkedIn
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
