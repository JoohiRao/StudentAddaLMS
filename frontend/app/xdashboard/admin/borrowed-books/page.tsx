"use client"

import { useState } from "react"
import { Calendar, Check, Download, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/lib/auth-provider"

// Mock data for borrowed books
const mockBorrowedBooks = [
  {
    id: "book-1",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    coverImage: "/placeholder.svg?height=200&width=150",
    borrowDate: "2023-09-15",
    dueDate: "2023-10-15",
    returnDate: null,
    userId: "user-1",
    userName: "John Doe",
    userEmail: "john@example.com",
    userPhone: "+91 98765 43210",
    status: "borrowed",
    isPhysical: true,
  },
  {
    id: "book-2",
    title: "Atomic Habits",
    author: "James Clear",
    coverImage: "/placeholder.svg?height=200&width=150",
    borrowDate: "2023-09-20",
    dueDate: "2023-10-20",
    returnDate: null,
    userId: "user-2",
    userName: "Jane Smith",
    userEmail: "jane@example.com",
    userPhone: "+91 98765 43211",
    status: "borrowed",
    isPhysical: true,
  },
  {
    id: "book-3",
    title: "Deep Work",
    author: "Cal Newport",
    coverImage: "/placeholder.svg?height=200&width=150",
    borrowDate: "2023-08-10",
    dueDate: "2023-09-10",
    returnDate: null,
    userId: "user-3",
    userName: "Robert Johnson",
    userEmail: "robert@example.com",
    userPhone: "+91 98765 43212",
    status: "overdue",
    isPhysical: true,
    penalty: 150,
  },
  {
    id: "book-4",
    title: "The Lean Startup",
    author: "Eric Ries",
    coverImage: "/placeholder.svg?height=200&width=150",
    borrowDate: "2023-08-05",
    dueDate: "2023-09-05",
    returnDate: "2023-09-03",
    userId: "user-4",
    userName: "Emily Davis",
    userEmail: "emily@example.com",
    userPhone: "+91 98765 43213",
    status: "returned",
    isPhysical: true,
  },
  {
    id: "ebook-1",
    title: "Zero to One",
    author: "Peter Thiel",
    coverImage: "/placeholder.svg?height=200&width=150",
    borrowDate: "2023-09-25",
    dueDate: "2023-10-25",
    returnDate: null,
    userId: "user-5",
    userName: "Michael Wilson",
    userEmail: "michael@example.com",
    userPhone: "+91 98765 43214",
    status: "borrowed",
    isPhysical: false,
  },
  {
    id: "book-5",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    coverImage: "/placeholder.svg?height=200&width=150",
    borrowDate: "2023-08-15",
    dueDate: "2023-09-15",
    returnDate: null,
    userId: "user-6",
    userName: "Sarah Brown",
    userEmail: "sarah@example.com",
    userPhone: "+91 98765 43215",
    status: "overdue",
    isPhysical: true,
    penalty: 200,
  },
]

export default function AdminBorrowedBooksPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [books, setBooks] = useState(mockBorrowedBooks)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedBook, setSelectedBook] = useState<any>(null)
  const [extendDays, setExtendDays] = useState("7")
  const [penaltyAmount, setPenaltyAmount] = useState("0")

  const filteredBooks = books.filter((book) => {
    // Apply search filter
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.userEmail.toLowerCase().includes(searchQuery.toLowerCase())

    // Apply status filter
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "borrowed" && book.status === "borrowed") ||
      (statusFilter === "overdue" && book.status === "overdue") ||
      (statusFilter === "returned" && book.status === "returned")

    return matchesSearch && matchesStatus
  })

  const borrowedCount = books.filter((book) => book.status === "borrowed").length
  const overdueCount = books.filter((book) => book.status === "overdue").length
  const returnedCount = books.filter((book) => book.status === "returned").length
  const totalPenalties = books.reduce((total, book) => total + (book.penalty || 0), 0)

  const handleExtendDueDate = () => {
    if (!selectedBook) return

    setBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === selectedBook.id) {
          // Add specified days to the due date
          const currentDueDate = new Date(book.dueDate)
          const newDueDate = new Date(currentDueDate)
          newDueDate.setDate(currentDueDate.getDate() + Number.parseInt(extendDays))

          return {
            ...book,
            dueDate: newDueDate.toISOString().split("T")[0],
            status: "borrowed", // Reset overdue status if it was overdue
            penalty: 0, // Remove any penalties
          }
        }
        return book
      }),
    )

    toast({
      title: "Due Date Extended",
      description: `Due date for "${selectedBook.title}" has been extended by ${extendDays} days.`,
    })

    setSelectedBook(null)
  }

  const handleMarkAsReturned = (bookId: string) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === bookId) {
          return {
            ...book,
            status: "returned",
            returnDate: new Date().toISOString().split("T")[0],
            penalty: 0, // Remove any penalties
          }
        }
        return book
      }),
    )

    toast({
      title: "Book Returned",
      description: "The book has been marked as returned.",
    })
  }

  const handleApplyPenalty = () => {
    if (!selectedBook) return

    setBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === selectedBook.id) {
          return {
            ...book,
            penalty: Number.parseInt(penaltyAmount),
          }
        }
        return book
      }),
    )

    toast({
      title: "Penalty Applied",
      description: `A penalty of ₹${penaltyAmount} has been applied to "${selectedBook.title}".`,
    })

    setSelectedBook(null)
  }

  const handleWaivePenalty = (bookId: string) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === bookId) {
          return {
            ...book,
            penalty: 0,
          }
        }
        return book
      }),
    )

    toast({
      title: "Penalty Waived",
      description: "The penalty has been waived.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Borrowed Books Management</h1>
        <p className="text-muted-foreground">Track and manage borrowed books, extend due dates, and handle returns.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Currently Borrowed</CardTitle>
            <div className="h-4 w-4 rounded-full bg-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{borrowedCount}</div>
            <p className="text-xs text-muted-foreground">Books currently checked out</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Overdue</CardTitle>
            <div className="h-4 w-4 rounded-full bg-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overdueCount}</div>
            <p className="text-xs text-muted-foreground">Books past their due date</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Returned</CardTitle>
            <div className="h-4 w-4 rounded-full bg-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{returnedCount}</div>
            <p className="text-xs text-muted-foreground">Books returned this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Penalties</CardTitle>
            <div className="h-4 w-4 rounded-full bg-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{totalPenalties}</div>
            <p className="text-xs text-muted-foreground">Total pending penalties</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Borrowed Books</CardTitle>
          <CardDescription>Manage all borrowed books and their status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by title, author, or member..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Books</SelectItem>
                  <SelectItem value="borrowed">Currently Borrowed</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                  <SelectItem value="returned">Returned</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                More Filters
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          <Tabs defaultValue="list">
            <TabsList className="mb-4">
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
            </TabsList>

            <TabsContent value="list">
              <div className="rounded-md border">
                <div className="grid grid-cols-12 gap-4 border-b bg-muted/50 p-4 font-medium">
                  <div className="col-span-3">Book</div>
                  <div className="col-span-2">Member</div>
                  <div className="col-span-2">Borrowed</div>
                  <div className="col-span-2">Due Date</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-2">Actions</div>
                </div>
                {filteredBooks.length > 0 ? (
                  filteredBooks.map((book) => (
                    <div key={book.id} className="grid grid-cols-12 gap-4 border-b p-4 last:border-0">
                      <div className="col-span-3">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-9 overflow-hidden rounded bg-muted">
                            <img
                              src={book.coverImage || "/placeholder.svg"}
                              alt={book.title}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-medium">{book.title}</p>
                            <p className="text-xs text-muted-foreground">{book.author}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <p className="font-medium">{book.userName}</p>
                        <p className="text-xs text-muted-foreground">{book.userEmail}</p>
                      </div>
                      <div className="col-span-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span className="text-sm">{new Date(book.borrowDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span className="text-sm">{new Date(book.dueDate).toLocaleDateString()}</span>
                        </div>
                        {book.status === "overdue" && (
                          <p className="text-xs text-destructive">
                            {Math.floor(
                              (new Date().getTime() - new Date(book.dueDate).getTime()) / (1000 * 60 * 60 * 24),
                            )}{" "}
                            days overdue
                          </p>
                        )}
                      </div>
                      <div className="col-span-1">
                        <Badge
                          variant={
                            book.status === "borrowed"
                              ? "default"
                              : book.status === "overdue"
                                ? "destructive"
                                : "success"
                          }
                        >
                          {book.status === "borrowed" ? "Borrowed" : book.status === "overdue" ? "Overdue" : "Returned"}
                        </Badge>
                        {book.penalty > 0 && <p className="mt-1 text-xs text-destructive">₹{book.penalty} penalty</p>}
                      </div>
                      <div className="col-span-2">
                        {book.status !== "returned" ? (
                          <div className="flex flex-wrap gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline" size="sm" onClick={() => setSelectedBook(book)}>
                                  Extend
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Extend Due Date</DialogTitle>
                                  <DialogDescription>
                                    Extend the due date for "{selectedBook?.title}" borrowed by {selectedBook?.userName}
                                    .
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                  <div className="grid gap-2">
                                    <Label htmlFor="current-due-date">Current Due Date</Label>
                                    <Input
                                      id="current-due-date"
                                      value={selectedBook ? new Date(selectedBook.dueDate).toLocaleDateString() : ""}
                                      disabled
                                    />
                                  </div>
                                  <div className="grid gap-2">
                                    <Label htmlFor="extend-days">Extend by (days)</Label>
                                    <Select value={extendDays} onValueChange={setExtendDays}>
                                      <SelectTrigger id="extend-days">
                                        <SelectValue placeholder="Select days" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="3">3 days</SelectItem>
                                        <SelectItem value="7">7 days</SelectItem>
                                        <SelectItem value="14">14 days</SelectItem>
                                        <SelectItem value="30">30 days</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div className="grid gap-2">
                                    <Label htmlFor="new-due-date">New Due Date</Label>
                                    <Input
                                      id="new-due-date"
                                      value={
                                        selectedBook
                                          ? new Date(
                                              new Date(selectedBook.dueDate).getTime() +
                                                Number.parseInt(extendDays) * 24 * 60 * 60 * 1000,
                                            ).toLocaleDateString()
                                          : ""
                                      }
                                      disabled
                                    />
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button variant="outline" onClick={() => setSelectedBook(null)}>
                                    Cancel
                                  </Button>
                                  <Button onClick={handleExtendDueDate}>Extend Due Date</Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                            <Button variant="default" size="sm" onClick={() => handleMarkAsReturned(book.id)}>
                              Return
                            </Button>
                            {book.status === "overdue" ? (
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => {
                                      setSelectedBook(book)
                                      setPenaltyAmount(book.penalty ? book.penalty.toString() : "0")
                                    }}
                                  >
                                    Penalty
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Apply Penalty</DialogTitle>
                                    <DialogDescription>
                                      Apply a penalty for the overdue book "{selectedBook?.title}" borrowed by{" "}
                                      {selectedBook?.userName}.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="grid gap-4 py-4">
                                    <div className="grid gap-2">
                                      <Label htmlFor="days-overdue">Days Overdue</Label>
                                      <Input
                                        id="days-overdue"
                                        value={
                                          selectedBook
                                            ? Math.floor(
                                                (new Date().getTime() - new Date(selectedBook.dueDate).getTime()) /
                                                  (1000 * 60 * 60 * 24),
                                              )
                                            : ""
                                        }
                                        disabled
                                      />
                                    </div>
                                    <div className="grid gap-2">
                                      <Label htmlFor="penalty-amount">Penalty Amount (₹)</Label>
                                      <Input
                                        id="penalty-amount"
                                        type="number"
                                        value={penaltyAmount}
                                        onChange={(e) => setPenaltyAmount(e.target.value)}
                                      />
                                    </div>
                                  </div>
                                  <DialogFooter>
                                    <Button variant="outline" onClick={() => setSelectedBook(null)}>
                                      Cancel
                                    </Button>
                                    <Button variant="destructive" onClick={handleApplyPenalty}>
                                      Apply Penalty
                                    </Button>
                                    {selectedBook?.penalty > 0 && (
                                      <Button
                                        variant="ghost"
                                        onClick={() => {
                                          handleWaivePenalty(selectedBook.id)
                                          setSelectedBook(null)
                                        }}
                                      >
                                        Waive Penalty
                                      </Button>
                                    )}
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                            ) : null}
                          </div>
                        ) : (
                          <Badge variant="outline" className="border-green-500 text-green-500">
                            <Check className="mr-1 h-3 w-3" />
                            Returned on {new Date(book.returnDate!).toLocaleDateString()}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center">
                    <p className="text-muted-foreground">No books found matching your filters.</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="grid">
              {filteredBooks.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredBooks.map((book) => (
                    <Card key={book.id}>
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="h-24 w-16 overflow-hidden rounded bg-muted">
                            <img
                              src={book.coverImage || "/placeholder.svg"}
                              alt={book.title}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold">{book.title}</h3>
                                <p className="text-sm text-muted-foreground">{book.author}</p>
                              </div>
                              <Badge
                                variant={
                                  book.status === "borrowed"
                                    ? "default"
                                    : book.status === "overdue"
                                      ? "destructive"
                                      : "success"
                                }
                              >
                                {book.status === "borrowed"
                                  ? "Borrowed"
                                  : book.status === "overdue"
                                    ? "Overdue"
                                    : "Returned"}
                              </Badge>
                            </div>

                            <div className="mt-2 space-y-1">
                              <p className="text-sm">
                                <span className="font-medium">Member:</span> {book.userName}
                              </p>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3 w-3 text-muted-foreground" />
                                <span className="text-xs">Due: {new Date(book.dueDate).toLocaleDateString()}</span>
                              </div>
                              {book.status === "overdue" && (
                                <p className="text-xs text-destructive">
                                  {Math.floor(
                                    (new Date().getTime() - new Date(book.dueDate).getTime()) / (1000 * 60 * 60 * 24),
                                  )}{" "}
                                  days overdue
                                </p>
                              )}
                              {book.penalty > 0 && <p className="text-xs text-destructive">₹{book.penalty} penalty</p>}
                            </div>

                            {book.status !== "returned" ? (
                              <div className="mt-3 flex flex-wrap gap-2">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button variant="outline" size="sm" onClick={() => setSelectedBook(book)}>
                                      Extend
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>Extend Due Date</DialogTitle>
                                      <DialogDescription>
                                        Extend the due date for "{selectedBook?.title}" borrowed by{" "}
                                        {selectedBook?.userName}.
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                      <div className="grid gap-2">
                                        <Label htmlFor="current-due-date">Current Due Date</Label>
                                        <Input
                                          id="current-due-date"
                                          value={
                                            selectedBook ? new Date(selectedBook.dueDate).toLocaleDateString() : ""
                                          }
                                          disabled
                                        />
                                      </div>
                                      <div className="grid gap-2">
                                        <Label htmlFor="extend-days">Extend by (days)</Label>
                                        <Select value={extendDays} onValueChange={setExtendDays}>
                                          <SelectTrigger id="extend-days">
                                            <SelectValue placeholder="Select days" />
                                          </SelectTrigger>
                                          <SelectContent>
                                            <SelectItem value="3">3 days</SelectItem>
                                            <SelectItem value="7">7 days</SelectItem>
                                            <SelectItem value="14">14 days</SelectItem>
                                            <SelectItem value="30">30 days</SelectItem>
                                          </SelectContent>
                                        </Select>
                                      </div>
                                      <div className="grid gap-2">
                                        <Label htmlFor="new-due-date">New Due Date</Label>
                                        <Input
                                          id="new-due-date"
                                          value={
                                            selectedBook
                                              ? new Date(
                                                  new Date(selectedBook.dueDate).getTime() +
                                                    Number.parseInt(extendDays) * 24 * 60 * 60 * 1000,
                                                ).toLocaleDateString()
                                              : ""
                                          }
                                          disabled
                                        />
                                      </div>
                                    </div>
                                    <DialogFooter>
                                      <Button variant="outline" onClick={() => setSelectedBook(null)}>
                                        Cancel
                                      </Button>
                                      <Button onClick={handleExtendDueDate}>Extend Due Date</Button>
                                    </DialogFooter>
                                  </DialogContent>
                                </Dialog>
                                <Button variant="default" size="sm" onClick={() => handleMarkAsReturned(book.id)}>
                                  Return
                                </Button>
                                {book.status === "overdue" ? (
                                  <Dialog>
                                    <DialogTrigger asChild>
                                      <Button
                                        variant="destructive"
                                        size="sm"
                                        onClick={() => {
                                          setSelectedBook(book)
                                          setPenaltyAmount(book.penalty ? book.penalty.toString() : "0")
                                        }}
                                      >
                                        Penalty
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                      <DialogHeader>
                                        <DialogTitle>Apply Penalty</DialogTitle>
                                        <DialogDescription>
                                          Apply a penalty for the overdue book "{selectedBook?.title}" borrowed by{" "}
                                          {selectedBook?.userName}.
                                        </DialogDescription>
                                      </DialogHeader>
                                      <div className="grid gap-4 py-4">
                                        <div className="grid gap-2">
                                          <Label htmlFor="days-overdue">Days Overdue</Label>
                                          <Input
                                            id="days-overdue"
                                            value={
                                              selectedBook
                                                ? Math.floor(
                                                    (new Date().getTime() - new Date(selectedBook.dueDate).getTime()) /
                                                      (1000 * 60 * 60 * 24),
                                                  )
                                                : ""
                                            }
                                            disabled
                                          />
                                        </div>
                                        <div className="grid gap-2">
                                          <Label htmlFor="penalty-amount">Penalty Amount (₹)</Label>
                                          <Input
                                            id="penalty-amount"
                                            type="number"
                                            value={penaltyAmount}
                                            onChange={(e) => setPenaltyAmount(e.target.value)}
                                          />
                                        </div>
                                      </div>
                                      <DialogFooter>
                                        <Button variant="outline" onClick={() => setSelectedBook(null)}>
                                          Cancel
                                        </Button>
                                        <Button variant="destructive" onClick={handleApplyPenalty}>
                                          Apply Penalty
                                        </Button>
                                        {selectedBook?.penalty > 0 && (
                                          <Button
                                            variant="ghost"
                                            onClick={() => {
                                              handleWaivePenalty(selectedBook.id)
                                              setSelectedBook(null)
                                            }}
                                          >
                                            Waive Penalty
                                          </Button>
                                        )}
                                      </DialogFooter>
                                    </DialogContent>
                                  </Dialog>
                                ) : null}
                              </div>
                            ) : (
                              <div className="mt-3">
                                <Badge variant="outline" className="border-green-500 text-green-500">
                                  <Check className="mr-1 h-3 w-3" />
                                  Returned on {new Date(book.returnDate!).toLocaleDateString()}
                                </Badge>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <p className="text-muted-foreground">No books found matching your filters.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
