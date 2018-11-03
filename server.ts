import app from "./app";
const PORT:number = parseInt(process.env.PORT) || 5000;

console.log(`PORT=${PORT}`);

app.listen(PORT, () => {
  console.log("Express server listening on port " + PORT);
});
