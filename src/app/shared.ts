import fs from "fs";

export const data = {
  createData: (data: any) => {
    fs.writeFileSync("data.json", JSON.stringify(data));
    return {};
  },
  readData: () => {
    return JSON.parse(fs.readFileSync("data.json", "utf-8"));
  },
};
