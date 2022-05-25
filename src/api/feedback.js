import Api from "./api";

export async function sendFeedback(description, like) {
  await Api.post("/feedbacks", {
    description: description,
    like: like,
  });
}
