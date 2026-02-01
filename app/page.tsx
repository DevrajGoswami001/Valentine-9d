"use client"

import { useState, useEffect, useCallback } from "react"
import { Heart } from "lucide-react"

export default function ValentinePage() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })
  const [accepted, setAccepted] = useState(false)
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([])

  useEffect(() => {
    // Generate floating hearts
    const generatedHearts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 4,
      size: 20 + Math.random() * 30,
    }))
    setHearts(generatedHearts)
  }, [])

  const moveNoButton = useCallback(() => {
    const maxX = window.innerWidth - 150
    const maxY = window.innerHeight - 100
    const newX = Math.random() * maxX - maxX / 2
    const newY = Math.random() * maxY - maxY / 2
    setNoButtonPosition({ x: newX, y: newY })
  }, [])

  const handleYesClick = () => {
    setAccepted(true)
  }

  if (accepted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 flex items-center justify-center p-4 overflow-hidden relative">
        {/* Floating Hearts Background */}
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute animate-float text-pink-400/40"
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.delay}s`,
              animationDuration: `${heart.duration}s`,
            }}
          >
            <Heart size={heart.size} fill="currentColor" />
          </div>
        ))}

        {/* Celebration Content */}
        <div className="relative z-10 text-center animate-scale-in">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-200 max-w-md mx-auto">
            {/* Big Heart */}
            <div className="mb-6 animate-pulse">
              <Heart className="w-24 h-24 md:w-32 md:h-32 mx-auto text-red-500 drop-shadow-lg" fill="currentColor" />
            </div>

            {/* Success Message */}
            <h1 className="text-2xl md:text-3xl font-bold text-rose-600 mb-4">
              I Knew You&apos;d Say Yes! 💕
            </h1>

            <div className="space-y-4 text-gray-700">
              <p className="text-lg md:text-xl font-medium">
                You just made me the happiest person! 🥰
              </p>

              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl p-6 mt-6 shadow-lg">
                <p className="text-sm uppercase tracking-wider mb-2 opacity-90">Our Date</p>
                <p className="text-xl md:text-2xl font-bold mb-2">
                  📅 14th February
                </p>
                <p className="text-xl md:text-2xl font-bold mb-4">
                  🕖 7:00 PM
                </p>
                <div className="border-t border-white/30 pt-4 mt-4">
                  <p className="text-sm opacity-90 mb-1">Meet me at</p>
                  <p className="text-lg md:text-xl font-semibold">
                    ✨ The Grand Hotel ✨
                  </p>
                </div>
              </div>

              <p className="text-base text-gray-600 mt-4 italic">
                Can&apos;t wait to see you! 💝
              </p>
            </div>

            {/* Decorative Hearts */}
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(5)].map((_, i) => (
                <Heart
                  key={i}
                  className="w-5 h-5 text-pink-400 animate-bounce"
                  fill="currentColor"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-red-100 flex items-center justify-center p-4 overflow-hidden relative">
      {/* Floating Hearts Background */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float text-pink-400/40"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          <Heart size={heart.size} fill="currentColor" />
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-pink-200 max-w-md mx-auto">
          {/* Animated Heart */}
          <div className="mb-6 animate-heartbeat">
            <Heart className="w-20 h-20 md:w-28 md:h-28 mx-auto text-red-500 drop-shadow-lg" fill="currentColor" />
          </div>

          {/* Question */}
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
            Hey Beautiful!
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
            Will You Be My Valentine? 💕
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Yes Button */}
            <button
              onClick={handleYesClick}
              className="px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:from-pink-600 hover:to-rose-600 active:scale-95"
            >
              Yes! 💖
            </button>

            {/* No Button - Runs Away */}
            <button
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              onClick={moveNoButton}
              className="px-10 py-4 bg-gray-200 text-gray-600 text-xl font-bold rounded-full shadow-lg transition-all duration-300 hover:bg-gray-300"
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              No 😢
            </button>
          </div>

          {/* Hint Text */}
          <p className="text-sm text-gray-500 mt-6 italic">
            (The No button is a bit shy... 😉)
          </p>
        </div>
      </div>

      {/* Extra Decorative Elements */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {[...Array(3)].map((_, i) => (
          <Heart
            key={i}
            className="w-4 h-4 text-pink-300 animate-bounce"
            fill="currentColor"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  )
}
