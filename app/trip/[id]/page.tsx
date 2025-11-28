"use client"
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    const [trip, setTrip] = useLocalStorage('id', { name: 'cidade'});

    return (
        <html lang="en">
        <body>
            <h1>
                {trip.name}
            </h1>
        </body>
        </html>
    );
}
