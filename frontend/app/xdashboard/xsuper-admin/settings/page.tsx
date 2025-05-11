"use client"

import type React from "react"

import { useState } from "react"
import { Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { useToast } from "@/components/ui/use-toast"

export default function SettingsPage() {
  const { toast } = useToast()
  const [generalSettings, setGeneralSettings] = useState({
    platformName: "LibraryHub",
    supportEmail: "support@libraryhub.com",
    contactPhone: "+1 (555) 123-4567",
    address: "123 Library Street, Booktown, BK 12345",
  })

  const [emailSettings, setEmailSettings] = useState({
    smtpServer: "smtp.libraryhub.com",
    smtpPort: "587",
    smtpUsername: "notifications@libraryhub.com",
    smtpPassword: "••••••••••••",
    senderName: "LibraryHub Notifications",
    senderEmail: "notifications@libraryhub.com",
  })

  const [notificationSettings, setNotificationSettings] = useState({
    enableEmailNotifications: true,
    enablePushNotifications: false,
    enableSmsNotifications: false,
    newMembershipNotification: true,
    bookingReminderNotification: true,
    dueDateReminderNotification: true,
    systemUpdateNotification: true,
  })

  const [paymentSettings, setPaymentSettings] = useState({
    currency: "INR",
    enableStripe: true,
    enablePaypal: false,
    enableRazorpay: true,
    testMode: true,
    autoRenewal: true,
  })

  const handleGeneralSettingsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setGeneralSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleEmailSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEmailSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleNotificationToggle = (setting: string, checked: boolean) => {
    setNotificationSettings((prev) => ({ ...prev, [setting]: checked }))
  }

  const handlePaymentToggle = (setting: string, checked: boolean) => {
    setPaymentSettings((prev) => ({ ...prev, [setting]: checked }))
  }

  const handlePaymentSettingsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setPaymentSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleSaveSettings = () => {
    // In a real app, this would save the settings to the backend
    toast({
      title: "Settings Saved",
      description: "Your settings have been saved successfully.",
    })
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Platform Settings</h1>
        <p className="text-muted-foreground">Manage global settings for the LibraryHub platform.</p>
      </div>

      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure basic information about the platform.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="platformName">Platform Name</Label>
                <Input
                  id="platformName"
                  name="platformName"
                  value={generalSettings.platformName}
                  onChange={handleGeneralSettingsChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supportEmail">Support Email</Label>
                <Input
                  id="supportEmail"
                  name="supportEmail"
                  type="email"
                  value={generalSettings.supportEmail}
                  onChange={handleGeneralSettingsChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPhone">Contact Phone</Label>
                <Input
                  id="contactPhone"
                  name="contactPhone"
                  value={generalSettings.contactPhone}
                  onChange={handleGeneralSettingsChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  name="address"
                  value={generalSettings.address}
                  onChange={handleGeneralSettingsChange}
                  rows={3}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveSettings}>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="email" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Email Settings</CardTitle>
              <CardDescription>Configure email server settings for sending notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="smtpServer">SMTP Server</Label>
                  <Input
                    id="smtpServer"
                    name="smtpServer"
                    value={emailSettings.smtpServer}
                    onChange={handleEmailSettingsChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtpPort">SMTP Port</Label>
                  <Input
                    id="smtpPort"
                    name="smtpPort"
                    value={emailSettings.smtpPort}
                    onChange={handleEmailSettingsChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="smtpUsername">SMTP Username</Label>
                  <Input
                    id="smtpUsername"
                    name="smtpUsername"
                    value={emailSettings.smtpUsername}
                    onChange={handleEmailSettingsChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="smtpPassword">SMTP Password</Label>
                  <Input
                    id="smtpPassword"
                    name="smtpPassword"
                    type="password"
                    value={emailSettings.smtpPassword}
                    onChange={handleEmailSettingsChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="senderName">Sender Name</Label>
                  <Input
                    id="senderName"
                    name="senderName"
                    value={emailSettings.senderName}
                    onChange={handleEmailSettingsChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="senderEmail">Sender Email</Label>
                  <Input
                    id="senderEmail"
                    name="senderEmail"
                    type="email"
                    value={emailSettings.senderEmail}
                    onChange={handleEmailSettingsChange}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveSettings}>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how and when notifications are sent to users.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notification Channels</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enableEmailNotifications">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Send notifications via email</p>
                  </div>
                  <Switch
                    id="enableEmailNotifications"
                    checked={notificationSettings.enableEmailNotifications}
                    onCheckedChange={(checked) => handleNotificationToggle("enableEmailNotifications", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enablePushNotifications">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Send notifications via browser push</p>
                  </div>
                  <Switch
                    id="enablePushNotifications"
                    checked={notificationSettings.enablePushNotifications}
                    onCheckedChange={(checked) => handleNotificationToggle("enablePushNotifications", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enableSmsNotifications">SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">Send notifications via SMS</p>
                  </div>
                  <Switch
                    id="enableSmsNotifications"
                    checked={notificationSettings.enableSmsNotifications}
                    onCheckedChange={(checked) => handleNotificationToggle("enableSmsNotifications", checked)}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notification Events</h3>
                <div className="flex items-center justify-between">
                  <Label htmlFor="newMembershipNotification">New Membership</Label>
                  <Switch
                    id="newMembershipNotification"
                    checked={notificationSettings.newMembershipNotification}
                    onCheckedChange={(checked) => handleNotificationToggle("newMembershipNotification", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="bookingReminderNotification">Booking Reminders</Label>
                  <Switch
                    id="bookingReminderNotification"
                    checked={notificationSettings.bookingReminderNotification}
                    onCheckedChange={(checked) => handleNotificationToggle("bookingReminderNotification", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="dueDateReminderNotification">Due Date Reminders</Label>
                  <Switch
                    id="dueDateReminderNotification"
                    checked={notificationSettings.dueDateReminderNotification}
                    onCheckedChange={(checked) => handleNotificationToggle("dueDateReminderNotification", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="systemUpdateNotification">System Updates</Label>
                  <Switch
                    id="systemUpdateNotification"
                    checked={notificationSettings.systemUpdateNotification}
                    onCheckedChange={(checked) => handleNotificationToggle("systemUpdateNotification", checked)}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveSettings}>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Settings</CardTitle>
              <CardDescription>Configure payment gateways and options.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="currency">Default Currency</Label>
                <select
                  id="currency"
                  name="currency"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={paymentSettings.currency}
                  onChange={handlePaymentSettingsChange}
                >
                  <option value="INR">Indian Rupee (₹)</option>
                  <option value="USD">US Dollar ($)</option>
                  <option value="EUR">Euro (€)</option>
                  <option value="GBP">British Pound (£)</option>
                </select>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Payment Gateways</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enableStripe">Stripe</Label>
                    <p className="text-sm text-muted-foreground">Accept payments via Stripe</p>
                  </div>
                  <Switch
                    id="enableStripe"
                    checked={paymentSettings.enableStripe}
                    onCheckedChange={(checked) => handlePaymentToggle("enableStripe", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enablePaypal">PayPal</Label>
                    <p className="text-sm text-muted-foreground">Accept payments via PayPal</p>
                  </div>
                  <Switch
                    id="enablePaypal"
                    checked={paymentSettings.enablePaypal}
                    onCheckedChange={(checked) => handlePaymentToggle("enablePaypal", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="enableRazorpay">Razorpay</Label>
                    <p className="text-sm text-muted-foreground">Accept payments via Razorpay</p>
                  </div>
                  <Switch
                    id="enableRazorpay"
                    checked={paymentSettings.enableRazorpay}
                    onCheckedChange={(checked) => handlePaymentToggle("enableRazorpay", checked)}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Payment Options</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="testMode">Test Mode</Label>
                    <p className="text-sm text-muted-foreground">Use test credentials for payment gateways</p>
                  </div>
                  <Switch
                    id="testMode"
                    checked={paymentSettings.testMode}
                    onCheckedChange={(checked) => handlePaymentToggle("testMode", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="autoRenewal">Auto-Renewal</Label>
                    <p className="text-sm text-muted-foreground">Enable automatic renewal of memberships</p>
                  </div>
                  <Switch
                    id="autoRenewal"
                    checked={paymentSettings.autoRenewal}
                    onCheckedChange={(checked) => handlePaymentToggle("autoRenewal", checked)}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveSettings}>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
