"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, BookOpen, Building, DollarSign, LineChart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/lib/auth-provider"

// Mock data for super admin dashboard
const mockDashboardData = {
  platformStats: {
    totalRevenue: 1245600,
    monthlyRevenue: 124560,
    activeMembers: 2450,
    newMembers: 145,
    totalLibraries: 8,
    totalTransactions: 4567,
  },
  revenueBySource: [
    { source: "Membership Fees", amount: 875000, percentage: 70 },
    { source: "Booking Fees", amount: 250000, percentage: 20 },
    { source: "Late Penalties", amount: 62500, percentage: 5 },
    { source: "Other", amount: 62500, percentage: 5 },
  ],
  topLibraries: [
    { id: "lib-1", name: "Central Library", members: 450, revenue: 245000, utilization: 85 },
    { id: "lib-3", name: "Tech Knowledge Center", members: 380, revenue: 210000, utilization: 78 },
    { id: "lib-2", name: "Riverside Reading Hub", members: 320, revenue: 180000, utilization: 72 },
    { id: "lib-4", name: "North Hills Book Club", members: 280, revenue: 150000, utilization: 65 },
    { id: "lib-5", name: "Eastside Reading Center", members: 210, revenue: 120000, utilization: 58 },
  ],
  recentTransactions: [
    {
      id: "txn-1",
      type: "membership",
      amount: 1999,
      user: "John Doe",
      library: "Central Library",
      date: "2023-10-15",
      status: "completed",
    },
    {
      id: "txn-2",
      type: "booking",
      amount: 299,
      user: "Jane Smith",
      library: "Tech Knowledge Center",
      date: "2023-10-14",
      status: "completed",
    },
    {
      id: "txn-3",
      type: "penalty",
      amount: 150,
      user: "Robert Johnson",
      library: "Riverside Reading Hub",
      date: "2023-10-14",
      status: "pending",
    },
    {
      id: "txn-4",
      type: "membership",
      amount: 1299,
      user: "Emily Davis",
      library: "North Hills Book Club",
      date: "2023-10-13",
      status: "completed",
    },
    {
      id: "txn-5",
      type: "booking",
      amount: 199,
      user: "Michael Wilson",
      library: "Eastside Reading Center",
      date: "2023-10-13",
      status: "completed",
    },
  ],
  monthlyGrowth: [
    { month: "Jan", members: 1850, revenue: 980000 },
    { month: "Feb", members: 1920, revenue: 1020000 },
    { month: "Mar", members: 2000, revenue: 1080000 },
    { month: "Apr", members: 2080, revenue: 1120000 },
    { month: "May", members: 2150, revenue: 1160000 },
    { month: "Jun", members: 2220, revenue: 1190000 },
    { month: "Jul", members: 2300, revenue: 1210000 },
    { month: "Aug", members: 2350, revenue: 1230000 },
    { month: "Sep", members: 2400, revenue: 1240000 },
    { month: "Oct", members: 2450, revenue: 1245600 },
  ],
}

