"use server";

export async function serverAction() {
  console.log("Hello from server");
  return new Date().toLocaleString();
}
