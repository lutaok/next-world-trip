import type { NextApiRequest, NextApiResponse } from 'next';

interface RandomCity {
  name: string;
  lat: number;
  lng: number;
}

const cityFetcher = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await (await fetch('https://api.3geonames.org/?randomland=yes&json=1')).json();
  res.send(response.major);
};

export default cityFetcher;
