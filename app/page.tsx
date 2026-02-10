import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>     
    <Navbar />
      {/* BACKGROUND GLOBAL FIXE */}
      <div className="fixed inset-0 -z-10 bg-gradient-dots bg-vignette"></div>
      <main className="min-h-screen bg-gradient-dots bg-vignette text-white relative z-10">
        {/* HERO */}
        <section
          id="home"
          className="relative min-h-screen flex items-center px-6 md:px-40 overflow-hidden"
        >

          {/* CONTENU */}
          <div className="max-w-xl z-10">
            <p className="text-sm uppercase tracking-widest text-purple-400 mb-4">
              Développeur Web Front-end
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Salut, moi c’est <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Enzo Laurioux
              </span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg">
              Je conçois des interfaces modernes, élégantes et interactives
              pour le web.
            </p>

            <div className="mt-10 flex gap-6 items-center">
              <a
                href="#contact"
                className="
                  relative inline-flex items-center justify-center
                  px-6 py-3
                  font-semibold
                  rounded-lg
                  text-white
                  bg-gradient-to-r from-blue-500 to-purple-500
                  transition
                  hover:scale-105
                  focus:outline-none
                "
              >
                Me contacter
              </a>

              <a
                href="#projects"
                className="text-gray-400 hover:text-white transition"
              >
                Voir mes projets →
              </a>
            </div>

          </div>

          {/* TIMELINE */}
            <div className="absolute right-40 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-start gap-8">
              
              {/* Text 1 */}
              <div className="flex items-center gap-4 group">
                <span className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></span>
                <span className="text-sm text-gray-300 group-hover:text-white transition">
                  HTML5 / CSS3
                </span>
              </div>

              {/* Ligne */}
              <div className="w-[2px] h-20 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 ml-[5px]" />

              {/* Text 2 */}
              <div className="flex items-center gap-4 group">
                <span className="w-3 h-3 rounded-full bg-purple-400"></span>
                <span className="text-sm text-gray-300 group-hover:text-white transition">
                  NEXT.JS / TAILWIND CSS
                </span>
              </div>

              {/* Ligne */}
              <div className="w-[2px] h-20 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-400 ml-[5px]" />

              {/* Text 3 */}
              <div className="flex items-center gap-4 group">
                <span className="w-3 h-3 rounded-full bg-pink-400"></span>
                <span className="text-sm text-gray-300 group-hover:text-white transition">
                  UI/UX
                </span>
              </div>

            </div>
          {/* FLÈCHE SCROLL */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <a href="#projects" className="text-white opacity-70 hover:opacity-100 transition">
              ↓
            </a>
          </div>

        </section>


        {/* PROJETS */}
          <section id="projects" className="relative py-20">


            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">
                Mes projets
              </h2>

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {/* Projet Beaux-Murs */}
              <div className="card-gradient bg-gray-900 rounded-xl shadow-lg flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(215,59,246,0.4)]">
                {/* PADDING AUTOUR DE L’IMAGE */}
                <div className="p-2  rounded-2xl">
                  {/* ZONE IMAGE UNIQUEMENT */}
                  <div className="relative group rounded-xl overflow-hidden">
                    
                    {/* Image */}
                    <img
                      src="/img/BeauxMurs.png"
                      alt="Projet Beaux-Murs"
                      className="w-full h-56 object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Overlay noir (IMAGE ONLY) */}
                    <div className="pointer-events-none absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition"></div>

                    {/* Rond cliquable (IMAGE ONLY) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <a
                        href="https://beaux-murs.fr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          z-10
                          w-14 h-14
                          rounded-full
                          bg-white/90
                          flex items-center justify-center
                          hover:scale-110
                          transition
                        "
                      >
                        <img
                          src="/icons/web.png"
                          alt="Voir le site"
                          className="w-6 h-6"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Site "Beaux-Murs"
                  </h3>

                  <span className="absolute top-4 left-4 bg-gray-800 border b-2 border-gray-400 text-gray-200 text-xs font-semibold px-2 py-1 rounded-full z-10">
                    Professionnel
                  </span>

                  <p className="text-gray-300 mb-4">
                    Conception d'un site vitrine épurer pour l'entreprise Beaux-Murs. L'objectif est simplement de présenter son travail sur internet et le rendre visible a plus de personne.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="bg-purple-900 border b-2 border-purple-400 text-purple-200 text-sm px-3 py-1 rounded-full">
                      WordPress
                    </span>
                    <span className="margin-bottom bg-purple-900 border b-2 border-purple-400 text-purple-200 text-sm px-3 py-1 rounded-full">
                      Web
                    </span>
                  </div>
                </div>
              </div>
            {/* Fin Beaux-Murs */}

            {/* Projet myCourses */}
              <div className="card-gradient bg-gray-900 rounded-xl shadow-lg flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(215,59,246,0.4)]">
                {/* PADDING AUTOUR DE L’IMAGE */}
                <div className="p-2  rounded-2xl">
                  {/* ZONE IMAGE UNIQUEMENT */}
                  <div className="relative group rounded-xl overflow-hidden">
                    
                    {/* Image */}
                    <img
                      src="/img/myCourses.png"
                      alt="Projet myCourses"
                      className="w-full h-56 object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Overlay noir (IMAGE ONLY) */}
                    <div className="pointer-events-none absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition"></div>

                    {/* Rond cliquable (IMAGE ONLY) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <a
                        href="https://github.com/enzolx6/myCourses"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          z-10
                          w-14 h-14
                          rounded-full
                          bg-white/90
                          flex items-center justify-center
                          hover:scale-110
                          transition
                        "
                      >
                        <img
                          src="/icons/github.png"
                          alt="Voir le site"
                          className="w-6 h-6"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Application "myCourses"
                  </h3>

                  <span className="absolute top-4 left-4 bg-gray-800 border b-2 border-gray-400 text-gray-200 text-xs font-semibold px-2 py-1 rounded-full z-10">
                    Personnel
                  </span>

                  <p className="text-gray-300 mb-4">
                    myCourses est une application iOS de prise de note. Son objectif est de classer les produits par rayon afin d'organiser ses courses.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="bg-purple-900 border b-2 border-purple-400 text-purple-200 text-sm px-3 py-1 rounded-full">
                      Swift
                    </span>
                    <span className="bg-purple-900 border b-2 border-purple-400 text-purple-200 text-sm px-3 py-1 rounded-full">
                      iOS
                    </span>
                  </div>
                </div>
              </div>
            {/* Fin myCourses */}
    
            {/* Projet TrailFeels */}
              <div className="card-gradient bg-gray-900 rounded-xl shadow-lg flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(215,59,246,0.4)]">
                {/* PADDING AUTOUR DE L’IMAGE */}
                <div className="p-2  rounded-2xl">
                  {/* ZONE IMAGE UNIQUEMENT */}
                  <div className="relative group rounded-xl overflow-hidden">
                    
                    {/* Image */}
                    <img
                      src="/img/TrailFeels.png"
                      alt="Projet TrailFeels"
                      className="w-full h-56 object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Overlay noir (IMAGE ONLY) */}
                    <div className="pointer-events-none absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition"></div>

                    {/* Rond cliquable (IMAGE ONLY) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <a
                        href="https://www.figma.com/proto/t2YhuEaHAOyhr6DNVYg4R4/TrailFeels?page-id=0%3A1&node-id=1-2&p=f&viewport=401%2C60%2C0.32&t=tp8XUIUVeNYpEwTE-1&scaling=min-zoom&content-scaling=fixed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          z-10
                          w-14 h-14
                          rounded-full
                          bg-white/90
                          flex items-center justify-center
                          hover:scale-110
                          transition
                        "
                      >
                        <img
                          src="/icons/figma.png"
                          alt="Voir le site"
                          className="w-6 h-6"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Maquette de site "TrailFeels"
                  </h3>

                  <span className="absolute top-4 left-4 bg-gray-800 border b-2 border-gray-400 text-gray-200 text-xs font-semibold px-2 py-1 rounded-full z-10">
                    Fictif
                  </span>

                  <p className="text-gray-300 mb-4">
                    Conception d'une maquette pour un site fictif TrailFeels. L'attente de ce site est de présenter la discipline du trail.
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    <span className="bg-purple-900 border b-2 border-purple-400 text-purple-200 text-sm px-3 py-1 rounded-full">
                      UI/UX
                    </span>
                    <span className="bg-purple-900 border b-2 border-purple-400 text-purple-200 text-sm px-3 py-1 rounded-full">
                      Figma
                    </span>
                    <span className="bg-purple-900 border b-2 border-purple-400 text-purple-200 text-sm px-3 py-1 rounded-full">
                      Web
                    </span>
                  </div>
                </div>
              </div>
            {/* Fin TrailFeels */}
</div>
            </div>
          </section>

        {/* CONTACT */}
          <section
            id="contact"
            className="relative min-h-screen flex items-center justify-center px-6"
          >
            <div className="w-full max-w-lg bg-gray-900/80 backdrop-blur rounded-xl p-8 shadow-xl">
              
              <h2 className="text-3xl font-bold text-white mb-2">
                Me contacter
              </h2>
              <p className="text-gray-400 mb-6">
                Une question, un projet ? N'hésitez pas à me contacter !
              </p>

              <form
                action="https://formsubmit.co/lauriouxenzo@gmail.com"
                method="POST"
                className="space-y-5"
              >
                {/* Champ caché pour désactiver le captcha */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="http://localhost:3000/merci" />


                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Votre nom"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="votre@email.com"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Votre message..."
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="
                    w-full py-3
                    font-semibold
                    rounded-lg
                    text-white
                    bg-gradient-to-r from-blue-500 to-purple-500
                    hover:scale-[1.02]
                    focus:outline-none
                    transition
                    cursor-pointer
                  "
                >
                  Envoyer le message
                </button>
              </form>

            </div>
          </section>
      <footer className="bg-gray-900 mt-32 py-5 flex flex-col items-center gap-6 text-gray-400">
        {/* RÉSEAUX SOCIAUX */}
        <div className="flex gap-6">
          <a
            href="https://github.com/enzolx6"
            target="_blank"
            aria-label="GitHub"
          >
            <img
              src="/icons/github-white.png"
              alt="GitHub"
              className="w-6 h-6 hover:scale-105"
            />
          </a>

          <a
            href="https://www.behance.net/chawh"
            target="_blank"
            aria-label="Behance"
          >
            <img
              src="/icons/behance-white.png"
              alt="Behance"
              className="w-6 h-6 hover:scale-105"
            />
          </a>

          <a
            href="mailto:lauriouxenzo@gmail.com"
            target="_blank"
            aria-label="Mail"
          >
            <img
              src="/icons/mail-white.png"
              alt="Mail"
              className="w-6 h-6 hover:scale-105"
            />
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-sm">
          © 2026 Enzo Laurioux.
        </p>
      </footer>
      </main>
    </>
  );
}