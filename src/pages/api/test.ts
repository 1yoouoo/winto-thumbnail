import type { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";
import fs from "fs";
import path from "path";

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

type Data = {
  url?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const filePath = path.join(process.cwd(), "assets", "test.jpeg");
  const bucketName = process.env.AWS_BUCKET_NAME;

  const fileContent = fs.readFileSync(filePath);

  const params = {
    Bucket: bucketName,
    Key: `thumbnail/${Date.now()}_test.jpeg`,
    Body: fileContent,
    ACL: "public-read",
  };

  try {
    const data = await s3.upload(params as AWS.S3.PutObjectRequest).promise();
    console.log(`File uploaded successfully. ${data.Location}`);

    res.status(200).json({ url: data.Location });
  } catch (err) {
    console.error("Error uploading file:", err);
    res.status(500).json({ error: "Failed to upload file" });
  }
}
