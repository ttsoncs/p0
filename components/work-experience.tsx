import type React from "react"

interface WorkExperienceProps {
  logo: React.ReactNode
  company: string
  period: string
  title: string
  description: string
  children?: React.ReactNode
}

export default function WorkExperience({ logo, company, period, title, description, children }: WorkExperienceProps) {
  return (
    <section className="space-y-4 sm:space-y-6 md:space-y-8">
      <div className="flex flex-wrap items-center gap-3 md:gap-4">
        {logo}
        <span className="text-lg md:text-xl">{company}</span>
        <div className="ml-0 sm:ml-auto mt-2 sm:mt-0 px-3 py-1 bg-black border border-gray-800 rounded-full text-xs md:text-sm">
          {period}
        </div>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>

      <p className="text-sm md:text-base text-gray-300">{description}</p>

      {children}
    </section>
  )
}
