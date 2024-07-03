import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to Explore China</h1>
        <p className="text-lg mt-2">Discover the beauty and culture of China</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <AspectRatio ratio={16 / 9}>
            <img src="/placeholder.svg" alt="Great Wall of China" className="object-cover w-full h-full" />
          </AspectRatio>
          <CardHeader>
            <CardTitle>Great Wall of China</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              The Great Wall of China is one of the greatest sights in the world - the longest wall in the world, an awe-inspiring feat of ancient defensive architecture.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Learn More</Button>
          </CardFooter>
        </Card>
        <Card>
          <AspectRatio ratio={16 / 9}>
            <img src="/placeholder.svg" alt="Forbidden City" className="object-cover w-full h-full" />
          </AspectRatio>
          <CardHeader>
            <CardTitle>Forbidden City</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              The Forbidden City is a palace complex in central Beijing, China. The former Chinese imperial palace from the Ming dynasty to the end of the Qing dynasty.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Learn More</Button>
          </CardFooter>
        </Card>
        <Card>
          <AspectRatio ratio={16 / 9}>
            <img src="/placeholder.svg" alt="Terracotta Army" className="object-cover w-full h-full" />
          </AspectRatio>
          <CardHeader>
            <CardTitle>Terracotta Army</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Learn More</Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
};

export default Index;