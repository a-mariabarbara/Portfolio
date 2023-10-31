export function About (){
    return (
        <section className="container mx-auto mt-4 max-w-5xl p-4">
        <div className="relative p-4 text-center">
            <h2 className="relative text-pink-400 font-bold z-10">
                <span className="mr-2 font-headline text-3xl">Sobre</span>
                <span className="font-handwriting text-4xl">Mim</span>
            </h2>
            <p className="relative text-sm text-gray-600">
        
            Estudante de Ciências Contábeis na UFPB, com 20 anos. Apaixonada pela contabilidade e determinada a aprofundar meu conhecimento em princípios contábeis, análise financeira e regulamentações fiscais. Comprometida em quebrar barreiras de gênero na área contábil e contribuir para a diversidade. Sempre em busca de oportunidades de aprendizado e crescimento. Determinada a aplicar meu conhecimento e paixão na resolução de desafios futuros.
        
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-100/40" />
        
            </div>
                <div className="relative mx-auto mt-20 max-w-lg">
                    <div className="relative w-full rounded-lg bg-pink-100 p-4 ps-20 md:h-64 md:ps-48">
                    <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
                    <p className="font-handwriting text-lg font-bold">Olá,</p>
                    <p>
                      <span className="mr-1">Meu nome é</span>
                      <span className="font-headline font-bold uppercase text-pink-500">
                        Maria Bárbara
                      </span>
                    </p>
        
                    <table className="mt-4 w-full text-sm overflow-hidden">
                      <tbody>
                        <tr>
                          <td className="font-headline font-bold uppercase text-pink-500">
                            Idade:
                          </td>
                          <td>20</td>
                        </tr>
                        <tr>
                          <td className="font-headline font-bold uppercase text-pink-500">
                            Celular:
                          </td>
                          <td>
                            <a
                              href="https://web.whatsapp.com/send?phone=5583986054261" target="_blank" className="underline hover:text-blue-800 ">
                              
                              +55 83 9.8605-4261
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="font-headline font-bold uppercase text-pink-500">
                            Email:
                          </td>
                          <td>
                            <a
                              href="mailto:barbaramariac25@gmail.com"
                              className="underline hover:text-blue-800"
                            >
                              barbaramariac25@gmail.com
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="font-headline font-bold uppercase text-pink-500">
                            Endereço:
                          </td>
                          <td>
                            <a
                              href="https://maps.app.goo.gl/tnWusYMi8hr9h44p7"
                              target="_blank"
                              className="underline hover:text-blue-800"
                            >
                              Mangabeira IV, João Pessoa
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="font-headline font-bold uppercase text-pink-500">
                            Disponível:
                          </td>
                          <td>
                            <span className="relative flex h-3 w-3">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-[url(src/Imagens/IMG_0100.jpg)] bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56"></div>
                        
                    </div>
                </div>
        
        </section>
        
        )
        
        }
