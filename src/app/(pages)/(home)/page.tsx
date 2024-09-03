import './styles.scss';

import { SectionImage } from './components/figure/component';
import { ToolsCards } from './components/tools-cards/component';
import { ContactForm } from './components/contact-form/contact-form';
import { ServicesCardList } from './components/services-cards/component';
import { ProjectsSlide } from './components/porjects-slide/component';

export default function Page() {
  return (
    <>
      <section className="Introducion">
        <section className="SectionTexts">
          <h1>Desenvolvedor Web Full-Stack</h1>
          <p>
            Construindo a presença online que você sempre sonhou para o sucesso
            do seu negócio.
          </p>
        </section>
        <SectionImage />
      </section>
      <section id="Services">
        <section className="SectionTexts">
          <h2 className="title">Services</h2>
          <h3 className="subtitle">Eleve a presença digital do seu negócio.</h3>
          <p className="description">
            Desenvolvemos interfaces modernas e intuitivas, sites personalizados
            para máxima performance, com SEO otimizado para atrair visitantes
            qualificados, e gestão de tráfego eficaz para aumentar visibilidade
            e conversões.
          </p>
        </section>
        <ServicesCardList />
      </section>
      <section id="Projects">
        <section className="SectionTexts">
          <h2 className="title">Projetos</h2>
          <h3 className="subtitle">
            Que refletem o nosso compromisso com a qualidade.
          </h3>
          <p className="description">
            Cada projeto foi desenvolvido com foco na excelência, personalização
            e resultados, atendendo às necessidades únicas de nossos clientes.
            Explore alguns dos nossos trabalhos mais impactantes.
          </p>
        </section>
        <ProjectsSlide />
      </section>
      <section id="Tools">
        <section className="SectionTexts">
          <h2 className="title">Tecnologias</h2>
          <h3 className="subtitle">Que potencializam nossos projetos</h3>
          <p className="description">
            Com foco em escalabilidade, robustez e desempenho, cada projeto é
            construído com um conjunto de recursos cuidadosamente selecionados
            para atender a necessidades específicas e garantir os melhores
            resultados.
          </p>
        </section>
        <ToolsCards />
      </section>
      <section id="Contact">
        <section className="SectionTexts">
          <h2 className="title">Contato</h2>
        </section>
        <ContactForm />
      </section>
    </>
  );
}
