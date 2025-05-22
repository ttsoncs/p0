interface CompanyLogoProps {
  name: "Flexa" | "Pitch" | "Microsoft" | "NativeInstruments"
}

export function CompanyLogo({ name }: CompanyLogoProps) {
  switch (name) {
    case "Flexa":
      return <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded"></div>
    case "Pitch":
      return (
        <div className="w-6 h-6 bg-[#7557FF] rounded flex items-center justify-center">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
            <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 3.5L18 9v6l-6 3-6-3V9l6-3.5z" />
          </svg>
        </div>
      )
    case "Microsoft":
      return (
        <div className="w-6 h-6 grid grid-cols-2 grid-rows-2 gap-0.5">
          <div className="bg-[#F25022]"></div>
          <div className="bg-[#7FBA00]"></div>
          <div className="bg-[#00A4EF]"></div>
          <div className="bg-[#FFB900]"></div>
        </div>
      )
    case "NativeInstruments":
      return (
        <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
          <span className="text-white font-bold text-xs">NI</span>
        </div>
      )
    default:
      return null
  }
}
