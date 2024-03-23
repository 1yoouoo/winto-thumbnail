import fs from "fs";
import path from "path";

export async function getServerSideProps() {
  const dataDirPath = path.join(process.cwd(), "data");
  const filePath = path.join(dataDirPath, "gameInfo.json");

  if (!fs.existsSync(dataDirPath)) {
    fs.mkdirSync(dataDirPath);
  }

  if (!fs.existsSync(filePath)) {
    const defaultGameInfo = {
      championName: "Unknown",
    };
    fs.writeFileSync(
      filePath,
      JSON.stringify(defaultGameInfo, null, 2),
      "utf8"
    );
  }

  const gameInfoData = fs.readFileSync(filePath, "utf8");
  const gameInfo = JSON.parse(gameInfoData);

  return {
    props: { gameInfo },
  };
}
