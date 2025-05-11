"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Coffee, Loader2, Monitor, Save, Users, VolumeX, Wifi, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from "@/lib/auth-provider"
import { mockLibraryService } from "@/lib/mock-api/library-service"
import type { Library, LibraryAmenity } from "@/types/library"

// Map amenity to label
const amenityLabels: Record<LibraryAmenity, string> = {
  wifi: "Wi-Fi",
  ac: "Air Conditioning",
  cafe: "Café",
  power_outlets: "Power Outlets",
  quiet_zones: "Quiet Zones",
  meeting_rooms: "Meeting Rooms",
  computers: "Computers",
}

// Map amenity to icon
const amenityIcons: Record<LibraryAmenity, React.ReactNode> = {
  wifi: <Wifi className="h-4 w-4" />,
  ac: <Zap className="h-4 w-4" />,
  cafe: <Coffee className="h-4 w-4" />,
  power_outlets: <Zap className="h-4 w-4" />,
  quiet_zones: <VolumeX className="h-4 w-4" />,
  meeting_rooms: <Users className="h-4 w-4" />,
  computers: <Monitor className="h-4 w-4" />,
}

export default function LibraryProfilePage() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()
  const [library, setLibrary] = useState<Library | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState<Partial<Library>>({})

  useEffect(() => {
    const fetchLibrary = async () => {
      setLoading(true)
      try {
        if (user?.libraryId) {
          const libraryData = await mockLibraryService.getLibrary(user.libraryId)
          setLibrary(libraryData)
          setFormData(libraryData || {})
        }
      } catch (error) {
        console.error("Error fetching library:", error)
        toast({
          title: "Error",
          description: "Failed to load library data",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }

    fetchLibrary()
  }, [user, toast])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAmenityChange = (amenity: LibraryAmenity, checked: boolean) => {
    setFormData((prev) => {
      const currentAmenities = prev.amenities || []
      return {
        ...prev,
        amenities: checked ? [...currentAmenities, amenity] : currentAmenities.filter((a) => a !== amenity),
      }
    })
  }

  const handleOpeningHoursChange = (day: string, field: "open" | "close", value: string) => {
    setFormData((prev) => ({
      ...prev,
      openingHours: {
        ...prev.openingHours,
        [day]: {
          ...prev.openingHours?.[day as keyof typeof prev.openingHours],
          [field]: value,
        },
      },
    }))
  }

  const handleSave = async () => {
    if (!user?.libraryId || !formData) return

    setSaving(true)
    try {
      await mockLibraryService.updateLibrary(user.libraryId, formData)
      toast({
        title: "Success",
        description: "Library profile updated successfully",
      })
    } catch (error) {
      console.error("Error updating library:", error)
      toast({
        title: "Error",
        description: "Failed to update library profile",
        variant: "destructive",
      })
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-lg font-medium">Loading library profile...</p>
        </div>
      </div>
    )
  }

  if (!library) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg font-medium">Library not found</p>
          <Button variant="outline" onClick={() => router.push("/dashboard/admin")}>
            Back to Dashboard
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Library Profile</h1>
        <p className="text-muted-foreground">Manage your library's information and settings</p>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="mb-4">
          <TabsTrigger value="general">General Information</TabsTrigger>
          <TabsTrigger value="amenities">Amenities</TabsTrigger>
          <TabsTrigger value="hours">Opening Hours</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Update your library's basic details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Library Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleInputChange}
                  placeholder="Enter library name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description || ""}
                  onChange={handleInputChange}
                  placeholder="Describe your library"
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address || ""}
                  onChange={handleInputChange}
                  placeholder="Enter library address"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="totalSeats">Total Seats</Label>
                  <Input
                    id="totalSeats"
                    name="totalSeats"
                    type="number"
                    value={formData.totalSeats || ""}
                    onChange={handleInputChange}
                    placeholder="Enter total seats"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="availableSeats">Available Seats</Label>
                  <Input
                    id="availableSeats"
                    name="availableSeats"
                    type="number"
                    value={formData.availableSeats || ""}
                    onChange={handleInputChange}
                    placeholder="Enter available seats"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="amenities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Amenities</CardTitle>
              <CardDescription>Select the amenities available at your library</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {(Object.keys(amenityLabels) as LibraryAmenity[]).map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-2">
                    <Checkbox
                      id={`amenity-${amenity}`}
                      checked={(formData.amenities || []).includes(amenity)}
                      onCheckedChange={(checked) => handleAmenityChange(amenity, checked as boolean)}
                    />
                    <Label
                      htmlFor={`amenity-${amenity}`}
                      className="flex items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {amenityIcons[amenity]}
                      {amenityLabels[amenity]}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hours" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Opening Hours</CardTitle>
              <CardDescription>Set your library's operating hours</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.keys(library.openingHours).map((day) => (
                  <div key={day} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor={`${day}-open`} className="capitalize">
                        {day} Opening Time
                      </Label>
                      <Input
                        id={`${day}-open`}
                        type="time"
                        value={formData.openingHours?.[day as keyof typeof formData.openingHours]?.open || ""}
                        onChange={(e) => handleOpeningHoursChange(day, "open", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`${day}-close`} className="capitalize">
                        {day} Closing Time
                      </Label>
                      <Input
                        id={`${day}-close`}
                        type="time"
                        value={formData.openingHours?.[day as keyof typeof formData.openingHours]?.close || ""}
                        onChange={(e) => handleOpeningHoursChange(day, "close", e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="images" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Library Images</CardTitle>
              <CardDescription>Upload and manage images of your library</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {library.images.map((image, index) => (
                  <div key={index} className="relative aspect-square overflow-hidden rounded-md border">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Library image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <Button
                      variant="destructive"
                      size="sm"
                      className="absolute right-2 top-2"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          images: (prev.images || []).filter((_, i) => i !== index),
                        }))
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                ))}
                <div className="flex aspect-square items-center justify-center rounded-md border border-dashed">
                  <div className="flex flex-col items-center gap-2 p-4 text-center">
                    <p className="text-sm font-medium">Add Image</p>
                    <p className="text-xs text-muted-foreground">Upload a new image of your library</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Upload
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button onClick={handleSave} disabled={saving}>
          {saving ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
