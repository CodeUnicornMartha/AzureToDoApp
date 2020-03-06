// JavaScript
const { CosmosClient } = require("@azure/cosmos");
 
const endpoint = "https://your-account.documents.azure.com"; // Add your endpoint
const key = "[database account masterkey]"; // Add the masterkey of the endpoint
const client = new CosmosClient({ endpoint, key });
 
const databaseDefinition = { id: "sample database" };
const collectionDefinition = { id: "sample collection" };
const documentDefinition = { id: "hello world doc", content: "Hello World!" };
 
async function helloCosmos() {
  const { database } = await client.databases.create(databaseDefinition);
  console.log("created database");
 
  const { container } = await database.containers.create(collectionDefinition);
  console.log("created collection");
 
  const { resource } = await container.items.create(documentDefinition);
  console.log("Created item with content: ", resource.content);
 
  await database.delete();
  console.log("Deleted database");
}
 
helloCosmos().catch((err) => {
  console.error(err);
});