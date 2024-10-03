import Link from "next/link";

const mockUrls =
  [
    
    "https://utfs.io/f/Z070XchsY2SjbaYvxtLGOg9NJp1MrFPVQfaniwvBlmdRSjCZ",
    "https://utfs.io/f/Z070XchsY2Sj4a7mSVwu0g2vB5rFHRh3KpUeAId9Yn1ZfOqo",
    "https://utfs.io/f/Z070XchsY2SjtfqzTwnQnbmIU9gA36yDNKRWHh2iavLfYlos"
  ]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))
export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages].map((image) => (
          <div className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>


      Hello gallery in progress
    </main>
  );
}
