"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import { AlertCircle, CheckCircle, Zap, Droplets, Wind, Thermometer } from "lucide-react"

interface SensorData {
  timestamp: string
  co2: number
  nh3: number
  ethylene: number
  temperature: number
  humidity: number
  status: "fresh" | "warning" | "spoiled"
  shelfLife: number
}

export default function DashboardPage() {
  const [sensorData, setSensorData] = useState<SensorData[]>([])
  const [currentReading, setCurrentReading] = useState<SensorData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch mock sensor data
    const fetchData = async () => {
      try {
        const response = await fetch("/api/sensor-data")
        const data = await response.json()
        setSensorData(data.history)
        setCurrentReading(data.current)
      } catch (error) {
        console.error("Failed to fetch sensor data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 5000) // Refresh every 5 seconds
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-muted-foreground">Loading sensor data...</p>
      </div>
    )
  }

  const statusConfig = {
    fresh: { color: "text-green-600", bg: "bg-green-50 dark:bg-green-950", label: "Fresh", icon: CheckCircle },
    warning: { color: "text-yellow-600", bg: "bg-yellow-50 dark:bg-yellow-950", label: "Warning", icon: AlertCircle },
    spoiled: { color: "text-red-600", bg: "bg-red-50 dark:bg-red-950", label: "Spoiled", icon: AlertCircle },
  }

  const status = currentReading?.status || "fresh"
  const StatusIcon = statusConfig[status].icon

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Real-Time Monitoring</h1>
        <p className="text-muted-foreground">Track your food freshness with AI-powered predictions</p>
      </div>

      {/* Status Card */}
      {currentReading && (
        <Card className={`border-2 ${statusConfig[status].bg}`}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Current Status</CardTitle>
                <CardDescription>Last updated: {currentReading.timestamp}</CardDescription>
              </div>
              <StatusIcon className={`h-12 w-12 ${statusConfig[status].color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Status</p>
                <p className={`text-lg font-bold ${statusConfig[status].color}`}>{statusConfig[status].label}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Shelf Life</p>
                <p className="text-lg font-bold text-foreground">{currentReading.shelfLife} days</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Temperature</p>
                <p className="text-lg font-bold text-foreground">{currentReading.temperature}°C</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Humidity</p>
                <p className="text-lg font-bold text-foreground">{currentReading.humidity}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Sensor Readings Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: Zap, label: "CO₂ Level", value: currentReading?.co2, unit: "ppm" },
          { icon: Wind, label: "Ammonia (NH₃)", value: currentReading?.nh3, unit: "ppm" },
          { icon: Droplets, label: "Ethylene (C₂H₄)", value: currentReading?.ethylene, unit: "ppm" },
          { icon: Thermometer, label: "Temperature", value: currentReading?.temperature, unit: "°C" },
        ].map((sensor, i) => (
          <Card key={i} className="border-border">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">{sensor.label}</CardTitle>
                <sensor.icon className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-foreground">
                {sensor.value}
                <span className="text-sm text-muted-foreground ml-1">{sensor.unit}</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* CO₂ and NH₃ Trend */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Gas Concentration Trends</CardTitle>
            <CardDescription>CO₂ and Ammonia levels over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={sensorData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="timestamp" stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-card)",
                    border: `1px solid var(--color-border)`,
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="co2"
                  stroke="var(--color-chart-1)"
                  name="CO₂ (ppm)"
                  dot={false}
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="nh3"
                  stroke="var(--color-chart-2)"
                  name="NH₃ (ppm)"
                  dot={false}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Temperature & Humidity */}
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Environmental Conditions</CardTitle>
            <CardDescription>Temperature and humidity tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={sensorData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="timestamp" stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--color-card)",
                    border: `1px solid var(--color-border)`,
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="temperature"
                  fill="var(--color-chart-1)"
                  stroke="var(--color-chart-1)"
                  name="Temperature (°C)"
                  fillOpacity={0.3}
                />
                <Area
                  type="monotone"
                  dataKey="humidity"
                  fill="var(--color-chart-2)"
                  stroke="var(--color-chart-2)"
                  name="Humidity (%)"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Ethylene Trend */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Ethylene (C₂H₄) Levels</CardTitle>
          <CardDescription>Ripening and fermentation indicator</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={sensorData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis dataKey="timestamp" stroke="var(--color-muted-foreground)" />
              <YAxis stroke="var(--color-muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: `1px solid var(--color-border)`,
                  borderRadius: "8px",
                }}
              />
              <Area
                type="monotone"
                dataKey="ethylene"
                fill="var(--color-chart-3)"
                stroke="var(--color-chart-3)"
                name="Ethylene (ppm)"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
