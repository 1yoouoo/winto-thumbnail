import { app_url } from "@/constant/constant";

export async function sendSlackNotification({
  title,
  details,
}: {
  title: string;
  details: string;
}) {
  if (process.env.NODE_ENV === "development") {
    console.log("개발 모드에서는 Slack 알림이 전송되지 않습니다.");
    return;
  }

  let payload = {
    blocks: [
      {
        type: "section",
        text: { type: "mrkdwn", text: `*${title}*` },
      },
      {
        type: "section",
        text: { type: "mrkdwn", text: details },
      },
    ],
  };

  try {
    const response = await fetch(`${app_url}/api/v2/send-to-slack`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("Slack 알림 전송 실패");
    }
  } catch (error) {
    console.error("Slack 알림 전송 중 에러 발생:", error);
  }
}
