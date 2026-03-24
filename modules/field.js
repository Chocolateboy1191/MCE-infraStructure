import fetch from "node-fetch";

export async function field(g) {
  try {
    const res = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-5.3",
        input: `Interpret this pattern:\n${JSON.stringify(g, null, 2)}`
      })
    });

    const data = await res.json();

    return data?.output?.[0]?.content?.[0]?.text || "No response";
  } catch (err) {
    return `Field error: ${err.message}`;
  }
}
