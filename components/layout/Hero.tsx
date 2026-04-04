export default function Hero() {

  return (
    <div>
      <a href="/">
        {/* <img
            src="/images/photo-500x500.png"
            className="w-32 rounded-full mb-1 ml-10 border-5 border-slate-700"
          /> */}
        <h1 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold">
          Célio ROCHA
        </h1>
      </a>
      <h2 className="text-[clamp(0.8rem,2vw,1.2rem)] text-sky-400 mt-1">
        Concepteur d'applications full-stack
      </h2>
      <p className="text-[clamp(0.75rem,2vw,1rem)] text-gray-400 leading-relaxed space-y-4 mt-4 max-w-sm">
        Je développe des applications web modernes avec React, Next.js et
        Node.js.
      </p>
    </div>
  )
}