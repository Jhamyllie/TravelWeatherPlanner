// import { useLocalStorage } from "./useLocalStorage";

// const [trip, setTrip] = useLocalStorage('id', { name: 'cidade'})

import { useLocalStorage } from './useLocalStorage'

export interface Trip {
  id: string
  destino: string
  data: string
  preco: number
}

export function useTrips() {
  const [trips, setTrips] = useLocalStorage<Trip[]>('trips', [])

  function addTrip(newTrip: Omit<Trip, 'id'>) {
    const trip = { ...newTrip, id: crypto.randomUUID() }
    setTrips([...trips, trip])
  }

  function removeTrip(id: string) {
    setTrips(trips.filter(t => t.id !== id))
  }

  return { trips, addTrip, removeTrip }
}