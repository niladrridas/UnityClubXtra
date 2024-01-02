/* Create tables for UnityClubXtra MongoDB database */
/* Example: Define a "posts" collection */
db.createCollection("posts", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["title", "content"],
            properties: {
                title: {
                    bsonType: "string",
                    description: "Title of the post"
                },
                content: {
                    bsonType: "string",
                    description: "Content of the post"
                }
                // Add more properties as needed
            }
        }
    }
});
