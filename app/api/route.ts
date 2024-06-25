import GetData from "../gallery/getData";

export async function GET() {
  const imgSorted = GetData();
 
  return Response.json({ imgSorted })
}
