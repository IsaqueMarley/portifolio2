export function Contact() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-6">
      <h2 className="text-3xl font-bold mb-4">Contato</h2>
      <p className="text-lg mb-4">Me mande uma mensagem, ficarei feliz em conversar!</p>
      <a href="mailto:seuemail@email.com" className="px-6 py-2 bg-blue-500 text-white rounded-xl">
        Enviar Email
      </a>
    </section>
  )
}
