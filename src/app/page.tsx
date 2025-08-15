export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <form method="post" action="https://formtester.goodbytes.be/post.php">
        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" />
        <br />
        <label htmlFor="text">Username:</label>
        <input type="text" name="text" id="text" />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
