// Fungsi untuk mendekripsi  data menjadi token
export const encryptData = (data): string => {
  const encryptedData = JSON.stringify(data);
  return btoa(encryptedData);
};

// Fungsi untuk mendekripsi token menjadi data
export const decryptToken = (token: string) => {
  const decryptedData = atob(token);
  return JSON.parse(decryptedData);
};
