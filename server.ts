import app from "./app";
const PORT:number = parseInt(process.env.HTTP_LISTENER_PORT);

app.listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
});
