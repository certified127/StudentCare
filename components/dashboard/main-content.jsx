"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Clock,
  MapPin,
  Phone,
  AlertTriangle,
  Calendar,
  FileText,
  Activity,
  Pill,
  Bell,
  CheckCircle,
  XCircle,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState } from "react"

export default function MainContent({ activeItem }) {
  const [location, setLocation] = useState("")
  const [isGettingLocation, setIsGettingLocation] = useState(false)

  // Sample doctor data with actual images
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "General Physician",
      availability: "Mon-Fri, 9AM-5PM",
      location: "Health Center, Room 101",
      image: "/images/doctors/dr-johnson.jpg",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Psychiatrist",
      availability: "Tue-Thu, 10AM-6PM",
      location: "Health Center, Room 102",
      image: "/images/doctors/dr-chen.jpg",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Dentist",
      availability: "Mon-Wed, 8AM-4PM",
      location: "Health Center, Room 103",
      image: "/images/doctors/dr-rodriguez.jpg",
    },
    {
      id: 4,
      name: "Dr. David Kim",
      specialty: "Nutritionist",
      availability: "Wed-Fri, 9AM-3PM",
      location: "Health Center, Room 104",
      image: "/images/doctors/dr-kim.jpg",
    },
    {
      id: 5,
      name: "Dr. Lisa Patel",
      specialty: "Dermatologist",
      availability: "Mon, Thu-Fri, 10AM-4PM",
      location: "Health Center, Room 105",
      image: "/images/doctors/dr-patel.jpg",
    },
    {
      id: 6,
      name: "Dr. James Wilson",
      specialty: "Orthopedist",
      availability: "Tue-Fri, 8AM-2PM",
      location: "Health Center, Room 106",
      image: "/images/doctors/dr-wilson.jpg",
    },
  ]

  // Expanded health history data
  const healthHistory = {
    recentVisits: [
      {
        date: "May 15, 2025",
        type: "Annual Physical Exam",
        doctor: "Dr. Sarah Johnson",
        department: "General Medicine",
        status: "Completed",
        notes: "Overall health excellent. Blood pressure normal. Recommended annual flu shot.",
        followUp: "Next annual exam: May 2026",
      },
      {
        date: "March 22, 2025",
        type: "Mental Health Consultation",
        doctor: "Dr. Michael Chen",
        department: "Psychiatry",
        status: "Completed",
        notes: "Discussed stress management techniques for academic pressure. Prescribed meditation exercises.",
        followUp: "Follow-up in 3 months",
      },
      {
        date: "March 10, 2025",
        type: "COVID-19 Vaccination",
        doctor: "Nurse Patricia Williams",
        department: "Immunization",
        status: "Completed",
        notes: "Received updated COVID-19 booster. No adverse reactions observed.",
        followUp: "Next booster as recommended by CDC",
      },
      {
        date: "February 5, 2025",
        type: "Dental Cleaning",
        doctor: "Dr. Emily Rodriguez",
        department: "Dental Care",
        status: "Completed",
        notes: "Routine cleaning completed. No cavities found. Good oral hygiene maintained.",
        followUp: "Next cleaning: August 2025",
      },
      {
        date: "January 18, 2025",
        type: "Allergy Testing",
        doctor: "Dr. Lisa Patel",
        department: "Dermatology",
        status: "Completed",
        notes: "Tested for common allergens. Mild reaction to pollen and dust mites detected.",
        followUp: "Prescribed antihistamines as needed",
      },
    ],
    vitalSigns: {
      lastUpdated: "May 15, 2025",
      bloodPressure: "118/76 mmHg",
      heartRate: "72 bpm",
      temperature: "98.6°F",
      weight: "145 lbs",
      height: "5'7\"",
      bmi: "22.7",
    },
    medicalConditions: [
      {
        condition: "Seasonal Allergies",
        diagnosed: "January 2025",
        status: "Active",
        severity: "Mild",
        treatment: "Antihistamines as needed",
      },
      {
        condition: "Myopia",
        diagnosed: "September 2020",
        status: "Stable",
        severity: "Moderate",
        treatment: "Corrective lenses",
      },
    ],
    immunizations: [
      { vaccine: "COVID-19 Booster", date: "March 10, 2025", nextDue: "As recommended" },
      { vaccine: "Influenza", date: "October 15, 2024", nextDue: "October 2025" },
      { vaccine: "Tdap", date: "June 2023", nextDue: "June 2033" },
      { vaccine: "MMR", date: "Childhood", nextDue: "Lifetime immunity" },
      { vaccine: "Hepatitis B", date: "Childhood", nextDue: "Lifetime immunity" },
    ],
  }

  // Expanded medication data
  const medicationData = {
    currentMedications: [
      {
        id: 1,
        name: "Vitamin D3",
        dosage: "1000 IU",
        frequency: "Once daily",
        time: "8:00 AM",
        taken: true,
        nextDose: "Tomorrow 8:00 AM",
        prescribedBy: "Dr. Sarah Johnson",
        startDate: "January 2025",
        endDate: "Ongoing",
        instructions: "Take with food",
        sideEffects: "None reported",
        color: "blue",
      },
      {
        id: 2,
        name: "Cetirizine (Zyrtec)",
        dosage: "10mg",
        frequency: "Once daily",
        time: "8:00 PM",
        taken: false,
        nextDose: "Today 8:00 PM",
        prescribedBy: "Dr. Lisa Patel",
        startDate: "January 2025",
        endDate: "As needed",
        instructions: "Take for allergy symptoms",
        sideEffects: "May cause drowsiness",
        color: "purple",
      },
      {
        id: 3,
        name: "Omega-3 Fish Oil",
        dosage: "1000mg",
        frequency: "Twice daily",
        time: "8:00 AM, 6:00 PM",
        taken: true,
        nextDose: "Today 6:00 PM",
        prescribedBy: "Dr. David Kim",
        startDate: "February 2025",
        endDate: "Ongoing",
        instructions: "Take with meals",
        sideEffects: "None reported",
        color: "green",
      },
      {
        id: 4,
        name: "Multivitamin",
        dosage: "1 tablet",
        frequency: "Once daily",
        time: "8:00 AM",
        taken: true,
        nextDose: "Tomorrow 8:00 AM",
        prescribedBy: "Dr. Sarah Johnson",
        startDate: "January 2025",
        endDate: "Ongoing",
        instructions: "Take with breakfast",
        sideEffects: "None reported",
        color: "orange",
      },
    ],
    upcomingDoses: [
      { medication: "Cetirizine", time: "8:00 PM", status: "pending" },
      { medication: "Omega-3 Fish Oil", time: "6:00 PM", status: "pending" },
      { medication: "Vitamin D3", time: "8:00 AM (Tomorrow)", status: "scheduled" },
      { medication: "Multivitamin", time: "8:00 AM (Tomorrow)", status: "scheduled" },
    ],
    medicationHistory: [
      {
        name: "Ibuprofen",
        dosage: "400mg",
        period: "March 2025 (3 days)",
        reason: "Headache relief",
        prescribedBy: "Dr. Sarah Johnson",
      },
      {
        name: "Amoxicillin",
        dosage: "500mg",
        period: "December 2024 (7 days)",
        reason: "Bacterial infection",
        prescribedBy: "Dr. Sarah Johnson",
      },
    ],
  }

  const getCurrentLocation = () => {
    setIsGettingLocation(true)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setLocation(`Lat: ${latitude.toFixed(6)}, Lng: ${longitude.toFixed(6)}`)
          setIsGettingLocation(false)
        },
        (error) => {
          console.error("Error getting location:", error)
          setLocation("Unable to get location")
          setIsGettingLocation(false)
        },
      )
    } else {
      setLocation("Geolocation not supported")
      setIsGettingLocation(false)
    }
  }

  // Placeholder content for each section
  const renderContent = () => {
    switch (activeItem) {
      case "health-history":
        return (
          <div className="space-y-6">
            {/* Recent Medical Visits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <FileText className="h-6 w-6" />
                  Recent Medical Visits
                </CardTitle>
                <CardDescription className="text-base">Your recent healthcare appointments and visits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {healthHistory.recentVisits.map((visit, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-base">{visit.type}</h4>
                          <p className="text-sm text-muted-foreground">
                            {visit.doctor} • {visit.department}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-base">{visit.date}</p>
                          <Badge variant="secondary" className="text-xs">
                            {visit.status}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm">{visit.notes}</p>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{visit.followUp}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Vital Signs */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Activity className="h-6 w-6" />
                  Latest Vital Signs
                </CardTitle>
                <CardDescription className="text-base">
                  Last updated: {healthHistory.vitalSigns.lastUpdated}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Blood Pressure</p>
                    <p className="font-semibold text-base">{healthHistory.vitalSigns.bloodPressure}</p>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Heart Rate</p>
                    <p className="font-semibold text-base">{healthHistory.vitalSigns.heartRate}</p>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Temperature</p>
                    <p className="font-semibold text-base">{healthHistory.vitalSigns.temperature}</p>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Weight</p>
                    <p className="font-semibold text-base">{healthHistory.vitalSigns.weight}</p>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Height</p>
                    <p className="font-semibold text-base">{healthHistory.vitalSigns.height}</p>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">BMI</p>
                    <p className="font-semibold text-base">{healthHistory.vitalSigns.bmi}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medical Conditions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Medical Conditions</CardTitle>
                <CardDescription className="text-base">Current and past medical conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {healthHistory.medicalConditions.map((condition, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-3">
                      <div>
                        <p className="font-medium text-base">{condition.condition}</p>
                        <p className="text-sm text-muted-foreground">Diagnosed: {condition.diagnosed}</p>
                        <p className="text-sm">{condition.treatment}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={condition.status === "Active" ? "destructive" : "secondary"}>
                          {condition.status}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">{condition.severity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Immunization Records */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Immunization Records</CardTitle>
                <CardDescription className="text-base">Your vaccination history and upcoming vaccines</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {healthHistory.immunizations.map((vaccine, index) => (
                    <div key={index} className="flex justify-between border-b pb-3">
                      <div>
                        <p className="font-medium text-base">{vaccine.vaccine}</p>
                        <p className="text-sm text-muted-foreground">Last received: {vaccine.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">Next due: {vaccine.nextDue}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )
      case "doctors-directory":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Doctor's Directory</CardTitle>
                <CardDescription className="text-base">Find healthcare providers on campus</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {doctors.map((doctor) => (
                    <Card key={doctor.id} className="overflow-hidden">
                      <div className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="h-16 w-16 rounded-full overflow-hidden bg-muted relative">
                            <Image
                              src={doctor.image || "/placeholder.svg"}
                              alt={doctor.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-base">{doctor.name}</h4>
                            <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                          </div>
                        </div>
                        <div className="mt-4 text-sm">
                          <p className="text-base">Available: {doctor.availability}</p>
                          <p className="mt-1 text-base">Building: {doctor.location}</p>
                        </div>
                        <Button className="w-full mt-4 text-base">Book Appointment</Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )
      case "emergency":
        return (
          <div className="space-y-6">
            {/* Emergency Location Form */}
            <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20">
              <CardHeader>
                <CardTitle className="text-red-600 dark:text-red-400 text-xl flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6" />
                  Emergency Alert
                </CardTitle>
                <CardDescription className="text-base">
                  Fill out this form to quickly alert emergency services of your location and situation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base font-medium">
                        Full Name
                      </Label>
                      <Input id="name" placeholder="Enter your full name" className="text-base" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base font-medium">
                        Phone Number
                      </Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" className="text-base" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emergency-type" className="text-base font-medium">
                      Emergency Type
                    </Label>
                    <Select>
                      <SelectTrigger className="text-base">
                        <SelectValue placeholder="Select emergency type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="medical">Medical Emergency</SelectItem>
                        <SelectItem value="fire">Fire</SelectItem>
                        <SelectItem value="security">Security Issue</SelectItem>
                        <SelectItem value="accident">Accident</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-base font-medium">
                      Current Location
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter your current location or building"
                        className="text-base flex-1"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={getCurrentLocation}
                        disabled={isGettingLocation}
                        className="text-base"
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        {isGettingLocation ? "Getting..." : "Get Location"}
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-base font-medium">
                      Description of Emergency
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Describe the emergency situation in detail..."
                      className="text-base min-h-[100px]"
                    />
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3">
                    <Phone className="h-5 w-5 mr-2" />
                    Send Emergency Alert
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <Card className="border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/20">
              <CardHeader>
                <CardTitle className="text-red-600 dark:text-red-400 text-xl">Emergency Contacts</CardTitle>
                <CardDescription className="text-base">Important contacts for emergency situations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-900 border dark:border-gray-800">
                    <h3 className="text-xl font-bold">Campus Emergency</h3>
                    <p className="text-3xl font-bold text-red-600 dark:text-red-400">911</p>
                    <p className="mt-2 text-base text-muted-foreground">For life-threatening emergencies</p>
                  </div>
                  <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-900 border dark:border-gray-800">
                    <h3 className="text-xl font-bold">Campus Health Center</h3>
                    <p className="text-3xl font-bold">555-123-4567</p>
                    <p className="mt-2 text-base text-muted-foreground">Available 24/7</p>
                  </div>
                  <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-900 border dark:border-gray-800">
                    <h3 className="text-xl font-bold">Campus Security</h3>
                    <p className="text-3xl font-bold">555-123-7890</p>
                    <p className="mt-2 text-base text-muted-foreground">Available 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )
      case "ask-carechat-ai":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Ask CareChat AI</CardTitle>
                <CardDescription className="text-base">Get answers to your health questions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col space-y-3">
                    <div className="bg-muted p-4 rounded-lg max-w-[80%] self-end">
                      <p className="text-base">How can I manage stress during finals week?</p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg max-w-[80%]">
                      <p className="text-base">
                        During finals week, try these stress management techniques:
                        <br />- Take regular breaks using the Pomodoro technique
                        <br />- Practice deep breathing exercises
                        <br />- Maintain a consistent sleep schedule
                        <br />- Stay hydrated and eat nutritious meals
                        <br />- Exercise for at least 30 minutes daily
                        <br />- Use campus resources like counseling services
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Input className="flex-1 text-base" placeholder="Type your health question here..." />
                    <Button className="text-base">Send</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )
      case "book-appointments":
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Book Appointments</CardTitle>
                <CardDescription className="text-base">Schedule appointments with healthcare providers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">General Checkup</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <p className="text-base">Available slots this week: 12</p>
                          <Button className="w-full text-base">Book Now</Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Mental Health</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <p className="text-base">Available slots this week: 8</p>
                          <Button className="w-full text-base">Book Now</Button>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">Dental Care</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <p className="text-base">Available slots this week: 5</p>
                          <Button className="w-full text-base">Book Now</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Upcoming Appointments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between border-b pb-3">
                          <div>
                            <p className="font-medium text-base">Dental Checkup</p>
                            <p className="text-sm text-muted-foreground">Dr. Lisa Wong</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-base">June 10, 2025</p>
                            <p className="text-sm text-muted-foreground">10:30 AM</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        )
      case "medication-reminder":
        return (
          <div className="space-y-6">
            {/* Current Medications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Pill className="h-6 w-6" />
                  Current Medications
                </CardTitle>
                <CardDescription className="text-base">Your active medication schedule and details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {medicationData.currentMedications.map((medication) => (
                    <div key={medication.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-10 w-10 rounded-full bg-${medication.color}-100 flex items-center justify-center dark:bg-${medication.color}-900`}
                          >
                            <Pill
                              className={`h-5 w-5 text-${medication.color}-600 dark:text-${medication.color}-300`}
                            />
                          </div>
                          <div>
                            <p className="font-medium text-base">{medication.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {medication.dosage} • {medication.frequency}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-base">{medication.time}</p>
                          <div className="flex items-center gap-1 mt-1">
                            {medication.taken ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : (
                              <XCircle className="h-4 w-4 text-red-600" />
                            )}
                            <p className={`text-sm ${medication.taken ? "text-green-600" : "text-red-600"}`}>
                              {medication.taken ? "Taken" : "Pending"}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p>
                            <span className="font-medium">Prescribed by:</span> {medication.prescribedBy}
                          </p>
                          <p>
                            <span className="font-medium">Duration:</span> {medication.startDate} - {medication.endDate}
                          </p>
                        </div>
                        <div>
                          <p>
                            <span className="font-medium">Instructions:</span> {medication.instructions}
                          </p>
                          <p>
                            <span className="font-medium">Side effects:</span> {medication.sideEffects}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        Next dose: {medication.nextDose}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Doses */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Bell className="h-6 w-6" />
                  Upcoming Doses Today
                </CardTitle>
                <CardDescription className="text-base">Medications scheduled for today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {medicationData.upcomingDoses.map((dose, index) => (
                    <div key={index} className="flex items-center justify-between border-b pb-3">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center dark:bg-orange-900">
                          <Clock className="h-4 w-4 text-orange-600 dark:text-orange-300" />
                        </div>
                        <div>
                          <p className="font-medium text-base">{dose.medication}</p>
                          <p className="text-sm text-muted-foreground">{dose.time}</p>
                        </div>
                      </div>
                      <Badge variant={dose.status === "pending" ? "destructive" : "secondary"}>{dose.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Medication History */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Medication History</CardTitle>
                <CardDescription className="text-base">Previously taken medications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {medicationData.medicationHistory.map((med, index) => (
                    <div key={index} className="flex justify-between border-b pb-3">
                      <div>
                        <p className="font-medium text-base">
                          {med.name} ({med.dosage})
                        </p>
                        <p className="text-sm text-muted-foreground">Reason: {med.reason}</p>
                        <p className="text-sm text-muted-foreground">Prescribed by: {med.prescribedBy}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{med.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="text-base flex-1">
                <Pill className="h-4 w-4 mr-2" />
                Add New Medication
              </Button>
              <Button className="text-base flex-1">
                <Bell className="h-4 w-4 mr-2" />
                Set Reminder
              </Button>
              <Button variant="outline" className="text-base flex-1">
                <Calendar className="h-4 w-4 mr-2" />
                View Calendar
              </Button>
            </div>
          </div>
        )
      default:
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-lg">Select an item from the sidebar</p>
          </div>
        )
    }
  }

  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold tracking-tight">
          {activeItem === "health-history" && "Health History"}
          {activeItem === "doctors-directory" && "Doctor's Directory"}
          {activeItem === "emergency" && "Emergency"}
          {activeItem === "ask-carechat-ai" && "Ask CareChat AI"}
          {activeItem === "book-appointments" && "Book Appointments"}
          {activeItem === "medication-reminder" && "Medication Reminder"}
        </h1>
        {renderContent()}
      </div>
    </main>
  )
}
