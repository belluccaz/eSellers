interface IntegratedProduct {
  id: string;
  name: string;
  sku: string;
  price: number;
  quantity: number;
}

export const mockIntegratedProducts: Record<string, IntegratedProduct[]> = {
  "Mercado Livre": [
    {
      id: "ml-001",
      name: "Controle Xbox Series S/X",
      sku: "ML-XBX-001",
      price: 289.9,
      quantity: 20,
    },
    {
      id: "ml-002",
      name: "Mouse Gamer Logitech G203",
      sku: "ML-LOGI-002",
      price: 139.9,
      quantity: 50,
    },
  ],
  Shopee: [
    {
      id: "sh-001",
      name: "Echo Dot 4ª Geração",
      sku: "SH-ALEXA-001",
      price: 279.0,
      quantity: 12,
    },
  ],
};
