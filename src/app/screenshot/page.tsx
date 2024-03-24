export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const gameInfo = JSON.stringify(searchParams);
  return (
    <div>
      <h1>{gameInfo}</h1>
    </div>
  );
}
