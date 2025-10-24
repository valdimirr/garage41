import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Serviços */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Nossos Serviços</h3>
            <ul className="space-y-2 text-slate-400">
              <li>Mecânica</li>
              <li>Câmbio</li>
              <li>Injeção eletrônica</li>
              <li>Suspensão, freio</li>
              <li>Troca de óleo</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contato</h3>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-white" />
                <p>
                  Rua Vasco da Gama, 41<br />
                  Santa Cruz - Gravataí/RS<br />
                  CEP: 94170-060
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-white" />
                <p>(51) 99327-9317</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-white" />
                <p>contato@garage41.com.br</p>
              </div>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Horário de Funcionamento</h3>
            <div className="text-slate-400 space-y-1">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 13h</p>
            </div>

            {/* Ícones Sociais */}
            <div className="flex items-center gap-4 mt-5">
              {/* <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a> */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/garage41_mecanica/"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} <span className="font-semibold text-white">GARAGE 41</span>. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
