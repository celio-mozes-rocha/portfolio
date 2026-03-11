
export default function NotFounbd() {
  return (
    <>
      <div className="h-screen flex flex-col items-center text-center mt-42">

        <h1 className="text-6xl font-bold mb-6">
          404
        </h1>

        <p className="text-xl text-gray-400 mb-6">
          Oups… cette page n'existe pas.
        </p>

        <a
          href="/"
          className="px-6 py-3 bg-sky-500 text-white rounded hover:bg-sky-600 transition"
        >
          Retour à l'accueil
        </a>

      </div>
    </>
  )
}