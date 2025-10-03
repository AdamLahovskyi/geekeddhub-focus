"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import GradientText from "../GradientText"

export function LoginForm() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login:", { email, password })
    // TODO: call API
    navigate("/")
  }

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg border-border/50">
      <CardHeader className="text-center space-y-2">
        <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={10}
            showBorder={false}
            className="custom-class"
        >
            <CardTitle className="text-3xl font-bold">
            Welcome Back
            </CardTitle>
        </GradientText>
        <CardDescription className="text-muted-foreground">
          Enter your details to access your account
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit} className="space-y-6">
        <CardContent className="flex flex-col gap-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="focus:ring-2 focus:ring-primary"
            />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Button type="submit" className="w-full font-medium transition-transform hover:scale-[1.02]">
            Log in
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            Don’t have an account?{" "}
            <Button
              variant="link"
              className="p-0 h-auto font-medium text-primary"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </Button>
          </p>
        </CardFooter>
      </form>
    </Card>
  )
}
