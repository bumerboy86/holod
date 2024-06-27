import { BreadCrumbs } from "../Components/BreadCrumbs";
import { EditableBlock } from "../Components/EditableBlock";
import { TopInfo } from "../Components/TopInfo";
import "../styles/containers/price-page.scss";
import { TablePrice } from "../Components/TablePrice";
import { priceData } from "../utils/price-data";

export const PricePage = () => {
  return (
    <>
      <TopInfo>
        <></>
      </TopInfo>
      <section className='price-page__container'>
        <EditableBlock
          title='Бесплатная консультация!'
          txt='Всем клиентам, оформившим заявку с сайта, консультация бесплатно!'
        />
      </section>
      <BreadCrumbs link='/holod' subtext='Главная' title='Прайс-Лист' />

      <section className='price-page__grid'>
        <h2 className='price-page__grid-title'>
          Выезд 2 000 тг. + работа по факту
        </h2>

        {priceData.map((item, index) => (
          <TablePrice key={index} title={item.title} data={item.data} />
        ))}
      </section>
    </>
  );
};
