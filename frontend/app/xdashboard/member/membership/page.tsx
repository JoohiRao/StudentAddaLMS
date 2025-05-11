"use client"

import { useState, useEffect } from "react"
import { Check, CreditCard, Loader2, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/lib/auth-provider"
import { mockLibraryService } from "@/lib/mock-api/library-service"
import type { Library } from "@/types/library"

export default function MembershipPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [loading, setLoading] = useState(true)
  const [libraries, setLibraries] = useState<Library[]>([])
  const [selectedLibrary, setSelectedLibrary] = useState<Library | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [paymentMethod, setPaymentMethod] = useState<string>("credit-card")
  const [processingPayment, setProcessingPayment] = useState(false)

  useEffect(() => {
    const fetchLibraries = async () => {
      setLoading(true)
      try {
        const data = await mockLibraryService.getLibraries()
        setLibraries(data)
        if (data.length > 0) {
          setSelectedLibrary(data[0])
        }
      } catch (error) {
        console.error("Error fetching libraries:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchLibraries()
  }, [])

  const handlePurchase = () => {
    if (!selectedLibrary || !selectedPlan) {
      toast({
        title: "Error",
        description: "Please select a library and membership plan.",
        variant: "destructive",
      })
      return
    }

    setProcessingPayment(true)

    // Simulate payment processing
    setTimeout(() => {
      setProcessingPayment(false)
      toast({
        title: "Membership Purchased",
        description: "Your membership has been successfully purchased.",
      })
    }, 2000)
  }

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-lg font-medium">Loading libraries...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Membership</h1>
        <p className="text-muted-foreground">
          Browse and purchase memberships to access libraries and their resources.
        </p>
      </div>

      {/* Current Membership Status */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Current Membership</CardTitle>
          <CardDescription>Your active membership details</CardDescription>
        </CardHeader>
        <CardContent>
          {user?.membership?.status === "active" ? (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold">{user.membership.planName}</h3>
                <div className="flex items-center gap-2">
                  <Badge variant="default">Active</Badge>
                  <p className="text-sm text-muted-foreground">
                    Expires on {new Date(user.membership.expiresAt).toLocaleDateString()}
                  </p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Library: {user.membership.libraryName || "Central Library"}
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Renew Membership</Button>
                <Button variant="outline">View Details</Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold">No Active Membership</h3>
                <p className="text-sm text-muted-foreground">
                  Purchase a membership to access library resources and services.
                </p>
              </div>
              <Button>Purchase Membership</Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Browse Libraries and Plans */}
      <Card>
        <CardHeader>
          <CardTitle>Browse Libraries</CardTitle>
          <CardDescription>Explore libraries and their membership plans</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="libraries">
            <TabsList className="mb-4">
              <TabsTrigger value="libraries">Libraries</TabsTrigger>
              <TabsTrigger value="plans">Membership Plans</TabsTrigger>
              <TabsTrigger value="purchase">Purchase</TabsTrigger>
            </TabsList>
            <TabsContent value="libraries" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {libraries.map((library) => (
                  <Card
                    key={library.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      selectedLibrary?.id === library.id ? "border-primary" : ""
                    }`}
                    onClick={() => setSelectedLibrary(library)}
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{library.name}</CardTitle>
                      <CardDescription>{library.address}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="aspect-video w-full overflow-hidden rounded-md">
                        <img
                          src={library.images[0] || "/placeholder.svg?height=200&width=300"}
                          alt={library.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="mt-2 flex items-center gap-1">
                        <div className="flex">
                          {Array(5)
                            .fill(0)
                            .map((_, i) => (
                              <svg
                                key={i}
                                className={`h-4 w-4 ${i < Math.floor(library.rating) ? "fill-primary" : "fill-muted"}`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                        </div>
                        <span className="text-sm font-medium">{library.rating}</span>
                        <span className="text-sm text-muted-foreground">({library.reviewCount} reviews)</span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {library.amenities.slice(0, 3).map((amenity) => (
                          <Badge key={amenity} variant="secondary" className="text-xs">
                            {amenity.replace("_", " ")}
                          </Badge>
                        ))}
                        {library.amenities.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{library.amenities.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant={selectedLibrary?.id === library.id ? "default" : "outline"}
                        size="sm"
                        className="w-full"
                        onClick={() => setSelectedLibrary(library)}
                      >
                        {selectedLibrary?.id === library.id ? "Selected" : "Select Library"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="plans" className="space-y-4">
              {selectedLibrary ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {selectedLibrary.membershipPlans.map((plan) => (
                    <Card
                      key={plan.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedPlan === plan.id ? "border-primary" : ""
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      <CardHeader>
                        <CardTitle>{plan.name}</CardTitle>
                        <CardDescription>
                          ₹{plan.price} for {plan.duration} days
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <ul className="space-y-2">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-primary" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant={selectedPlan === plan.id ? "default" : "outline"}
                          size="sm"
                          className="w-full"
                          onClick={() => setSelectedPlan(plan.id)}
                        >
                          {selectedPlan === plan.id ? "Selected" : "Select Plan"}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <p className="text-lg font-medium">Please select a library first</p>
                  <p className="text-sm text-muted-foreground">
                    Go to the Libraries tab to select a library and view its membership plans.
                  </p>
                </div>
              )}
            </TabsContent>
            <TabsContent value="purchase" className="space-y-4">
              {selectedLibrary && selectedPlan ? (
                <div className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <h3 className="text-lg font-medium">Order Summary</h3>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between">
                        <span>Library:</span>
                        <span className="font-medium">{selectedLibrary.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Plan:</span>
                        <span className="font-medium">
                          {selectedLibrary.membershipPlans.find((p) => p.id === selectedPlan)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span>{selectedLibrary.membershipPlans.find((p) => p.id === selectedPlan)?.duration} days</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between font-medium">
                          <span>Total:</span>
                          <span>
                            ₹
                            {selectedLibrary.membershipPlans.find((p) => p.id === selectedPlan)?.price.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Payment Method</h3>
                    <RadioGroup
                      defaultValue="credit-card"
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                      className="grid grid-cols-1 gap-4 sm:grid-cols-3"
                    >
                      <div>
                        <RadioGroupItem value="credit-card" id="credit-card" className="peer sr-only" />
                        <Label
                          htmlFor="credit-card"
                          className="flex cursor-pointer flex-col items-center justify-between rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <CreditCard className="mb-3 h-6 w-6" />
                          <span className="text-sm font-medium">Credit Card</span>
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="upi" id="upi" className="peer sr-only" />
                        <Label
                          htmlFor="upi"
                          className="flex cursor-pointer flex-col items-center justify-between rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <svg
                            className="mb-3 h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 2v5h5" />
                            <path d="M21 6v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />
                            <path d="m12 13 2 2 4-4" />
                          </svg>
                          <span className="text-sm font-medium">UPI</span>
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="net-banking" id="net-banking" className="peer sr-only" />
                        <Label
                          htmlFor="net-banking"
                          className="flex cursor-pointer flex-col items-center justify-between rounded-md border border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <svg
                            className="mb-3 h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect width="20" height="14" x="2" y="5" rx="2" />
                            <line x1="2" x2="22" y1="10" y2="10" />
                          </svg>
                          <span className="text-sm font-medium">Net Banking</span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {paymentMethod === "credit-card" && (
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="name">Name on Card</Label>
                        <Input id="name" placeholder="John Doe" />
                      </div>
                    </div>
                  )}

                  {paymentMethod === "upi" && (
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="upi-id">UPI ID</Label>
                        <Input id="upi-id" placeholder="username@upi" />
                      </div>
                    </div>
                  )}

                  {paymentMethod === "net-banking" && (
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="bank">Select Bank</Label>
                        <select
                          id="bank"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select a bank</option>
                          <option value="sbi">State Bank of India</option>
                          <option value="hdfc">HDFC Bank</option>
                          <option value="icici">ICICI Bank</option>
                          <option value="axis">Axis Bank</option>
                          <option value="kotak">Kotak Mahindra Bank</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 rounded-lg border p-4">
                    <Shield className="h-5 w-5 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      Your payment information is secure. We use industry-standard encryption to protect your data.
                    </p>
                  </div>

                  <Button className="w-full" size="lg" onClick={handlePurchase} disabled={processingPayment}>
                    {processingPayment ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>Purchase Membership</>
                    )}
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <p className="text-lg font-medium">Please select a library and plan first</p>
                  <p className="text-sm text-muted-foreground">
                    Go to the Libraries and Plans tabs to make your selection before proceeding to purchase.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Membership History */}
      <Card>
        <CardHeader>
          <CardTitle>Membership History</CardTitle>
          <CardDescription>Your past and current memberships</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-5 gap-4 border-b bg-muted/50 p-4 font-medium">
              <div className="col-span-2">Library</div>
              <div className="col-span-1">Plan</div>
              <div className="col-span-1">Period</div>
              <div className="col-span-1">Status</div>
            </div>
            {user?.membership ? (
              <div className="grid grid-cols-5 gap-4 border-b p-4 last:border-0">
                <div className="col-span-2">
                  <p className="font-medium">{user.membership.libraryName || "Central Library"}</p>
                </div>
                <div className="col-span-1">
                  <p>{user.membership.planName}</p>
                </div>
                <div className="col-span-1">
                  <p>
                    {new Date(user.membership.startDate).toLocaleDateString()} -{" "}
                    {new Date(user.membership.expiresAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="col-span-1">
                  <Badge variant={user.membership.status === "active" ? "default" : "secondary"}>
                    {user.membership.status === "active" ? "Active" : "Expired"}
                  </Badge>
                </div>
              </div>
            ) : (
              <div className="p-4 text-center text-sm text-muted-foreground">No membership history found.</div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
