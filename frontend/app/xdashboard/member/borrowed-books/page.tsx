"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, BookOpen, Calendar, Clock, RotateCcw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
    library: "Central Library",
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
    library: "Central Library",
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
    library: "Tech Knowledge Center",
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
    library: "Riverside Reading Hub",
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
    library: "E-Library",
    status: "borrowed",
    isPhysical: false,
    progress: 45,
  },
  {
    id: "ebook-2",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    coverImage: "/placeholder.svg?height=200&width=150",
    borrowDate: "2023-09-10",
    dueDate: "2023-10-10",
    returnDate: null,
    library: "E-Library",
    status: "borrowed",
    isPhysical: false,
    progress: 25,
  },
]

export default function BorrowedBooksPage() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [books, setBooks] = useState(mockBorrowedBooks)

  const currentBooks = books.filter((book) => book.status === "borrowed")
  const overdueBooks = books.filter((book) => book.status === "overdue")
  const returnedBooks = books.filter((book) => book.status === "returned")
  const eBooks = books.filter((book) => !book.isPhysical)
  const physicalBooks = books.filter((book) => book.isPhysical)

  const handleRenew = (bookId: string) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === bookId) {
          // Add 14 days to the due date
          const currentDueDate = new Date(book.dueDate)
          const newDueDate = new Date(currentDueDate)
          newDueDate.setDate(currentDueDate.getDate() + 14)

          return {
            ...book,
            dueDate: newDueDate.toISOString().split("T")[0],
          }
        }
        return book
      }),
    )

    toast({
      title: "Book Renewed",
      description: "Your book has been renewed for 14 more days.",
    })
  }

  const handleReturn = (bookId: string) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === bookId) {
          return {
            ...book,
            status: "returned",
            returnDate: new Date().toISOString().split("T")[0],
          }
        }
        return book
      }),
    )

    toast({
      title: "Book Returned",
      description: "Your book has been marked as returned.",
    })
  }

  const handlePayPenalty = (bookId: string) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === bookId) {
          return {
            ...book,
            status: "borrowed",
            penalty: 0,
          }
        }
        return book
      }),
    )

    toast({
      title: "Penalty Paid",
      description: "Your penalty has been paid successfully.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Borrowed Books</h1>
        <p className="text-muted-foreground">Manage your borrowed books, e-books, and reading history.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Current Borrows</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentBooks.length + overdueBooks.length}</div>
            <p className="text-xs text-muted-foreground">
              {overdueBooks.length > 0 ? `${overdueBooks.length} overdue` : "All books on time"}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Physical Books</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{physicalBooks.filter((b) => b.status !== "returned").length}</div>
            <p className="text-xs text-muted-foreground">
              From {new Set(physicalBooks.map((b) => b.library)).size} libraries
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">E-Books</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{eBooks.length}</div>
            <p className="text-xs text-muted-foreground">Digital books in your collection</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Penalties</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{books.reduce((total, book) => total + (book.penalty || 0), 0)}</div>
            <p className="text-xs text-muted-foreground">{overdueBooks.length} overdue books</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Card>
        <CardHeader>
          <CardTitle>Your Books</CardTitle>
          <CardDescription>Manage your borrowed books and e-books</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Books</TabsTrigger>
              <TabsTrigger value="physical">Physical Books</TabsTrigger>
              <TabsTrigger value="ebooks">E-Books</TabsTrigger>
              <TabsTrigger value="overdue">Overdue</TabsTrigger>
              <TabsTrigger value="history">History</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {books.filter((book) => book.status !== "returned").length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {books
                    .filter((book) => book.status !== "returned")
                    .map((book) => (
                      <Card key={book.id} className="overflow-hidden">
                        <div className="flex h-full">
                          <div className="h-auto w-1/3 overflow-hidden bg-muted">
                            <img
                              src={book.coverImage || "/placeholder.svg"}
                              alt={book.title}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex w-2/3 flex-col p-4">
                            <div className="mb-2 flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold line-clamp-1">{book.title}</h3>
                                <p className="text-sm text-muted-foreground">{book.author}</p>
                              </div>
                              <Badge
                                variant={
                                  book.status === "overdue" ? "destructive" : book.isPhysical ? "default" : "secondary"
                                }
                              >
                                {book.status === "overdue" ? "Overdue" : book.isPhysical ? "Physical" : "E-Book"}
                              </Badge>
                            </div>

                            <div className="mt-auto space-y-2">
                              {book.isPhysical ? (
                                <>
                                  <div className="flex items-center gap-2 text-xs">
                                    <Calendar className="h-3 w-3" />
                                    <span>Due: {new Date(book.dueDate).toLocaleDateString()}</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-xs">
                                    <Clock className="h-3 w-3" />
                                    <span>
                                      {book.status === "overdue"
                                        ? `Overdue by ${Math.floor((new Date().getTime() - new Date(book.dueDate).getTime()) / (1000 * 60 * 60 * 24))} days`
                                        : `${Math.floor((new Date(book.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days remaining`}
                                    </span>
                                  </div>
                                  {book.penalty && (
                                    <div className="flex items-center gap-2 text-xs text-destructive">
                                      <span>Penalty: ₹{book.penalty}</span>
                                    </div>
                                  )}
                                </>
                              ) : (
                                <div className="space-y-1">
                                  <div className="flex items-center justify-between text-xs">
                                    <span>Progress</span>
                                    <span>{book.progress}%</span>
                                  </div>
                                  <Progress value={book.progress} className="h-1" />
                                </div>
                              )}

                              <div className="flex gap-2 pt-2">
                                {book.isPhysical ? (
                                  <>
                                    {book.status === "overdue" && book.penalty ? (
                                      <Button
                                        size="sm"
                                        variant="destructive"
                                        className="w-full"
                                        onClick={() => handlePayPenalty(book.id)}
                                      >
                                        Pay Penalty
                                      </Button>
                                    ) : (
                                      <>
                                        <Button
                                          size="sm"
                                          variant="outline"
                                          className="w-1/2"
                                          onClick={() => handleRenew(book.id)}
                                        >
                                          <RotateCcw className="mr-1 h-3 w-3" />
                                          Renew
                                        </Button>
                                        <Button size="sm" className="w-1/2" onClick={() => handleReturn(book.id)}>
                                          Return
                                        </Button>
                                      </>
                                    )}
                                  </>
                                ) : (
                                  <Button size="sm" className="w-full" asChild>
                                    <Link href={`/dashboard/member/e-library/read/${book.id}`}>
                                      Continue Reading
                                      <ArrowUpRight className="ml-1 h-3 w-3" />
                                    </Link>
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <BookOpen className="h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">No books borrowed</h3>
                  <p className="text-sm text-muted-foreground">You haven't borrowed any books yet.</p>
                  <Button variant="outline" size="sm" asChild className="mt-4">
                    <Link href="/libraries">Browse Libraries</Link>
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="physical" className="space-y-4">
              {physicalBooks.filter((book) => book.status !== "returned").length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {physicalBooks
                    .filter((book) => book.status !== "returned")
                    .map((book) => (
                      <Card key={book.id} className="overflow-hidden">
                        <div className="flex h-full">
                          <div className="h-auto w-1/3 overflow-hidden bg-muted">
                            <img
                              src={book.coverImage || "/placeholder.svg"}
                              alt={book.title}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex w-2/3 flex-col p-4">
                            <div className="mb-2 flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold line-clamp-1">{book.title}</h3>
                                <p className="text-sm text-muted-foreground">{book.author}</p>
                              </div>
                              <Badge variant={book.status === "overdue" ? "destructive" : "default"}>
                                {book.status === "overdue" ? "Overdue" : "Physical"}
                              </Badge>
                            </div>

                            <div className="mt-auto space-y-2">
                              <div className="flex items-center gap-2 text-xs">
                                <Calendar className="h-3 w-3" />
                                <span>Due: {new Date(book.dueDate).toLocaleDateString()}</span>
                              </div>
                              <div className="flex items-center gap-2 text-xs">
                                <Clock className="h-3 w-3" />
                                <span>
                                  {book.status === "overdue"
                                    ? `Overdue by ${Math.floor((new Date().getTime() - new Date(book.dueDate).getTime()) / (1000 * 60 * 60 * 24))} days`
                                    : `${Math.floor((new Date(book.dueDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days remaining`}
                                </span>
                              </div>
                              {book.penalty && (
                                <div className="flex items-center gap-2 text-xs text-destructive">
                                  <span>Penalty: ₹{book.penalty}</span>
                                </div>
                              )}

                              <div className="flex gap-2 pt-2">
                                {book.status === "overdue" && book.penalty ? (
                                  <Button
                                    size="sm"
                                    variant="destructive"
                                    className="w-full"
                                    onClick={() => handlePayPenalty(book.id)}
                                  >
                                    Pay Penalty
                                  </Button>
                                ) : (
                                  <>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="w-1/2"
                                      onClick={() => handleRenew(book.id)}
                                    >
                                      <RotateCcw className="mr-1 h-3 w-3" />
                                      Renew
                                    </Button>
                                    <Button size="sm" className="w-1/2" onClick={() => handleReturn(book.id)}>
                                      Return
                                    </Button>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <BookOpen className="h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">No physical books borrowed</h3>
                  <p className="text-sm text-muted-foreground">You haven't borrowed any physical books yet.</p>
                  <Button variant="outline" size="sm" asChild className="mt-4">
                    <Link href="/libraries">Browse Libraries</Link>
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="ebooks" className="space-y-4">
              {eBooks.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {eBooks.map((book) => (
                    <Card key={book.id} className="overflow-hidden">
                      <div className="flex h-full">
                        <div className="h-auto w-1/3 overflow-hidden bg-muted">
                          <img
                            src={book.coverImage || "/placeholder.svg"}
                            alt={book.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex w-2/3 flex-col p-4">
                          <div className="mb-2 flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold line-clamp-1">{book.title}</h3>
                              <p className="text-sm text-muted-foreground">{book.author}</p>
                            </div>
                            <Badge variant="secondary">E-Book</Badge>
                          </div>

                          <div className="mt-auto space-y-2">
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-xs">
                                <span>Progress</span>
                                <span>{book.progress}%</span>
                              </div>
                              <Progress value={book.progress} className="h-1" />
                            </div>

                            <div className="flex gap-2 pt-2">
                              <Button size="sm" className="w-full" asChild>
                                <Link href={`/dashboard/member/e-library/read/${book.id}`}>
                                  Continue Reading
                                  <ArrowUpRight className="ml-1 h-3 w-3" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <BookOpen className="h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">No e-books borrowed</h3>
                  <p className="text-sm text-muted-foreground">You haven't borrowed any e-books yet.</p>
                  <Button variant="outline" size="sm" asChild className="mt-4">
                    <Link href="/dashboard/member/e-library">Browse E-Library</Link>
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="overdue" className="space-y-4">
              {overdueBooks.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {overdueBooks.map((book) => (
                    <Card key={book.id} className="overflow-hidden">
                      <div className="flex h-full">
                        <div className="h-auto w-1/3 overflow-hidden bg-muted">
                          <img
                            src={book.coverImage || "/placeholder.svg"}
                            alt={book.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="flex w-2/3 flex-col p-4">
                          <div className="mb-2 flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold line-clamp-1">{book.title}</h3>
                              <p className="text-sm text-muted-foreground">{book.author}</p>
                            </div>
                            <Badge variant="destructive">Overdue</Badge>
                          </div>

                          <div className="mt-auto space-y-2">
                            <div className="flex items-center gap-2 text-xs">
                              <Calendar className="h-3 w-3" />
                              <span>Due: {new Date(book.dueDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-destructive">
                              <Clock className="h-3 w-3" />
                              <span>
                                Overdue by{" "}
                                {Math.floor(
                                  (new Date().getTime() - new Date(book.dueDate).getTime()) / (1000 * 60 * 60 * 24),
                                )}{" "}
                                days
                              </span>
                            </div>
                            {book.penalty && (
                              <div className="flex items-center gap-2 text-xs text-destructive">
                                <span>Penalty: ₹{book.penalty}</span>
                              </div>
                            )}

                            <div className="flex gap-2 pt-2">
                              {book.penalty ? (
                                <Button
                                  size="sm"
                                  variant="destructive"
                                  className="w-full"
                                  onClick={() => handlePayPenalty(book.id)}
                                >
                                  Pay Penalty
                                </Button>
                              ) : (
                                <Button size="sm" className="w-full" onClick={() => handleReturn(book.id)}>
                                  Return Now
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <Clock className="h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">No overdue books</h3>
                  <p className="text-sm text-muted-foreground">You don't have any overdue books. Keep it up!</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="history" className="space-y-4">
              {returnedBooks.length > 0 ? (
                <div className="rounded-md border">
                  <div className="grid grid-cols-12 gap-4 border-b bg-muted/50 p-4 font-medium">
                    <div className="col-span-4">Book</div>
                    <div className="col-span-2">Library</div>
                    <div className="col-span-2">Borrowed</div>
                    <div className="col-span-2">Due Date</div>
                    <div className="col-span-2">Returned</div>
                  </div>
                  {returnedBooks.map((book) => (
                    <div key={book.id} className="grid grid-cols-12 gap-4 border-b p-4 last:border-0">
                      <div className="col-span-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-8 overflow-hidden rounded bg-muted">
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
                        <p className="text-sm">{book.library}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm">{new Date(book.borrowDate).toLocaleDateString()}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm">{new Date(book.dueDate).toLocaleDateString()}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm">
                          {book.returnDate ? new Date(book.returnDate).toLocaleDateString() : "-"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <BookOpen className="h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">No borrowing history</h3>
                  <p className="text-sm text-muted-foreground">You haven't returned any books yet.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
