import { HiDownload } from 'react-icons/hi'
export function Hero (){
    
        return (
            <section className="rounded-br-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-br-[180px]">
                
                <div className="container mx-auto flex max-w-4xl flex-col-reverse p-4 py-12 md:flex-row">
                <div className='basis-1/2'>
                <h1 className="mb-6 text-center md:text-left">
                    
                    <span className="block font-handwriting text-3xl text-center md:text-left">Olá, me chamo</span>
                    <span className="mr-2 font-headline text-5xl font-semibold">Maria</span> 
                    <span className="font-headline text-5xl font-light text-pink-300">Bárbara</span> 
                    
                </h1>
        
                <h2 className="mb-6 flex items-center justify-center gap-2 font-semibold md:justify-start">
                    <div className="h-1 w-12 rounded-full bg-pink-300"/>
                    Bacharela em Ciências Contábeis em Formação.
                </h2>
        
                <p className="mb-6 text-center text-pink-100 md:text-left">
                Estudante de Ciências Contábeis em Busca de Oportunidades para Transformar o Mundo Financeiro
                </p>
        
                <div className="flex items-center justify-center gap-2 md:justify-start">  
                    <a href="#contact" className="underline-thickness-2 font-bold text-white underline decoration-2 underline-offset-4 transition hover:decoration-pink-300">
                        Fale Comigo
                    </a>
                    <span className="italic text-gray-500">ou</span>
                    <a
                     href="https://drive.google.com/file/d/18gmvJyXdcwO7cKRb32ImhymqHF3DDt1h/view?usp=drive_link"
                        target="_blank"
                        className="button flex items-center gap-2 text-gray-600 hover:text-gray-900">
                        <HiDownload />
                        Baixe meu CV
                    </a>
                    </div>
                    </div>
                <div className='basis-1/2'></div>
                </div>
            
            </section>
        
            
            )
        }
