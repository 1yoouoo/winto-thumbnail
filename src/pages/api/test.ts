import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const filePath = path.join(process.cwd(), "assets", "test.jpeg");
  const bucketName = process.env.AWS_BUCKET_NAME!;

  try {
    const fileStream = fs.createReadStream(filePath);

    const uploadParams = {
      Bucket: bucketName,
      Key: `thumbnail/${Date.now()}_test.jpeg`,
      Body: fileStream,
    };

    const command = new PutObjectCommand(uploadParams);
    const data = await s3Client.send(command);
    console.log(`File uploaded successfully. ${data.$metadata.httpStatusCode}`);

    res.status(200).json({
      url: `https://${bucketName}.s3.amazonaws.com/${uploadParams.Key}`,
    });
  } catch (err) {
    console.error("Error uploading file:", err);
    res.status(500).json({ error: "Failed to upload file" });
  }
}
