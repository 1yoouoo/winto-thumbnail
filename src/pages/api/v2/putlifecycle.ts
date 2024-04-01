import {
  S3Client,
  PutBucketLifecycleConfigurationCommand,
} from "@aws-sdk/client-s3";
import {
  spaceAccessKeyId,
  spaceRegion,
  spaceSecretAccessKey,
  spacesEndpoint,
  spaceName,
} from "@/constant/constant";

// eslint-disable-next-line no-unused-vars
async function setupLifecyclePolicy() {
  const s3Client = new S3Client({
    endpoint: spacesEndpoint!,
    region: spaceRegion!,
    credentials: {
      accessKeyId: spaceAccessKeyId!,
      secretAccessKey: spaceSecretAccessKey!,
    },
  });

  const command = new PutBucketLifecycleConfigurationCommand({
    Bucket: spaceName, // DigitalOcean Spaces의 버킷 이름
    LifecycleConfiguration: {
      Rules: [
        {
          ID: "DeleteAfterOneDay",
          Filter: {
            Prefix: "winto_thumbnail", // `winto_thumbnail` 폴더를 대상으로 설정
          },
          Expiration: { Days: 1 },
          Status: "Enabled",
        },
      ],
    },
  });

  try {
    const response = await s3Client.send(command);
    console.log("Lifecycle policy has been set up successfully:", response);
  } catch (error) {
    console.error("Failed to set up lifecycle policy:", error);
  }
}

// 이 함수를 호출하여 수명 주기 정책을 설정합니다.
// setupLifecyclePolicy();
