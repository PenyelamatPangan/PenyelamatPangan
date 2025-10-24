import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, TrendingDown, Zap, Truck, Store, Utensils, ShieldCheck } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                P
              </div>
              <span className="text-xl font-bold text-foreground">PenyelamatPangan</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="#use-cases"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
    
                Log in
              </Link>
              <Link href="/auth/signup">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Stop Food Waste Before It Starts
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-lg">
                  Real-time IoT monitoring with AI-powered predictions. Know exactly when your food will spoil and
                  reduce waste by up to 40%.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth/signup">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                    Get Started Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div>
                  <div className="text-2xl font-bold text-primary">1.3B</div>
                  <p className="text-sm text-muted-foreground">Tons wasted yearly</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">40%</div>
                  <p className="text-sm text-muted-foreground">Waste reduction</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <p className="text-sm text-muted-foreground">Real-time monitoring</p>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 lg:h-full min-h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
              <div className="relative h-full rounded-2xl border border-border bg-card p-8 flex flex-col justify-center items-center gap-8">
                <div className="space-y-4 w-full">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                    <Zap className="h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">CO₂ Level</p>
                      <p className="text-xs text-muted-foreground">2,450 ppm - Fresh</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                    <TrendingDown className="h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Shelf Life</p>
                      <p className="text-xs text-muted-foreground">3 days remaining</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50">
                    <Leaf className="h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">Status</p>
                      <p className="text-xs text-muted-foreground">Optimal conditions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Real-World Applications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              PenyelamatPangan is transforming food safety and waste reduction across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Use Case 1: Cold Chain Logistics */}
            <div className="rounded-lg border border-border bg-card p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Cold Chain Logistics</h3>
                  <p className="text-sm text-muted-foreground">Logistik & Rantai Dingin</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground">
                    Temperature fluctuations during transport cause 15-20% product loss
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Solution</p>
                  <p className="text-sm text-muted-foreground">
                    Real-time monitoring of temperature, humidity, and gas levels throughout the supply chain
                  </p>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm">
                    <span className="font-medium text-primary">Impact:</span>{" "}
                    <span className="text-muted-foreground">
                      Reduce spoilage by 35%, improve traceability, ensure compliance
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Use Case 2: Retail Inventory Management */}
            <div className="rounded-lg border border-border bg-card p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Store className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Retail Inventory Management</h3>
                  <p className="text-sm text-muted-foreground">Manajemen Inventaris Supermarket</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground">
                    Supermarkets lose 8-10% of perishables due to poor shelf management
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Solution</p>
                  <p className="text-sm text-muted-foreground">
                    AI-powered shelf-life predictions and automated alerts for staff to rotate or remove items
                  </p>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm">
                    <span className="font-medium text-primary">Impact:</span>{" "}
                    <span className="text-muted-foreground">
                      Reduce waste by 40%, improve customer satisfaction, optimize pricing
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Use Case 3: Quality Control at Processing */}
            <div className="rounded-lg border border-border bg-card p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Utensils className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Quality Control at Processing</h3>
                  <p className="text-sm text-muted-foreground">Kontrol Kualitas di Rumah Potong</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground">
                    Meat processing facilities struggle with contamination detection and quality assurance
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Solution</p>
                  <p className="text-sm text-muted-foreground">
                    Continuous monitoring of ammonia, CO₂, and ethylene levels to detect spoilage early
                  </p>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm">
                    <span className="font-medium text-primary">Impact:</span>{" "}
                    <span className="text-muted-foreground">
                      Ensure food safety, reduce recalls, maintain quality standards
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Use Case 4: Food Safety Validation */}
            <div className="rounded-lg border border-border bg-card p-8 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Food Safety Validation</h3>
                  <p className="text-sm text-muted-foreground">Validasi Keamanan Pangan & QC di Dapur MBG</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground">
                    Community kitchens face food poisoning risks from improper storage and handling (CNN Indonesia
                    report)
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Solution</p>
                  <p className="text-sm text-muted-foreground">
                    Real-time monitoring and validation of food safety conditions with automated compliance reporting
                  </p>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm">
                    <span className="font-medium text-primary">Impact:</span>{" "}
                    <span className="text-muted-foreground">
                      Prevent foodborne illness, ensure regulatory compliance, protect public health
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-border px-4 py-20 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Advanced IoT sensors combined with machine learning to predict food spoilage with 95% accuracy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Real-Time Monitoring",
                description: "IoT sensors track CO₂, ammonia, ethylene, temperature, and humidity every 6 hours",
              },
              {
                icon: TrendingDown,
                title: "AI Predictions",
                description: "Machine learning models predict spoilage status and remaining shelf life with precision",
              },
              {
                icon: Leaf,
                title: "Smart Alerts",
                description: "Get notified before food spoils so you can act fast and reduce waste",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-colors"
              >
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to Reduce Food Waste?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join organizations worldwide in preventing food loss and building a sustainable future.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
                P
              </div>
              <span className="font-semibold text-foreground">PenyelamatPangan</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 PenyelamatPangan. Reducing food waste, one sensor at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
