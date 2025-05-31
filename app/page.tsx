"use client"
import dynamic from "next/dynamic"

// Dynamically import the App component with no SSR
const App = dynamic(() => import("../StudentCare/src/App"), {
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>,
})

export default function Page() {
  return (
    <div>
      <App />
    </div>
  )
}
