import { GridContainer } from "../Components/GridContainer";
import { LinkUniversal } from "../Components/LinkUniversal";
import { TextContainer } from "../Components/TextContainer";
import hotwater from "../assets/hotwater.png";
import freezer from "../assets/freezer.png";
import freez from "../assets/freez.png";
import washing from "../assets/washing.png";
import condition from "../assets/condition.png";
import condition2 from "../assets/condition2.png";
import condition3 from "../assets/condition3.png";
import ice from "../assets/ice.png";
import plate from "../assets/plate.png";
import repair from "../assets/repair.png";
import parts from "../assets/parts.png";
import { AboutUsText } from "../Components/AboutUsText";
import { TopInfo } from "../Components/TopInfo";
import { MutableRefObject, useEffect, useRef } from "react";
import { isMobile } from "../utils/utils";
import { ServiceSlide } from "../Components/ServiceSlide";
import "../styles/components/top.scss";

export const MainPage = () => {
  const servises: MutableRefObject<HTMLElement | null> = useRef(null);

  useEffect(() => {
    servises.current = document.getElementById("our-services");
  }, []);

  const navHandler = () => {
    if (servises.current) {
      servises?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <TopInfo>
        <section className='top__call'>
          <div className='top__call-block'>
            <h2>Ремонт и обслуживание бытовой техники</h2>
            <p className='top__call-block_txt'>
              Выезд мастера на дом
            </p>
            {isMobile() ? (
              <a href='tel:+77473028989' className='top__call-block_btn'>
                Позвонить
              </a>
            ) : (
              <p className='top__call-block_btn' onClick={navHandler}>
                Узнать больше
              </p>
            )}
          </div>
          <div className='top__call-slider'>
            <ServiceSlide />
          </div>
        </section>
      </TopInfo>
      <TextContainer>
        <h2 id='our-services'>Мастера выполняют работы как по заправке (кондиционеров и холодильников), 
        так и по ремонту бытовой техники</h2>
        <p>
          Мы профессиональная команда, которая ответственно относится к своей работе. Нас объединяет стремление добиваться только лучших результатов. Мы всегда стремимся предоставить качественные услуги, создавать долгосрочные партнерские отношения и гармоничное сотрудничество друг с другом.
        </p>
      </TextContainer>
      <GridContainer>
        <LinkUniversal
          link='/holod/our-services'
          title='Заправка кондиционеров'
          image={condition3}
        />
        <LinkUniversal link='/our-services' title='Ремонт кондиционеров' image={condition} />
        <LinkUniversal
          link='/holod/our-services'
          title='Установка кондиционеров'
          image={condition2}
        />
        <LinkUniversal
          link='/holod/our-services'
          title='Ремонт газовых котлов'
          image={hotwater}
        />
        <LinkUniversal link='/our-services' title='Ремонт холодильников' image={freezer} />
        <LinkUniversal
          link='/holod/our-services'
          title='Заправка холодильников'
          image={freezer}
        />
        <LinkUniversal
          link='/holod/our-services'
          title='Ремонт морозильных камер'
          image={freez}
        />
        <LinkUniversal
          link='/holod/our-services'
          title='Ремонт стиральных машин'
          image={washing}
        />
        <LinkUniversal
          link='/holod/our-services'
          title='Ремонт ледогенераторов'
          image={ice}
        />
        <LinkUniversal
          link='/holod/our-services'
          title='Ремонт бытовых плат'
          image={plate}
        />
        <LinkUniversal
          link='/holod/our-services'
          title='Консультация'
          image={repair}
        />
        <LinkUniversal
          link='/holod/our-services'
          title='Подбор запчастей'
          image={parts}
        />
      </GridContainer>
      <AboutUsText>
        <h2 id='about-us'>Этапы выполнения работ по ремонту</h2>
        <ol>
        <li>1) Диагностика техники: Мастер приедет к вам и выполнит диагностику, найдет причину поломки.</li>
        <li>2) Заказ запчастей: Заказываем все необходимые запчасти у поставщика.</li>
        <li>3) Ремонт устройства: Специалист разбирает устройство, заменяет все поломанные компоненты и 
          проверяет работоспособность техники.</li>
        <li>4) Тестирование и проверка: Специалист проводит тестирование, чтобы убедиться в его правильной работе.</li>
        <li>5) Сборка: После успешного завершения тестирования специалист собирает выполняет сборку техники.</li>
        </ol>
      </AboutUsText>
    </>
  );
};
