'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronRight, Wallet, Music, ShoppingCart, Gift, Users } from 'lucide-react'
import Image from 'next/image'

export function ArtistProfileComponent() {
const [isWalletConnected, setIsWalletConnected] = useState(false)

const rewards = [
  { tier: 1, name: "GLITCH REAPER", points: 1000, image: "/placeholder.svg?height=200&width=200&text=Glitch+Reaper" },
  { tier: 2, name: "TICKETPASS", points: 1200, image: "/placeholder.svg?height=200&width=200&text=Ticketpass" },
  { tier: 3, name: 'WE LOVE YOU "LIFE SIMULATOR"', points: 1500, image: "/placeholder.svg?height=200&width=200&text=Life+Simulator" },
  { tier: 4, name: "METABOOKS", points: 1800, image: "/placeholder.svg?height=200&width=200&text=Metabooks" },
  { tier: 5, name: "DEADBAT MIXXED", points: 2200, image: "/placeholder.svg?height=200&width=200&text=Deadbat+Mixxed" },
  { tier: 6, name: "GLITCH REAPER II", points: 2500, image: "/placeholder.svg?height=200&width=200&text=Glitch+Reaper+II" },
  { tier: 7, name: "TICKETPASS PLUS", points: 2800, image: "/placeholder.svg?height=200&width=200&text=Ticketpass+Plus" },
  { tier: 8, name: 'LIFE SIMULATOR DELUXE', points: 3100, image: "/placeholder.svg?height=200&width=200&text=Life+Simulator+Deluxe" },
  { tier: 9, name: "METABOOKS PRO", points: 3400, image: "/placeholder.svg?height=200&width=200&text=Metabooks+Pro" },
  { tier: 10, name: "DEADBAT ULTIMATE", points: 3700, image: "/placeholder.svg?height=200&width=200&text=Deadbat+Ultimate" },
  { tier: 11, name: "GLITCH MASTER", points: 4000, image: "/placeholder.svg?height=200&width=200&text=Glitch+Master" },
  { tier: 12, name: "LEGENDARY FAN", points: 4500, image: "/placeholder.svg?height=200&width=200&text=Legendary+Fan" },
]

return (
  <div className="min-h-screen bg-black text-white scrollbar-hide">
    {/* Full-screen hero image and navigation */}
    <div className="relative h-screen">
      <img
        src="/placeholder.svg?height=1080&width=1920"
        alt="Artist Hero Image"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70">
        <nav className="flex justify-between items-center p-6">
          <div className="flex space-x-6">
            <a href="#club" className="text-sm font-medium hover:text-primary-foreground">Club</a>
            <a href="#collection" className="text-sm font-medium hover:text-primary-foreground">Collection</a>
            <a href="#marketplace" className="text-sm font-medium hover:text-primary-foreground">Marketplace</a>
            <a href="#merch" className="text-sm font-medium hover:text-primary-foreground">Merch</a>
            <a href="#rewards" className="text-sm font-medium hover:text-primary-foreground">Claim Rewards</a>
            <a href="#community" className="text-sm font-medium hover:text-primary-foreground">Community</a>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Wallet className="mr-2 h-4 w-4" /> Connect Wallet
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Connect your wallet</DialogTitle>
                <DialogDescription>
                  Connect your wallet to access exclusive content and features.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="wallet" className="text-right">
                    Wallet
                  </Label>
                  <Input id="wallet" value="0x1234...5678" className="col-span-3" readOnly />
                </div>
              </div>
              <Button type="submit" onClick={() => setIsWalletConnected(true)}>Connect</Button>
            </DialogContent>
          </Dialog>
        </nav>
        <div className="absolute bottom-20 left-10 max-w-xl">
          <h1 className="text-5xl font-bold mb-4">Welcome to the Artist's Universe</h1>
          <p className="text-xl mb-6">Explore exclusive content, collect unique digital assets, and join a vibrant community of fans.</p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Join the Club <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>

    {/* Welcome & Overview Section */}
    <section className="py-20 px-10 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">What to Explore</h2>
        <p className="text-xl mb-10">Dive into a world of exclusive digital collectibles, join our thriving community, unlock special perks, and participate in unforgettable events.</p>
        <div className="grid grid-cols-3 gap-6 text-left">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle>1. Connect Your Wallet</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Link your digital wallet to access exclusive content and features.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle>2. Join the Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Become part of our vibrant Discord community and connect with other fans.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle>3. Unlock Exclusive Content</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Get access to behind-the-scenes content, early releases, and special events.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    {/* Digital Collectibles & NFT Gallery Section */}
    <section id="collection" className="py-20 px-10 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Digital Collectibles</h2>
        <div className="grid grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <Card key={i} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <img src={`/placeholder.svg?height=300&width=300&text=NFT ${i + 1}`} alt={`NFT ${i + 1}`} className="w-full h-48 object-cover rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <h3 className="font-bold mb-2">NFT Collection #{i + 1}</h3>
                <p className="text-sm text-gray-400">Status: {i % 2 === 0 ? 'For Sale' : 'Owned'}</p>
                {i % 2 === 0 && <p className="text-sm font-bold mt-2">Price: 0.5 ETH</p>}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="mt-10 text-center text-gray-400">These NFTs represent unique digital assets with exclusive benefits for holders. Collect them to unlock special perks and experiences.</p>
      </div>
    </section>

    {/* Events & Merchandise Section */}
    <section id="merch" className="py-20 px-10 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="events" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="events">Upcoming Events</TabsTrigger>
            <TabsTrigger value="merch">Merchandise</TabsTrigger>
          </TabsList>
          <TabsContent value="events">
            <div className="grid grid-cols-3 gap-6 mt-6">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle>Exclusive Concert #{i + 1}</CardTitle>
                    <CardDescription>Date: May {15 + i}, 2024</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>An unforgettable night of music and connection with fellow fans.</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Buy Tickets</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="merch">
            <div className="grid grid-cols-4 gap-6 mt-6">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <img src={`/placeholder.svg?height=300&width=300&text=Merch ${i + 1}`} alt={`Merch ${i + 1}`} className="w-full h-48 object-cover rounded-t-lg" />
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-bold mb-2">Limited Edition T-Shirt #{i + 1}</h3>
                    <p className="text-sm text-gray-400">NFC-enabled for exclusive content</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>

    {/* Rewards & Perks Section */}
    <section id="rewards" className="py-20 px-4 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url("/placeholder.svg?height=600&width=1200&text=Grungy+Background")'}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-4">Ticketpass</h2>
        <p className="text-xl mb-10 max-w-3xl">
          Ticketpass allows you to buy concert tickets a day before general presale. It will protect you from Bots,
          dynamic pricing and scalpers. Highly recommended for Pit Tickets. *Applies only to Ticketmaster shows
        </p>
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex space-x-4 w-max">
            {rewards.map((reward) => (
              <Card key={reward.tier} className="w-[250px] flex-shrink-0 bg-gray-900 border-gray-700">
                <CardHeader className="relative p-0">
                  <img src={reward.image} alt={reward.name} className="w-full h-48 object-cover rounded-t-lg" />
                  <div className="absolute bottom-2 left-2 bg-blue-500 text-white px-2 py-1 rounded">
                    TIER {reward.tier}
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{reward.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{reward.points} PTS. TO UNLOCK</p>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Community Section */}
    <section id="community" className="py-20 px-10 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
        <p className="text-xl mb-10">Connect with fellow fans, get the latest updates, and participate in exclusive events.</p>
        <Button size="lg" className="bg-[#5865F2] hover:bg-[#5865F2]/90 text-white">
          <Users className="mr-2 h-5 w-5" /> Join our Discord
        </Button>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src="/placeholder.svg?height=100&width=300&text=Artist+Logo"
            alt="Artist Logo"
            
            width={300}
            height={100}
            className="mx-auto"
          />
        </div>
        <p className="text-xs mb-6 text-gray-400 max-w-2xl mx-auto">
          BY USING OUR SITE, YOU AGREE TO BE BOUND BY AND TO COMPLY WITH THESE TERMS, INCLUDING ALL RULES, TERMS, CONDITIONS, RESTRICTIONS, AND NOTICES CONTAINED HEREIN. YOU FURTHER AGREE TO RECEIVE REQUIRED NOTICES AND TO TRANSACT WITH US ELECTRONICALLY. BY AGREEING TO THESE TERMS, YOU CERTIFY THAT YOU ARE AT LEAST 18 YEARS OF AGE. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT ACCESS OR USE THE SITE. OUR SITE IS PROVIDED FOR YOUR PERSONAL, LAWFUL, NON-COMMERCIAL USE ONLY.
        </p>
        <div className="text-sm">
          <p className="mb-2">&copy; 2024 Artist Name. All rights reserved.</p>
          <p className="text-purple-500">Powered by Sovifi</p>
        </div>
      </div>
    </footer>
  </div>
)
}