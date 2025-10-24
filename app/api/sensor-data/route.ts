import { NextResponse } from "next/server"

// Generate realistic sensor data with trends
function generateSensorData() {
  const now = new Date()
  const history = []

  // Generate 24 data points (one per hour)
  for (let i = 23; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - i * 60 * 60 * 1000)
    const hours = i

    // Simulate realistic gas concentration patterns
    // CO₂ increases over time as microbial activity increases
    const baseCO2 = 1500 + hours * 50 + Math.random() * 200
    // NH₃ (ammonia) increases for meat spoilage
    const baseNH3 = 2 + hours * 0.3 + Math.random() * 1
    // Ethylene for fruit ripening
    const baseEthylene = 0.5 + hours * 0.15 + Math.random() * 0.3

    // Temperature fluctuations (refrigerated storage)
    const temperature = 4 + Math.sin(hours / 6) * 1 + Math.random() * 0.5

    // Humidity in sealed container
    const humidity = 75 + Math.random() * 10

    // Determine status based on thresholds
    let status: "fresh" | "warning" | "spoiled" = "fresh"
    if (baseCO2 > 4000 || baseNH3 > 5) {
      status = "warning"
    }
    if (baseCO2 > 4751 || baseNH3 > 6) {
      status = "spoiled"
    }

    // Calculate remaining shelf life (in days)
    let shelfLife = 7
    if (status === "warning") {
      shelfLife = 2
    } else if (status === "spoiled") {
      shelfLife = 0
    } else {
      shelfLife = Math.max(3, 7 - hours / 24)
    }

    history.push({
      timestamp: timestamp.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      co2: Math.round(baseCO2),
      nh3: Math.round(baseNH3 * 10) / 10,
      ethylene: Math.round(baseEthylene * 100) / 100,
      temperature: Math.round(temperature * 10) / 10,
      humidity: Math.round(humidity),
      status,
      shelfLife: Math.round(shelfLife * 10) / 10,
    })
  }

  return history
}

export async function GET() {
  try {
    const history = generateSensorData()
    const current = history[history.length - 1]

    return NextResponse.json({
      success: true,
      current,
      history,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error("Error generating sensor data:", error)
    return NextResponse.json({ error: "Failed to generate sensor data" }, { status: 500 })
  }
}
