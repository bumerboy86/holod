import { BreadCrumbs } from "../Components/BreadCrumbs";
import { ServiceDesc } from "../Components/ServiceDesc";
import { TopInfo } from "../Components/TopInfo";
import "../styles/containers/servise-page.scss";
import serv1 from "../assets/serv-001.jpg";
import serv2 from "../assets/serv-002.jpeg";
import serv3 from "../assets/serv-003.png";
import serv4 from "../assets/serv-004.jpg";
import serv5 from "../assets/serv-005.jpg";
import serv6 from "../assets/serv-006.jpg";
import serv7 from "../assets/serv-007.jpg";
import serv8 from "../assets/serv-008.jpg";
import serv9 from "../assets/serv-009.jpg";
import serv10 from "../assets/serv-010.jpg";
import serv11 from "../assets/serv-011.jpg";
import serv12 from "../assets/serv-012.jpg";
import { EditableBlock } from "../Components/EditableBlock";

export const ServicePage = () => {
  return (
    <>
      <TopInfo>
        <></>
      </TopInfo>
      <section className='servise-page__container'>
        <EditableBlock
          title='Бесплатная консультация!'
          txt='Всем клиентам, оформившим заявку с сайта, консультация бесплатно!'
        />
      </section>
      <BreadCrumbs link='/' subtext='Главная' title='Услуги' />
      <section className='servise-page__grid container'>
        <ServiceDesc
          title='Заправка кондиционеров:'
          desc='
            Профессионально заправим ваш кондиционер сертифицированным хладагентом,
            обеспечив его эффективную работу и комфорт в вашем доме. Быстрая диагностика, 
            устранение утечек и оптимальная производительность'
          img={serv1}
          price='Договорная'
        />
        <ServiceDesc
          title='Ремонт кондиционеров:'
          desc='
            Произведим ремонт кондиционеров любой сложности. 
            Быстрое выявление и устранение неисправностей, замена деталей, 
            восстановление работоспособности.'
          img={serv2}
          price='Договорная'
        />

        <ServiceDesc
          title='Установка кондиционеров:'
          desc='
          Качественная и быстрая установка кондиционеров. Подбор оптимального места, 
          профессиональный монтаж, настройка оборудования. '
          img={serv3}
          price='Договорная'
        />

        <ServiceDesc
          title='Ремонт газовых котлов:'
          desc='
          Профессиональный ремонт газовых котлов любой сложности. Быстрая диагностика, замена неисправных деталей. 
          '
          img={serv4}
          price='Договорная'
        />

        <ServiceDesc
          title='Ремонт холодильников:'
          desc='
          Качественный ремонт холодильников всех марок. Быстрое выявление и устранение неисправностей, замена деталей, восстановление оптимальной работы устройства..
          '
          img={serv5}
          price='Договорная'
        />
        <ServiceDesc
          title='Заправка холодильников:'
          desc='
          Профессиональная заправка холодильников сертифицированными хладагентами. Быстрая диагностика, устранение утечек
          '
          img={serv6}
          price='Договорная'
        />
        <ServiceDesc
          title='Ремонт морозильных камер:'
          desc='
          Профессиональный ремонт морозильных камер. Быстрая диагностика и устранение неисправностей, замена деталей, восстановление оптимальной работы
          '
          img={serv7}
          price='Договорная'
        />
        <ServiceDesc
          title='Ремонт стиральных машин:'
          desc='
          Качественный ремонт стиральных машин всех марок. Быстрая диагностика, устранение неисправностей, замена деталей
          '
          img={serv8}
          price='Договорная'
        />
        <ServiceDesc
          title='Ремонт ледогенераторов:'
          desc='
          Профессиональный ремонт ледогенераторов всех типов. Быстрая диагностика, устранение неисправностей, замена деталей
          '
          img={serv9}
          price='Договорная'
        />
        <ServiceDesc
          title='Ремонт бытовых плат:'
          desc='
          Вернем к жизни вашу технику! Профессиональный ремонт плат для бытовых приборов с использованием современных технологий. Быстрая диагностика, устранение проблем, замена компонентов
          '
          img={serv10}
          price='Договорная'
        />
        <ServiceDesc
          title='Консультация:'
          desc='
          Получите профессиональную консультацию по ремонту и обслуживанию вашей техники. Наши эксперты ответят на все вопросы, дадут рекомендации и помогут найти оптимальное решение 
          '
          img={serv11}
          price='Договорная'
        />
        <ServiceDesc
          title='Подбор запчастей:'
          desc='
          Подберем оригинальные и качественные комплектующие для ремонта и модернизации ваших устройств. Быстрая доставка, гарантия совместимости и надежности.
          '
          img={serv12}
          price='Договорная'
        />
      </section>
    </>
  );
};
