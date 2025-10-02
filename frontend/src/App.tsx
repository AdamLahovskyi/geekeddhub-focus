import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-gray-800">
              GeekeddHub Improve
            </CardTitle>
            <CardDescription className="text-center text-lg">
              Track your self-improvement goals and achieve greatness
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Add New Goal
              </Button>
              <Button variant="outline">
                View Progress
              </Button>
            </div>
            <div className="border-t pt-4">
              <p className="text-gray-600 text-center">
                Your goals will appear here...
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App