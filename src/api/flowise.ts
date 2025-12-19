type FlowiseRequest = {
  question: string;
};

type FlowiseResponse = {
  text?: string;
  answer?: string;
};

export async function askFlowise(
  data: FlowiseRequest
): Promise<FlowiseResponse> {
  const response = await fetch(
    "https://cloud.flowiseai.com/api/v1/prediction/d9bbb4f4-4bdc-43ba-8511-49aa76cab03a",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  );

  if (!response.ok) {
    throw new Error("Flowise request failed");
  }

  return response.json();
}
