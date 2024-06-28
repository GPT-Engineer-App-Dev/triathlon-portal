import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import openSeaSwimmers from "@/public/images/open-sea-swimmers.jpg";
import bicycleRace from "@/public/images/bicycle-race.jpg";
import marathonRunners from "@/public/images/marathon-runners.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold mb-4">Triathlon Event</h1>
        <p className="text-xl text-gray-700">Join us for an unforgettable experience</p>
        <Button className="mt-4" variant="primary">Register Now</Button>
      </header>
      <main className="max-w-4xl mx-auto">
        <Tabs defaultValue="overview">
          <TabsList className="flex justify-center mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="location">Location</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Event Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Our triathlon event includes swimming, cycling, and running segments. Participants of all levels are welcome.
                </p>
                <div className="flex space-x-4 mt-4">
                  <img src={openSeaSwimmers} alt="Open Sea Swimmers" className="w-1/3 rounded-lg" />
                  <img src={bicycleRace} alt="Bicycle Race" className="w-1/3 rounded-lg" />
                  <img src={marathonRunners} alt="Marathon Runners" className="w-1/3 rounded-lg" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>Event Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  <li>8:00 AM - Registration</li>
                  <li>9:00 AM - Swimming Start</li>
                  <li>10:00 AM - Cycling Start</li>
                  <li>12:00 PM - Running Start</li>
                  <li>2:00 PM - Award Ceremony</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="location">
            <Card>
              <CardHeader>
                <CardTitle>Event Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The event will take place at the beautiful Lakeview Park. Address: 123 Lakeview Drive, Triathlon City.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Separator className="my-10" />
      <footer className="text-center text-gray-600">
        <p>&copy; 2023 Triathlon Event. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;