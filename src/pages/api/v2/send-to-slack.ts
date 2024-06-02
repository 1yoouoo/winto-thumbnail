import { slackWebhookUrl } from "@/constant/constant";
import fetch from "node-fetch";

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const message = req.body; // req.body를 직접 사용

    if (!slackWebhookUrl) {
      return res.status(500).json({ error: "Missing Slack webhook URL" });
    }

    const webhookUrl: string = slackWebhookUrl;

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message), // 클라이언트로부터 받은 메시지 객체를 직접 전달
      });

      if (response.ok) {
        res.status(200).json({ success: true });
      } else {
        console.error("Slack 알림 전송 실패:", response.statusText);
        res.status(500).json({ success: false });
      }
    } catch (error) {
      console.error("Slack 알림 전송 중 에러 발생:", error);
      res.status(500).json({ success: false });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
