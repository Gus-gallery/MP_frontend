export default function Tak() {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-3xl font-bold">Thanks for ordering!</h1>
        <p className="text-zinc-400 font-light">You will recieve a confirmation e-mail soon.</p>
        <a href="/" className="bg-orange-900 font-medium text-zinc-200 px-4 py-2 rounded-lg hover:bg-orange-800 transition-colors">
          Back to shop.
        </a>
      </div>
    )
  }