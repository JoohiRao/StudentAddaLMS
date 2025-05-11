import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <Skeleton className="h-8 w-[250px]" />
        <Skeleton className="h-4 w-[350px]" />
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Skeleton className="h-10 w-full md:w-1/3" />
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-10 w-[180px]" />
          <Skeleton className="h-10 w-[180px]" />
          <Skeleton className="h-10 w-[180px]" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-10 w-[120px]" />
        <Skeleton className="h-10 w-[150px]" />
      </div>

      <div className="mt-4">
        <Skeleton className="mb-6 h-10 w-[200px]" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <CardHeader className="p-0">
                <Skeleton className="aspect-[3/4] w-full" />
              </CardHeader>
              <CardContent className="p-4">
                <Skeleton className="mb-2 h-5 w-full" />
                <Skeleton className="mb-4 h-4 w-2/3" />
                <Skeleton className="mb-2 h-4 w-1/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="mt-1 h-4 w-full" />
              </CardContent>
              <CardFooter className="flex justify-between p-4 pt-0">
                <Skeleton className="h-9 w-[80px]" />
                <Skeleton className="h-9 w-[80px]" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
