import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, HeartPulse, LineChart, Users2 } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-primary/0 pb-16 pt-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Streamlining follow-up care for better patient outcomes
              </h1>
              <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
                Careon helps healthcare providers deliver exceptional post-treatment care through automated follow-ups, real-time monitoring, and personalized patient engagement.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Book a Demo
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <img
                src="https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg"
                alt="Healthcare professional using tablet"
                className="rounded-lg object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Comprehensive Follow-up Care Solutions
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <HeartPulse className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">Patient Monitoring</h3>
              <p className="text-muted-foreground">
                Real-time tracking of patient recovery progress and vital signs
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Users2 className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">Care Coordination</h3>
              <p className="text-muted-foreground">
                Seamless communication between healthcare providers and patients
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <LineChart className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">Analytics</h3>
              <p className="text-muted-foreground">
                Data-driven insights to optimize treatment plans and outcomes
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <CheckCircle2 className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">Compliance</h3>
              <p className="text-muted-foreground">
                Ensure adherence to treatment plans and medical guidelines
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to transform your follow-up care?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Join thousands of healthcare providers who trust Careon to deliver exceptional patient care.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="gap-2"
            >
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}