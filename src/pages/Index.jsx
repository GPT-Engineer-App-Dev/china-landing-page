import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Image } from "@/components/ui/image";

const Index = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <Image src="/placeholder.svg" alt="Great Wall of China" className="w-full h-64 object-cover" />
        <h1 className="text-4xl font-bold">Discover the Wonders of China</h1>
        <p className="text-lg text-muted-foreground">Explore the rich culture, history, and breathtaking landscapes of China.</p>
      </section>

      <Separator />

      {/* Culture Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Culture</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Traditional Clothing</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src="/placeholder.svg" alt="Traditional Clothing" className="w-full h-32 object-cover" />
              <p className="mt-2 text-muted-foreground">Explore the beautiful traditional clothing of China, including the iconic qipao and hanfu.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Festivals</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src="/placeholder.svg" alt="Festivals" className="w-full h-32 object-cover" />
              <p className="mt-2 text-muted-foreground">Experience the vibrant festivals of China, such as the Chinese New Year and the Lantern Festival.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cuisine</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src="/placeholder.svg" alt="Cuisine" className="w-full h-32 object-cover" />
              <p className="mt-2 text-muted-foreground">Savor the diverse and delicious cuisine of China, from dim sum to Peking duck.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* History Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">History</h2>
        <div className="space-y-2">
          <Card>
            <CardHeader>
              <CardTitle>Ancient Dynasties</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src="/placeholder.svg" alt="Ancient Dynasties" className="w-full h-32 object-cover" />
              <p className="mt-2 text-muted-foreground">Learn about the ancient dynasties that shaped China's history, including the Qin, Han, and Tang dynasties.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Key Historical Events</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src="/placeholder.svg" alt="Key Historical Events" className="w-full h-32 object-cover" />
              <p className="mt-2 text-muted-foreground">Discover the key historical events that have influenced China's development over the centuries.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Tourism Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Tourism</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>The Great Wall of China</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src="/placeholder.svg" alt="The Great Wall of China" className="w-full h-32 object-cover" />
              <p className="mt-2 text-muted-foreground">Visit the iconic Great Wall of China, a marvel of ancient engineering and a UNESCO World Heritage site.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>The Forbidden City</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src="/placeholder.svg" alt="The Forbidden City" className="w-full h-32 object-cover" />
              <p className="mt-2 text-muted-foreground">Explore the majestic Forbidden City in Beijing, the former imperial palace of the Ming and Qing dynasties.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Terracotta Army</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src="/placeholder.svg" alt="Terracotta Army" className="w-full h-32 object-cover" />
              <p className="mt-2 text-muted-foreground">Discover the awe-inspiring Terracotta Army in Xi'an, a collection of thousands of life-sized clay soldiers.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Footer */}
      <footer className="text-center space-y-2">
        <p>Contact us: info@discoverchina.com</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-muted-foreground">Facebook</a>
          <a href="#" className="text-muted-foreground">Twitter</a>
          <a href="#" className="text-muted-foreground">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;