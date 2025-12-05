"use client"

import TripForm from "../../components/tripForm";
import { useTrips } from "@/hooks/useTrips";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    // const [trip, setTrip] = useLocalStorage('id', { name: 'Viagens'});
    return (
        <html lang="en">
          <body>
              <TripForm onSubmit={useTrips}/>
          </body>
        </html>
    );
}
