# Data Models

The UnityClubXtra project uses the following data models to represent and manage its data structures.

## User Model

- **Description:** Represents a user of the UnityClubXtra platform.
- **Attributes:**
  - `id` (ObjectID): Unique identifier for the user.
  - `username` (String): Username of the user.
  - `email` (String): Email address of the user.
  - `password` (String): Hashed password for user authentication.
  - `createdAt` (Date): Timestamp indicating when the user was created.

## Post Model

- **Description:** Represents a blog post within the UnityClubXtra platform.
- **Attributes:**
  - `id` (ObjectID): Unique identifier for the post.
  - `title` (String): Title of the blog post.
  - `content` (String): Content of the blog post.
  - `author` (User): Reference to the author (User model).
  - `createdAt` (Date): Timestamp indicating when the post was created.
  - `updatedAt` (Date): Timestamp indicating when the post was last updated.

## Comment Model

- **Description:** Represents a comment on a blog post.
- **Attributes:**
  - `id` (ObjectID): Unique identifier for the comment.
  - `content` (String): Content of the comment.
  - `author` (User): Reference to the author (User model).
  - `post` (Post): Reference to the associated blog post (Post model).
  - `createdAt` (Date): Timestamp indicating when the comment was created.

## Category Model

- **Description:** Represents a category or tag associated with a blog post.
- **Attributes:**
  - `id` (ObjectID): Unique identifier for the category.
  - `name` (String): Name of the category.

## Relationship Between Models

- The `author` attribute in the `Post` and `Comment` models establishes a relationship with the `User` model.
- The `post` attribute in the `Comment` model establishes a relationship with the `Post` model.

For more detailed information on the structure and attributes of each model, refer to the corresponding model files in the `backend/models` directory.