export default function SuperAdminDashboardPage() {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Super Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, <span className="font-medium">{user?.name}</span>! Here's an overview of the platform.
        </p>
      </div>

      {/* Platform Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{mockDashboardData.platformStats.totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Lifetime revenue</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{mockDashboardData.platformStats.monthlyRevenue.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Current month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockDashboardData.platformStats.activeMembers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">+{mockDashboardData.platformStats.newMembers} this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Libraries</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockDashboardData.platformStats.totalLibraries}</div>
            <p className="text-xs text-muted-foreground">Active libraries</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Transactions</CardTitle>
            <LineChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockDashboardData.platformStats.totalTransactions.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Total transactions</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">E-Books</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245</div>
            <p className="text-xs text-muted-foreground">Available e-books</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Revenue by Source */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Revenue by Source</CardTitle>
            <CardDescription>Breakdown of revenue streams</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockDashboardData.revenueBySource.map((source, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{source.source}</span>
                    <span className="text-sm font-medium">₹{source.amount.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={source.percentage} className="h-2" />
                    <span className="text-sm text-muted-foreground">{source.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Growth */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Monthly Growth</CardTitle>
            <CardDescription>Members and revenue growth</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              {/* This would be a chart in a real implementation */}
              <div className="flex h-full w-full items-end justify-between gap-2">
                {mockDashboardData.monthlyGrowth.map((data, i) => {
                  const height = (data.revenue / 1300000) * 100
                  return (
                    <div key={i} className="relative flex h-full flex-1 flex-col justify-end">
                      <div className="w-full rounded-md bg-primary" style={{ height: `${height}%` }}></div>
                      <span className="mt-2 text-center text-xs text-muted-foreground">{data.month}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Top Performing Libraries */}
        <Card className="col-span-1">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Top Performing Libraries</CardTitle>
              <CardDescription>Based on revenue and utilization</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/super-admin/libraries">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockDashboardData.topLibraries.map((library, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg bg-muted/50 p-4">
                  <div>
                    <h3 className="font-medium">{library.name}</h3>
                    <p className="text-sm text-muted-foreground">{library.members} members</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹{library.revenue.toLocaleString()}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{library.utilization}% utilization</span>
                      <Badge
                        variant={
                          library.utilization > 80 ? "default" : library.utilization > 60 ? "secondary" : "outline"
                        }
                      >
                        {library.utilization > 80 ? "High" : library.utilization > 60 ? "Medium" : "Low"}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link href="/dashboard/super-admin/reports">
                View Detailed Reports
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Recent Transactions */}
        <Card className="col-span-1">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Latest financial activities</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/super-admin/payments">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockDashboardData.recentTransactions.map((transaction, i) => (
                <div key={i} className="flex items-center justify-between rounded-lg bg-muted/50 p-4">
                  <div>
                    <h3 className="font-medium">{transaction.user}</h3>
                    <p className="text-sm text-muted-foreground">
                      {transaction.type === "membership"
                        ? "Membership Purchase"
                        : transaction.type === "booking"
                          ? "Seat Booking"
                          : "Late Return Penalty"}
                    </p>
                    <p className="text-xs text-muted-foreground">{transaction.library}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹{transaction.amount}</p>
                    <Badge
                      variant={
                        transaction.status === "completed"
                          ? "default"
                          : transaction.status === "pending"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {transaction.status === "completed"
                        ? "Completed"
                        : transaction.status === "pending"
                          ? "Pending"
                          : "Failed"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" size="sm" className="w-full" asChild>
              <Link href="/dashboard/super-admin/payments">
                View All Transactions
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Platform Analytics</CardTitle>
          <CardDescription>Key performance indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="members">Members</TabsTrigger>
              <TabsTrigger value="libraries">Libraries</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">87%</div>
                      <p className="text-sm text-muted-foreground">Member Retention Rate</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">73%</div>
                      <p className="text-sm text-muted-foreground">Seat Utilization</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">92%</div>
                      <p className="text-sm text-muted-foreground">E-Book Availability</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <h3 className="font-medium">Platform Health</h3>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>System Uptime</span>
                        <span>99.9%</span>
                      </div>
                      <Progress value={99.9} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>API Response Time</span>
                        <span>245ms</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Error Rate</span>
                        <span>0.02%</span>
                      </div>
                      <Progress value={2} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="members" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">2,450</div>
                      <p className="text-sm text-muted-foreground">Total Members</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">145</div>
                      <p className="text-sm text-muted-foreground">New This Month</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">32</div>
                      <p className="text-sm text-muted-foreground">Churned This Month</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <h3 className="font-medium">Member Demographics</h3>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Students</span>
                        <span>45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Professionals</span>
                        <span>35%</span>
                      </div>
                      <Progress value={35} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Seniors</span>
                        <span>12%</span>
                      </div>
                      <Progress value={12} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Others</span>
                        <span>8%</span>
                      </div>
                      <Progress value={8} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="libraries" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">8</div>
                      <p className="text-sm text-muted-foreground">Total Libraries</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">73%</div>
                      <p className="text-sm text-muted-foreground">Average Utilization</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">12,450</div>
                      <p className="text-sm text-muted-foreground">Total Seats</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <h3 className="font-medium">Library Types</h3>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Academic</span>
                        <span>3</span>
                      </div>
                      <Progress value={37.5} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Public</span>
                        <span>3</span>
                      </div>
                      <Progress value={37.5} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>Specialized</span>
                        <span>2</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="revenue" className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">₹1.24M</div>
                      <p className="text-sm text-muted-foreground">Total Revenue</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">₹124.5K</div>
                      <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">₹508</div>
                      <p className="text-sm text-muted-foreground">Avg. Revenue per Member</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <h3 className="font-medium">Revenue Growth</h3>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>This Month</span>
                        <span>+4.2%</span>
                      </div>
                      <Progress value={4.2} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>This Quarter</span>
                        <span>+12.8%</span>
                      </div>
                      <Progress value={12.8} className="h-2" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>This Year</span>
                        <span>+32.5%</span>
                      </div>
                      <Progress value={32.5} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full" asChild>
            <Link href="/dashboard/super-admin/reports">
              View Detailed Analytics
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
