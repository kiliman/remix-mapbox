# Remix Mapbox Example

To run this sample, you will need to get a Mapbox API token https://mapbox.com.

Copy the file `.env.example` as `.env` and add your token here.

Then run `npm run dev`. You should see the map of the United States.

NOTE: Since the map renders to a `<canvas>`, we use the `<ClientOnly>` component
from `remix-utils` to ensure the `<Map>` component doesn't render on the server.
