import { app_url } from "@/constant/constant";
import { useCallback } from "react";

export function useSlackNotification() {
  const sendNotification = useCallback(
    async ({ title, details }: { title: string; details: string }) => {
      let payload;

      payload = {
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
    },
    []
  );

  return sendNotification;
}
