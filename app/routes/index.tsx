import Map from 'react-map-gl'
import { json, useLoaderData } from 'remix'
import { ClientOnly } from 'remix-utils'

export const loader = () => {
  return json({ MAPBOX_TOKEN: process.env.MAPBOX_TOKEN })
}

export default function Index() {
  const { MAPBOX_TOKEN } = useLoaderData()
  return (
    <ClientOnly>
      <Map
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      />
    </ClientOnly>
  )
}
