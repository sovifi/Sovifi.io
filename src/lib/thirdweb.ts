'use client';

import { createThirdwebClient, ThirdwebClient } from "thirdweb";

export const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;

if (!clientId) {
  console.error("Missing env var: NEXT_PUBLIC_THIRDWEB_CLIENT_ID");
}

export const client: ThirdwebClient = createThirdwebClient({
  clientId: clientId || "",
}); 