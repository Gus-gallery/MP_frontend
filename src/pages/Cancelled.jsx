import Header from "../components/Header"

const Cancelled = () => {
  return (
    <div>
        <header className="top-0 sticky z-10">
            <Header />
        </header>
        <div className="flex flex-col items-center gap-4 py-20">

        <h1 className="font-bold text-4xl">Order Cancelled</h1>
        <p className="font-regular text-lg">Please try again, or send a message if there is an error.</p>
        </div>
    </div>
  )
}

export default Cancelled