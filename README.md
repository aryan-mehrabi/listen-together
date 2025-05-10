<p align="center" style="margin-top: 120px">
  <a href="https://listen-together.app">
   <img src="./public/listen-together-logo.png" width="100px" alt="Listen Together Logo">
  </a>
</p>

  <p align="center">
  A real-time chat app that allows you to listen to music synchronously with your friends.
  <br>
    <a href="https://listen-together.app"><strong>Demo</strong></a>
  </p>

<img width="1040" alt="Cover" src="./public/listen-together-cover.png">

## 💾 Database Schema

### Database schema: [here](./schema.sql)

<img width="992" alt="Screenshot of database schema" src="./public/database-schema.png">

## 📚 Tech Stacks

- [React.js](react.dev)
- PostgreSQL managed by [Supabase](https://supabase.io/)
- Styled using [Tailwind CSS](https://tailwindcss.com/)
- Data Fetching, Infinite Scroll [React Query](https://tanstack.com/query/v3/)
- Context API + Reducer hook
- Bundle analyzer using [webpack bundle analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)

# ⚙️ Getting Started

## Requirements

To run this app locally you need

- [Node.js (Version: >=18.x)](https://nodejs.org/en/download/)
- [Docker installed on your system](https://docs.docker.com/engine/install/)

## Developer Quickstart

Want to get up and running quickly? Follow these steps:

- [Clone the repository](https://help.github.com/articles/cloning-a-repository/) to your local device.

  ```sh
  git clone https://github.com/aryan-mehrabi/listen-together
  ```

- Run `npm install` in the root directory
  ```sh
  npm install
  ```
- Run `npx supabase start` and copy `anon key` from output to `.env.example` file
  ```sh
  npx supabase start
  ```
- Rename `.env.example` to `.env` and add other env variables accordingly.
- Run `npm start` in the root directory

That's it! You should now be able to access the app at http://localhost:3000.

Also You can visit Supabase Dashboard at http://localhost:54323/

## 🙇 Author

- [Aryan](https://www.linkedin.com/in/aryan-mehrabi/)

## License

Licensed under the [MIT license](https://github.com/shadcn/taxonomy/blob/main/LICENSE.md).
